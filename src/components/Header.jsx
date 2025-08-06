import { useRef } from "react";
import { useScrollShrinkHeader } from "../hooks/useScrollShrinkHeader";
import NavBar from "./NavBar";

function Header() {

  const headerRef = useRef(null);
  const scrolled = useScrollShrinkHeader(600);
    
  return (
    <header 
    ref={headerRef}
    className={`fixed-top transition-all duration-300
    ${scrolled ? "px-3 py-1 opacity-97 container rounded-bottom-4" : "px-5 py-2 w-90 mx-auto rounded-bottom-4 bg-transparent"}
    `}>
        <NavBar scrolled={scrolled}/>
    </header>
  )
}

export default Header