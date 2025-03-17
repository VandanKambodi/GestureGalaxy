import React from 'react'
import './TutoNav.css'
import { Link } from 'react-router-dom'
const TutoNav = () => {
  return (
    <div>
      <div className="Tuto-data">
            <Link to="/core" id='Td1'>CORE</Link>
            <Link to="/maths" id='Td1'>MATHS</Link>
            <Link to="/science" id='Td1'>SCIENCE</Link>
            <Link to="/articles" id='Td1'>ARTICLES</Link>
        </div> 
    </div>
  )
}

export default TutoNav
