'use client'
const { createSlice } = require("@reduxjs/toolkit");

const movieSlice=createSlice({
    name:'movies',
    initialState:{
        nowPlaying: null,
        trending: null,
        popular: null,
        topRated: null,
        upcoming: null,
        tvShows: null,
        mainTrailer: null,
        mainConetent:null,
        relatedContent:null,
    },
    reducers:{
        addNowPlaying:(state,action)=>{
            state.nowPlaying= action.payload;
        },
        addTrending:(state,action)=>{
            state.trending= action.payload;
        },
        addPopular:(state,action)=>{
            state.popular= action.payload;
        },
        addTopRated:(state,action)=>{
            state.topRated= action.payload;
        },
        addUpcoming:(state,action)=>{
            state.upcoming= action.payload;
        },
        addTvShows:(state,action)=>{
            state.tvShows= action.payload;
        },
        addMainTrailer:(state,action)=>{
            state.mainTrailer= action.payload;
        },
        addMainContent:(state,action)=>{
            state.mainConetent= action.payload;
        },
        addRelatedContent:(state,action)=>{
            state.relatedContent= action.payload;
        },
        
    }
})

export const {addNowPlaying, addPopular,addTopRated,addTrending,addTvShows,addUpcoming, addMainTrailer,addMainContent,addRelatedContent}=movieSlice.actions;
export default movieSlice.reducer;