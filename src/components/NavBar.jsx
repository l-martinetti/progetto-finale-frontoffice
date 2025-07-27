import { Link, useLocation } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";

import logo from '../assets/images/logo.png'

function NavBar() {

    const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid d-flex justify-content-between align-items-center w-100">
        <div className="d-flex align-items-center">
          <Link to="/">
          <img src={logo} alt="Logo" className="img-fluid me-5" style={{ width: "3rem" }} />
          </Link>

          <ul className="navbar-nav flex-row gap-4 fw-bold">
            <li className="nav-item">
              <Link to="/" className={`nav-link text-white ${location.pathname === "/" ? "active-tab" : ""}`}><span>Lista</span></Link>
            </li>

            <li className="nav-item">
              <Link to="/consoles" className={`nav-link text-white ${location.pathname === "/consoles" ? "active-tab" : ""}`}><span>Consoles</span></Link>
            </li>
          </ul>
        </div>

        <div>
            <ul className="navbar-nav flex-row gap-3">
      <li className="nav-item text-white">
        <Link
          to="#">
          <CiShoppingCart className="cart-icon"/>
        </Link>
      </li>
    </ul>

        </div>
      </div>
    </nav>
  );
}

export default NavBar;
