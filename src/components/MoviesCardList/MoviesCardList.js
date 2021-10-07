import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";


function MoviesCardList(props) {
    return (
        <ul className="movies-card-list">
            {
                props.cards.map((item) => {
                    return (
                        <MoviesCard key={item._id} card={item} isSavedMovies={props.isSavedMovies} onSaveButton={props.onSaveButton} checkMovieStatus={props.checkMovieStatus} />
                    )
                }
                )
            }
        </ul>
    )
}

export default MoviesCardList