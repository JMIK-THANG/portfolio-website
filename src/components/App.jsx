import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
// import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

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
