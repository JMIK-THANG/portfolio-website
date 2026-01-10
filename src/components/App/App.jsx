import { Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Hero />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
