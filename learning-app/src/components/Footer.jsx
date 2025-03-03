import React from 'react'
import './Footer.css'
import './Navbar.jsx'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
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
                <li><a href="https://www.facebook.com/"><img src="./facebook.png" alt="Facebook"  width="45" /> Facebook</a></li> 
                <li><a href="https://www.instagram.com/"><img src="./instagram.png" alt="Instagram"  height="20" /> Instagram</a></li>  
                 <li><a href="https://www.youtube.com/"><img src="./youtube.png" alt="YouTube"   height="20" /> YouTube</a></li>  
              <li><a href="https://x.com/?lang=en"><img src="./twitter.png" alt="Twitter"  height="20" /> Twitter</a></li>  
              <li><a href="https://in.linkedin.com/"><img src="./linkdin.png" alt="LinkedIn"  height="20" /> LinkedIn</a></li> 
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
    
        <div class="footer-bottom">
            <p><h2>Copyright © 2025 Gesture Galaxy. All Rights Reserved.</h2></p>
            <p></p>
        </div>
        <a href="#" id="roocket"><img src="rocket.png" alt="" class="scrollTotop"  width={40}/></a>
        <div class="space">
        
        </div>
    </div>
  )
}

export default Footer
