import type { IconType } from "react-icons";
import {
  SiC,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiExpress,
  SiSpringboot,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiBootstrap,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiLinux,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

export interface SkillCategory {
  title: string;
  items: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    items: [
      { name: "C", icon: SiC, color: "#A8B9CC" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Java", icon: FaJava, color: "#E76F00" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Express", icon: SiExpress, color: "#E2E8F0" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    ],
  },
  {
    title: "Database",
    items: [{ name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" }],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#E2E8F0" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
    ],
  },
];

export const skills: Skill[] = skillCategories.flatMap((c) => c.items);
