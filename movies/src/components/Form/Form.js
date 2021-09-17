import React from "react";
import {Link} from 'react-router-dom'
import logo_auth from '../../images/logo-auth.svg'

function Form(props) {
 return (
     <div className="form">
         <img src={logo_auth} className="form__logo"/>
         <h1 className="form__title">{props.title}</h1>
         <form className="form__container">
             <div className="auth__input-container">
                 <label className="form__input-label">{props.label}</label>
                 <input className="form__item" id="email" name="email" type="email" />
                 <label className="form__input-label">{props.label}</label>
                 <input className="form__item" id="password" name="password" type="password" />
                 <button className="form__submit-button" type="submit">{props.button}</button>
             </div>
         </form>
         <div className="form__bottom-text">
        <p>{props.text}</p>
        <Link to="signup" className="auth__bottom-text_type_link">{props.link_name}</Link>
      </div>
     </div>
 )
}

export default Form