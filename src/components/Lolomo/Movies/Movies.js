import Movie from './Movie/Movie'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import SwiperCore, { Pagination, Navigation } from 'swiper/core'

import './Movies.scss'

SwiperCore.use([Pagination, Navigation])

// Receives all the movies
const Movies = ({ movies }) => {
  return !movies.length ? (
    <h1>Loading... </h1>
  ) : (
    <>
      <Swiper slidesPerView={6} spaceBetween={0} slidesPerGroup={5} loop={true} loopFillGroupWithBlank={true} navigation={true} className='swiper'>
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Movie movie={movie} key={movie.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Movies
