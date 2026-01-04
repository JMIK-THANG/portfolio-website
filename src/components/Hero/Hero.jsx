import React from "react";
import img from "../../assets/hero-background.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <img className="hero__img" src={img} alt="" />
      <div className="hero__content">
        <h2 className="hero__title">JMIK THANG</h2>
        <h3 className="hero__position">Full Stack Developer</h3>
      </div>
      
            <h3 className="hero__content-side-left">Front end Developer</h3>
            <h3 className="hero__content-side-right">Back end Developer</h3>
    
    </section>
  );
};

export default Hero;
