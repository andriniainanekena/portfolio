import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "Track-eo",
    description:
      "Expense tracker built to manage personal finances through categorized income and expenses, real-time balance calculation and intuitive data visualization.",
    technologies: ["Spring Boot", "Java", "PostgreSQL", "React", "TypeScript", "Tailwind CSS"],
    image: `${import.meta.env.BASE_URL}projects/001.png`,
    github: "https://github.com/andriniainanekena",
    demo: "https://github.com/andriniainanekena",
  },
  {
    title: "EventSync",
    description:
      "Event management platform allowing users to create events, register participants and organize schedules through a clean and responsive interface.",
    technologies: ["Spring Boot", "PostgreSQL", "React", "TypeScript", "Tailwind CSS"],
    image: `${import.meta.env.BASE_URL}projects/002.png`,
    github: "https://github.com/andriniainanekena",
    demo: "https://github.com/andriniainanekena",
  },
  {
    title: "Habitly",
    description:
      "Habit tracker designed to help you stay consistent, follow your daily routines, and visualize your progress over time. (In progress)",
    technologies: ["React", "TypeScript", "TailwindCSS"],
    image: `${import.meta.env.BASE_URL}projects/003.png`,
    github: "https://github.com/andriniainanekena",
    demo: "https://github.com/andriniainanekena",
  },
];
