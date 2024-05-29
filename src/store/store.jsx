'use client'
const { configureStore } = require("@reduxjs/toolkit");
import userReducer from './userSlice.js'

const makeStore=()=>{
    return configureStore({
        reducer:{
            user: userReducer,
        }
    });
}


export default makeStore;