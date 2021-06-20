import Lolomo from '../../components/Lolomo/Lolomo'

import './MoviesPage.scss'

const MoviesPage = () => {
  return (
    <div className='home'>
      <Lolomo title={'Popular'} />
      <Lolomo title={'Top Rated'} />
      <Lolomo title={'Upcoming'} />
      <Lolomo title={'Now Playing'} />
      <Lolomo title={'Trending this week'} />
      <Lolomo title={'Trending today'} />
    </div>
  )
}

export default MoviesPage
