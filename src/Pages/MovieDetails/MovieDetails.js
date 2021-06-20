import React from 'react'

import { useLocation } from 'react-router-dom'

const MovieDetails = () => {
  const location = useLocation()
  const movie = location.state

  return (
    <div>
      <h1>Movie Deets</h1>
    </div>
  )
}

export default MovieDetails
