import React from 'react';
import './TopBar.css';

const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="logo">My Blog</div>
            <nav className="nav-links">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>
        </div>
    );
}

export default TopBar;
