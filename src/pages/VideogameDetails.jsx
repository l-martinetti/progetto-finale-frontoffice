import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";

import axios  from "axios";

function VideogameDetails() {

    const {id} = useParams();
    const [videogame, setVideogame] = useState(null);
    const {API_videogames_endpoint} = useGlobalContext();

    const fetchVideogame = () => {
        axios.get(`${API_videogames_endpoint}/${id}`)
            .then(res => {
                setVideogame(res.data)
            })
    }

    useEffect(()=>{
        fetchVideogame()
    }, [id]);

  return (
    <div className="container">
        <div>VideogameDetails</div>
        <p>Titolo: {videogame?.data?.title}</p>
        <p>{videogame?.data?.description}</p>
    </div>
  )
}

export default VideogameDetails