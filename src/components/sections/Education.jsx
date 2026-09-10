import tripletenImg from "../../assets/tripleten-certificate.jpg";
import externshipImg from "../../assets/tripleten-externship.jpg";
import scWorkReadyImg from "../../assets/sc-work-ready.jpg";

const credentials = [
  { date:"Jan 2026", title:"Full-Stack Engineering Externship", organization:"TripleTen · Fox Finance", description:"Built full-stack applications in a real-world team environment using React, Express, Prisma, and PostgreSQL.", image:externshipImg },
  { date:"Sep 2025", title:"Software Engineering Certificate", organization:"TripleTen", description:"Intensive full-stack training through practical projects, code reviews, and collaborative development.", image:tripletenImg },
  { date:"Sep 2025", title:"Workplace Readiness Certificate", organization:"South Carolina Work Credential", description:"Foundational workplace readiness and professional skills.", image:scWorkReadyImg },
];

export default function Education() {
  return <section id="education" className="portfolio-section education-section"><div className="portfolio-section-shell education-layout">
    <div className="education-intro"><p className="section-kicker">EDUCATION & EXPERIENCE</p><h2>Learning by<br /><em>building.</em></h2><p>From self-directed learning to structured training and hands-on team experience.</p></div>
    <ol className="credential-timeline">{credentials.map(c=><li key={c.title}><span className="credential-dot" aria-hidden="true" /><time>{c.date}</time><h3>{c.title}</h3><p className="credential-organization">{c.organization}</p><p className="credential-description">{c.description}</p><details><summary>View certificate <span aria-hidden="true">+</span></summary><a href={c.image} target="_blank" rel="noreferrer" aria-label={"Open " + c.title + " certificate in full size"}><img src={c.image} alt={c.title + " — " + c.organization} loading="lazy" /></a></details></li>)}</ol>
  </div></section>;
}
