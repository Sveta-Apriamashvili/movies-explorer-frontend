export const filterMoviesByDuration = (movie) => {
  return movie.duration <= 40;
}

export const filterMovies = (search, isShortfilmSwitchOn, movies) => {

  const filterMoviesByKeyword = (movie) => {
    return movie.nameRU.toLowerCase().includes(search.toLowerCase())
  }

  if (isShortfilmSwitchOn) {
    return movies.filter(filterMoviesByDuration).filter(filterMoviesByKeyword);
  } else {
    return movies.filter(filterMoviesByKeyword);
  }
}
    
export default filterMovies;