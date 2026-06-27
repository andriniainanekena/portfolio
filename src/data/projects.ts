import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "Track-eo",
    description:
      "Expense tracker built to manage personal finances through categorized income and expenses, real-time balance calculation and intuitive data visualization.",
    technologies: ["Spring Boot", "Java", "PostgreSQL", "React", "TypeScript", "Tailwind CSS"],
    image: "/projects/project1.jpg",
    github: "https://github.com/andriniainanekena",
    demo: "https://github.com/andriniainanekena",
  },
  {
    title: "EventSync",
    description:
      "Event management platform allowing users to create events, register participants and organize schedules through a clean and responsive interface.",
    technologies: ["Spring Boot", "Java", "PostgreSQL", "React", "TypeScript", "Tailwind CSS"],
    image: "/projects/project2.jpg",
    github: "https://github.com/andriniainanekena",
    demo: "https://github.com/andriniainanekena",
  },
  {
    title: "TaskFlow",
    description:
      "Task management application featuring authentication, priorities, statuses and progress tracking. Designed with a clean REST API and a responsive frontend.",
    technologies: ["Spring Boot", "Spring Security", "JWT", "PostgreSQL", "React", "TypeScript"],
    image: "/projects/project3.jpg",
    github: "https://github.com/andriniainanekena",
    demo: "https://github.com/andriniainanekena",
  },
];
