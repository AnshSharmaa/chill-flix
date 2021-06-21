import { useLocation } from 'react-router-dom'
import { genreList } from '../../constants/constants'

import './MovieDetails.scss'
const MovieDetails = () => {
  const location = useLocation()
  const movie = location.state

  const backdrop = `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`
  return (
    <div className='movie-view'>
      <img src={backdrop} alt='backdrop' />

      <div className='movie-view-details'>
        <h1>{movie.original_title}</h1>
        <p>{movie.overview}</p>
        <h4>{movie.release_date}</h4>

        <div className='movie-info'>
          <span style={{ color: '#46D269', fontWeight: 600, fontSize: '1.2em' }}>{movie.vote_average * 10}% Match</span>
          <span style={{ fontWeight: 600, fontSize: '1.2em' }}>{movie.original_language}</span>
          <span className='square-border'>{movie.adult ? '18+' : '13+'}</span>
          <span className='square-border' style={{ fontSize: '0.7em' }}>
            HD
          </span>
        </div>

        <div>
          {movie.genre_ids.map((genre) => (
            <>
              <span key={genre}>{genreList[genre]}</span>
              <span style={{ padding: '10px', color: '#575757' }}>&#8226;</span>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
