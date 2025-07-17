import { Link } from "react-router-dom"

function Card({videogame}) {

  return (

    <div className="d-flex h-100">
      <img src={videogame.cover_image} className="img-fluid rounded" alt={videogame.title} style={{ height: "auto", width: "270px" }}/>
      <div className="d-flex flex-column ms-5">
        <h5 className="text-white">{videogame.title}</h5>
        <p className="text-secondary">{videogame.release_date}</p>
        <p className="text-secondary">{videogame.description}</p>
        <Link to={`/videogame/${videogame.id}`}>
        <button className="btn text-white pb-3">Dettagli</button>
        </Link>
      </div>
    </div>      
  )
}

export default Card