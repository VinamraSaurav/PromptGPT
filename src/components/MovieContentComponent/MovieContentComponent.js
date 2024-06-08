'use client'
import useMovieContent from '@/hooks/useMovieContent'
import MainMovieComponent from './MainMovieComponent'
import { useAppSelector } from '@/lib/hooks'
import RelatedContent from './RelatedContent'
import Loader from '../Loader'


const MovieContentComponent = ({movieId}) => {
  // console.log(movieId);
useMovieContent(movieId)
const mainConetent=useAppSelector((store)=>store.movies.mainConetent);
const relatedContent=useAppSelector((store)=>store.movies.relatedContent);

if(!mainConetent || !relatedContent) return <Loader/>;

  return (
    <div>
        <MainMovieComponent data={mainConetent}/>
        <RelatedContent type={movieId[0]} movieId={movieId[1]} data={relatedContent}/>
    </div>
  )
}

export default MovieContentComponent