import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiReactrouter,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiFirebase,
  SiNodedotjs,
  SiPython,
  SiGit,
  SiGithub,
  SiVite,
  SiPostman,
  SiVercel,
  SiLinux,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbApi, TbLayoutGrid, TbShieldLock } from "react-icons/tb";

export const skillGroups = [
  {
    label: "Frontend Architecture",
    eyebrow: "01",
    skills: [
      { name: "React.js & Hooks", icon: SiReact, level: "Core Stack", exp: "Reusable component systems" },
      { name: "Redux Toolkit", icon: SiRedux, level: "Core Stack", exp: "Global state & e-commerce carts" },
      { name: "TypeScript", icon: SiTypescript, level: "Production", exp: "Typed POS & client apps" },
      { name: "JavaScript (ES6+)", icon: SiJavascript, level: "Core Stack", exp: "Async/await, Promises, DOM" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: "Core Stack", exp: "Mobile-first design systems" },
      { name: "React Router & Context", icon: SiReactrouter, level: "Production", exp: "Protected RBAC routing" },
    ],
  },
  {
    label: "APIs, Data & Auth",
    eyebrow: "02",
    skills: [
      { name: "REST APIs & Axios", icon: TbApi, level: "Core Stack", exp: "CRUD & async data integration" },
      { name: "Role-Based Access (RBAC)", icon: TbShieldLock, level: "Production", exp: "Customer & Admin auth flows" },
      { name: "Firebase", icon: SiFirebase, level: "Production", exp: "Auth, Firestore & hosting" },
      { name: "Node.js & JSON-Server", icon: SiNodedotjs, level: "Fundamentals", exp: "API mocking & backend basics" },
      { name: "HTML5 & Semantic SEO", icon: SiHtml5, level: "Core Stack", exp: "Accessible, semantic markup" },
      { name: "CSS3 & Motion UI", icon: SiCss, level: "Core Stack", exp: "Responsive layouts & animations" },
    ],
  },
  {
    label: "Tools & Workflow",
    eyebrow: "03",
    skills: [
      { name: "Git & GitHub", icon: SiGithub, level: "Daily Driver", exp: "Team PRs & task workflows" },
      { name: "Vite & TanStack Start", icon: SiVite, level: "Daily Driver", exp: "Fast builds & modern SSR/SPA" },
      { name: "Postman", icon: SiPostman, level: "Daily Driver", exp: "REST endpoint testing" },
      { name: "Vercel CI/CD", icon: SiVercel, level: "Daily Driver", exp: "Production client deployments" },
      { name: "VS Code & Linux", icon: VscVscode, level: "Daily Driver", exp: "Development environment" },
      { name: "Python", icon: SiPython, level: "Foundations", exp: "Scripting & backend basics" },
    ],
  },
];

export const resumePills = [
  "React.js",
  "Redux Toolkit",
  "TypeScript",
  "JavaScript ES6+",
  "TanStack Start",
  "Tailwind CSS",
  "REST APIs & Axios",
  "Role-Based Access (RBAC)",
  "React Router",
  "Context API",
  "Firebase",
  "Git & GitHub",
  "Vite",
  "Postman",
  "Vercel",
  "Mobile-First Design",
];

export const allSkillIcons = [
  { name: "React", icon: SiReact },
  { name: "Redux", icon: SiRedux },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Firebase", icon: SiFirebase },
  { name: "Git", icon: SiGit },
  { name: "Vite", icon: SiVite },
  { name: "Postman", icon: SiPostman },
  { name: "Vercel", icon: SiVercel },
  { name: "Linux", icon: SiLinux },
  { name: "Component UI", icon: TbLayoutGrid },
];
