import { Link, useLocation } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";

import logo from '../assets/images/logo.png'

function NavBar({scrolled}) {

    const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className={`container d-flex justify-content-between align-items-center w-100`}>
        <div className="d-flex align-items-center">
          <Link to="/">
          <img src={logo} alt="Logo" id="logo" 
          className={`img-fluid me-5 transition-all duration-300 ${
                scrolled ? "shrink-logo" : "expand-logo"
              }`} />
          </Link>

          <ul className="navbar-nav flex-row gap-4 fw-bold">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link text-white transition-all ${
                  scrolled ? "shrink-text" : ""
                } ${location.pathname === "/" ? "active-tab" : ""}`}
              >
                <span>Lista</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/consoles"
                className={`nav-link text-white transition-all ${
                  scrolled ? "shrink-text" : ""
                } ${location.pathname === "/consoles" ? "active-tab" : ""}`}
              >
              <span>Consoles</span>
              </Link>
            </li>
          </ul>
        </div>

        <div>
            <ul className="navbar-nav flex-row gap-3">
      <li className="nav-item text-white">
        <Link
          to="#">
          <CiShoppingCart 
                  className={`cart-icon transition-all duration-300 ${
                    scrolled ? "shrink-icon" : ""
                  }`}
                />
        </Link>
      </li>
    </ul>

        </div>
      </div>
    </nav>
  );
}

export default NavBar;
