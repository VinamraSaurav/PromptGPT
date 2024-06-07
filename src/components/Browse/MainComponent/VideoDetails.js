import React from "react";
import { FaPlay } from "react-icons/fa";
const VideoDetails = ({ movie }) => {
  const { id, title, overview } = movie;

  return (
    <div>
    <div className="relative">
      <div className="absolute z-[0] left-0 right-0 top-0 -mt-32 lg:-mt-40 xl:-mt-56 max-w-[1515px] w-screen aspect-video bg-gradient-to-r from-black mx-auto flex flex-col justify-start ">
        <div className="relative">
        <div className="w-[300px] absolute top-32 xl:top-52 left-9 xl:left-11 ">
          <div className="">
            <div className="text-xl sm:text-2xl md:text-4xl md:my-4 font-bold text-white font-serif items-center flex ">
              {title}
            </div>
            <div className=" text-md font-semibold   text-white/70 line-clamp-3 sm:block hidden h-[100px] text-ellipsis overflow-hidden">
              {overview}
            </div>
          </div>
          <div>
            <div className="bg-white/70 hover:bg-white py-1 px-2  md:py-2 md:px-5 rounded-sm w-fit text-black mt-2 md:mt-4 flex justify-center items-center gap-2 font-medium hover:cursor-pointer">
              <FaPlay className="text-sm" />
              <div>Play</div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default VideoDetails;
