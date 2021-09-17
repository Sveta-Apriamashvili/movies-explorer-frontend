import React from "react";
import {Link} from 'react-router-dom'
import logo_auth from '../../images/logo-auth.svg'
import Form from "../Form/Form";

function Register() {

    return (
        <div className="auth">
            <img src={logo_auth} className="auth__logo"/>
            <h1 className="auth__title">Добро пожаловать!</h1>
            <form className="auth__form">
                <div className="auth__input-container">
                <label className="auth__form-label">Имя</label>
                    <input className="auth__item" id="name" name="name" type="text" />
                    <label className="auth__form-label">E-mail</label>
                    <input className="auth__item" id="email" name="email" type="email" />
                    <label className="auth__form-label">Пароль</label>
                    <input className="auth__item" id="password" name="password" type="password" />
                    <button className="auth__submit-button" type="submit">Зарегистрироваться</button>
                </div>
            </form>
            <div className="auth__bottom-text">
           <p>Уже зарегистрированы?</p>
           <Link to="signin" className="auth__bottom-text_type_link">Войти</Link>
         </div>
        </div>
        // <Form 
        // title = "Lkjhfd"
        // />
    )
}

export default Register