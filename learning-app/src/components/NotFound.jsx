import React from 'react'
import './NotFound.css'
import './Navbar.jsx'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <div className="not-f">
        <div className="not-found">
        <h1>404 Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <a href="#">Go Back</a>
        </div>
    </div>
  )
}

export default NotFound
