"use client";
import { iconDbStyle, iconJsStyle, iconNextstyle, iconTsStyle } from "@/styles/icons";
import React, { useState } from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { BsDatabaseFill } from "react-icons/bs";
import { CgChevronDown, CgChevronRight } from "react-icons/cg";
import { DiJavascript1 } from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";
import { VscJson } from "react-icons/vsc";

const data: { name: string; icon: React.ReactElement}[] = [
  { name: "About", icon: <DiJavascript1 size={20} style={iconJsStyle} /> },
  { name: "Experience", icon: <BiLogoTypescript size={20} style={iconTsStyle} /> },
  { name: "Skills", icon: <SiNextdotjs size={20} style={iconNextstyle} /> },
  { name: "Projects", icon: <BsDatabaseFill size={20} style={iconDbStyle} /> },
  { name: "Contact", icon: <VscJson size={20} style={iconJsStyle} /> },
];

export default function FileExplorer() {
  const [isExpanded, setIsExpanded] = useState(false);


  const triggerExpand = () => {
    console.log("isExpanded: ", isExpanded);
    setIsExpanded(!isExpanded);
  };

  const redirectPage = (name: string) => { 
    console.log('name: ',name)
  }


  return (
    <div className="bg-dark3   w-[10em] border-r border-borderColor text-defaultFont">
      <p>EXPLORER</p>

      <div className="flex flex-row items-center" onClick={triggerExpand}>
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

        <p>PORTFOLIO</p>
      </div>

      {isExpanded ? (
        <></>
      ) : (
        <>
          {data.map((item, idx) => (
            <div key={idx} onClick={()=>redirectPage(item.name)} className="flex items-center flex-row gap-2 pl-4">
              <div>{item.icon}</div>
              <p>{item.name}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
