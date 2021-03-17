import React, { useState, useEffect } from 'react';
import './Post.css';

import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa";

function Post() {
    const [data, setData] = useState([])

    useEffect(() => {
        const url = 'https://www.reddit.com/r/popular.json';
        fetch(url).then(response => response.json())
        .then(response => setData(response))
    }, [])

    return (
        <div className="posts-wrapper">
            {
                data.map(data => 
                <div>
                    <p>{data.subreddit}</p>
                </div>
            )}
        </div>
    )};

export default Post;