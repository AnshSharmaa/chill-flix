import Movie from './Movie/Movie'

import './Movies.scss'
// Receives all the movies for foreach
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

  const poster = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
  return (
    <div className='movies-list'>
      <Movie movie={movie} poster={poster} />
      <Movie movie={movie} poster={poster} />
      <Movie movie={movie} poster={poster} />
      <Movie movie={movie} poster={poster} />
      <Movie movie={movie} poster={poster} />
    </div>
  )
}

export default Movies
