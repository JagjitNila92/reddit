import { createSlice } from '@reduxjs/toolkit';

const redditSlice = createSlice({
    name: 'RedditPostList', 
    initialState: {
        home: [],
        new: [],
        hot: [],
        top: []
    }, 
    reducers: {
        getHomePost: (state, action) => {
            state.home = action.payload;
        },
        getHomePostNew: (state, action) => {
            state.new = action.payload;
        },
        getHomePostHot: (state, action) => {
            state.hot = action.payload;
        },
        getHomePostTop: (state, action) => {
            state.top = action.payload;
        },
    }
});

export const { getHomePostHot, getHomePostNew, getHomePostTop, getHomePost } = redditSlice.actions;

export default redditSlice.reducer;