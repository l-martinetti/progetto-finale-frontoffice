import { createContext, useContext, useState } from "react";
import axios from "axios";

const GlobalContext = createContext();

const GlobalProvider = ({children}) => {

    const API_videogames_endpoint = import.meta.env.VITE_ENDPOINT_API_VIDEOGAMES;

    const [videogames, setVideogames] = useState([]);
    const [videogame, setVideogame] = useState(null);

    // Funzione che riceve dati di tutti i videogame 
    const fetchVideogames = () => {
        axios.get(API_videogames_endpoint)
         .then(res => {
            setVideogames(res.data.data)
         })
         .catch(error => {
                console.error('Error: ', error);
            })        
    }

    // Funzione che riceve dati del singolo videogame
    const fetchVideogameDetails = (id) => {
            axios.get(`${API_videogames_endpoint}/${id}`)
                .then(res => {
                    setVideogame(res.data)
                })
                .catch(error => {
                console.error('Error: ', error);
            })  
        }

    const value = {
        videogames,
        videogame,
        fetchVideogames,
        fetchVideogameDetails
    };

    return(
        <GlobalContext.Provider value= {value}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(GlobalContext)
};

export { useGlobalContext, GlobalProvider }