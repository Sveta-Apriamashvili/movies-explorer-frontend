import React, { useCallback } from 'react';
import Footer from '../Footer/Footer';
import { Route, Switch, useRouteMatch, useHistory, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.css';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import SideBarMenu from '../SideBarMenu/SideBarMenu';
import * as mainApi from '../../utils/MainApi';
import * as moviesApi from '../../utils/MoviesApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Preloader from '../Preloader/Preloader';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { filterMovies, filterMoviesByDuration } from '../../utils/filterMovies';
import { useWindowSize } from '../../hooks/useWindowSize';
import { getCardsRendering } from '../../utils/cardsRendering';
import {profileErrorMessages} from '../../utils/constants';

function App() {
  const headerExclusionPaths = [
    "/signin",
    "/signup",
  ];

  const footerExclusionPaths = [
    "/signin",
    "/signup",
    "/profile",
  ]

  const [isSideBarMenuOpened, setIsSideBarMenuOpened] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [movies, setMovies] = React.useState([]);
  const [shownMovies, setShownMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [localData, setLocalData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isShortfilmCheckboxOn, setIsShortfilmCheckboxOn] = React.useState(false);
  const [noMoviesFound, setNoMoviesFound] = React.useState(false);
  const [noSavedMoviesFound, setNoSavedMoviesFound] = React.useState(false);
  const [cardsRendering, setCardsRendering] = React.useState({ total: 12, add: 3 });
  const [profileFormMessage, setProfileFormMessage] = React.useState('');


  const history = useHistory();
  const { width } = useWindowSize();

  function handleBurgerMenuClick() {
    setIsSideBarMenuOpened(true);
  }

  function closeSideMenu() {
    setIsSideBarMenuOpened(false);
  }

  // Token check, auth, user update, signout

  const onAuthStatusCheck = useCallback(() => {
    mainApi.checkToken()
      .then(() => setIsLoggedIn(true))
      .catch(() => console.log('error'))
      .finally(() => { setIsLoading(false) })
  }, []);

  React.useEffect(() => {
    onAuthStatusCheck()
  }, [onAuthStatusCheck]);

  function onRegister(data) {
    mainApi.register(data)
      .then(() => {
        onLogin(data);
      })
      .catch(console.log('error'))
  }

  function onLogin(data) {
    mainApi.login(data)
      .then(() => {
        setIsLoggedIn(true);
        history.push('/movies');
      })
      .catch(() => console.log('error'))
  }

  function handleUpdateUser(data) {
    mainApi.editUserInfo(data)
      .then(res => {
        localStorage.setItem('currentUser', JSON.stringify(res));
        setCurrentUser(res)
        console.log('Ваш профиль был успешно обновлен')
      })
      .then(() => {
        setProfileFormMessage(profileErrorMessages.SUCCESS);
      })
      .catch((err) => {
        switch (err) {
          case 409:
            setProfileFormMessage(profileErrorMessages.CONFLICT);
            break;
          default:
            setProfileFormMessage(profileErrorMessages.BAD_REQUEST);
        }
      })
  }

  function handleSignOut() {
    mainApi.signOut()
      .then(() => {
        setIsLoggedIn(false)
        localStorage.clear();
        history.push("/");
      })
      .catch(() => console.log('error'))
  }

  // Search all movies

  function handleSearchFormSubmit(search) {
    setTimeout(() => {
      const filteredMovies = filterMovies(search.movie, isShortfilmCheckboxOn, localData)
      localStorage.setItem('filtered', JSON.stringify(filteredMovies));

      if (filteredMovies.length === 0) {
        setNoMoviesFound(true);
      } else {
        setNoMoviesFound(false);
      }

      setMovies(filteredMovies);
      setShownMovies(filteredMovies.slice(0, cardsRendering.total))
    }, 1000);
  }

  function toggleCheckbox() {
    if (!isShortfilmCheckboxOn) {
      const shortMovies = movies.filter(filterMoviesByDuration)
      setIsShortfilmCheckboxOn(true);
      setMovies(shortMovies)
      setShownMovies(shortMovies.slice(0, cardsRendering.total))
    }
    else {
      setIsShortfilmCheckboxOn(false);
      const prevState = JSON.parse(localStorage.getItem('filtered'));
      setMovies(prevState);
      setShownMovies(prevState.slice(0, cardsRendering.total))
    }
  };

  const handleClickLoadMoreMovies = (index, limit) => {
    const newShownMovies = movies.slice(0, index + limit)
    setShownMovies(newShownMovies)
  };

  // Search saved movies

  function handleSavedMoviesSearchFormSubmit(search) {
    setTimeout(() => {
      const allSavedMovies = JSON.parse(localStorage.getItem('savedMovies'));
      const filteredMovies = filterMovies(search.movie, isShortfilmCheckboxOn, allSavedMovies)
      localStorage.setItem('savedFilter', JSON.stringify(filteredMovies));

      if (filteredMovies.length === 0) {
        setNoSavedMoviesFound(true);
      } else {
        setNoSavedMoviesFound(false);
      }

      setSavedMovies(filteredMovies);
    }, 1000);
  }

  function toggleSavedMoviesCheckbox() {
    if (!isShortfilmCheckboxOn) {
      const shortMovies = savedMovies.filter(filterMoviesByDuration)
      setIsShortfilmCheckboxOn(true);
      localStorage.setItem('savedFilter', JSON.stringify(savedMovies));
      setSavedMovies(shortMovies)
    }
    else {
      setIsShortfilmCheckboxOn(false);
      const prevState = JSON.parse(localStorage.getItem('savedFilter'));
      setSavedMovies(prevState);
    }
  };

  //Save movie, delete movie

  const toggleMovieStatus = (movie) => {
    const movieId = `${movie.id}`
    const isSaved = savedMovies.some((i) => i.movieId === movieId);
    if (isSaved) {
      handleDeleteMovie(movieId)
    } else {
      handleSaveMovie(movie)
    }
  }

  const handleSaveMovie = (movie) => {
    mainApi.saveMovie(movie)
      .then((res) => {
        const tmpSavedMovies = savedMovies.concat([res])
        localStorage.setItem('savedMovies', JSON.stringify(tmpSavedMovies));
        setSavedMovies(tmpSavedMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteMovie = (movieId) => {
    const movieToDelete = savedMovies.find((movie) => movie.movieId === movieId)
    if (movieToDelete === undefined) return;

    mainApi
      .deleteMovie(movieToDelete._id)
      .then(() => {
        const filteredMovies = savedMovies.filter((item) => item._id !== movieToDelete._id)
        localStorage.setItem('savedMovies', JSON.stringify(filteredMovies));
        setSavedMovies(filteredMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getMovies = () => {
    mainApi
      .getMovies()
      .then((res) => {
        const storedCurrentUser = JSON.parse(localStorage.getItem('currentUser'));
        const ownedSavedMovies = res.filter((x) => x.owner === storedCurrentUser._id);
        localStorage.setItem('savedMovies', JSON.stringify(ownedSavedMovies));
        const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
        setSavedMovies(savedMovies);
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    if (isLoggedIn) {
      const localUserData = localStorage.getItem('currentUser');
      const localMoviesData = localStorage.getItem('movies');
      const localSavedMoviesData = localStorage.getItem('savedMovies');

      if (!localUserData) {
        mainApi
          .getUserInfo()
          .then((res) => {
            localStorage.setItem('currentUser', JSON.stringify(res));
            setCurrentUser(res);
          })
          .catch((err) => console.log('error'))
      } else {
        setCurrentUser(JSON.parse(localUserData));
      };
      if (!localMoviesData) {
        moviesApi
          .getMovies()
          .then((res) => {
            localStorage.setItem('movies', JSON.stringify(res));
            const allMovies = JSON.parse(localStorage.getItem('movies'));
            setLocalData(allMovies);
          })
          .catch((err) => console.log('error'))
      } else {
        setLocalData(JSON.parse(localMoviesData));
      };
      if (!localSavedMoviesData) {
        getMovies()
      } else {
        setSavedMovies(JSON.parse(localSavedMoviesData));
      };
    }
  }, [isLoggedIn]);

  React.useEffect(() => {
    setCardsRendering(getCardsRendering(width));
  }, [width]);

  return (
    <div className="page__container">
      <CurrentUserContext.Provider value={currentUser}>
        {useRouteMatch(headerExclusionPaths) ? null :
          (<Header
            onBurgerMenu={handleBurgerMenuClick}
            isLoggedIn={isLoggedIn}
          />)
        }
        {isLoading
          ? <Preloader />
          : <Switch>
            <Route exact path="/">
              <Main
                isLoggedIn={isLoggedIn}
              />
            </Route>
            <ProtectedRoute
              component={Movies}
              path="/movies"
              isLoggedIn={isLoggedIn}
              allMovies={movies}
              searchResults={shownMovies}
              savedMovies={savedMovies}
              cardsRendering={cardsRendering}
              isChecked={isShortfilmCheckboxOn}
              noMoviesFound={noMoviesFound}
              onSubmit={handleSearchFormSubmit}
              onShowMoreMoviesClick={handleClickLoadMoreMovies}
              onCheckbox={toggleCheckbox}
              onSaveMovie={toggleMovieStatus}
            >
            </ProtectedRoute>
            <ProtectedRoute
              component={SavedMovies}
              path="/saved-movies"
              isLoggedIn={isLoggedIn}
              searchResults={savedMovies}
              savedMovies={savedMovies}
              handleDeleteMovie={handleDeleteMovie}
              onSubmit={handleSavedMoviesSearchFormSubmit}
              onCheckbox={toggleSavedMoviesCheckbox}
              isChecked={isShortfilmCheckboxOn}
              noMoviesFound={noSavedMoviesFound}

            >
            </ProtectedRoute>
            <ProtectedRoute
              component={Profile}
              path="/profile"
              isLoggedIn={isLoggedIn}
              onUpdateUser={handleUpdateUser}
              onSignOut={handleSignOut}
              profileMessage={profileFormMessage}
            >
            </ProtectedRoute>
            <Route path="/signin">
              {isLoggedIn
                ? <Redirect to='/movies' />
                :
                <Login
                  onLogin={onLogin}
                />}
            </Route>
            <Route path="/signup">
              {isLoggedIn
                ? <Redirect to='/movies' />
                :
                <Register
                  onRegister={onRegister}
                />}
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        }
        {useRouteMatch(footerExclusionPaths) ? null :
          (<Footer />)
        }
        <SideBarMenu isOpen={isSideBarMenuOpened} onClose={closeSideMenu} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
