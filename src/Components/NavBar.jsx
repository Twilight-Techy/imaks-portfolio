import { useState } from "react";
import { Link } from "react-router-dom";
import satlogo from "../assets/Images/SAT.png";
import "../styles/Navbar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav>
        <img src={satlogo} className="logo" height="80" />
        {!isOpen ? (
          <div className="hamburger nav-btn" onClick={() => setIsOpen(!isOpen)}>
            <span className="line first"></span>
            <span className="line second"></span>
            <span className="line third"></span>
          </div>
        ) : (
          <div className="hamburger nav-btn" onClick={() => setIsOpen(!isOpen)}>
            <span className="line cross-first"></span>
            <span className="line cross-second"></span>
          </div>
        )}
      </nav>
      {isOpen && (
        <div className="nav_container">
          <ul className="nav_list_container">
            <li>
              <Link to="/" onClick={() => setIsOpen(!isOpen)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsOpen(!isOpen)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={() => setIsOpen(!isOpen)}>
                Projects
              </Link>
            </li>

            <li>
              <Link to="/contact" onClick={() => setIsOpen(!isOpen)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;
