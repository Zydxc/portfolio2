"use client";
import {
  iconDbStyle,
  iconJsonStyle,
  iconJsStyle,
  iconNextstyle,
  iconTsStyle,
} from "@/styles/icons";
import { capitalizeString, uncapitalizeString } from "@/utils/string";
import { redirect } from "next/navigation";
import { useState } from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { BsDatabaseFill } from "react-icons/bs";
import { DiJavascript1 } from "react-icons/di";
import { MdClose } from "react-icons/md";
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
  { name: "contact", icon: <VscJson size={20} style={iconJsonStyle} /> },
];

export default function FileTab() {
  const [activeTab, setActiveTab] = useState<string>("");

  const redirectPage = (name: string) => {
   //buggy asf
    // setActiveTab(name);
    console.log("activeTab: ", name);
    redirect(uncapitalizeString(`/${name}`));
  };

  return (
    <>
      <div className="flex flex-row h-fit w-full  border-b border-borderColor text-defaultFont bg-dark3">
        {data.map((item, idx) => (
          <div
            key={idx}
            onClick={() => redirectPage(item.name)}
            className={`flex flex-row gap-2 w-fit h-[35px] border-r border-borderColor py-1 px-2 items-center
               ${ activeTab === item.name ? "border-t border-vscBlue text-white" : "" }
               `}
          >
            <div>{item.icon}</div>
            <div className="text-sm">{capitalizeString(item.name)}</div>

            <MdClose  />
          </div>
        ))}
      </div>
    </>
  );
}
