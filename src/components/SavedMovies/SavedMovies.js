import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies(props) {
    
    return (
        <section className="movies">
            <SearchForm />
            <MoviesCardList 
            searchResults={props.searchResults} 
            savedMovies={props.savedMovies}
            isSavedMovies={true} 
            handleDeleteMovie={props.handleDeleteMovie}/>
        </section>
    )
}

export default SavedMovies