import React from "react";
import MovieCard from "./MovieCard";
import Link from "next/link";

const MovieList = ({ data, title,type }) => {
  return (
    <div className="m-2 mb-4 p-2">
      <div className={(title==="Trending"?"lg:text-white":"")+" text-xl sm:text-2xl md:text-3xl font-bold font-popins"}>{title}</div>
      <div className="h-fit w-screen max-w-[1500px] mx-auto overflow-x-scroll m-1">
        <div className="w-fit flex justify-start items-center p-1">
          {data?.map((movie, index) => (
            <Link href={'/browse/'+type+'/'+movie.id} key={movie.id}><MovieCard data={movie} /></Link>
          ))}
      
      </div>
      </div>

    </div>
  );
};

export default MovieList;
