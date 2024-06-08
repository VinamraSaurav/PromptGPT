'use client'
import { useAppSelector } from '@/lib/hooks'
import React from 'react'
import MovieList from './MovieList';

const SecondaryComponent = () => {
    const movies=useAppSelector((sotre)=>sotre.movies);

  return (
    <div className='md:-mt-30 lg:-mt-80 xl:-mt-[470px]  -mt-32  relative z-10'>
        <MovieList data={movies.trending} title={'Trending'} type={'movie'}/>
        <MovieList data={movies.upcoming} title={'Upcoming'} type={'movie'}/>
        <MovieList data={movies.nowPlaying} title={'Now Playing'} type={'movie'}/>
        <MovieList data={movies.topRated} title={'Top Rated'} type={'movie'}/>
        <MovieList data={movies.popular} title={'Popular'} type={'movie'}/>
        {/* <div>TV Shows</div> */}
        {/* <MovieList data={movies.tvShows} title={'Top TV Shows'} type={'tv'}/> */}


    </div>
  )
}

export default SecondaryComponent