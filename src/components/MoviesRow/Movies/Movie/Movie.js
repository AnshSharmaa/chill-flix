import { Link } from 'react-router-dom'

import { genreList } from '../../../../constants/constants'

import { faPlay, faPlus, faThumbsUp, faThumbsDown, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Movie.scss'

const Movie = ({ movie }) => {
  const poster = `https://image.tmdb.org/t/p/w342/${movie.poster_path}`
  const backdrop = `https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`

  return (
    <Link className='movie' id='movie' to={{ pathname: `/movie/${movie.id}`, state: movie }}>
      <img src={poster} alt='Poster' className=' poster' />

      <div className='preview'>
        <img src={backdrop} alt='Poster' className=' postercopy' />

        <div className='movie-details'>
          <h2 className='movie-title' style={{ margin: '0 0 10x 0 ', fontSize: '1.5em' }}>
            {movie.original_title}
          </h2>

          <div className='movie-actions'>
            <FontAwesomeIcon icon={faPlay} className='play' />
            <FontAwesomeIcon icon={faPlus} />
            <FontAwesomeIcon icon={faThumbsUp} />
            <FontAwesomeIcon icon={faThumbsDown} />

            <FontAwesomeIcon icon={faChevronDown} style={{ float: 'right' }} />
          </div>

          <div className='movie-info'>
            <span style={{ color: '#46D269', fontWeight: 600, fontSize: '1.2em' }}>{movie.vote_average * 10}% Match</span>
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
    </Link>
  )
}

export default Movie
