import React, { useState } from 'react';
import './login.css'
import './Navbar.jsx'
import { Link } from 'react-router-dom'
    const Login = () => {
        const [user, setUser] = useState({
        email: '',
        password: ''
        });
    
        const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        };
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
              const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user),
              });
          
              const data = await response.json();
          
              if (response.ok) {
                localStorage.setItem("token", data.token); // Save JWT token
                alert("Login Successful");
                window.location.href = "/home"; // Redirect to home page
              } else {
                alert(data.message); // Show error message from backend
              }
            } catch (error) {
              console.error("Error:", error);
              alert("Login failed. Try again.");
            }
          };
          
    
        return (
        <div className="alog">
        <div className="log">
                <div className="slogo">
                    {/* <Link to="/login"> */}
                        <img src="./logo1.png" alt="logo" className='limg'/>
                    {/* </Link> */}
                </div>
        <div className="login-container">
            <div className="login-box">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
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
                <button type="submit" className="login-btn">Login</button>
            </form>
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            </div>
        </div>
        </div>
        </div>
        )
  }
export default Login
