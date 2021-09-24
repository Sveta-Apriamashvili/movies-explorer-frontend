import React from "react";
import { Link } from 'react-router-dom';
// import account_icon from '../../images/account-icon.svg'

function Navigation() {
    return (
        <div className="navigation">
            <div className="navigation__menu">
                <ul className="navigation__movies">
                    <li><Link className="navigation__menu-item" to="/movies">Фильмы</Link></li>
                    <li><Link className="navigation__menu-item navigation__menu-item_type_normal" to="/saved-movies">Сохранённые фильмы</Link></li>
                </ul>
                <div className="navigation__profile">
                    <Link className="navigation__menu-item" to="/profile">Аккаунт</Link>
                    <div className="navigation__profile-icon">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation