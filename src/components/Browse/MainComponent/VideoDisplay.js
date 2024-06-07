"use client";
import useMainTrailer from "@/hooks/useMainTrailer";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { ImbdOptions } from "@/lib/utils";
import { addMainTrailer } from "@/store/movieSlice";
import React, { useEffect } from "react";

const VideoDisplay = ({ movieId }) => {
    useMainTrailer(movieId);
    const trailer=useAppSelector((store)=>store.movies.mainTrailer);
    if(!trailer) return;

  return (
    <div>
    <div className="relative" >
      <iframe
      className="absolute -mt-32 lg:-mt-40 xl:-mt-56 top-0 left-0 right-0 -z-10 mx-auto w-screen max-w-[1515px] aspect-video"
        
        
        src={"https://www.youtube.com/embed/"+trailer.key+"?&autoplay=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&mute=1&disablekb=1&end=94&start=2&playlist="+trailer.key}
        title="YouTube video player"
        // frameborder="0"
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // referrerpolicy="strict-origin-when-cross-origin"
        // allowfullscreen
      >
      {/* <div className="z-[-1] w-screen ascpect-video absolute top-0 bottom-0 left-0 right-0"> */}
      {/* </div> */}
      </iframe>
    </div>
    </div>
  );
};

export default VideoDisplay;
