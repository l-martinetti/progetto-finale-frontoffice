import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GlobalProvider } from "./contexts/GlobalContext";

import HomePage from "./pages/HomePage"

function App() {

  return (
    <>
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomePage}/>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
    </>
  )
}

export default App
