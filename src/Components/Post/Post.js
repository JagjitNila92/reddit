import React from 'react';
import './Post.css';
import posts from '../../data/PostModel';

function Post() {
    return (
        <div className="posts-wrapper">
            {posts.map((post, index) =>(
            <div className="post">title</div>
            ))}
        </div>
    )
}

export default Post;