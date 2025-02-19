'use client'
import { iconStyle } from "@/styles/icons";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { VscAccount, VscCopilot, VscDebug, VscFiles, VscSearch } from "react-icons/vsc";


const icons: { icon: React.ReactElement }[] = [
  { icon: <VscFiles /> },
  { icon: <BsGithub /> },
  { icon: <VscSearch /> },
  { icon: <VscCopilot /> },
  { icon: <VscDebug /> },
  { icon: <VscAccount /> },
];

export default function ActivityBar() {
  return (
    <div className="h-full flex flex-col bg-dark3 w-14 border-r border-borderColor pt-1 gap-6">
      {icons.map((item, idx) => (
        <div key={idx} className="flex flex-col items-center justify-center">
          {React.cloneElement(item.icon, { size: 30, style: iconStyle })}
        </div>
      ))}
    </div>
  );
}