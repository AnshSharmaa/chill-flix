import Movies from './Movies/Movies'
import Loading from '../Loading/Loading'
// List of movies with their title
const MoviesRow = ({ title, movies }) => {
  return !movies?.length ? (
    <>
      <h1>{title}</h1>
      <Loading />
    </>
  ) : (
    <div>
      <h1>{title}</h1>
      <Movies movies={movies} />
    </div>
  )
}

export default MoviesRow
