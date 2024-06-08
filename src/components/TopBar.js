import React from 'react';
import './TopBar.css'; 
import logo from '../assets/images/Dhiraj.png'
const TopBar = ({props}) => {
    return (
        <div className="top-bar">
            <div className="logo"> 
            <img src={logo} 
            className='logo'
            alt=''/> 
            </div>
            <nav className="nav-links">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>
        </div>
    );
}

export default TopBar;
