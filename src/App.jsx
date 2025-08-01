import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GlobalProvider } from "./contexts/GlobalContext";

import HomePage from "./pages/HomePage"
import VideogameDetails from "./pages/VideogameDetails";
import DefaultLayout from "./layouts/DefaultLayout";
import Consoles from "./pages/Consoles";

function App() {

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes >
          <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />}/>
          <Route path="/consoles" element={<Consoles />}/>
          </Route>
          <Route path="/videogame/:id" element={<VideogameDetails />}/>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
