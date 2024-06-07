'use client'

import Loader from "@/components/Loader";
import { useAppSelector } from "@/lib/hooks";
import { ImbdOptions } from "@/lib/utils";
import { useEffect, useState } from "react";
import VideoDisplay from "./VideoDisplay";
import VideoDetails from "./VideoDetails";


const MainComponent = () => {
   const movie=useAppSelector((store)=>store.movies.trending);

   
   if(!movie) return <Loader/>;
    const mainMovie=movie[3];
    // console.log(mainMovie.id);
    


  return <div className="mx-auto w-screen max-w-[1515px] aspect-video">{mainMovie.id!==undefined && <div>
    <VideoDetails movie={mainMovie}/>
    <VideoDisplay movieId={mainMovie.id}/></div>}
  </div>;
};

export default MainComponent;
