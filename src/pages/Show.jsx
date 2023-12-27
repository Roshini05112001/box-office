import { useParams , Link} from "react-router-dom";
import { getShowById } from "../api/tvmaze";
import { useQuery } from "@tanstack/react-query";
import ShowMainData from "../components/shows/ShowMainData";
import Details from "../components/shows/Details";
import Seasons from "../components/shows/Seasons";
import Cast from "../components/shows/Cast";


const Show = () => {

    const {showId} = useParams();
    const {data : showData ,error: showError} = useQuery({
        queryKey: ['show' , showId],
        queryFn : ( ) => getShowById(showId),
        refetchOnWindowFocus : false,
    })


    

    if(showError){
       return <div>we have an error : {showError.message}</div>
    }

    if(showData){
        return <div>

            <Link to="/">Go back to home</Link>

            
            <ShowMainData 
             image={showData.image}
             name={showData.name} 
             rating={showData.rating} 
             summary={showData.summary} 
             genres={showData.genres}
             />

            <div>
                <h2>Details</h2>
                <Details
                 status = {showData.status}
                 premiered = {showData.premiered}
                 network = {showData.network}
                />
            </div>

            <div>
                <h1>Seasons</h1>
                <Seasons seasons={showData._embedded.seasons}/>
            </div>

            <div>
                <h1>Cast</h1>
                <Cast cast={showData._embedded.cast}/>
            </div>
        </div>
    }

    return <div>Data is loading{showId}</div>
}

export default Show;