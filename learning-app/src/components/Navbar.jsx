import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleTranslate from "./GoogleTranslate";
import "./Navbar.css";

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [showError, setShowError] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    // List of valid search paths
    const validPages = ["home", "tutorials", "certificate", "books", "about", "premium", 
                        "basic", "food", "words", "emotions", "hand", "body", "education", 
                        "core", "maths", "science", "news"];

    useEffect(() => {
        // Fetch user data from localStorage on mount
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleSearch = () => {
        const query = searchQuery.trim().toLowerCase();

        if (query === "") {
            setErrorMessage("Please enter a search term.");
            setShowError(true);
        } else if (validPages.includes(query)) {
            setErrorMessage("");
            setShowError(false);
            navigate(`/${query}`);
            setSearchQuery("");
        } else {
            setErrorMessage("No matching page found.");
            setShowError(true);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        navigate("/home");
        window.location.reload();
    };

    return (
        <div className="navi">
            <div className="nav">
                <div className="logo">
                    <Link to="/home">
                        <img src="./logo1.png" alt="logo" className="img" />
                    </Link>
                </div>
                <div className="tuto">
                    <Link to="/tutorials" id="l1">
                        <img src="./tutor.png" alt="tut" width="25" /> Tutorials
                    </Link>
                </div>
                <div className="certi">
                    <Link to="/certificate" id="l1">
                        <img src="./certificate-.png" alt="certi" width="25" /> Certification
                    </Link>
                </div>
                <div className="book">
                    <Link to="/books" id="l1">
                        <img src="./books.png" alt="books" width="25" /> Books
                    </Link>
                </div>

                <div className="search">
                    <input
                        id="searchBar"
                        className="find"
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            setShowError(false);
                        }}
                        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    />
                    <button className="butt" onClick={handleSearch}>
                        <img id="search-butt" src="search_butt.png" alt="" />
                    </button>

                    {showError && errorMessage && (
                        <div className="error-dropdown">
                            <p>{errorMessage}</p>
                        </div>
                    )}
                </div>

                <div className="about">
                    <Link to="/about" id="l1">
                        <img src="./about.png" alt="about" width="25" /> About Us
                    </Link>
                </div>
                <div className="prime">
                    <Link to="/premium" id="l1">
                        <img src="./premium.png" alt="premium" width="25" /> Premium
                    </Link>
                </div>
                <div className="convert">
                    <GoogleTranslate />
                </div>

                {/* User Authentication Section */}
                <div className="auth">
                    {user ? (
                        <>
                            <span className="username">👤 {user.name}</span>
                            <button className="logout-btn" onClick={handleLogout}>Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/signup" id="sign">Sign Up</Link>
                            <Link to="/login" id="log">Login</Link>
                        </>
                    )}
                </div>
            </div>

            <div className="data">
                <Link to="/basic" id="d1">BASIC</Link>
                <Link to="/food" id="d1">FOOD</Link>
                <Link to="/words" id="d1">WORDS</Link>
                <Link to="/emotions" id="d1">EMOTIONS</Link>
                <Link to="/hand" id="d1">HAND</Link>
                <Link to="/body" id="d1">BODY</Link>
                <Link to="/education" id="d1">EDUCATION</Link>
            </div>
        </div>
    );
};

export default Navbar;
