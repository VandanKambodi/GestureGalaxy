import React from 'react'
import './Home.css'
import './Navbar.jsx'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <section className="hero">
        <div className="main">

        </div>
        <div className="basic">
          <div className="part">
            <div className="left">
              <h1 className="head">BASIC</h1>
              <p className="para">Some basics for building language</p>
              <Link className="b1" to="/basic">Learn Basic</Link>
              <Link className="b2" to="/basic">Video Tutorial</Link>
              <Link className="b3" to="/basic">Reference</Link>
              <Link className="b4" to="/certificate">Give Quiz</Link>
            </div>
            <div className="right">
                <img src="./logo.png" alt="" />
            </div>
          </div>
        </div>
    </section>
  )
}

export default Home
