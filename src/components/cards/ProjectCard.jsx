import { ArrowUpRight, Github, Trophy } from "lucide-react";

export default function ProjectCard({ title, badge, description, image, tech = [], liveDemo, github, showAward = false }) {
  return (
    <article className="project-tile">
      <div className="project-tile-image"><img src={image} alt={title + " interface"} loading="lazy" width="640" height="360" /></div>
      <div className="project-tile-body">
        <p className="project-tile-badge">{showAward && <Trophy size={13} aria-hidden="true" />}{badge}</p>
        <h3>{title}</h3>
        <p className="project-tile-description">{description}</p>
        <ul className="project-tile-tech" aria-label="Technologies">{tech.slice(0, 3).map(t => <li key={t}>{t}</li>)}</ul>
        <div className="project-tile-links">
          {liveDemo && <a href={liveDemo} target="_blank" rel="noreferrer" aria-label={"Live demo of " + title}>Live demo <ArrowUpRight size={15} /></a>}
          {github && <a href={github} target="_blank" rel="noreferrer" aria-label={"GitHub source for " + title}>Source <Github size={15} /></a>}
        </div>
      </div>
    </article>
  );
}
