import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function Movies(props) {

  return (
    <section className="movies">
      <SearchForm onSubmit = {props.onSubmit} />
      <MoviesCardList cards={props.cards} onSaveButton={props.onSaveButton} checkMovieStatus={props.checkMovieStatus}/>
      <button className="movies__button">Ещё</button>
    </section>
  )
}

export default Movies