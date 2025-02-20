interface ExperienceData {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string[] ;
    techStack: string[];
  }
  
export const expData: ExperienceData[] = [
{
    company: "GapLabs",
    position: "Software Engineer",
    startDate: "2021-06-01",
    endDate: "2021-08-01",
    description: [
    "Developed and maintained a web application for a client in the healthcare industry.",
    "Worked with a team of developers to deliver a high-quality product.",
    "Used React, Node.js, and MongoDB to build the application.",
    ],
    techStack: ["React", "Node.js", "MongoDB"],
},
{
    company: "Fullscript",
    position: "Software Engineer",
    startDate: "2021-08-01",
    endDate: "2021-10-01",
    description: [
    "Developed and maintained a web application for a client in the healthcare industry.",
    "Worked with a team of developers to deliver a high-quality product.",
    "Used React, Node.js, and MongoDB to build the application.",
    ],
    techStack: ["React", "Node.js", "MongoDB"],
},
];

