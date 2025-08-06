import { useEffect, useState } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";
import Card from "../components/card";
import Hero from "../components/Hero";

const HomePage = () => {
    const {videogames, fetchVideogames, isLoading} = useGlobalContext();
    const [search, setSearch] = useState("");

    useEffect(() => fetchVideogames(), []);

    const filteredVideogames = videogames?.filter(videogame =>
        videogame.title.toLowerCase().includes(search.toLowerCase())
    );

    if (isLoading) {
    return (
      <div className="container mt-4 d-flex justify-content-center align-items-center" style={{minHeight: '400px'}}>
        <div className="text-center">
          <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Caricamento...</span>
          </div>
          <p className="text-white mt-3">Caricamento dettagli...</p>
        </div>
      </div>
    );
  }
     return (
            <>
            <Hero videogames={videogames}/>
         <div className="container homePage">
            <input
                type="text"
                className="form-control my-4 w-50"
                placeholder="Cerca un videogioco..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <h1 className="p-2 mb-sm-4 text-white fs-3">Latest Games</h1>

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
            </>
    );
}

export default HomePage