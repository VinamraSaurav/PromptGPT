'use client'
import React from 'react'
import MainComponent from './MainComponent/MainComponent'
import SecondaryComponent from './SecondaryComponent/SecondaryComponent'
import useNowPlaying from '@/hooks/useNowPlaying'
import usePopular from '@/hooks/usePopular'
import useTrending from '@/hooks/useTrending'
import useTopRated from '@/hooks/useTopRated'
import useUpcoming from '@/hooks/useUpcoming'
import usePopularTvShows from '@/hooks/usePopularTvShows'
import { useAppSelector } from '@/lib/hooks'

const BrowseComponent = () => {
    useNowPlaying();
    usePopular();
    useTrending();
    useTopRated();
    useUpcoming();
    usePopularTvShows();

    const movies=useAppSelector((sotre)=>sotre.movies.nowPlaying);
  return (
    <div>
       { movies &&
       <div>
        <MainComponent/>
        <SecondaryComponent/>
        </div>
       }
    </div>
  )
}

export default BrowseComponent