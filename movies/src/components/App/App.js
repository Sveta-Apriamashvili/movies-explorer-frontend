import React from 'react';
// import { Route, Switch, useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
// import logo from '../../images/logo.svg';
import './App.css';

function App() {
  return (
    <div className="page__container">
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
