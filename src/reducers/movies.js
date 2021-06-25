import { FETCH_POPULAR, FETCH_NowPlaying, FETCH_TopRated, FETCH_Trending, FETCH_Upcoming } from '../constants/constants'

const movies = (state = [], action) => {
  switch (action.type) {
    case FETCH_POPULAR:
      return { ...state, popular: [...action.payload] }
    case FETCH_TopRated:
      return { ...state, topRated: [...action.payload] }
    case FETCH_Upcoming:
      return { ...state, upcoming: [...action.payload] }
    case FETCH_NowPlaying:
      return { ...state, nowPlaying: [...action.payload] }
    case FETCH_Trending:
      return { ...state, trending: [...action.payload] }

    default:
      return state
  }
}

export default movies
