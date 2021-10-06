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
            <Movies />
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
