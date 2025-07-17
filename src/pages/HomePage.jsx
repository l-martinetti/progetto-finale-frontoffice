import { useEffect } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";
import Card from "../components/card";

const HomePage = () => {
    const {videogames, fetchVideogames} = useGlobalContext();

    useEffect(() => fetchVideogames(), []);

    return (
        <div className="container">
            <h1 className="p-2 text-white fs-3">Latest News</h1>
            <div className="container">
                <div className="row row-cols-1">
                {
                    videogames?.map(videogame => (
                        <div key={videogame.id} className="col mb-5">
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