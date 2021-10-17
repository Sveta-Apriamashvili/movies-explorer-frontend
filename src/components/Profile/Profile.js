import React from "react";
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from "../../hooks/useFormWithValidation";


function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [isEdited, setIsEdited] = React.useState(false);

    const emailPattern = '^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\\.)+[A-Za-z]+$';

    const {
        values,
        errors,
        isValid,
        handleChange,
        resetForm,
      } = useFormWithValidation({});

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateUser(values);
    }


    React.useEffect(() => {
        resetForm({ name: currentUser.name, email: currentUser.email });
      }, [currentUser]);

      React.useEffect(() => {
        if (currentUser.name === values.name && currentUser.email === values.email) {
            setIsEdited(false);
        } else {
            setIsEdited(true);
        }
      }, [currentUser, values]);

      React.useEffect(() => {
        props.resetFormErrorMessage();
      }, [values]);

    return (

        <div className="profile">
            <h1 className="profile__title">Привет, {currentUser.name}!</h1>
            <form className="profile__form">
                <div className="profile__input-items">
                    <label className="profile__form-label">Имя</label>
                    <input className="profile__item" id="name" name="name" type="text" minLength = "2" maxLength = "30" pattern = "[A-Za-zА-ЯЁа-яё -]+" onChange={handleChange} value={values["name"]  } />
                    <span className="profile__error">{errors["name"]}</span>
                </div>
                <div className="profile__input-items">
                    <label className="profile__form-label">E-mail</label>
                    <input className="profile__item" id="email" name="email" type="email" onChange={handleChange} value={values["email"]} pattern={emailPattern} />
                    <span className="profile__error">{errors["email"]}</span>
                </div>
                <p className="profile__update-message">{props.profileMessage}</p>
                <button className="profile__submit-button" type="submit" onClick={handleSubmit} disabled={!isValid || !isEdited}>Редактировать</button>
            </form>
            <Link to="/" className="profile__logout-link" onClick={props.onSignOut}>Выйти из аккаунта</Link>
        </div>
    )
}

export default Profile