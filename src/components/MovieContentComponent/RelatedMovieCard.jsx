import React from 'react'

const RelatedMovieCard = ({videoData}) => {
    const {key,name,site,type,id}=videoData
  return (
    <div className='sm:w-[240px] sm:h-[190px] w-[175px] m-1 sm:m-2 my-3 hover:scale-105 cursor-pointer'>
        <div>
            <img src={'https://img.youtube.com/vi/'+key+'/maxresdefault.jpg'} className='sm:w-[240px] aspect-video'></img>
        </div>
        <div className='text-sm line-clamp-1 font-[400] font-popins'>{name}</div>
        <div className='flex justify-between items-center'>
            <div className='w-fit px-[4px] py-[2px] text-xs font-popins font-light text-white/90 bg-black/40 rounded-sm '>{type}</div>
            <div className='text-xs w-fit py-[2px] px-[4px] bg-red-500 text-white rounded-sm'>{site}</div>
        </div>

    </div>
  )
}

export default RelatedMovieCard