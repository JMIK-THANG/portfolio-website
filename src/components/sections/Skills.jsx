import { createElement } from "react";
import { ArrowUpRight } from "lucide-react";
import { SKILL_GROUPS } from "@/data/skills";

export default function SkillsSection() {
  return <section id="skills" className="portfolio-section toolkit-section">
    <div className="portfolio-section-shell">
      <div className="portfolio-section-heading"><div><p className="section-kicker">THE TOOLKIT</p><h2>From interface<br />to <em>infrastructure.</em></h2></div><p>The tools I use to turn an idea into a working application. Grounded in projects, and always growing.</p></div>
      <div className="toolkit-grid">{SKILL_GROUPS.map(({title, icon: Icon, description, items, evidence, href},index) => <article className="toolkit-card" key={title}>
        <div className="toolkit-card-top">{createElement(Icon, { size: 23, strokeWidth: 1.5, "aria-hidden": true })}<span>0{index+1}</span></div>
        <h3>{title}</h3><p>{description}</p>
        <ul aria-label={title + " skills"}>{items.map(item=><li key={item}>{item}</li>)}</ul>
        <a href={href} {...(href.startsWith("https") ? {target:"_blank",rel:"noreferrer"} : {})}><span>IN PRACTICE<span>{evidence}</span></span><ArrowUpRight size={17} /></a>
      </article>)}</div>
    </div>
  </section>;
}
