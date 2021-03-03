import React from 'react';
import './Post.css';

import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa";



const posts = [ 
    {
    "title": "Which fictional world would you live in?",
    "upvotes": 39,
    "comments": 3,
    "subreddit": {
      "image_src": "./Images/subreddit.jpg",
      "name": "AskReddit"
    },
    "username": "Kiki9"
  },
  {
    "title": "Crossover!",
    "image_src": "./Images/post-1.jpg",
    "upvotes": 100,
    "comments": 12,
    "subreddit": {
      "image_src": "./Images/subreddit.jpg",
      "name": "Memes"
    },
    "username": "Mrminisky_"
  },
  {    "title": "Penguin!",
  "video_src": "./Video/penguins.mp4",
  "upvotes": 100,
  "comments": 12,
  "subreddit": {
    "image_src": "./Images/subreddit.jpg",
    "name": "Memes"
  },
  "username": "Mrminisky_"
},
  {
    "title": "Snacks",
    "description": "What was your best and biggest snack?",
    "upvotes": 3,
    "comments": 1,
    "subreddit": {
      "image_src": "./Images/subreddit.jpg",
      "name": "Snacks"
    },
    "username": "Triangul8"
  },
  {
    "title": "Penguin!",
    "video_src": "./Videos/penguins.mp4",
    "duration": 7,
    "upvotes": 100,
    "comments": 12,
    "subreddit": {
      "image_src": "./Images/subreddit.jpg",
      "name": "Memes"
    },
    "username": "Mrminisky_"
  },
  {
    "title": "Favorite vacation destination?",
    "image_src": "./Images/post-2.jpg",
    "upvotes": 4,
    "comments": 8,
    "subreddit": {
      "image_src": "./Images/subreddit.jpg",
      "name": "VacationDestinations"
    },
    "username": "Josh017"
  }
]

function Post() {
    console.log(posts)
    return (
        <div className="posts-wrapper">
            {posts.map((posts, index) => (
                <div className="post">
                    <div className="post-title">
                        {/*<img className="subreddit-image" src={posts.subreddit.image_src} />*/}
                        <img className="subreddit-image" src={require('./Images/subreddit.png').default} />
                        <span className="subreddit-name">r/{posts.subreddit.name}</span>
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
            ))}
        </div>
    );
}

export default Post;