import React from 'react';
import './Post.css';

import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa";

const getPopular = async () => {
  const response = await fetch ('https://www.reddit.com/r/popular.json');
  const data = await response.json();
  console.log(data);
  }
  const posts = getPopular();

  function Post() {
    return (
        <div className="posts-wrapper">
                <div className="post">
                    <div className="post-title">
                        {/*<img className="subreddit-image" src={posts.subreddit.image_src} />*/}
                        <img className="subreddit-image" src={require('./Images/subreddit.png').default} />
                        <span className="subreddit-name">r/{posts.data.subreddit.name}</span>
                        <span className="post-user">Posted by u/{posts.username}</span>
                    </div>
                    <div className="post-body">
                        <span className="title">{posts.title}</span>
                        {/*{posts.video_src && <video src={posts.video_src} controls/>}*/}
                        <img className="" src={require('./Images/post-1.jpg').default} />
                        {/*{posts.image_src && <img src={posts.image_src}/>}*/}
                        {posts.description && <span className="description">{posts.description}</span>}
                    </div>
                    <div className="post-footer">
                        <div className="comments footer-action">
                            <FaComment className="comment icon"/>
                            <span>{posts.comments} </span>
                        </div>
                        <div className="upvotes footer-action">
                            <FaHeart className="heart icon"/> 
                            <span>{posts.upvotes} </span>
                        </div>
                    </div>    
                </div>
        </div>
    )};
  

export default Post;