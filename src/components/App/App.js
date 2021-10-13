import React, { useCallback } from 'react';
import Footer from '../Footer/Footer';
import { Route, Switch, useRouteMatch, useHistory } from 'react-router-dom';
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
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [localData, setLocalData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isShortfilmCheckboxOn, setIsShortfilmCheckboxOn] = React.useState(false);

  const history = useHistory();

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
        setCurrentUser(res)
      })
      .catch(() => console.log('error'))
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

      setMovies(filteredMovies);
    }, 1000);
  }

  function toggleCheckbox() {
    if (!isShortfilmCheckboxOn) {
      const shortMovies = movies.filter(filterMoviesByDuration)
      setIsShortfilmCheckboxOn(true);
      setMovies(shortMovies)
    }
    else {
      setIsShortfilmCheckboxOn(false);
      const prevState = JSON.parse(localStorage.getItem('filtered'));
      setMovies(prevState);
    }
  };

  // Search saved movies

  function handleSavedMoviesSearchFormSubmit(search) {
    setTimeout(() => {
      const filteredMovies = filterMovies(search.movie, isShortfilmCheckboxOn, savedMovies)
      localStorage.setItem('savedFilter', JSON.stringify(filteredMovies));

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
        const ownedSavedMovies = res.filter((x) => x.owner === currentUser._id)
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
              searchResults={movies}
              savedMovies={savedMovies}
              onSubmit={handleSearchFormSubmit}
              handleSaveMovie={toggleMovieStatus}
              onCheckbox={toggleCheckbox}
              isChecked={isShortfilmCheckboxOn}
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
            >
            </ProtectedRoute>
            <ProtectedRoute
              component={Profile}
              path="/profile"
              isLoggedIn={isLoggedIn}
              onUpdateUser={handleUpdateUser}
              onSignOut={handleSignOut}
            >
            </ProtectedRoute>
            <Route path="/signin">
              <Login
                onLogin={onLogin}
              />
            </Route>
            <Route path="/signup">
              <Register
                onRegister={onRegister}
              />
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
