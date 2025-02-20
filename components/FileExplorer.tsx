"use client";
import {
  iconDbStyle,
  iconJsStyle,
  iconNextstyle,
  iconStyle,
  iconTsStyle,
} from "@/styles/icons";
import { removeFileExtensionString } from "@/utils/string";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { BsDatabaseFill } from "react-icons/bs";
import { CgChevronDown, CgChevronRight } from "react-icons/cg";
import { DiJavascript1 } from "react-icons/di";
import { FaEllipsis } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { VscJson } from "react-icons/vsc";

const data: { name: string; icon: React.ReactElement }[] = [
  { name: "about.js", icon: <DiJavascript1 size={20} style={iconJsStyle} /> },
  {
    name: "experience.ts",
    icon: <BiLogoTypescript size={20} style={iconTsStyle} />,
  },
  { name: "skills.next", icon: <SiNextdotjs size={20} style={iconNextstyle} /> },
  { name: "projects.db", icon: <BsDatabaseFill size={20} style={iconDbStyle} /> },
  { name: "contact.json", icon: <VscJson size={20} style={iconJsStyle} /> },
];

export default function FileExplorer() {
  const router = useRouter();
  const pathname = usePathname().replace(/^\//, "");
  const [activeTab, setActiveTab] = useState<string>("");
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setActiveTab(pathname);
  }, [pathname, activeTab]);

  const triggerExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const redirectPage = (name: string) => {
    setActiveTab(name);
    router.push(removeFileExtensionString(`/${name}`));
  };

  return (
    <div className="bg-dark3 cursor-default  w-[12em] border-r border-borderColor text-defaultFont">
      <div className=" flex items-center justify-between px-5 h-[35px]">
        <p className="text-xs">EXPLORER</p>
        <div className="hover:bg-[#545454] rounded-md p-1">
          <FaEllipsis />
        </div>
      </div>

      <div
        className="flex flex-row gap-1 px-1 items-center"
        onClick={triggerExpand}
      >
        {isExpanded ? (
          <CgChevronRight size={20} style={iconStyle} />
        ) : (
          <CgChevronDown size={20} style={iconStyle} />
        )}

        <p className="font-bold text-xs">PORTFOLIO</p>
      </div>

      {isExpanded ? (
        <></>
      ) : (
        <div className="mt-1 flex flex-col">
          {data.map((item, idx) => (
            <div
              key={idx}
              onClick={() => redirectPage(item.name)}
              className={`flex items-center flex-row hover:bg-[#545454] py-1 gap-2 pl-8 ${
                activeTab === item.name
                  ? "border-vscBlue bg-[#696868] text-white"
                  : " "
              }`}
            >
              <div>{item.icon}</div>
              <p className="text-sm">{(item.name)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
