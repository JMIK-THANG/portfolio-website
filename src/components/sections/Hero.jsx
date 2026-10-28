import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ALL_PROJECTS } from "@/data/projects";

const featured = ALL_PROJECTS.find(project => project.title === "1989 Book Summaries");

export default function Hero() {
  return (
    <section id="hero" className="personal-hero" aria-labelledby="hero-title">
      <div className="personal-hero-layout">
        <div className="personal-intro">
          <p className="personal-greeting">Hi, I’m Jmik Thang.</p>
          <h1 id="hero-title">Full-Stack<br />Developer</h1>
          <p className="personal-description">I design and develop web applications with a focus on intuitive interfaces and reliable functionality.</p>
          <div className="personal-actions">
            <a href="#all-projects" className="personal-primary">View projects <ArrowRight size={18} /></a>
            <a href="/jmik-thang.pdf" target="_blank" rel="noreferrer" className="personal-secondary">View resume <ArrowUpRight size={17} /></a>
          </div>
          <p className="personal-availability"><span aria-hidden="true" />Open to developer opportunities</p>
        </div>
        <article className="personal-feature">
          <a href={featured.liveDemo} target="_blank" rel="noreferrer" className="personal-feature-image" aria-label="View 1989 Book Summaries live demo">
            <img src={featured.image} alt="1989 Book Summaries homepage" fetchPriority="high" />
          </a>
          <p className="personal-feature-label">FEATURED PROJECT</p>
          <h2><a href={featured.liveDemo} target="_blank" rel="noreferrer">{featured.title}<ArrowUpRight size={22} /></a></h2>
          <p className="personal-feature-caption">Discover book insights, explore ideas, and join the discussion.</p>
        </article>
      </div>
    </section>
  );
}
