import Movies from './Movies/Movies'

const Lolomo = ({ title, movies }) => {
  return (
    <div>
      <h1>{title}</h1>
      <Movies movies={movies} />
    </div>
  )
}

export default Lolomo
