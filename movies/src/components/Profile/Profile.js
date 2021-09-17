import React from "react";
import { Link } from 'react-router-dom';

function Profile() {

    return (

        <div className="profile">
            <h1 className="profile__title">Привет, Виталий!</h1>
            <form className="profile__form">
                <div className="profile__input-items">
                    <label className="profile__form-label">Имя</label>
                    <input className="profile__item" id="name" name="name" type="text" />
                </div>
                <div className="profile__input-items">
                    <label className="profile__form-label">E-mail</label>
                    <input className="profile__item" id="email" name="email" type="email" />
                </div>
                <button className="profile__submit-button" type="submit">Редактировать</button>
            </form>
            <Link to="/" className="profile__logout-link">Выйти из аккаунта</Link>
        </div>
    )
}

export default Profile