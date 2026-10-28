import { useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import { ALL_PROJECTS } from "@/data/projects";
import ProjectCard from "../cards/ProjectCard";

const selectedTitles = ["1989 Book Summaries", "Store X", "Chinlung Today"];
const selected = selectedTitles.map(title => ALL_PROJECTS.find(project => project.title === title));
const more = ALL_PROJECTS.filter(project => !selectedTitles.includes(project.title));

export default function AllProjects() {
  const [expanded, setExpanded] = useState(false);
  return (
    <section id="all-projects" className="selected-section" aria-labelledby="selected-title">
      <div className="selected-shell">
        <div className="selected-heading"><h2 id="selected-title">Selected Projects</h2><p>A selection of recent work.</p></div>
        <div className="selected-grid">{selected.map(project => <ProjectCard key={project.title} {...project} />)}</div>
        <div id="more-projects" hidden={!expanded} className="selected-more">
          <h3>More projects</h3>
          <div className="selected-grid">{more.map(project => <ProjectCard key={project.title} {...project} />)}</div>
        </div>
        <button type="button" className="selected-toggle" aria-expanded={expanded} aria-controls="more-projects" onClick={() => setExpanded(value => !value)}>
          {expanded ? "Show fewer projects" : "View all projects"}
          {expanded ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
        </button>
      </div>
    </section>
  );
}
