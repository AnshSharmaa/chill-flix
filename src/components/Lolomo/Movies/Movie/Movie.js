import { genreList } from '../../../../constants/constants'

import { faPlay, faPlus, faThumbsUp, faThumbsDown, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Movie.scss'

const Movie = ({ movie }) => {
  const poster = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
  // adult: false,
  //   backdrop_path: '/irlfhYtHfhZuYpsq2LAoh308NFe.jpg',
  //   genre_ids: [18, 80],
  //   id: 278,
  //   original_language: 'en',
  //   original_title: 'The Shawshank Redemption',
  //   overview: 'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
  //   popularity: 48.852,
  //   poster_path: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
  //   release_date: '1994-09-23',
  //   title: 'The Shawshank Redemption',
  //   video: false,
  //   vote_average: 8.7,
  //   vote_count: 19088,
  // }
  return (
    <div className='movie'>
      <img src={poster} alt='poster' />

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
    </div>
  )
}

export default Movie
