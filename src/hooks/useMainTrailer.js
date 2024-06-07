'use client'
import { useAppDispatch } from "@/lib/hooks";
import { ImbdOptions } from "@/lib/utils";
import { addMainTrailer } from "@/store/movieSlice";
import { useEffect } from "react";


const useMainTrailer = (movieId) => {
    const dispatch=useAppDispatch();
    const fetchTrailerVideo=async()=>{
     try {
         const response = await fetch(
             'https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US',
           ImbdOptions
         );
         if (response.ok) {
           const data = await response.json();
           console.log(data); 
           const filterData=data.results.filter(video=>video.type==='Trailer');
           const trailer=filterData.length? filterData[0]:data.results[0];
        //    console.log(trailer);
           dispatch(addMainTrailer(trailer));
         //   dispatch(addTvShows(data?.results));
         } else {
           console.error('Error fetching data:', response.status);
         }
       } catch (error) {
         console.error('An error occurred:', error.message);
       }
    }
 
    useEffect(()=>{
     fetchTrailerVideo();
    },[])
}

export default useMainTrailer