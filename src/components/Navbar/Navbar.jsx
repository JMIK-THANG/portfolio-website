import React from "react";
import { Link } from "react-router-dom";   // <-- ADD THIS
import img from "../../assets/navbar-img.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="profile">
        <h1 className="nav__heading">Jmik Thang</h1>

        <p className="available">
          <span className="dot"></span>
          Available
        </p>
      </div>

      {/* FIXED: Use ul + li */}
      <ul className="nav__links">
        <li>
          <Link className="nav__link" to="/about">About</Link>
        </li>
        <li>
          <Link className="nav__link" to="/projects">Projects</Link>
        </li>
        <li>
          <Link className="nav__link" to="/contact">Contact</Link>
        </li>
      </ul>

      <img className="nav__img" src={img} alt="profile" />
    </nav>
  );
};

export default Navbar;
