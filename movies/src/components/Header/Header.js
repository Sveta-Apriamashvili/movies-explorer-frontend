import React from "react";
import { Route, Switch, Link } from 'react-router-dom';
import logo from '../../images/logo.svg'

function Header() {
    return (
        <header className="header">
            <a href="/"><img className="header__logo" src={logo} alt="лого" /></a>
            <div className="header__menu">
                <Link className="header__menu-item" to="/sign-up">Регистрация</Link>
                <Link className="header__menu-item header__menu-item_button" to="/sign-in">Войти</Link>
            </div>
        </header>
    )
}

export default Header
