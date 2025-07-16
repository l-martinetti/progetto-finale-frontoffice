import { Link } from "react-router-dom"

function Card({videogame}) {
  return (
    
        <div className="card h-100">
            <div className="card-body">
                <h5 className="card-title">{videogame.title}</h5>
                <p className="card-text">{videogame.description}</p>
                <p className="text">{videogame.release_date}</p>
                <Link to={`/videogame/${videogame.id}`}>
                <button className="btn btn-primary">Dettagli</button>
                </Link>
            </div>
        </div>
    
  )
}

export default Card