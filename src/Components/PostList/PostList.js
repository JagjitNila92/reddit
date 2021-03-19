import React from 'react';
import Post from './Post/Post';


function RedditPostList(props) {

    return (
        <div className="redditpostlist">
            {
                props.posts.map(data => (
                <Post post={data} key={data.data.id} />
                ))
            }
        </div>
    )
}

export default RedditPostList;