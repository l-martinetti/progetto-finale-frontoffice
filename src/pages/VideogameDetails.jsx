import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";

function VideogameDetails() {

    const {id} = useParams();
    
    const {fetchVideogameDetails, videogame} = useGlobalContext();

    useEffect(()=>{
        fetchVideogameDetails(id)
    }, [id]);

  return (
    <div className="container">
        <div>VideogameDetails</div>
        <p>Titolo: {videogame?.data?.title}</p>
        <img src={videogame?.data?.cover_image} alt="" />
        {console.log(videogame)}
        <p>{videogame?.data?.description}</p>
        <p>
        {videogame?.data?.consoles?.map(console=>(
            <span key={console.id}>{console.name}</span>
        ))}
        </p>
    </div>
  )
}

export default VideogameDetails