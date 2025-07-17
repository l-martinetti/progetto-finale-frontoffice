import { useParams, useNavigate } from "react-router-dom"
import { useEffect } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";

function VideogameDetails() {

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); 
  };


  const {id} = useParams();
  
  const {fetchVideogameDetails, videogame, isLoading} = useGlobalContext();

  useEffect(()=>{
      fetchVideogameDetails(id)
  }, [id]);

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
    <div className="container mt-4">
        <p className="text-white">{videogame?.data?.title}</p>
        <img src={videogame?.data?.cover_image} alt={videogame?.data?.title} style={{ height: "auto", width: "270px" }}/>
        <p className="text-secondary mt-3">{videogame?.data?.description}</p>
        <p className="text-secondary">{videogame?.data?.release_date}</p>
        <p className="text-secondary">Console: {videogame?.data?.consoles?.map(console => console.name).join(', ')}
        </p>
        <button 
      onClick={handleBack}
      className="btn btn-outline-secondary d-flex align-items-center gap-2"
    >
      Torna alla lista
    </button>
    </div>
  )
}

export default VideogameDetails