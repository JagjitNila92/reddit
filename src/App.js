import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';

import redditCall from './app/Reddit';
import redditPostList from '../src/Components/PostList/PostList';
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
        redditCall.fetchNewPost().then(results => {
          dispatch(getHomePostNew(results))
        }));
      trackPromise(
        redditCall.fetchHotPost().then(results => {
          dispatch(getHomePostHot(results))
        }));
      trackPromise(
        redditCall.fetchTopPost().then(results => {
          dispatch(getHomePostTop(results))
        }));
      }, [dispatch]);

  const homePost = useSelector(state => state.redditPostList);
  const homePostNew = useSelector(state => state.redditPostList.new);
  const homePostHot = useSelector(state => state.redditPostList.hot);
  const homePostTop = useSelector(state => state.redditPostList.top);

  

    return(
      <div>
        <BrowserRouter>
            <Header />
            <div className="bar-wrapper">
                <Sidebar />
                <Route exact path={"/"}>
                  <redditPostList post={homePost} />
                </Route>
                <Route exact path={"/new"}>
                  <redditPostList post={homePostNew} />
                </Route>
                <Route exact path={"/hot"}>
                  <redditPostList post={homePostHot} />
                </Route>
                <Route exact path={"/top"}>
                  <redditPostList post={homePostTop} />
                </Route>
            </div>
        </BrowserRouter>
      </div>
    );
  }


export default App;