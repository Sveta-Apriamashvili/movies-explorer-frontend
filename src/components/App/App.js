import React from 'react';
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
  const [cards, setCards] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);

  const history = useHistory();

  function handleBurgerMenuClick() {
    setIsSideBarMenuOpened(true);
  }

  function closeSideMenu() {
    setIsSideBarMenuOpened(false);
  }

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
        onTokenCheck()
      })
      .catch(() => console.log('error')
      )
  }

  const onTokenCheck = React.useCallback(() => {

    mainApi.checkToken()
      .then(res => {
        setIsLoggedIn(res != null)
        setCurrentUser(res)
        history.push('/movies')
      })
      .catch(() => console.log('error'))

  }, [history])

  function handleUpdateUser(data) {
    mainApi.editUserInfo(data)
      .then(res => {
        setCurrentUser(res)
      })
      .catch(() => console.log('error'))
  }

  function handleSignOut() {
    mainApi.signOut()
    setIsLoggedIn(false)
  }

  function getSavedMovies() {
    mainApi.getSavedMovies()
        .then((savedMovies) => {
            setSavedMovies(savedMovies);
        })
        .catch((error) => {
            console.log(error);
        });
}

function saveMovie(movie) {
  mainApi.saveMovie(movie)
      .then((res) => {
          const newSavedMovie = res.newMovie;
          setSavedMovies([...savedMovies, newSavedMovie]);
      })
      .catch((err) => console.log(err));
}

function deleteMovie(movie) {
  const movieId = savedMovies.find(
      (item) => item.movieId === movie.movieId
  )._id;
  mainApi.deleteMovie(movieId)
      .then((res) => {
          getSavedMovies();
      })
      .catch((err) => console.log(err));
}

function handleCardSaveButton(movie, isSaved) {
  isSaved ? deleteMovie(movie) : saveMovie(movie);
}

function checkMovieStatus(movie) {
  return savedMovies.some(
      savedMovie => savedMovie.movieId === movie.id 
  );         
}

  // const searchFilter = (searchQueries, cards) => {
  //   const { search = '', shortfilm = false } = searchQueries;

  //   const filterKeyword = (movie) => {
  //     return JSON.stringify(movie).toLowerCase().includes(search.toLowerCase())
  //   }

  //   const filterShortfilm = (movie) => {
  //     return movie.duration <= 40;
  //   }

  //   if (shortfilm) {
  //     return cards.filter(filterShortfilm).filter(filterKeyword);
  //   } else {
  //     return cards.filter(filterKeyword);
  //   }
  // }

  // const handleSearchFormSubmit = (searchQueries = {}) => {
  //   const localMoviesData = JSON.parse(localStorage.getItem('movies'));
  //   if (localMoviesData) {
  //     const filteredMovies = searchFilter(searchQueries, localMoviesData);

  //     // if (filteredMovies.length === 0) {
  //     //   setIsNoMoviesFound(true);
  //     // } else {
  //     //   setIsNoMoviesFound(false);
  //     // }

  //     // localStorage.setItem('filtered-previously-movies', JSON.stringify(markAsSaved(filteredMovies)));

  //     setCards(filteredMovies);
  //   }
  // };


  React.useEffect(() => {
    if (!isLoggedIn) { return }

    Promise.all([mainApi.getUserInfo(), moviesApi.getMovies()])
      .then(([user, cards]) => {
        setCurrentUser(user)
        setCards(cards)
      })
      .catch(() => console.log('error'))
  }, [isLoggedIn]);

  React.useEffect(() => {
    onTokenCheck()
  }, [onTokenCheck]);

  return (
    <div className="page__container">
      <CurrentUserContext.Provider value={currentUser}>

        {useRouteMatch(headerExclusionPaths) ? null :
          (<Header
            onBurgerMenu={handleBurgerMenuClick}
            isLoggedIn={isLoggedIn}
          />)
        }
        <Switch>
          <Route exact path="/">
            <Main
              isLoggedIn={isLoggedIn}
            />
          </Route>
          <Route path="/movies">
            <Movies
              cards={cards}
              // onSubmit={handleSearchFormSubmit}
              onSaveButton={handleCardSaveButton}
              checkMovieStatus={checkMovieStatus}
              
            />
          </Route>
          <Route path="/saved-movies">
            <SavedMovies />
          </Route>
          <Route path="/profile">
            <Profile
              onUpdateUser={handleUpdateUser}
              onSignOut={handleSignOut}
            />
          </Route>
          <Route path="/signin">
            <Login
              onLogin={onLogin}
              onTokenCheck={onTokenCheck}
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
        {useRouteMatch(footerExclusionPaths) ? null :
          (<Footer />)
        }
        <SideBarMenu isOpen={isSideBarMenuOpened} onClose={closeSideMenu} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
