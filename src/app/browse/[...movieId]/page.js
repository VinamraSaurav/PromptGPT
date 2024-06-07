import ProtectedContent from "@/app/ProtectedContent"
import MovieContentComponent from "@/components/MovieContentComponent/MovieContentComponent"
import NavComplete from "@/components/Nav/NavComplete"


const page = ({params}) => {

 
    return (<div>
        <ProtectedContent>
        <NavComplete/>
        <MovieContentComponent movieId={params.movieId}/>
        </ProtectedContent>
    
    </div>)
  
}

export default page