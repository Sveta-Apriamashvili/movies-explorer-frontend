import React from "react";
import { Link } from 'react-router-dom'
import logo_auth from '../../images/logo-auth.svg'

function Form(props) {
    return (
        <div className="form">
            <img src={logo_auth} className="form__logo" alt="лого" />
            <h1 className="form__title">{props.title}</h1>
            <form className="form__container">
                {props.inputs.map((item) => (
                    <div className="form__input-container" key={item.key}>
                        <label className="form__input-label">{item.label}</label>
                        <input className="form__item" id={item.id} name={item.name} type={item.type} minLength={item.minLength}
                            maxLength={item.maxLength} required />
                        {/* <span className="form__error" id={item.errorId}></span> */}
                    </div>))}
                <button className="form__submit-button" type="submit">{props.button}</button>
            </form>
            <div className="form__bottom-text">
                <p>{props.text}</p>
                <Link to={props.link_address} className="form__bottom-text_type_link">{props.link_name}</Link>
            </div>
        </div>
    )
}

export default Form