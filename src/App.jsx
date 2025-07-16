import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GlobalProvider } from "./contexts/GlobalContext";

import HomePage from "./pages/HomePage"
import VideogameDetails from "./pages/VideogameDetails";

function App() {

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/videogame/:id" element={<VideogameDetails />}/>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
