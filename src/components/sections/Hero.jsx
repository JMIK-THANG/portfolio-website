import { useState } from "react";
import { ArrowDown, ArrowUpRight, Github } from "lucide-react";
import { ALL_PROJECTS } from "@/data/projects";

const showcase = ["Chinlung Today", "Store X", "1989 Book Summaries"].map(
  (title) => ALL_PROJECTS.find((project) => project.title === title),
);

export default function Hero() {
  const [active, setActive] = useState(0);
  const project = showcase[active];
  return (
    <section id="hero" className="studio-hero" aria-labelledby="hero-title">
      <div className="studio-grid" aria-hidden="true" />
      <div className="studio-shell">
        <div className="studio-topline"><span>JM / DESIGN & DEVELOPMENT</span><span className="availability"><i /> Open to opportunities</span></div>
        <div className="studio-layout">
          <div className="studio-intro">
            <p className="studio-eyebrow">HEY, I’M JMIK THANG</p>
            <h1 id="hero-title">Thoughtful<br />interfaces.<br /><span>Solid foundations.</span></h1>
            <p className="studio-description">I’m a full-stack developer turning everyday ideas into useful web applications—from the first interaction to the data behind it.</p>
            <div className="studio-actions">
              <a href="#all-projects" className="studio-primary">Explore my work <ArrowDown size={17} /></a>
              <a href="/jmik-thang.pdf" target="_blank" rel="noreferrer" className="studio-secondary">View resume <ArrowUpRight size={17} /></a>
            </div>
            <p className="studio-stack">React <span>/</span> Node.js <span>/</span> PostgreSQL</p>
          </div>
          <div className="studio-showcase">
            <div className="showcase-orbit" aria-hidden="true" />
            <div className="showcase-label"><span>ON THE WORKBENCH</span><span>0{active + 1} / 03</span></div>
            <article className="showcase-card" aria-label="Project preview">
              <div className="showcase-browser" aria-hidden="true"><span>● ● ●</span><span>{project.title}</span><ArrowUpRight size={13} /></div>
              <img className="showcase-image" src={project.image} alt={project.title + " homepage preview"} width="1265" height="712" fetchPriority="high" />
              <div className="showcase-info" aria-live="polite">
                <p className="showcase-status">{active === 0 ? "LATEST PROJECT · FRONTEND IN PROGRESS" : project.tag.toUpperCase()}</p>
                <h2>{project.title}</h2>
                <p>{active === 0 ? "A home for Chin stories, culture, and community. Frontend underway; backend planned." : active === 1 ? "An end-to-end shopping experience, from product discovery to the cart." : "A place to discover book insights, explore ideas, and join the discussion."}</p>
                <div className="showcase-links"><a href={project.github} target="_blank" rel="noreferrer">View source <Github size={15} /></a>{project.liveDemo && <a href={project.liveDemo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={15} /></a>}</div>
              </div>
            </article>
            <div className="showcase-switcher" aria-label="Choose a featured project">
              {showcase.map((item, index) => <button key={item.title} type="button" aria-pressed={active === index} onClick={() => setActive(index)}><span>0{index + 1}</span>{index === 2 ? "Book Summaries" : item.title}</button>)}
            </div>
          </div>
        </div>
        <div className="studio-bottomline"><span>Built with curiosity. Refined with care.</span><a href="#featured-projects">CodeJam winner & audience award recipient <ArrowUpRight size={14} /></a></div>
      </div>
    </section>
  );
}
