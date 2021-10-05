import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";


function MoviesCardList(props) {
    return (
        <ul className="movies-card-list">
            {
                props.cards.map((item) => {
                    return (
                        <MoviesCard key={item._id} card={item} isSavedMovies={props.isSavedMovies} />
                    )
                }
                )
            }
        </ul>
    )
}

export default MoviesCardList