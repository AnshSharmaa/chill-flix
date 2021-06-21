import axios from 'axios'

const API = axios.create({ baseURL: 'https://api.themoviedb.org/3' })
const key = '?api_key=4d388821a0a9b0aded367d9dc2418d49'

export const getPopular = () => API.get(`/movie/popular${key}&language=en-US&page=1`)
export const getTopRated = () => API.get(`/movie/top_rated${key}&language=en-US&page=1`)
export const getUpcoming = () => API.get(`/movie/upcoming${key}&language=en-US&page=1`)
export const getNowPlaying = () => API.get(`/movie/now_playing${key}&language=en-US&page=1`)
export const getTrendingWeekly = () => API.get(`trending/movie/week${key}`)


