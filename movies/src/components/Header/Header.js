import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../images/logo-auth.svg'

function Header() {
    return (
        <header className="header">
            <Link to="/"><img className="header__logo" src={logo} alt="лого" /></Link>
            <div className="header__menu">
                <Link className="header__menu-item" to="/signup">Регистрация</Link>
                <Link className="header__menu-item header__menu-item_button" to="/signin">Войти</Link>
            </div>
        </header>
    //     <header className="header">
           
    //         <Link to="/"><img className="header__logo" src={logo} alt="лого" /></Link>

    //     <div className="navigation">
    //     <div className="navigation__menu">
    //     <div className="navigation__movies">
    //         <Link className="navigation__menu-item" to="/movies">Фильмы</Link>
    //         <Link className="navigation__menu-item" to="/saved-movies">Сохранённые фильмы</Link>
    //         </div>
    //         <div className="navigaition__acc">
    //         <Link className="navigation__menu-item" to="/profile">Аккаунт</Link>
    //     </div>
    //     </div>
    // </div>
    
    // </header>
    // )
    )}

export default Header
