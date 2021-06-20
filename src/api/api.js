import axios from 'axios'

const API = axios.create({ baseURL: 'https://api.themoviedb.org/3' })
const key = '?api_key=4d388821a0a9b0aded367d9dc2418d49'

export const getPopular = () => API.get(`/movie/popular${key}&language=en-US&page=1`)
export const getTopRated = () => API.get(`/movie/top_rated${key}&language=en-US&page=1`)
export const getUpcoming = () => API.get(`/movie/upcoming${key}&language=en-US&page=1`)
export const getNowPlaying = () => API.get(`/movie/now_playing${key}&language=en-US&page=1`)
export const getTrendingWeekly = () => API.get(`trending/movie/week${key}`)
export const getTrendingDay = () => API.get(`/trending/movie/day${key}`)

/*
https://api.themoviedb.org/3/movie/popular?api_key=4d388821a0a9b0aded367d9dc2418d49&language=en-US&page=1
https://api.themoviedb.org/3/movie/top_rated?api_key=4d388821a0a9b0aded367d9dc2418d49&language=en-US&page=1
https://api.themoviedb.org/3/movie/upcoming?api_key=4d388821a0a9b0aded367d9dc2418d49&language=en-US&page=1
https://api.themoviedb.org/3/movie/now_playing?api_key=4d388821a0a9b0aded367d9dc2418d49&language=en-US&page=1
https://api.themoviedb.org/3/trending/movie/week?api_key=4d388821a0a9b0aded367d9dc2418d49
https://api.themoviedb.org/3/trending/movie/day?api_key=4d388821a0a9b0aded367d9dc2418d49

https://api.themoviedb.org/3/movie/{movie_id}?api_key=4d388821a0a9b0aded367d9dc2418d49&language=en-US
*/
