import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies(props) {

    return (
        <section className="movies">
            <SearchForm
                onSubmit={props.onSubmit}
                onCheckbox={props.onCheckbox}
                isChecked={props.isShortfilmCheckboxOn}
            />
            <MoviesCardList
                searchResults={props.searchResults}
                savedMovies={props.savedMovies}
                handleDeleteMovie={props.handleDeleteMovie} />
            {!props.isLoading && props.noMoviesFound && (
                <p className="movies__message">Ничего не найдено</p>
            )}
        </section>

    )
}

export default SavedMovies