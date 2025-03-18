import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import GoogleTranslate from "./GoogleTranslate";
import './Home.jsx'
const Navbar = () => {
  return (
    <div className="navi">
        <div className="nav">
            <div className="logo">
                <Link to="/home">
                    <img src="./logo1.png" alt="logo" className='img'/>
                </Link>
            </div>
            <div className="tuto"><Link to="/tutorials" id='l1'><img src="./tutor.png" alt="tut"  width="25" />Tutorials</Link></div>
            <div className="certi"><Link to="/certification" id='l1'><img src="./certificate-.png" alt="certi"  width="25" />Certification</Link></div>
            <div className="book"><Link to="/books" id='l1'x>'<img src="./books.png" alt="books"  width="25" />Books</Link></div>
            <div className="search">
                <input id='searchBar' className="find" type="text" placeholder="Search.."/>
                <button className='butt'>Search</button>
            </div>
            <div className="about">
                <Link to="/about" id='l1'><img src="./about.png" alt="about"  width="25" />About Us</Link>
            </div>
            <div className="prime">
                <Link to="/premium" id='l1'><img src="./premium.png" alt="premium"  width="25" />Premium</Link>
            </div>
            <div className="convert">
                {/* <button id='en'>English</button>
                <button id='gu'>Gujarati</button> */}
                <GoogleTranslate />
            </div>
            <div className="signup">
                <Link to="/signup" id='sign'>Sign Up</Link>
                <Link to="/login" id='log'>Log in</Link>
            </div>
        </div> 
        <div className="data">
            <Link to="/basic" id='d1'>BASIC</Link>
            <Link to="/food" id='d1'>FOOD</Link>
            <Link to="/words" id='d1'>WORDS</Link>
            <Link to="/emotions" id='d1'>EMOTIONS</Link>    
            <Link to="/hand" id='d1'>HAND</Link>
            <Link to="/face" id='d1'>FACE</Link>
            <Link to="/body" id='d1'>BODY</Link>
        </div>      
    </div>
  )
}

export default Navbar