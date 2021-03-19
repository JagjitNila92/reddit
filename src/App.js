import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Post from './Components/Post/Post';
import redditCall from './app/Reddit';



function App() {

    return(
      <div>
            <Header />
            <div className="bar-wrapper">
                <Sidebar />
                <Post />
            </div>
      </div>
    );
  }


export default App;