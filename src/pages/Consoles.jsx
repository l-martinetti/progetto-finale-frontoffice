import { useEffect } from "react";
import { useGlobalContext } from "../contexts/GlobalContext"

const Consoles = () => {

  const {fetchConsoles, consoles} = useGlobalContext();

useEffect(()=>{
      fetchConsoles()
  }, []);

  return (
    <div className="container">
      {consoles?.map( c => (
        <div key={c.id} className="d-flex my-5">
          <img src={c.image} alt="{c.name}" style={{ height: "auto", width: "270px" }}/>
          <div className="flex-column ms-4">
          <p className="text-secondary">{c.name}</p>
          <p className="text-secondary">{c.description}</p>
          </div>
        </div>
        
      ))}
    </div>
  )
}

export default Consoles