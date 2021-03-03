import React from 'react';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Post from './Components/Post/Post'

function App(){
  return(
    <div>
          <Header />
          <div className="bar-wrapper">
            <div className="side-wrapper">
              <Sidebar />
            </div>
            <div className="main-wrapper">
              <Post />
            </div>
          </div>
    </div>
  );
}

export default App;