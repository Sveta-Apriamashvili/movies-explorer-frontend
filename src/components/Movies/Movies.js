import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function Movies(props) {
  
  const numberOfAllMovies = props.allMovies.length;
  const numberOfShownMovies = props.searchResults.length;

  function shouldShowMoreButton() {
    return numberOfShownMovies < numberOfAllMovies
  }

  function handleMoreButtonClick() {
    let numberOfMoviesToAdd = props.cardsRendering.add;
    if (numberOfAllMovies < numberOfShownMovies + numberOfMoviesToAdd) {
      props.onShowMoreMoviesClick(numberOfShownMovies, numberOfMoviesToAdd)
    } else {
      numberOfMoviesToAdd = numberOfAllMovies - numberOfShownMovies
      if (numberOfMoviesToAdd > 0) {
        props.onShowMoreMoviesClick(numberOfShownMovies, numberOfMoviesToAdd)
      }
    }
  }

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
        handleSaveMovie={props.onSaveMovie}
        handleDeleteMovie={props.handleDeleteMovie}
      />
      {!props.isLoading && props.noMoviesFound && (
        <p className="movies__message">Ничего не найдено</p>
      )}
      {shouldShowMoreButton() &&
        <button className="movies__button" type="button" onClick={handleMoreButtonClick}>Ещё</button>
      }
    </section>
  )
}

export default Movies