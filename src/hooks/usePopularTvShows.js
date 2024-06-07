'use client'
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { ImbdOptions } from "@/lib/utils";
import {  addTvShows } from "@/store/movieSlice";
import { useEffect } from "react";

const usePopularTvShows=()=>{
  const movies=useAppSelector((store)=>store.movies.tvShows);
    const dispatch=useAppDispatch();
    const fetchMovies = async () => {
      try {
        const response = await fetch(
            'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1',
          ImbdOptions
        );
        if (response.ok) {
          const data = await response.json();
          // console.log(data); 
          dispatch(addTvShows(data?.results));
        } else {
          console.error('Error fetching data:', response.status);
        }
      } catch (error) {
        console.error('An error occurred:', error.message);
      }
    };
  
    useEffect(() => {
      !movies && fetchMovies();
    }, []);
}

export default usePopularTvShows;