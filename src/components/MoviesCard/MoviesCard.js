import React from "react";
import convertDuration from "../../utils/convertDuration";
import convertMovieImageURL from "../../utils/convertMovieImageURL";

function MoviesCard(props) {
    const isSavedMovies = props.isSavedMovies;
    const cardSaveButtonClassName = (`moviescard__save-button ${isSavedMovies ? 'moviescard__save-button_type_delete' : (props.isSaved ? 'moviescard__save-button_type_active' : '')} `);

    function handleButtonClick() {
        if (isSavedMovies) {
            props.handleDeleteMovie(props.card.movieId)
        } else {
            props.handleSaveMovie(props.card)
        }
    }

    return (
        <li className="moviescard">
            <div className="moviescard__container">
                <div className="">
                    <h3 className="moviescard__title">{props.card.nameRU}</h3>
                    <p className="moviescard__duration">{convertDuration(props.card.duration)}</p>
                </div>
                <button className={cardSaveButtonClassName} onClick={handleButtonClick}></button>
            </div>
            <img className="moviescard__image" alt={props.card.nameRU} src={convertMovieImageURL(props.card.image)} />
        </li>
    )
}

export default MoviesCard