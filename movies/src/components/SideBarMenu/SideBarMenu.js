import React from "react";
import { NavLink } from "react-router-dom";

function SideBarMenu() {
    return (
        <div className="side-bar-menu side-bar-menu_opened">
            <div className="side-bar-menu__container">
                <button className="side-bar-menu__close-button"></button>
                <div className="side-bar-menu__navigation">
                    <ul className="side-bar-menu__list">
                        <li><NavLink className="side-bar-menu__list-item" activeClassName="side-bar-menu__list-item_active" to="/">Главная</NavLink></li>
                        <li><NavLink className="side-bar-menu__list-item" activeClassName="side-bar-menu__list-item_active" to="/movies">Фильмы</NavLink></li>
                        <li><NavLink className="side-bar-menu__list-item navigation__menu-item_type_normal" activeClassName="side-bar-menu__list-item_active" to="/saved-movies">Сохранённые фильмы</NavLink></li>
                    </ul>
                    <div className="side-bar-menu__profile">
                        <NavLink className="side-bar-menu__list-item" to="/profile">Аккаунт</NavLink>
                        <div className="side-bar-menu__profile-icon">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBarMenu