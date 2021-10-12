import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function Movies(props) {

  return (
    <section className="movies">
      <SearchForm onSubmit = {props.onSubmit} />
      <MoviesCardList 
      searchResults={props.searchResults} 
      savedMovies={props.savedMovies} 
      handleSaveMovie={props.handleSaveMovie} 
      handleDeleteMovie={props.handleDeleteMovie}
      // loader={props.loader}
      />
      <button className="movies__button">Ещё</button>
    </section>
  )
}

export default Movies