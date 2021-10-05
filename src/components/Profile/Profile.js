import React from "react";
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

    function handleChangeName(e) {
        setName(e.target.value)
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateUser({
            name,
            email,
        });
    }

    React.useEffect(() => {
        setName(currentUser ? currentUser.name : '');
        setEmail(currentUser ? currentUser.email : '');
    }, [currentUser]);

    return (

        <div className="profile">
            <h1 className="profile__title">Привет, {props.userName}</h1>
            <form className="profile__form">
                <div className="profile__input-items">
                    <label className="profile__form-label">Имя</label>
                    <input className="profile__item" id="name" name="name" type="text" onChange={handleChangeName} value={name || ''} />
                </div>
                <div className="profile__input-items">
                    <label className="profile__form-label">E-mail</label>
                    <input className="profile__item" id="email" name="email" type="email" onChange={handleChangeEmail} value={email || ''} />
                </div>
                <button className="profile__submit-button" type="submit" onClick={handleSubmit}>Редактировать</button>
            </form>
            <Link to="/" className="profile__logout-link" onClick={props.onSignOut}>Выйти из аккаунта</Link>
        </div>
    )
}

export default Profile