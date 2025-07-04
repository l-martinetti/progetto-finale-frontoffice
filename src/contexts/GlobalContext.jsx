import { createContext, useContext, useState } from "react";
import axios from "axios";

const GlobalContext = createContext();

const GlobalProvider = ({children}) => {

    const API_videogames_endpoint = import.meta.env.VITE_ENDPOINT_API_VIDEOGAMES;

    const [videogames, setVideogames] = useState([]);

    const fetchVideogames = () => {
        axios.get(API_videogames_endpoint)
         .then(res => {
            setVideogames(res.data.data)
         })
         .catch(error => {
                console.error('Error: ', error);
            })        
    }

    const value = {
        videogames,
        fetchVideogames
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