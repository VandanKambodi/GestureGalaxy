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
            <Link to="/news" id='Td1'>NEWS</Link>
        </div> 
    </div>
  )
}

export default TutoNav
