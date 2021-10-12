import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";


function MoviesCardList(props) {
    return (
        <ul className="movies-card-list">
            {/* <Preloader/> */}
            {props.searchResults.map((item) => {
                return (
                    <MoviesCard
                        key={item._id}
                        card={item}
                        isSaved={props.savedMovies.some((i) => {
                            return i.movieId === `${item.id}` ? true : false
                        })}
                        isSavedMovies={props.isSavedMovies}
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