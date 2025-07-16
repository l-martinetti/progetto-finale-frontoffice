import { useEffect } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";
import Card from "../components/card";

const HomePage = () => {
    const {videogames, fetchVideogames} = useGlobalContext();

    useEffect(() => fetchVideogames(), []);

    return (
        <div>
            <h1 className="p-2 text-center">Lista Videogames</h1>
            <div className="container">
                <div className="row row-cols-4">
                {
                    videogames?.map(videogame => (
                        <div key={videogame.id} className="col mb-3">
                            <Card videogame={videogame}/> 
                        </div>
                        
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default HomePage