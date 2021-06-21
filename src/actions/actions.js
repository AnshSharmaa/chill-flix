import { FETCH_POPULAR, FETCH_NowPlaying, FETCH_TopRated, FETCH_Trending, FETCH_Upcoming } from '../constants/constants'
import * as api from '../api/api'

export const getPopularMovies = () => async (dispatch) => {
  try {
    const { data } = await api.getPopular()
    dispatch({ type: FETCH_POPULAR, payload: data.results })
  } catch (error) {
    console.error(error)
  }
}
export const getTopRatedMovies = () => async (dispatch) => {
  try {
    const { data } = await api.getTopRated()

    dispatch({ type: FETCH_TopRated, payload: data.results })
  } catch (error) {
    console.error(error)
  }
}
export const getUpcomingMovies = () => async (dispatch) => {
  try {
    const { data } = await api.getUpcoming()

    dispatch({ type: FETCH_Upcoming, payload: data.results })
  } catch (error) {
    console.error(error)
  }
}
export const getNowPlayingMovies = () => async (dispatch) => {
  try {
    const { data } = await api.getNowPlaying()

    dispatch({ type: FETCH_NowPlaying, payload: data.results })
  } catch (error) {
    console.error(error)
  }
}
export const getTrendingMovies = () => async (dispatch) => {
  try {
    const { data } = await api.getTrendingWeekly()

    dispatch({ type: FETCH_Trending, payload: data.results })
  } catch (error) {
    console.error(error)
  }
}
