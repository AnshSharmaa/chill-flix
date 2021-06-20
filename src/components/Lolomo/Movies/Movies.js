import { useState, useEffect } from 'react'

import Movie from './Movie/Movie'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import SwiperCore, { Pagination, Navigation } from 'swiper/core'
import * as api from '../../../api/api'
import './Movies.scss'

SwiperCore.use([Pagination, Navigation])

// Receives all the movies
const Movies = () => {
  const [movies, setMovies] = useState({ movies: [] })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getData()
  }, [])

  if (loading) return 'Loading...'
  if (error) return 'Error!'

  async function getData() {
    await api
      .getPopular()
      .then((response) => {
        setMovies(response.data)
        console.log(movies)
        //console.log(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data: ', error)
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return !movies.length ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <Swiper slidesPerView={6} spaceBetween={0} slidesPerGroup={5} loop={true} loopFillGroupWithBlank={true} navigation={true} className='swiper'>
        {movies.results.map((movie) => (
          <SwiperSlide>
            <Movie movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Movies
