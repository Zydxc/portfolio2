import { iconDbStyle, iconJsStyle, iconNextstyle, iconTsStyle } from "@/styles/icons";
import { BiLogoTypescript } from "react-icons/bi";
import { BsDatabaseFill } from "react-icons/bs";
import { DiJavascript1 } from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";
import { VscJson } from "react-icons/vsc";

interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string[];
  techStack: string[];
}

interface skillsProps {
  skill: string;
}

export const expData: ExperienceProps[] = [
  {
    company: "GapLabs",
    position: "Web Developer Intern",
    startDate: "2024-02",
    endDate: "2024-06-01",
    description: [
      "Developed and maintained a web application for a client in the healthcare industry.",
      "Worked with a team of developers to deliver a high-quality product.",
      "Used React, Node.js, and MongoDB to build the application.",
    ],
    techStack: ["React.js", "Node.js", "Firebase, Next.js, ES6 JS"],
  },
  {
    company: "iBoardLiving",
    position: "Mobile Developer",
    startDate: "2024-8",
    endDate: "2025-01",
    description: [
      "Developed and maintained a web application for a client in the healthcare industry.",
      "Worked with a team of developers to deliver a high-quality product.",
      "Used React, Node.js, and MongoDB to build the application.",
    ],
    techStack: ["React Native ", "Node.js", "MongoDB", "RNU Lib", "ES6 JS"],
  },
];

export const skillsData: skillsProps[] = [
  { skill: "React.js" },
  { skill: "Node.js" },
  { skill: "MongoDB" },
  { skill: "Firebase" },
  { skill: "Next.js" },
  { skill: "PHP" },
  { skill: "Tailwind CSS" },
  { skill: "CSS" },
  { skill: "ES6 JS" },
  { skill: "React Native" },  
  { skill: "RNU Lib" },
];

export const fileTabData: { name: string; icon: React.ReactElement }[] = [
  { name: "about.js", icon: <DiJavascript1 size={20} style={iconJsStyle} /> },
  {
    name: "experience.ts",
    icon: <BiLogoTypescript size={20} style={iconTsStyle} />,
  },
  {
    name: "skills.next",
    icon: <SiNextdotjs size={20} style={iconNextstyle} />,
  },
  {
    name: "projects.db",
    icon: <BsDatabaseFill size={20} style={iconDbStyle} />,
  },
  { name: "contact.json", icon: <VscJson size={20} style={iconJsStyle} /> },
];