import React from 'react';
import './Header.css';
import reddit from './reddit.png';

function Header(){
    
    return(
        <div className="logo">
            <img src={reddit} alt="reddit-icon"/>
            <h1>React Client</h1>
        </div>
        );
};

export default Header; 