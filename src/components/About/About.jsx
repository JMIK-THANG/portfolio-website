import React from "react";
import img from "../../assets/about.jpg";
import "./About.css";
const About = () => {
  return (
    <section className="about">
      <div className="about__content">
        <div className="about__content-left">
          <h1 className="about__content-title">About Me</h1>
          <p>Software Engineering</p>
          <p>
            I’m Jmik Thang, a passionate Software Engineer who enjoys turning
            ideas into clean, functional applications. I specialize in building
            modern, responsive web experiences using JavaScript, React, and
            Node.js. I love solving problems, learning new technologies, and
            creating user-friendly designs that deliver real value.
          </p>
        </div>
        <div className="about__content-right">
          <img src={img} alt="my picture" className="about__img" />
        </div>
      </div>
      <hr className="section-divider"/>
               <h2 className="about__content-skills-title">Skills</h2>
      <div className="about__content-skills">
        <ul className="about__content-frontend">
       
          <li className="skill__list">HTML</li>
          <li className="skill__list">CSS</li>
          <li className="skill__list">Tailwind CSS</li>
          <li className="skill__list">JavaScript</li>
          <li className="skill__list">TypeScript</li>
          <li className="skill__list">React</li>
          <li className="skill__list">Responsive Desing</li>

          <li className="skill__list">JavaScript</li>
          <li className="skill__list">Tailwind CSS</li>
        </ul>
        <ul className="about__content-backend">
          <li className="skill__list">Node.js</li>
          <li className="skill__list">Express.js</li>
          <li className="skill__list">MongoDB</li>
          <li className="skill__list">Prisma</li>
          <li className="skill__list">REST APIs</li>
        </ul>
        <ul className="tools">
          <li className="skill__list">Git & GitHub</li>
          <li className="skill__list">Postman</li>
          <li className="skill__list">Vercel & Nerlify</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
