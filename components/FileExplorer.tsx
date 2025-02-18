"use client";
import {
  iconDbStyle,
  iconJsStyle,
  iconNextstyle,
  iconTsStyle,
} from "@/styles/icons";
import { capitalizeString, uncapitalizeString } from "@/utils/string";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { BsDatabaseFill } from "react-icons/bs";
import { CgChevronDown, CgChevronRight } from "react-icons/cg";
import { DiJavascript1 } from "react-icons/di";
import { FaEllipsis } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { VscJson } from "react-icons/vsc";

const data: { name: string; icon: React.ReactElement }[] = [
  { name: "about", icon: <DiJavascript1 size={20} style={iconJsStyle} /> },
  {
    name: "experience",
    icon: <BiLogoTypescript size={20} style={iconTsStyle} />,
  },
  { name: "skills", icon: <SiNextdotjs size={20} style={iconNextstyle} /> },
  { name: "projects", icon: <BsDatabaseFill size={20} style={iconDbStyle} /> },
  { name: "contact", icon: <VscJson size={20} style={iconJsStyle} /> },
];

export default function FileExplorer() {
  const [isExpanded, setIsExpanded] = useState(false);

  const triggerExpand = () => {
    console.log("isExpanded: ", isExpanded);
    setIsExpanded(!isExpanded);
  };

  const redirectPage = (name: string) => {
    redirect(uncapitalizeString(`/${name}`));
  };

  return (
    <div className="bg-dark3  w-[12em]  border-r border-borderColor text-defaultFont">
      <div className=" flex items-center justify-between px-5 h-[35px]">
        <p className="text-xs">EXPLORER</p>
        <FaEllipsis/>
      </div>

      <div className="flex flex-row gap-1 px-1 items-center" onClick={triggerExpand}>
        {isExpanded ? (
          <CgChevronRight
            size={20}
            style={{ fill: "#D4D4D4", stroke: "#007acc" }}
          />
        ) : (
          <CgChevronDown
            size={20}
            style={{ fill: "#D4D4D4", stroke: "#007acc" }}
          />
        )}

        <p className="font-bold text-xs">PORTFOLIO</p>
      </div>

      {isExpanded ? (
        <></>
      ) : (
        <div className="mt-1 flex flex-col gap-1"> 
          {data.map((item, idx) => (
            <div
              key={idx}
              onClick={() => redirectPage(item.name)}
              className="flex items-center flex-row gap-2 pl-8"
            >
              <div>{item.icon}</div>
              <p className="text-sm">{capitalizeString(item.name)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
