import React from "react";
import { Link, useLocation } from 'react-router-dom';

function Navigation(props) {

    const location = useLocation();
    // const navigationMenuItemClassName = (`navigation__menu-item ${props.isLoggedIn && location.pathname === '/' ? 'navigation__menu-item_type_loggedin'  : '' );
    
    return (
        <div className="navigation">
            <div className="navigation__menu">
                <ul className="navigation__movies">
                    <li><Link className={`navigation__menu-item ${props.isLoggedIn && location.pathname === '/' ? 'navigation__menu-item_type_loggedin' : ''}`} to="/movies">Фильмы</Link></li>
                    <li><Link className={`navigation__menu-item navigation__menu-item_type_normal ${props.isLoggedIn && location.pathname === '/' ? 'navigation__menu-item_type_loggedin' : ''}`} to="/saved-movies">Сохранённые фильмы</Link></li>
                </ul>
                <div className="navigation__profile">
                    <Link className={`navigation__menu-item ${props.isLoggedIn && location.pathname === '/' ? 'navigation__menu-item_type_loggedin' : ''}`} to="/profile">Аккаунт</Link>
                    <div className="navigation__profile-icon">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation