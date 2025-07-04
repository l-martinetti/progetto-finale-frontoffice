import { useEffect } from "react";
import { useGlobalContext } from "../contexts/GlobalContext"

const HomePage = () => {
    const {videogames, fetchVideogames} = useGlobalContext();

    useEffect(() => fetchVideogames(), []);

    return (
        <div>
            <h1>Lista Videogames</h1>
            <div>
                {
                    videogames?.map(videogame => (
                        <div key={videogame.id} className="videogame-card">
                            <h3>{videogame.title}</h3>
                            <p>{videogame.description}</p>
                            <p>Release Date: {videogame.releaseDate}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default HomePage