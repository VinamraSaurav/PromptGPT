"use client";
import React from "react";
import RelatedMovieCard from "./RelatedMovieCard";
import { redirect, useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib/hooks";
import { addMainContent } from "@/store/movieSlice";
import Link from "next/link";

const RelatedContent = ({ movieId, data, type }) => {
  const diapatch = useAppDispatch();
  const router = useRouter();
  return (
    <div className="mb:mt-16 mt-8">
      <div className="md:text-3xl text-2xl font-bold font-popins mb-4 px-2">
        Related Videos
      </div>
      <div className="flex flex-wrap justify-center items-start max-w-[1500px] mx-auto m-2">
        {data.map((video) => (
          <Link href={"/browse/" +type+'/'+ movieId + "/" + video.id} key={video.id}>
            <RelatedMovieCard
              
              videoData={video}
              onClick={() => {
                diapatch(addMainContent(video));
              }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedContent;
