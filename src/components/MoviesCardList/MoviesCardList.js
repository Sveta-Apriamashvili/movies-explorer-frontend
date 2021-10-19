import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
    return (
        <ul className="movies-card-list">
            {props.searchResults.map((item) => {
                return (
                    <MoviesCard
                        key={item._id}
                        card={item}
                        isSaved={props.savedMovies.some((i) => {
                            return i.movieId === `${item.id}` ? true : false
                        })}
                        handleSaveMovie={props.handleSaveMovie}
                        handleDeleteMovie={props.handleDeleteMovie}
                    />
                )
            }
            )
            }
        </ul>
    )
}

export default MoviesCardList