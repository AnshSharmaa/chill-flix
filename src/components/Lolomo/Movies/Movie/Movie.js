const Movie = ({ movie }) => {
  const poster = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
  return <img src={poster} alt='poster' />
}

export default Movie
