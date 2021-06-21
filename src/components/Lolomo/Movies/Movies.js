import Movie from './Movie/Movie'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import SwiperCore, { Pagination, Navigation } from 'swiper/core'

import './Movies.scss'

SwiperCore.use([Pagination, Navigation])

// Receives all the movies and uses swipe.js for scrolling
const Movies = ({ movies }) => {
  return (
    <div className='section'>
      <Swiper slidesPerView={6} spaceBetween={20} slidesPerGroup={3} loop={true} loopFillGroupWithBlank={true} navigation={true} className='swiper'>
        {movies[0].map((movie) => (
          <SwiperSlide key={movie.id}>
            <Movie movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Movies
