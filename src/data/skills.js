import { Code2, Server, Database, GitBranch } from "lucide-react";

export const SKILL_GROUPS = [
  { title: "Interface & interaction", icon: Code2, description: "Responsive layouts and reusable components that make applications feel clear and intuitive.", items: ["React", "JavaScript", "Tailwind CSS", "HTML & CSS", "React Router"], evidence: "Chinlung Today", href: "https://github.com/JMIK-THANG/newsapp" },
  { title: "APIs & application logic", icon: Server, description: "Connect interfaces to application data with structured APIs and authenticated routes.", items: ["Node.js", "Express", "REST APIs", "JWT authentication"], evidence: "News Explorer", href: "https://github.com/JMIK-THANG/newsExplorer-react" },
  { title: "Data & persistence", icon: Database, description: "Store, query, and manage the data behind accounts, content, and product catalogs.", items: ["PostgreSQL", "MongoDB", "Prisma", "CRUD operations"], evidence: "Store X", href: "https://github.com/JMIK-THANG/store-x" },
  { title: "Tools & collaboration", icon: GitBranch, description: "Version control, local development, and deployment across individual and team projects.", items: ["Git", "GitHub", "Vite", "Render"], evidence: "CodeJam team projects", href: "#featured-projects" },
];
