import React, { useState, useEffect } from 'react';
import './Post.css';

import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa";

function Post() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const url = 'https://www.reddit.com/r/popular.json';
        fetch(url).then(response => response.json())
        .then(response =>
            setData(response.data.children))           
    }, [])

  
    return (
        <div className="posts-wrapper">
            {
                data.map(data =>
                    <div className="post">
                        <div className="post-title">
                            <span className="subreddit-name">r/{data.data.subreddit}</span>
                            <span className="post-user">Posted by u/{data.data.username}</span>
                        </div>
                            <div className="post-body">
                                <span className="title">{data.data.title}</span>
                                <img className="post-image" src={data.data.thumbnail} onError={(e) => e.target.style.display = "none"} alt="media" />
                            </div>
                            <div className="post-footer">
                                <div className="comments footer-action">
                                    <FaComment className="comment icon"/>
                                    <span>{data.data.num_comments} </span>
                                </div>
                                <div className="upvotes footer-action">
                                    <FaHeart className="heart icon"/> 
                                    <span>{data.data.ups} </span>
                                </div>
                            </div>
                    </div>        
            )};
        </div>
    )};


export default Post;