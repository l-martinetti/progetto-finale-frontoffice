import { useRef } from "react";
import { useScrollShrinkHeader } from "../hooks/useScrollShrinkHeader";
import NavBar from "./NavBar";

function Header() {

  const headerRef = useRef(null);
  const scrolled = useScrollShrinkHeader(800);
    
  return (
    <header 
    ref={headerRef}
    className={`fixed-top header-transition transition-all fs-6
    ${scrolled ? "header-scrolled opacity-95" : "px-5 py-2"}
    `}>
        <NavBar scrolled={scrolled}/>
    </header>
  )
}

export default Header