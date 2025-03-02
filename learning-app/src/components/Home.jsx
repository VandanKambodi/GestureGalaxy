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
        <div className="food">
          <div className="part">
            <div className="left">
              <h1 className="head">FOOD</h1>
              <p className="para">Some basics for building language</p>
              <Link className="f1" to="/food">Learn </Link>
              <Link className="f2" to="/food">Video Tutorial</Link>
              <Link className="f3" to="/food">Reference</Link>
              <Link className="f4" to="/certificate">Give Quiz</Link>
            </div>
            <div className="right">
                <img src="./logo.png" alt="" />
            </div>
          </div>
        </div>
        <div className="words">
          <div className="part">
            <div className="left">
              <h1 className="head">WORDS</h1>
              <p className="para">Some basics for building language</p>
              <Link className="w1" to="/words">Learn Basic</Link>
              <Link className="w2" to="/words">Video Tutorial</Link>
              <Link className="w3" to="/words">Reference</Link>
              <Link className="w4" to="/certificate">Give Quiz</Link>
            </div>
            <div className="right">
                <img src="./logo.png" alt="" />
            </div>
          </div>
        </div>
        <div className="emotions">
          <div className="part">
            <div className="left">
              <h1 className="head">EMOTIONS</h1>
              <p className="para">Some basics for building language</p>
              <Link className="e1" to="/emotions">Learn Basic</Link>
              <Link className="e2" to="/emotions">Video Tutorial</Link>
              <Link className="e3" to="/emotions">Reference</Link>
              <Link className="e4" to="/certificate">Give Quiz</Link>
            </div>
            <div className="right">
                <img src="./logo.png" alt="" />
            </div>
          </div>
        </div>
        <div className="hand">
          <div className="part">
            <div className="left">
              <h1 className="head">HAND</h1>
              <p className="para">Some basics for building language</p>
              <Link className="h1" to="/hand">Learn Basic</Link>
              <Link className="h2" to="/hand">Video Tutorial</Link>
              <Link className="h3" to="/hand">Reference</Link>
              <Link className="h4" to="/certificate">Give Quiz</Link>
            </div>
            <div className="right">
                <img src="./logo.png" alt="" />
            </div>
          </div>
        </div>
        <div className="face">
          <div className="part">
            <div className="left">
              <h1 className="head">FACE</h1>
              <p className="para">Some basics for building language</p>
              <Link className="fa1" to="/face">Learn Basic</Link>
              <Link className="fa2" to="/face">Video Tutorial</Link>
              <Link className="fa3" to="/face">Reference</Link>
              <Link className="fa4" to="/certificate">Give Quiz</Link>
            </div>
            <div className="right">
                <img src="./logo.png" alt="" />
            </div>
          </div>
        </div>
        <div className="body">
          <div className="part">
            <div className="left">
              <h1 className="head">BODY</h1>
              <p className="para">Some basics for building language</p>
              <Link className="bo1" to="/body">Learn Basic</Link>
              <Link className="bo2" to="/body">Video Tutorial</Link>
              <Link className="bo3" to="/body">Reference</Link>
              <Link className="bo4" to="/certificate">Give Quiz</Link>
            </div>
            <div className="right">
                <img src="./logo.png" alt="" />
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
        <div class="footer-container">
        
        <div class="footer-section">
            <h4 id="panel">Quick Links</h4>
            <ul>
                <li><a href="#">🧠Learn Sign Language</a></li>
                <li><a href="#">▶️Videos</a></li>
                <li><a href="#">🕮 Dictionary</a></li>
                <li><a href="#">🌐Community</a></li>
                <li><a href="#">🛈 About Us</a></li>
                <li><a href="#">📞Contact</a></li>
            </ul>
        </div>
        
       
        <div class="footer-section">
            <h4 id="panel">About Us</h4>
            <p>Empowering communication through sign language for the deaf and mute community. Learn, connect, and grow with us!</p>
        </div>
        
       
        <div class="footer-section">
            <h4 id="panel">Follow Us</h4>
            <ul>
                <li><a href="https://www.facebook.com/"><img src="./facebook.png" alt="Facebook"  width="45" /> Facebook</a></li> 
                <li><a href="https://www.instagram.com/"><img src="./instagram.png" alt="Facebook"  height="20" /> Instagram</a></li>  
                 <li><a href="https://www.youtube.com/"><img src="./youtube.png" alt="Facebook"   height="20" /> YouTube</a></li>  
              <li><a href="https://x.com/?lang=en"><img src="./twitter.png" alt="Facebook"  height="20" /> Twitter</a></li>  
              <li><a href="https://in.linkedin.com/"><img src="./linkdin.png" alt="Facebook"  height="20" /> LinkedIn</a></li> 
            </ul>
        </div>
        
     
        <div class="footer-section">
            <h4 id="panel">Resources</h4>
            <ul>
                <li><a href="#">Download Materials</a></li>
                <li><a href="#">Accessibility Settings</a></li>
                <li><a href="#">Support & FAQs</a></li>
            </ul>
        </div>
        
        <div class="footer-section">
            <h4 id="panel">Legal</h4>
            <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Use</a></li>
            </ul>
        </div>
        
        <h5 class="fpara"><center>GestureGalaxy is optimized for learning and training. Examples might be simplified to improve reading and learning.<br />
            Tutorials, references,s and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness
            of all content.<br /> While using GestureGalaxy, you agree to have read and accepted our terms of use, cookie and privacy policy.
            </center>
            </h5>
    </div>
    <div class="footer-bottom">
        <p><h2>Copyright © 2025 Gesture Galaxy. All Rights Reserved.</h2></p>
        <p></p>
    </div>
    <a href="#" id="roocket"><img src="rocket.png" alt="" class="scrollTotop"  width={40}/></a>
    <div class="space">
      
    </div>
    
    </section>
  )
}

export default Home
