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
    startDate: "02-2024",
    endDate: "06-2024",
    description: [
      "Collaborated with two other interns as developers and one quality assurance intern to deliver a high-quality product.",
      "Developed a functioning stack overflow like website with some added new features with a tech stack of Next.js, Tailwind, SaaS, Firebase Realtime database",
      "Programmed a server cloud function that runs within a given set of time using firebase cloud functions",
      'Implemented multiple third-party libraries to create multiple of features of the product.'
    ],
    techStack: ["React.js", "Node.js", "Firebase, Next.js, ES6 JS"],
  },
  {
    company: "iBoardLiving",
    position: "Mobile Developer",
    startDate: "08-2024",
    endDate: "01-2025",
    description: [
      "Developed multiple working CRUD systems within the project with an elegant design",
      "Fixed a ton of old buggy features that were causing bad user experience and optimizing the algorithm.",
      "Optimized the codebase that produced 20% faster results and less loading time for the API.",
      'Designed a clean user interface for user to easily navigate with.'
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