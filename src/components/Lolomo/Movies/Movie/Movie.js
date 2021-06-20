import { useRef } from 'react'
import { Link } from 'react-router-dom'

import { genreList } from '../../../../constants/constants'

import { faPlay, faPlus, faThumbsUp, faThumbsDown, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Movie.scss'

const Movie = ({ movie }) => {
  const poster = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
  const movieRef = useRef()
  return (
    <Link className='movie' id='movie' to={{ pathname: `/movie/${movie.id}`, state: movie }} ref={movieRef}>
      <img src={poster} alt='poster' className=' poster' />

      <div className='movie-details '>
        <h3>{movie.original_title}</h3>

        <div className='movie-actions'>
          <FontAwesomeIcon icon={faPlay} className='play' />
          <FontAwesomeIcon icon={faPlus} />
          <FontAwesomeIcon icon={faThumbsUp} />
          <FontAwesomeIcon icon={faThumbsDown} />
          <FontAwesomeIcon icon={faChevronDown} />
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
    </Link>
  )
}

export default Movie
