import React from "react";
import convertDuration from "../../utils/convertDuration";
// import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function MoviesCard(props) {
    const MOVIES_URL = 'https://api.nomoreparties.co';
    
    const isSaved = props.checkMovieStatus(props.card);
    const isSavedMovies = props.isSavedMovies;
    const cardSaveButtonClassName = (`moviescard__save-button ${isSavedMovies ? 'moviescard__save-button_type_delete' : (isSaved ? 'moviescard__save-button_type_active' : '')} `);

    // const currentUser = React.useContext(CurrentUserContext);

    function handleSaveClick() {
        props.onSaveButton(props.card)
    }

    // function handleDeleteClick() {
    //     props.onCardDelete(props.card)
    // }

    return (
        <li className="moviescard">
            <div className="moviescard__container">
                <div className="">
                    <h3 className="moviescard__title">{props.card.nameRU}</h3>
                    <p className="moviescard__duration">{convertDuration(props.card.duration)}</p>
                </div>
                <button className={cardSaveButtonClassName} onClick={handleSaveClick}></button>
            </div>
            <img className="moviescard__image" alt={props.card.nameRU} src={`${MOVIES_URL}${props.card.image.url}`} />
        </li>
    )
}

export default MoviesCard