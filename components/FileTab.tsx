"use client";
import {
  iconDbStyle,
  iconJsonStyle,
  iconJsStyle,
  iconNextstyle,
  iconTsStyle,
} from "@/styles/icons";
import { removeFileExtensionString } from "@/utils/string";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { BsDatabaseFill } from "react-icons/bs";
import { DiJavascript1 } from "react-icons/di";
import { MdClose } from "react-icons/md";
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
  { name: "contact.json", icon: <VscJson size={20} style={iconJsonStyle} /> },
];

export default function FileTab() {
  const pathname = usePathname().replace(/^\//, "");;
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>(pathname);

  useEffect(() => {
    setActiveTab(pathname);
  }, [pathname, activeTab]);

  const redirectPage = (name: string) => {
    setActiveTab(name);
    router.push(removeFileExtensionString(`/${name}`));
  };

  return (
    <>
      <div className="flex flex-row h-fit w-full cursor-default text-defaultFont bg-dark3">
        {data.map((item, idx) => (
          <div
            key={idx}
            onClick={() => redirectPage(item.name)}
            className={`flex flex-row gap-2 w-fit items-center h-[35px] py-1 px-2 items-center
               ${
                 activeTab === item.name
                   ? "border-t border-vscBlue bg-dark2 text-white"
                   : "border-r border-borderColor "
               }
               `}
          >
            <div>{item.icon}</div>
            <div className="text-sm">{(item.name)}</div>

            <div className="w-[20px] h-[20px] flex items-center justify-center">
              {activeTab === item.name && <MdClose />}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
