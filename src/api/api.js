import axios from 'axios'

const API = axios.create({ baseURL: 'https://api.themoviedb.org/3' })

const key = process.env.REACT_APP_API_KEY

export const getPopular = () => API.get(`/movie/popular?api_key=${key}&language=en-US&page=1`)
export const getTopRated = () => API.get(`/movie/top_rated?api_key=${key}&language=en-US&page=1`)
export const getUpcoming = () => API.get(`/movie/upcoming?api_key=${key}&language=en-US&page=1`)
export const getNowPlaying = () => API.get(`/movie/now_playing?api_key=${key}&language=en-US&page=1`)
export const getTrendingWeekly = () => API.get(`trending/movie/week?api_key=${key}`)
