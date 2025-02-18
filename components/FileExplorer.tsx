"use client";
import React, { useState } from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { BsDatabaseFill } from "react-icons/bs";
import { CgChevronDown, CgChevronRight } from "react-icons/cg";
import { MdJavascript } from "react-icons/md";
import { SiNextdotjs } from "react-icons/si";
import { TbJson } from "react-icons/tb";

const data: { name: string; icon: React.ReactElement}[] = [
  { name: "About", icon: <MdJavascript size={30} /> },
  { name: "Experience", icon: <BiLogoTypescript size={20} /> },
  { name: "Skills", icon: <SiNextdotjs size={20} /> },
  { name: "Projects", icon: <BsDatabaseFill size={20} /> },
  { name: "Contact", icon: <TbJson size={20} /> },
];

export default function FileExplorer() {
  const [isExpanded, setIsExpanded] = useState(false);


  const triggerExpand = () => {
    console.log("isExpanded: ", isExpanded);
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-dark3 h-100vw w-lg text-defaultFont">
      <p>EXPLORER</p>

      <div className="flex flex-row" onClick={triggerExpand}>
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
            <div key={idx} className="flex flex-row gap-2 pl-4">
              <div>{item.icon}</div>
              <p>{item.name}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
