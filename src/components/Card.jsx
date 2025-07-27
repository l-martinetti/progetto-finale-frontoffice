import { Link } from "react-router-dom"

function Card({videogame}) {

  return (

    <div className="d-flex h-100 flex-column flex-md-row align-itmes-start">
      <img src={videogame.cover_image} className="img-fluid rounded d-block mx-auto mb-sm-4" alt={videogame.title} style={{ height: "auto", maxWidth: "270px" }}/>
      <div className="d-flex flex-column ms-5">
        <h5 className="text-white">{videogame.title}</h5>
        <p className="text-secondary fs-sm">{videogame.release_date}</p>
        <p className="text-secondary fs-sm">{videogame.description}</p>
        <Link to={`/videogame/${videogame.id}`}>
        <button className="btn text-white pb-3">Dettagli</button>
        </Link>
      </div>
    </div>      
  )
}

export default Card