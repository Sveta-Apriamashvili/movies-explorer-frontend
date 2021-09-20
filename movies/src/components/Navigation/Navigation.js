import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../images/logo-auth.svg'

function Navigation() {
    return (
        <div className="navigation">
            <Link to="/"><img className="header__logo" src={logo} alt="лого" /></Link>
            <div className="navigation__movies">
                <Link className="navigation__menu-item" to="/movies">Фильмы</Link>
                <Link className="navigation__menu-item" to="/saved-movies">Сохранённые фильмы</Link>
                </div>
                <div className="navigaition__acc">
                <Link className="navigation__menu-item" to="/profile">Аккаунт</Link>
            </div>
        </div>
    )
}

export default Navigation