import img from "../../assets/navbar-img.png"
import "./Navbar.css"
export default function Navbar() {
  return (
   <nav className="nav">
      <h1 className="nav__heading">Jmik Thang</h1>
      <li className="nav__links">
            <a className="nav__link" href="about">About</a>
            <a className="nav__link" href="project">Projects</a>
            <a className="nav__link" href="contact">Contact</a>
      </li>
      <img className="nav__img" src={img} alt="navbar github logo" />
   </nav>
  );
}
