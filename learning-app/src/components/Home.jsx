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
              <p className="para">Some basics for building sign language</p>
              <Link className="b1" to="/basic">Learn Basic</Link>
              <Link className="b2" to="/basic">Video Tutorial</Link>
              <Link className="b3" to="/basic">Reference</Link>
              <Link className="b4" to="/certificate">Give Quiz</Link>
            </div>
            <div className="right">
                <img src="./Basic.png" alt="" className='himage'/>
            </div>
          </div>
        </div>
        <div className="food">
          <div className="part">
            <div className="left">
              <h1 className="head">FOOD</h1>
              <p className="para">Delicious moments, unforgettable flavors</p>
              <Link className="f1" to="/food">Let's Begin</Link>
              <Link className="f2" to="/food">Video Tutorial</Link>
              <Link className="f3" to="/food">Reference</Link>
              <Link className="f4" to="/certificate">Give Quiz</Link>
            </div>
            <div className="right">
                <img src="./Food.png" alt="" className='himage'/>
            </div>
          </div>
        </div>
        <div className="words">
          <div className="part">
            <div className="left">
              <h1 className="head">WORDS</h1>
              <p className="para">Every sign is a word waiting to be understood.</p>
              <Link className="w1" to="/words">Start Now</Link>
              <Link className="w2" to="/words">Video Tutorial</Link>
              <Link className="w3" to="/words">Reference</Link>
              <Link className="w4" to="/certificate">Give Quiz</Link>
            </div>
            <div className="right">
                <img src="./Words.png" alt="" className="himage"/>
            </div>
          </div>
        </div>
        <div className="emotions">
          <div className="part">
            <div className="left">
              <h1 className="head">EMOTIONS</h1>
              <p className="para">A language of love, joy, and understanding</p>
              <Link className="e1" to="/emotions">Start Exploring</Link>
              <Link className="e2" to="/emotions">Video Tutorial</Link>
              <Link className="e3" to="/emotions">Reference</Link>
              <Link className="e4" to="/certificate">Give Quiz</Link>
            </div>
            <div className="right">
                <img src="./Emotion.png" alt="" className="himage"/>
            </div>
          </div>
        </div>
        <div className="hand">
          <div className="part">
            <div className="left">
              <h1 className="head">HAND</h1>
              <p className="para">The art of communication is in your hands</p>
              <Link className="h1" to="/hand">Start learning</Link>
              <Link className="h2" to="/hand">Video Tutorial</Link>
              <Link className="h3" to="/hand">Reference</Link>
              <Link className="h4" to="/certificate">Give Quiz</Link>
            </div>
            <div className="right">
                <img src="./Hand.png" alt="" className="himage"/>
            </div>
          </div>
        </div>
        <div className="face">
          <div className="part">
            <div className="left">
              <h1 className="head">FACE</h1>
              <p className="para">When words are silent, the face speaks</p>
              <Link className="fa1" to="/face">Get Started</Link>
              <Link className="fa2" to="/face">Video Tutorial</Link>
              <Link className="fa3" to="/face">Reference</Link>
              <Link className="fa4" to="/certificate">Give Quiz</Link>
            </div>
            <div className="right">
                <img src="./Face.png" alt="" className="himage"/>
            </div>
          </div>
        </div>
        <div className="body">
          <div className="part">
            <div className="left">
              <h1 className="head">BODY</h1>
              <p className="para">Your body is a storyteller in motion</p>
              <Link className="bo1" to="/body">Explore</Link>
              <Link className="bo2" to="/body">Video Tutorial</Link>
              <Link className="bo3" to="/body">Reference</Link>
              <Link className="bo4" to="/certificate">Give Quiz</Link>
            </div>
            <div className="right">
                <img src="./Body.png" alt="" className="himage"/>
            </div>
          </div>
        </div>
        <div className="quiz">
          <div className="q1">
          <div className="up">
              <h1 className="qhead">Quizzes</h1>
              <p className="qpara">Test your skills!</p>
            </div>
            <div className="down">
                <div className="ex">
                  <Link to="/certification" className="qp">Quizzes</Link>
                </div>
            </div>
          </div>
        </div>
        <div className="hprime">
            <div className="pcontent">
            <div className="phead">
              <h1 className="phead">Become a Plus User</h1>
            </div>
            <div className="ppara">
            <p className="ppara">Get access to premium content</p>
            </div>
            <div className="plist">
              
                <li>~ Ad-free learning</li>
                <li>~ Unlimited access to all courses</li>
                <li>~ Downloadable resources</li>
                <li>~ Offline viewing</li>
              
            </div>
            <div className="pprime">
              <Link to="/premium" className="pprime">Get Premium</Link>
            </div>
            </div>
        </div>    
    </section>
  )
}

export default Home
