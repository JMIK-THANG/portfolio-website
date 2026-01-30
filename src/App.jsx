import React from "react";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// sections (one-page)
import Main from "./components/sections/Main";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home">
          <Main />
        </section>
        <section id="contact" className="scroll-mt-28">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}
