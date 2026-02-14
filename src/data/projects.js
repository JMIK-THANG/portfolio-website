// src/data/projects.js
import slowJamzImg from "../assets/slow-jamz.png";
import emergencyConnectImg from "../assets/emergency-connect.png";

// ✅ Update these filenames to match your real asset names
import winterVacationImg from "../assets/winter-vacation.jpg";
import aroundTheUsImg from "../assets/aroundtheus.jpg";

export const BOOTCAMP_PROJECTS = [
  {
    title: "Lover’s Slow Jamz",
    badge: "Winner • Bootcamp CodeJam",
    description:
      "A playlist-driven date planner with a restaurant carousel and Spotify integration—built to make planning a date night fun and effortless.",
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
      "A community-focused app for connecting people to emergency resources and safety information, designed with clarity and accessibility in mind.",
    image: emergencyConnectImg,
    tech: ["JavaScript", "HTML/CSS", "Responsive Design"],
    liveDemo: "https://johnwallacegerrard.github.io/Emergency_Connect/",
    github: "https://github.com/johnwallacegerrard/Emergency_Connect",
    tag: "CodeJam",
  },
];

export const ALL_PROJECTS = [
  {
    title: "Winter Vacation Spots",
    badge: "Front-End Project",
    description:
      "A responsive site that showcases winter travel destinations with clean layout and interactive UI.",
    image: winterVacationImg,
    tech: ["HTML", "CSS", "JavaScript", "Responsive UI"],
    liveDemo: "https://jmik-thang.github.io/winter-vacation-spots/",
    github: "https://github.com/JMIK-THANG/winter-vacation-spots",
    tag: "Project",
  },
  {
    title: "Around The US",
    badge: "React Project",
    description:
      "A React-based profile and photo gallery app with structured components and modern UI patterns.",
    image: aroundTheUsImg,
    tech: ["React", "JavaScript", "CSS", "Responsive Design"],
    liveDemo: "https://jmik-thang.github.io/se_project_aroundtheus/",
    github: "https://github.com/JMIK-THANG/se_project_aroundtheus",
    tag: "Project",
  },
];
