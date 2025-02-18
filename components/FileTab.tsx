"use client";
import {
    iconDbStyle,
    iconJsonStyle,
    iconJsStyle,
    iconNextstyle,
    iconTsStyle,
} from "@/styles/icons";
import { BiLogoTypescript } from "react-icons/bi";
import { BsDatabaseFill } from "react-icons/bs";
import { DiJavascript1 } from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";
import { VscJson } from "react-icons/vsc";

const data: { name: string; icon: React.ReactElement }[] = [
  { name: "About", icon: <DiJavascript1 size={20} style={iconJsStyle} /> },
  {
    name: "Experience",
    icon: <BiLogoTypescript size={20} style={iconTsStyle} />,
  },
  { name: "Skills", icon: <SiNextdotjs size={20} style={iconNextstyle} /> },
  { name: "Projects", icon: <BsDatabaseFill size={20} style={iconDbStyle} /> },
  { name: "Contact", icon: <VscJson size={20} style={iconJsonStyle} /> },
];

export default function FileTab() {
  const redirectPage = (name: string) => {
    //* note page will redirect if a specific tab is clicked
    console.log("name: ", name);
    // redirect(`\${name}`)
  };
  return (
    <>
      <div className="flex flex-row gap-6 h-fit w-full py-1 border-b border-borderColor text-defaultFont bg-dark3">
        {data.map((item, idx) => (
          <div
            key={idx}
            onClick={() => redirectPage(item.name)}
            className="flex flex-row gap-2 border-r border-borderColor px-10 justify-center items-center  active:border-t active:border-vscBlue"
          >
            <div>{item.icon}</div>
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}
