import React from "react";
import {Link} from 'react-router-dom'
import logo_auth from '../../images/logo-auth.svg'

function Login() {
 return (
     <div className="auth">
         <img src={logo_auth} className="auth__logo"/>
         <h1 className="auth__title">Рады видеть!</h1>
         <form className="auth__form">
             <div className="auth__input-container">
                 <label className="auth__form-label">E-mail</label>
                 <input className="auth__item" id="email" name="email" type="email" />
                 <label className="auth__form-label">Пароль</label>
                 <input className="auth__item" id="password" name="password" type="password" />
                 <button className="auth__submit-button" type="submit">Войти</button>
             </div>
         </form>
         <div className="auth__bottom-text">
        <p>Ещё не зарегистрированы?</p>
        <Link to="signup" className="auth__bottom-text_type_link">Регистрация</Link>
      </div>
     </div>
 )
}

export default Login