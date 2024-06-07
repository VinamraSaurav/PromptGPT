'use client'

import { useAppDispatch } from "@/lib/hooks";
import { ImbdOptions } from "@/lib/utils";
import { addMainContent, addRelatedContent } from "@/store/movieSlice";
import { useEffect } from "react";


const useMovieContent = (movieId) => {
  
    const dispatch=useAppDispatch();
    const fetchTrailerVideo=async()=>{
        try {
            const response = await fetch(
                'https://api.themoviedb.org/3/movie/'+movieId[0]+'/videos?language=en-US',
              ImbdOptions
            );
            if (response.ok) {
              const data = await response.json();
            //   console.log(data.results); 
              dispatch(addRelatedContent(data?.results));
              if(movieId[1]===undefined){
                const mainConetent =data?.results[0];
                dispatch(addMainContent(mainConetent));
              }else{
                  const filterData=data?.results.filter(video=>video.id===movieId[1]);
                  const mainConetent=filterData.length?filterData[0]:data?.results[0];
                 dispatch(addMainContent(mainConetent));
              }
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

export default useMovieContent