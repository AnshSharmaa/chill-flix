import $ from 'jquery'
import { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Movie from './Movie/Movie'
import { LeftArrow, RightArrow } from '../../../Utils/Scroll/Scroll'
import './Movies.scss'

// Receives all the movies
const Movies = () => {
  const divRef = useRef(null)
  const move = divRef.current
  const [margin, setMargin] = useState()
  console.log(parseInt($(move).css('margin-left')))
  function onLeftClick() {
    LeftArrow(divRef)
    setMargin(parseInt($(move).css('margin-left')))
  }

  function onRightClick() {
    RightArrow(divRef)
    setMargin(parseInt($(move).css('margin-left')))
  }

  const movie = {
    adult: false,
    backdrop_path: '/irlfhYtHfhZuYpsq2LAoh308NFe.jpg',
    genre_ids: [18, 80],
    id: 278,
    original_language: 'en',
    original_title: 'The Shawshank Redemption',
    overview: 'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
    popularity: 48.852,
    poster_path: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
    release_date: '1994-09-23',
    title: 'The Shawshank Redemption',
    video: false,
    vote_average: 8.7,
    vote_count: 19088,
  }

  return (
    <>
      <div className='slider'>
        {(margin || margin !== 0 || margin !== -0 || isNaN(margin)) && (
          <span className='left-arrow'>
            <FontAwesomeIcon icon={faChevronLeft} className='left-arrow-icon' onClick={onLeftClick} />
          </span>
        )}
        <span className='right-arrow'>
          <FontAwesomeIcon icon={faChevronRight} className='right-arrow-icon' onClick={onRightClick} />
        </span>
      </div>
      <div className='movies-list' ref={divRef}>
        <Movie movie={movie} />
        <Movie movie={movie} />
        <Movie movie={movie} />
        <Movie movie={movie} />
        <Movie movie={movie} />
        <Movie movie={movie} />
        <Movie movie={movie} />
        <Movie movie={movie} />
        <Movie movie={movie} />
        <Movie movie={movie} />
      </div>
    </>
  )
}

export default Movies
