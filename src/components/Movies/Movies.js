import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function Movies(props) {

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
        handleSaveMovie={props.handleSaveMovie}
        handleDeleteMovie={props.handleDeleteMovie}
      />
      <button className="movies__button">Ещё</button>
    </section>
  )
}

export default Movies