  
import { configureStore } from '@reduxjs/toolkit';
import RedditSlice from './RedditSlice';


export default configureStore({
  reducer: {
    RedditPostList: RedditSlice,
  },
});
  