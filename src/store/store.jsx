'use client'
const { configureStore } = require("@reduxjs/toolkit");
import userReducer from './userSlice.js'
import movieReducer from './movieSlice.js'

const makeStore=()=>{
    return configureStore({
        reducer:{
            user: userReducer,
            movies:movieReducer,
        }
    });
}


export default makeStore;