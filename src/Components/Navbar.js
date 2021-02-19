import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light ">
      <a
        href="index.html"
        className="navbar-brand "
        style={{ fontWeight: "bold" }}
      >
        THE DEBATING SOCIETY
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="navbar">
        <ul className="navbar-nav ">
          <li className="nav-item px-2 mx-2 myNavItem">
            <Link to="/" className="nav-link">
              HOME
            </Link>
          </li>
          {/* <li className="nav-item px-2 mx-2 myNavItem">
            <Link to="/login" className="nav-link">
              LOGIN
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
