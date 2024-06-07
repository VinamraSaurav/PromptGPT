'use client'
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { ImbdOptions } from "@/lib/utils";
import { addNowPlaying, addTrending, addUpcoming } from "@/store/movieSlice";
import { useEffect } from "react";

const useTrending=()=>{
  const movies=useAppSelector((store)=>store.movies.trending);
    const dispatch=useAppDispatch();
    const fetchMovies = async () => {
      try {
        const response = await fetch(
            'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
          ImbdOptions
        );
        if (response.ok) {
          const data = await response.json();
          // console.log(data); 
          dispatch(addTrending(data?.results));
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

export default useTrending;