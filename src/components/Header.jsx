import React from 'react';
import "../assets/style.css";
import stars from "../assets/images/sparkle-star.svg"
import { Link } from 'react-router-dom';


function Header() {
    return (
        <header className="header">
            <Link to="/" className="container">
                <span className="star">
                    <img src={stars} alt="notcontent" width="40" height="40" />
                    <span className="star-text">EWF</span>
                </span>
            </Link>
        </header>
    );
}

export default Header;
