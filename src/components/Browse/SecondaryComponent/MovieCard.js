import Image from 'next/image'
import React from 'react'

const MovieCard = ({data,key}) => {
    const{poster_path,backdrop_path,original_name}=data;
    const path=poster_path===null?backdrop_path:poster_path;
  return (
    <div className=' md:w-[150px] md:h-[240px] w-[120px] h-[210px] flex items-center m-1'>
        
        <img
            className='md:w-[140px] md:h-[220px] w-[115px] h-[190px] hover:cursor-pointer md:hover:scale-[1.12] transition-all duration-300 ease-in-out'
            src={'https://image.tmdb.org/t/p/w500'+path}
            alt={original_name}
            width={100}
            height={24}
        />
     
    </div>
  )
}

export default MovieCard