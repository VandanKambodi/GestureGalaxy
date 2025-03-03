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
          We are dedicated to making sign language learning easy, accessible, and interactive for the deaf and mute community.
          Our platform provides comprehensive resources, empowering individuals to communicate confidently and fostering an inclusive society where everyone is heard and understood.
        </p>
      </div>

      <div className="mission">
        <div className="mission-part">
          <div className="mission-text">
            <h2>MISSION</h2>
            <p>
              Our mission is to bridge the communication gap for the deaf and mute community by providing a comprehensive, accessible, and interactive platform for learning sign language.
              We strive to empower individuals, families, and educators with high-quality resources that foster inclusion, understanding, and seamless communication.
            </p>
          </div>
          <div className="mission-image">
            <img src="./mission.png" alt="Mission" className='about-im' />
          </div>
        </div>
      </div>

      <div className="vision">
        <div className="vision-part">
          <div className="vision-image">
            <img src="./vision.png" alt="Vision" className='about-im' />
          </div>
          <div className="vision-text">
            <h2>VISION</h2>
            <p>
              We envision a world where sign language is universally recognized, respected, and embraced as an essential form of communication.
              Our goal is to create an inclusive society where the deaf and mute community can express themselves freely, breaking barriers and fostering meaningful connections.
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
              <li>Empowerment</li>
              <li>Simplicity</li>
              <li>Innovation</li>
              <li>Accessibility</li>
            </ol>
          </div>
          <div className="core-image">
            <img src="./core-values.png" alt="Core Values" className='about-im' />
          </div>
        </div>
      </div>

      <div className="wwo">
        <div className="vision-part">
          <div className="vision-image">
            <img src="./astro1.png" alt="wwo" className='about-im' />
          </div>
          <div className="vision-text">
            <h2>WHAT WE OFFER ?</h2>
            <p>
            💡 Comprehensive Sign Language <br />
            📚 Interactive Learning Materials <br />
            🎥 Video Tutorials & Demos <br />
            🤝 Community & Support <br />
            🖥️ Smooth Navigation Flow 
            </p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default about
