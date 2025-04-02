import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <h1>404 Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <p>Please check the URL or return to the home page.</p>
        <Link to={<home/>}>Go to Home</Link>
    </div>
  )
}

export default NotFound