import Movies from './Movies/Movies'

const Lolomo = ({ title, movies }) => {
  return (
    <div>
      <h3>{title}</h3>
      <Movies movies={movies} />
    </div>
  )
}

export default Lolomo
