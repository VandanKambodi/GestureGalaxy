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

      <div class="footer-container">

        <div class="footer-section">
          <h4 id="panel">Quick Links</h4>
          <ul>
            <li><a href="#">🧠Learn Sign Language</a></li>
            <li><a href="#">▶️Videos</a></li>
            <li><a href="/books">🕮 Dictionary</a></li>
            <li><a href="#">🌐Community</a></li>
            <li><a href="/about">🛈 About Us</a></li>
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
            <li><a href="https://www.facebook.com/"><img src="./facebook.png" alt="Facebook" width="45" /> Facebook</a></li>
            <li><a href="https://www.instagram.com/"><img src="./instagram.png" alt="Instagram" height="20" /> Instagram</a></li>
            <li><a href="https://www.youtube.com/"><img src="./youtube.png" alt="YouTube" height="20" /> YouTube</a></li>
            <li><a href="https://x.com/?lang=en"><img src="./twitter.png" alt="Twitter" height="20" /> Twitter</a></li>
            <li><a href="https://in.linkedin.com/"><img src="./linkdin.png" alt="LinkedIn" height="20" /> LinkedIn</a></li>
          </ul>
        </div>


        <div class="footer-section">
          <h4 id="panel">Resources</h4>
          <ul>
            <li><a href="/books">Download Materials</a></li>
            <li><a href="#">Accessibility Settings</a></li>
            <li><a href="/about">Support & FAQs</a></li>
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
      <a href="#" id="roocket"><img src="rocket.png" alt="" class="scrollTotop" width={40} /></a>
      <div class="space">

      </div>
    </div>

  )
}

export default about
