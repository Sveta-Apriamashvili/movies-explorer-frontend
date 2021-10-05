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
  const history = useHistory();


  function handleBurgerMenuClick() {
    setIsSideBarMenuOpened(true);
  }

  function closeSideMenu() {
    setIsSideBarMenuOpened(false);
  }

  function onRegister(name, email, password) {
    mainApi.register(name, email, password)
      .then(() => {
        onLogin(email, password);
      })
      .catch(console.log('error'))
  }

  function onLogin(email, password) {
    mainApi.login(email, password)
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
        // setUserInfo(res.email)
        history.push('/movies')
      })
      .catch(() => console.log('error'))

  }, [history])

  function handleUpdateUser(name, email) {
    mainApi.editUserInfo(name, email)
      .then(res => {
        setCurrentUser(res)
      })
      .catch(() => console.log('error'))
  }

  React.useEffect(() => {
    onTokenCheck()
  }, [onTokenCheck]);

  return (
    <div className="page__container">
      <CurrentUserContext.Provider value={currentUser}>

        {useRouteMatch(headerExclusionPaths) ? null :
          (<Header
            onBurgerMenu={handleBurgerMenuClick}
          />)
        }
        <Switch>
          <Route exact path="/">
            <Main
              isLoggedIn={isLoggedIn}
            />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/saved-movies">
            <SavedMovies />
          </Route>
          <Route path="/profile">
            <Profile
              onUpdateUser={handleUpdateUser}
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
