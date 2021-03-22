import React, { useEffect } from 'react';
import './App.css';

import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';

import redditCall from './app/Reddit';
import { getHomePostHot, getHomePostNew, getHomePostTop, getHomePost } from './app/RedditSlice';

import { useDispatch, useSelector } from 'react-redux';
import { trackPromise } from 'react-promise-tracker';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    trackPromise(
      redditCall.fetchHomePost().then(results => {
        dispatch(getHomePost(results))
      }));
      trackPromise(
        redditCall.fetchHomePostNew().then(results => {
          dispatch(getHomePostNew(results))
        }));
      trackPromise(
        redditCall.fetchHomePostHot().then(results => {
          dispatch(getHomePostHot(results))
        }));
      trackPromise(
        redditCall.fetchHomePostTop().then(results => {
          dispatch(getHomePostTop(results))
        }));
      }, [dispatch]);

  const homePost = useSelector(state => state.redditPostList.home);
  const homePostNew = useSelector(state => state.redditPostList.new);
  const homePostHot = useSelector(state => state.redditPostList.hot);
  const homePostTop = useSelector(state => state.redditPostList.top);

  

    return(
      <div>
            <Header />
            <div className="bar-wrapper">
                <Sidebar />
                <redditPostList post={homePost} />
                <redditPostList post={homePostNew} />
                <redditPostList post={homePostHot} />
                <redditPostList post={homePostTop} />
            </div>
      </div>
    );
  }


export default App;