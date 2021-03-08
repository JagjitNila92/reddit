import React from 'react';
import './Header.css';
import reddit from './reddit.png';




class Header extends React.Component {
    render() {
        return(
            <div className="header">
                <img src={reddit} alt="reddit-icon"/>
                <h1>Reddit <span className="micro">Micro</span></h1>
                <div className="searchbar">
                    <label>
                        <input type="text" id="search" placeholder="Search..." />
                    </label>
                </div>
            </div>
            );
        }
    };

export default Header; 