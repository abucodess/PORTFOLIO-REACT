import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiGit,
  SiGithub,
  SiFigma,
  SiTensorflow,
  SiNextdotjs,
  SiDocker,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbBrain } from "react-icons/tb";

export const skillGroups = [
  {
    label: "Frontend",
    eyebrow: "01",
    skills: [
      { name: "React", icon: SiReact, level: "Daily driver", exp: "2+ yrs building SPAs" },
      { name: "JavaScript", icon: SiJavascript, level: "Fluent", exp: "ES6+, async patterns" },
      { name: "TypeScript", icon: SiTypescript, level: "Comfortable", exp: "Typed component APIs" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: "Daily driver", exp: "Design-system thinking" },
      { name: "HTML", icon: SiHtml5, level: "Fluent", exp: "Semantic & accessible" },
      { name: "CSS", icon: SiCss, level: "Fluent", exp: "Animations & layout" },
    ],
  },
  {
    label: "Backend",
    eyebrow: "02",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, level: "Comfortable", exp: "REST APIs & tooling" },
      { name: "Express.js", icon: SiExpress, level: "Comfortable", exp: "Route & middleware design" },
      { name: "Firebase", icon: SiFirebase, level: "Comfortable", exp: "Auth, hosting, functions" },
    ],
  },
  {
    label: "Database",
    eyebrow: "03",
    skills: [
      { name: "Firestore", icon: SiFirebase, level: "Comfortable", exp: "Realtime NoSQL data" },
      { name: "MongoDB", icon: SiMongodb, level: "Comfortable", exp: "Schema design & queries" },
    ],
  },
  {
    label: "Tools",
    eyebrow: "04",
    skills: [
      { name: "Git", icon: SiGit, level: "Daily driver", exp: "Branching & collaboration" },
      { name: "GitHub", icon: SiGithub, level: "Daily driver", exp: "Version control & CI" },
      { name: "VS Code", icon: VscVscode, level: "Daily driver", exp: "Primary editor" },
      { name: "Figma", icon: SiFigma, level: "Comfortable", exp: "Design-to-code handoff" },
    ],
  },
  {
    label: "Currently Learning",
    eyebrow: "05",
    skills: [
      { name: "AI Engineering", icon: TbBrain, level: "In progress", exp: "Applied ML foundations" },
      { name: "Machine Learning", icon: SiTensorflow, level: "In progress", exp: "Models & data pipelines" },
      { name: "Next.js", icon: SiNextdotjs, level: "In progress", exp: "SSR & app router" },
      { name: "Docker", icon: SiDocker, level: "In progress", exp: "Containerized workflows" },
    ],
  },
];

export const allSkillIcons = skillGroups.flatMap((g) => g.skills);
