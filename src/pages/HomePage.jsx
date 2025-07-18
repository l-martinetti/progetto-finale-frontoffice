import { useEffect, useState } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";
import Card from "../components/card";

const HomePage = () => {
    const {videogames, fetchVideogames} = useGlobalContext();
    const [search, setSearch] = useState("");

    useEffect(() => fetchVideogames(), []);

    const filteredVideogames = videogames?.filter(videogame =>
        videogame.title.toLowerCase().includes(search.toLowerCase())
    );

     return (
        <div className="container">
            <input
                type="text"
                className="form-control my-4 w-50"
                placeholder="Cerca un videogioco..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <h1 className="p-2 text-white fs-3">Latest Games</h1>

            <div className="row row-cols-1">
                {filteredVideogames?.length > 0 ? (
                    filteredVideogames.map(videogame => (
                        <div key={videogame.id} className="col mb-5">
                            <Card videogame={videogame} />
                        </div>
                    ))
                ) : (
                    <p className="text-white">Nessun risultato trovato.</p>
                )}
            </div>
        </div>
    );
}

export default HomePage