import chinlungImg from "../assets/chinlung-today.png";
// src/data/projects.js
import slowJamzImg from "../assets/slow-jamz.jpeg";
import emergencyConnectImg from "../assets/emergency-connect.png";
import newsExplorerImg from "../assets/news-explorer.jpeg";
import storeXImg from "../assets/store-x.png";


import aroundTheUsImg from "../assets/aroundtheus.jpg";
import wtwrImg from "../assets/wtwr.jpeg";
import bookSummaryImg from "../assets/book-summary.jpeg"

export const BOOTCAMP_PROJECTS = [
  {
    title: "Lover’s Slow Jamz",
    badge: "Winner • Bootcamp CodeJam",
    description:
      "A team-built date planner combining Spotify playlists with restaurant discovery.",
    image: slowJamzImg,
    tech: ["JavaScript", "HTML/CSS", "Spotify", "UI/UX"],
    liveDemo: "https://jmik-thang.github.io/Lover-s-Slow-Jamz/",
    github: "https://github.com/JMIK-THANG/Lover-s-Slow-Jamz",
    tag: "CodeJam",
  },
  {
    title: "Emergency Connect",
    badge: "Audience Award • Bootcamp CodeJam",
    description:
      "A team-built resource hub helping communities find emergency support and safety information.",
    image: emergencyConnectImg,
    tech: ["JavaScript", "HTML/CSS", "Responsive Design"],
    liveDemo: "https://johnwallacegerrard.github.io/Emergency_Connect/",
    github: "https://github.com/johnwallacegerrard/Emergency_Connect",
    tag: "CodeJam",
  },
];

export const ALL_PROJECTS = [
  {
    title: "Chinlung Today",
    badge: "Full-stack project · Frontend in progress",
    description: "Community news with article pages and category browsing. React frontend in progress; backend planned.",
    image: chinlungImg,
    tech: ["React", "Tailwind CSS", "React Router", "Vite"],
    liveDemo: "https://news-app-t5rb.onrender.com/",
    github: "https://github.com/JMIK-THANG/newsapp",
    tag: "In Progress",
  },
   {
    title: "1989 Book Summaries",
    badge: "Full-Stack Application",
    description:
      "Discover book insights, join discussions, and manage a personal account—with an admin dashboard for content.",
    image: bookSummaryImg,
    tech: [
      "React",
      "JavaScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT Auth",
      "REST API",
      "Responsive Design",
    ],
    liveDemo: "https://book-summary-app-qn7c.onrender.com/",
    github: "https://github.com/JMIK-THANG/book-summary-app",
    tag: "Full Stack",
  },


  {
    title: "Around The US",
    badge: "React Project",
    description:
      "A responsive React photo gallery with editable profiles and reusable interface components.",
    image: aroundTheUsImg,
    tech: ["React", "JavaScript", "CSS", "Responsive Design"],
    liveDemo: "https://jmik-thang.github.io/se_project_aroundtheus/",
    github: "https://github.com/JMIK-THANG/se_project_aroundtheus",
    tag: "Project",
  },
  {
    title: "WTWR (What to Wear?)",
    badge: "Full-Stack Application",
    description:
      "Weather-based clothing suggestions with authentication, personal wardrobes, and item likes.",
    image: wtwrImg,
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT Auth",
      "CSS",
      "Responsive Design",
    ],
    liveDemo: "https://se-project-react-tl1m.onrender.com/",
    github: "https://github.com/JMIK-THANG/se_project_react",
    tag: "Full Stack",
  },
  {
    title: "News Explorer",
    badge: "Full-Stack Application",
    description:
      "Search news by keyword and save articles to a personal collection with protected accounts.",
    image: newsExplorerImg,
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT Auth",
      "REST API",
      "CSS",
      "Responsive Design",
    ],
    liveDemo: "https://newsexplorer-react.onrender.com/",
    github: "https://github.com/JMIK-THANG/newsExplorer-react",
    tag: "Full Stack",
  },
  {
    title: "Store X",
    badge: "Full-Stack E-Commerce App",
    description:
      "An online store with product discovery, category filters, and a shopping cart, backed by PostgreSQL.",
    image: storeXImg,
    tech: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "REST API",
      "Responsive Design",
    ],
    liveDemo: "https://store-x-djme.onrender.com/",
    github: "https://github.com/JMIK-THANG/store-x",
    tag: "Full Stack",
  },
];
