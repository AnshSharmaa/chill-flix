import React, { useState, useEffect } from 'react'
import { getPopularMovies, getTopRatedMovies, getNowPlayingMovies, getTrendingMovies, getUpcomingMovies } from '../../actions/actions'
import MoviesRow from '../../components/MoviesRow/MoviesRow'

import { useDispatch, useSelector } from 'react-redux'

import './Lolomo.scss'

const Lolomo = () => {
  const [error, setError] = useState(null)

  const dispatch = useDispatch()
  const popular = useSelector((state) => state.movies.popular)
  const topRated = useSelector((state) => state.movies.topRated)
  const upcoming = useSelector((state) => state.movies.upcoming)
  const nowPlaying = useSelector((state) => state.movies.nowPlaying)
  const trending = useSelector((state) => state.movies.trending)

  console.log(useSelector((state) => state))
  useEffect(() => {
    getData()
  }, [])

  if (error) {
    return 'Error!'
  }

  async function getData() {
    try {
      dispatch(getPopularMovies())
      dispatch(getTopRatedMovies())
      dispatch(getUpcomingMovies())
      dispatch(getNowPlayingMovies())
      dispatch(getTrendingMovies())
    } catch (error) {
      console.error(error)
      setError(true)
    }
  }
  return (
    <div className='all-movies' style={{ marginBottom: '200px' }}>
      <MoviesRow title={'Popular'} movies={popular} />
      <MoviesRow title={'Top Rated'} movies={topRated} />
      <MoviesRow title={'Upcoming'} movies={upcoming} />
      <MoviesRow title={'Now Playing'} movies={nowPlaying} />
      <MoviesRow title={'Trending this week'} movies={trending} />
    </div>
  )
}

export default Lolomo
