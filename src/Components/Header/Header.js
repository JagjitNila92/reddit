import React from 'react';
import './Header.css';
import reddit from './reddit.png';
import { useState } from 'react';



function Header(props){
    const [searchItem, setSearchItem] = useState('');

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            props.onSearch(searchItem);
            setSearchItem('');
            props.history.push(`/results/`);
        };
    }
    
    const handleTextChange = (e) => {
        setSearchItem(e.target.value);
    }

    return(
        <div className="header">
            <img src={reddit} alt="reddit-icon"/>
            <h1>Reddit <span>Micro</span></h1>
            <div className="searchbar">
                <label>
                    <input type="text" id="search" placeholder="Search..." onChange={handleTextChange} value={searchItem} onKeyPress={handleKeyPress} />
                </label>
            </div>
        </div>
        );
};

export default Header; 