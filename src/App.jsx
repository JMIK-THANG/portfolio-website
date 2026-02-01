import React from "react";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Main from "./components/sections/Main"

export default function App() {
  return (
    <>
      <Navbar />
      <main>
       <section><Main/></section>
      </main>
      <Footer />
    </>
  );
}
