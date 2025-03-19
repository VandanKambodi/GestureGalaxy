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
    
        const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Login Successful\nEmail: ${user.email}`);
        };
    
        return (
        <div className="alog">
        <div className="log">
                <div className="slogo">
                    <Link to="/home">
                        <img src="./logo1.png" alt="logo" className='limg'/>
                    </Link>
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
