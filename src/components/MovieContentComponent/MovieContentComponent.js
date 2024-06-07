'use client'
import useMovieContent from '@/hooks/useMovieContent'
import MainMovieComponent from './MainMovieComponent'
import { useAppSelector } from '@/lib/hooks'
import RelatedContent from './RelatedContent'
import Loader from '../Loader'


const MovieContentComponent = ({movieId}) => {
useMovieContent(movieId)
const mainConetent=useAppSelector((store)=>store.movies.mainConetent);
const relatedContent=useAppSelector((store)=>store.movies.relatedContent);

if(!mainConetent || !relatedContent) return <Loader/>;

  return (
    <div>
        <MainMovieComponent data={mainConetent}/>
        <RelatedContent movieId={movieId[0]} data={relatedContent}/>
    </div>
  )
}

export default MovieContentComponent