import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../images/logo-auth.svg'
import Navigation from "../Navigation/Navigation";

const loggedIn = false;

const headerClassName = (`header ${loggedIn ? 'header_type_logged-in' : ''}`);


function Header() {
    return (
        <header className={headerClassName}>
            <div className="header__logo">
                <Link to="/"><img src={logo} alt="лого" /></Link>
            </div>

            {!loggedIn && (
                <div className="header__menu">
                    <Link className="header__menu-item" to="/signup">Регистрация</Link>
                    <Link className="header__menu-item header__menu-item_button" to="/signin">Войти</Link>
                </div>
            )}

            {loggedIn &&
                (<Navigation />)}
        </header>
    )
}

export default Header
