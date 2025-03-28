import React, { useState } from 'react';
import './signup.css';
import { Link } from 'react-router-dom';
import './Navbar.jsx'
const Signup = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert("Signup Successful");
        window.location.href = "/login"; // Redirect to login page
      } else {
        alert(data.message); // Show error message from backend
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Signup failed. Try again.");
    }
  };

  return (
    <div className="all">
    <div className="sign">
        <div className="slogo">
            {/* <Link to="/signup"> */}
                <img src="./logo1.png" alt="logo" className='simg'/>
            {/* </Link> */}
        </div>
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={user.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Signup;
