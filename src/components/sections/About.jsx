import { ArrowUpRight } from "lucide-react";
import portrait from "../../assets/about.jpg";

export default function AboutIntro() {
  return (
    <section id="about-me" className="personal-about" aria-labelledby="about-title">
      <div className="personal-about-shell">
        <div className="personal-about-layout">
          <div className="personal-about-copy">
            <p className="personal-about-label">A LITTLE ABOUT ME</p>
            <h2 id="about-title">The person behind<br />the projects.</h2>
            <p className="personal-about-lead">I’m Jmik Thang, a full-stack developer who enjoys turning ideas into working applications.</p>
            <p>I began learning software development while working full-time. That curiosity led me to TripleTen’s software engineering program and hands-on experience through personal projects and team collaborations.</p>
            <p>My Fox Finance externship gave me the opportunity to contribute in a team environment. Today, I focus on clear interfaces, maintainable code, and thoughtful problem-solving.</p>
            <a className="personal-about-contact" href="#contact">Let’s connect <ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>
          <figure className="personal-about-portrait">
            <img src={portrait} alt="Jmik Thang" loading="lazy" />
            <figcaption><span>Jmik Thang</span><span>Full-Stack Developer</span></figcaption>
          </figure>
        </div>
        <div className="personal-about-approach"><p>MY APPROACH</p><p>Understand the problem. Build with care. Keep learning.</p></div>
      </div>
    </section>
  );
}
