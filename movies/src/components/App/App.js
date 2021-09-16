import React from 'react';
import Footer from '../Footer/Footer';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
// import logo from '../../images/logo.svg';
import './App.css';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';

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

  return (
    <div className="page__container">
      {useRouteMatch(headerExclusionPaths) ? null :
        (<Header />)
      }
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      {useRouteMatch(footerExclusionPaths) ? null :
        (<Footer />)
      }
    </div>
  );
}

export default App;
