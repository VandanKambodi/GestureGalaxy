import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
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
            <div className="tuto"><Link to="#" id='l1'>Tutorials</Link></div>
            <div className="certi"><Link to="#" id='l1'>Certification</Link></div>
            <div className="book"><Link to="#" id='l1'x>Books</Link></div>
            <div className="search">
                <input id='searchBar' className="find" type="text" placeholder="Search.."/>
                <button className='butt'>Search</button>
            </div>
            <div className="about">
                <Link to="#" id='l1'>About</Link>
            </div>
            <div className="prime">
                <Link to="#" id='l1'>Premium</Link>
            </div>
            <div className="convert">
                <button id='en'>English</button>
                <button id='gu'>Gujarati</button>
            </div>
            <div className="signup">
                <Link to="#" id='sign'>Sign Up</Link>
                <Link to="#" id='log'>Log in</Link>
            </div>
        </div> 
        <div className="data">
            <Link to="#" id='d1'>BASIC</Link>
            <Link to="#" id='d1'>FOOD</Link>
            <Link to="#" id='d1'>WORDS</Link>
            <Link to="#" id='d1'>EMOTIONS</Link>    
            <Link to="#" id='d1'>HAND</Link>
            <Link to="#" id='d1'>FACE</Link>
            <Link to="#" id='d1'>BODY</Link>
        </div>      
    </div>
  )
}

export default Navbar