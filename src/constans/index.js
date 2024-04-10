import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  c,
  cpp,
  java,
  python,
  mysql,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  pepe,
  motootologo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "navigation.about",
  },
  {
    id: "technologies",
    title: "navigation.technologies",
  },
  {
    id: "projects",
    title: "navigation.projects",
  },
  {
    id: "contact",
    title: "navigation.contact",
  },
];

const frontendTechnologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

const backendTechnologies = [
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "python",
    icon: python,
  },
];

const devopsTechnologies = [
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "git",
    icon: git,
  },
];

const projects = [
  {
    title: "Discord Music App",
    icon: pepe,
    iconBg: "#111",
    description: "projects.discordMusicApp",
    link: "https://discord-music-app-frontend.vercel.app/",
    technologies: [
      "Angular",
      "Bootstrap",
      "Node.js",
      "Express",
      "JWT",
      "MongoDB",
    ],
  },
  {
    title: "Motooto",
    icon: motootologo,
    iconBg: "#ffe",
    description: "projects.motooto",
    link: "https://motooto-frontend.vercel.app/login",
    technologies: [
      "React.js",
      "Mantine",
      "Node.js",
      "Express",
      "JWT",
      "MongoDB",
      "Email.js",
    ],
  },
];

export {
  frontendTechnologies,
  backendTechnologies,
  devopsTechnologies,
  projects,
};
