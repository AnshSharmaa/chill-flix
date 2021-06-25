import React, { Suspense, useState, useEffect } from 'react'
import { getPopularMovies, getTopRatedMovies, getNowPlayingMovies, getTrendingMovies, getUpcomingMovies } from '../../actions/actions'

import { useDispatch, useSelector } from 'react-redux'

import './MoviesPage.scss'
const Lolomo = React.lazy(() => import('../../components/Lolomo/Lolomo'))

const MoviesPage = () => {
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
  }, [dispatch])

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
      <Suspense fallback={<div>Loading...</div>}>
        <Lolomo title={'Popular'} movies={popular} />
        <Lolomo title={'Top Rated'} movies={topRated} />
        <Lolomo title={'Upcoming'} movies={upcoming} />
        <Lolomo title={'Now Playing'} movies={nowPlaying} />
        <Lolomo title={'Trending this week'} movies={trending} />
      </Suspense>
    </div>
  )
}

export default MoviesPage
