import React from "react";

function MoviesCard(props) {

    const isSaved = false;
    const isSavedMovies = props.isSavedMovies;
    const cardSaveButtonClassName = (`moviescard__save-button ${isSavedMovies ? 'moviescard__save-button_type_delete' : (isSaved ? 'moviescard__save-button_type_active' : '')} `);
   

    return (
        <li className="moviescard">
            <div className="moviescard__container">
                <div className="">
                    <h3 className="moviescard__title">{props.card.name}</h3>
                    <p className="moviescard__duration">{props.card.duration}</p>
                </div>
                <button className={cardSaveButtonClassName}></button>
            </div>
            <img className="moviescard__image" alt="" src={props.card.thumbnail} />
        </li>
    )
}

export default MoviesCard