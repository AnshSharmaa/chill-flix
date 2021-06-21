import Movies from './Movies/Movies'
// List of movies with their title
const Lolomo = ({ title, movies }) => {
  return !movies?.length ? (
    <h1>Loading... </h1>
  ) : (
    <div>
      <h1>{title}</h1>
      <Movies movies={movies} />
    </div>
  )
}

export default Lolomo
