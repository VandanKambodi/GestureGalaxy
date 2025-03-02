import React from 'react'
import './about.css'
import './Navbar.jsx'
import { Link } from 'react-router-dom'
const about = () => {
    return (
        <div className="about-container">
          <div className="about-us">
            <h1>About us</h1>
            <p>
              Investguru.in is the first online platform that compares various
              investment options across different product categories to present you
              the most suitable solutions for your financial goals.
            </p>
          </div>
    
          <div className="mission">
            <div className="mission-part">
                <div className="mission-text">
                <h2>MISSION</h2>
                <p>
                    To assist and guide the investors in achieving their financial goals
                    with peace of mind.
                </p>
                </div>
                <div className="mission-image">
                <img src="./mission.png" alt="Mission" className='about-im'/>
                </div>
            </div>
          </div>
        
            <div className="vision">
                <div className="vision-part">
                <div className="vision-image">
                <img src="./vision.png" alt="Vision" className='about-im'/>
                </div>
                <div className="vision-text">
                <h2>VISION</h2>
                <p>
                    To be a leading personal financial advisor through a suitable mix of
                    technology and human approach.
                </p>
                </div>
                </div>
            </div>

            <div className="core-values">
            <div className="core-part">
                <div className="core-text">
                <h2>CORE VALUES</h2>
                <ol>
                    <li>Knowledge</li>
                    <li>Integrity</li>
                    <li>Simplicity</li>
                    <li>Speed</li>
                    <li>Purpose</li>
                </ol>
                </div>
                <div className="core-image">
                <img src="./core-values.png" alt="Core Values" className='about-im'/>
                </div>
                </div>
            </div>
        </div>   
      )
}

export default about
