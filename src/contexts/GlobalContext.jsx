import { createContext, useContext, useState } from "react";
import axios from "axios";

const GlobalContext = createContext();

const GlobalProvider = ({children}) => {

    const API_videogames_endpoint = import.meta.env.VITE_ENDPOINT_API_VIDEOGAMES;
    const API_consoles_endpoint = import.meta.env.VITE_ENDPOINT_API_CONSOLES;

    const [videogames, setVideogames] = useState([]);
    const [videogame, setVideogame] = useState(null);

    const [consoles, setConsoles] = useState([]);
    const [console, setConsole] = useState(null);

    const [isLoading, setIsLoading] = useState(false);

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
        setIsLoading(true);
            axios.get(`${API_videogames_endpoint}/${id}`)
                .then(res => {
                    setVideogame(res.data)
                })
                .catch(error => {
                console.error('Error: ', error);
                })  
                .finally(()=>{
                    setIsLoading(false);
                })
        }
    // Funzione che riceve dati di tutte le consoles 
    const fetchConsoles = () => {
        axios.get(API_consoles_endpoint)
         .then(res => {
            setConsoles(res.data.data)
         })
         .catch(error => {
                console.error('Error: ', error);
            })        
    }

    // Funzione che riceve dati della singola console
    const fetchConsoleDetails = (id) => {
            axios.get(`${API_consoles_endpoint}/${id}`)
                .then(res => {
                    setConsole(res.data)
                })
                .catch(error => {
                console.error('Error: ', error);
            })  
        }

    const value = {
        videogames,
        videogame,
        fetchVideogames,
        fetchVideogameDetails,
        consoles,
        console,
        fetchConsoles,
        fetchConsoleDetails,
        isLoading
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