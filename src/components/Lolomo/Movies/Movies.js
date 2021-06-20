import Movie from './Movie/Movie'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import SwiperCore, { Pagination, Navigation } from 'swiper/core'

import './Movies.scss'

SwiperCore.use([Pagination, Navigation])

// Receives all the movies
const Movies = () => {
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
      <Swiper slidesPerView={6} spaceBetween={0} slidesPerGroup={5} loop={true} loopFillGroupWithBlank={true} navigation={true} className='swiper'>
        <SwiperSlide>
          <Movie movie={movie} />
        </SwiperSlide>
        <SwiperSlide>
          <Movie movie={movie} />
        </SwiperSlide>
        <SwiperSlide>
          <Movie movie={movie} />
        </SwiperSlide>
        <SwiperSlide>
          <Movie movie={movie} />
        </SwiperSlide>
        <SwiperSlide>
          <Movie movie={movie} />
        </SwiperSlide>
        <SwiperSlide>
          <Movie movie={movie} />
        </SwiperSlide>
        <SwiperSlide>
          <Movie movie={movie} />
        </SwiperSlide>
        <SwiperSlide>
          <Movie movie={movie} />
        </SwiperSlide>
        <SwiperSlide>
          <Movie movie={movie} />
        </SwiperSlide>
        <SwiperSlide>
          <Movie movie={movie} />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Movies
