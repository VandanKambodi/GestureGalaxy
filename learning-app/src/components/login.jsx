import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
    const [user, setUser] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // For redirection

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("https://gesturegalaxy.onrender.com/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user),
            });

            const data = await response.json();
            if (response.ok) {
                localStorage.setItem("token", data.token); // Save JWT token
                localStorage.setItem("user", JSON.stringify(data.user)); // Save user info
                
                alert("Login Successful 🎉");
                navigate("/home"); // Redirect to home page
                window.location.reload(); // Refresh to update navbar
            } else {
                alert(data.message); // Show error message from backend
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Login failed. Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="alog">
            <div className="log">
                <div className="slogo">
                    <img src="./logo1.png" alt="logo" className='limg'/>
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
                            <button type="submit" className="login-btn" disabled={loading}>
                                {loading ? "Logging in..." : "Login"}
                            </button>
                        </form>
                        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
