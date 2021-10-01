import React from "react";
import { NavLink } from "react-router-dom";

function SideBarMenu(props) {
    return (
        <div className={`side-bar-menu ${props.isOpen ? 'side-bar-menu_opened' : ''}`}>
            <div className="side-bar-menu__container">
                <button className="side-bar-menu__close-button" aria-label="закрыть" onClick={props.onClose}></button>
                <div className="side-bar-menu__navigation">
                    <ul className="side-bar-menu__list">
                        <li><NavLink className="side-bar-menu__list-item" activeClassName="side-bar-menu__list-item_active" exact="true" to="/">Главная</NavLink></li>
                        <li><NavLink className="side-bar-menu__list-item" activeClassName="side-bar-menu__list-item_active" to="/movies">Фильмы</NavLink></li>
                        <li><NavLink className="side-bar-menu__list-item" activeClassName="side-bar-menu__list-item_active" to="/saved-movies">Сохранённые фильмы</NavLink></li>
                    </ul>
                    <div className="side-bar-menu__profile">
                        <NavLink className="side-bar-menu__list-item" to="/profile">Аккаунт</NavLink>
                        <div className="side-bar-menu__profile-icon"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBarMenu