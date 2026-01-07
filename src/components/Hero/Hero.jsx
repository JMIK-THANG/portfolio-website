import React from "react";
import Navbar from "../Navbar/Navbar";
import img from "../About/About";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__card">
          <div className="hero__card-content">
            <h2 className="hero__title">JMIK THANG</h2>
            <h3 className="hero__position">Full-Stack Developer</h3>
            <p className="hero__para">
              Full-stack developer who loves clean design and clean code. I
              build fast, simple, and meaningful web applications.
            </p>
            <button className="hero__button">Learn More</button>
          </div>
        </div>
        <img src={img} alt="" />
      </div>
    </section>
  );
};

export default Hero;
