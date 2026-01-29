import { Code2, Server, Database, Wrench } from "lucide-react";

export const SKILL_GROUPS = [
  {
    title: "Front-End",
    icon: Code2,
    items: [
      "React",
      "JavaScript (ES6+)",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Responsive UI",
    ],
  },
  {
    title: "Back-End",
    icon: Server,
    items: [
      "Node.js",
      "Express",
      "REST APIs",
      "JWT Auth",
      "Middleware",
      "MVC",
    ],
  },
  {
    title: "Database",
    icon: Database,
    items: [
      "MongoDB",
      "Mongoose",
      "CRUD",
      "Data Modeling",
      "Postman",
    ],
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    items: [
      "Git/GitHub",
      "Vite",
      "Webpack (learning)",
      "Figma",
      "Deployment",
    ],
  },
];
