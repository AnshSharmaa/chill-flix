import React, { Suspense, useState, useEffect } from 'react'
import * as api from '../../api/api'

import './MoviesPage.scss'
const Lolomo = React.lazy(() => import('../../components/Lolomo/Lolomo'))

const MoviesPage = () => {
  const [popular, setPopular] = useState({ popular: [] })
  const [topRated, setTopRated] = useState({ topRated: [] })
  const [upcoming, setUpcoming] = useState({ upcoming: [] })
  const [nowPlaying, setNowPlaying] = useState({ nowPlaying: [] })
  const [trending, setTrending] = useState({ trending: [] })
  const [error, setError] = useState(null)

  useEffect(() => {
    getData()
  }, [])

  if (error) return 'Error!'

  async function getData() {
    try {
      const popularResponse = await api.getPopular()
      const topRatedResponse = await api.getTopRated()
      const upcomingResponse = await api.getUpcoming()
      const nowPlayingResponse = await api.getNowPlaying()
      const trendingResponse = await api.getTrendingWeekly()

      if (popularResponse && popularResponse.data && popularResponse.data.results) {
        setPopular(popularResponse.data.results)
      }
      if (topRatedResponse && topRatedResponse.data && topRatedResponse.data.results) setTopRated(topRatedResponse.data.results)
      setUpcoming(upcomingResponse.data.results)
      setNowPlaying(nowPlayingResponse.data.results)
      setTrending(trendingResponse.data.results)
    } catch (error) {
      console.error(error)
      setError(true)
    }
  }

  return (
    <div className='home'>
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
