import React from 'react';
import './Post.css';

import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa";

function Post(props) {
    return (
        <div className="posts-wrapper">
            <div className="post">
                <div className="post-title">
                    <span className="subreddit-name">r/{props.post.data.subreddit}</span>
                    <span className="post-user">Posted by u/{props.post.data.username}</span>
                </div>
                <div className="post-body">
                    <span className="title">{props.post.data.title}</span>
                    <img className="post-image" src={props.post.data.thumbnail} onError={(e) => e.target.style.display = "none"} alt="media" />
                </div>
                <div className="post-footer">
                    <div className="comments footer-action">
                        <FaComment className="comment icon"/>
                        <span>{props.post.data.num_comments} </span>
                    </div>
                    <div className="upvotes footer-action">
                        <FaHeart className="heart icon"/> 
                        <span>{props.post.data.ups} </span>
                    </div>
                </div>
            </div>        
        </div>
    )};


export default Post;