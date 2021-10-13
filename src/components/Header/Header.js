import React from "react";
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo-auth.svg'
import Navigation from "../Navigation/Navigation";
import Burger from "../Burger/Burger";


function Header(props) {
    const location = useLocation();
    const headerClassName = (`header ${props.isLoggedIn && location.pathname === '/' ? 'header_type_logged-in_main' : (props.isLoggedIn ? 'header_type_logged-in' : '')} `);

    return (
        <header className={headerClassName}>
            <div className="header__logo">
                <Link to="/"><img src={logo} alt="лого" /></Link>
            </div>

            {!props.isLoggedIn && (
                <div className="header__menu">
                    <Link className="header__menu-item" to="/signup">Регистрация</Link>
                    <Link className="header__menu-item header__menu-item_button" to="/signin">Войти</Link>
                </div>
            )}

            {props.isLoggedIn &&
                (<Navigation isLoggedIn={props.isLoggedIn} />)}

            {props.isLoggedIn && (
                <Burger onBurgerMenu={props.onBurgerMenu} />
            )}
        </header>
    )
}

export default Header
