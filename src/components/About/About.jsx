import React from 'react'
import img from "../../assets/about.jpg"
import "./About.css"
const About = () => {
  return (
      <section className="about">
            <div className="about__content">
                  <h1>Abut Me</h1>
                  <p>Software Engineering</p>
                  <p>I’m Jmik Thang, a passionate Software Engineer who enjoys turning ideas into clean, functional applications. I specialize in building modern, responsive web experiences using JavaScript, React, and Node.js. I love solving problems, learning new technologies, and creating user-friendly designs that deliver real value.</p>
            </div>
            <img src={img} alt="my picture" className="about__img" />
      </section>
  )
}

export default About