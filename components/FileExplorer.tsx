"use client";
import { fileTabData } from "@/data/data";
import {
  iconStyle
} from "@/styles/icons";
import { removeFileExtensionString } from "@/utils/string";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CgChevronDown, CgChevronRight } from "react-icons/cg";
import { FaEllipsis } from "react-icons/fa6";


  
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
          {fileTabData.map((item, idx) => (
            <div
              key={idx}
              onClick={() => redirectPage(item.name)}
              className={`flex items-center flex-row  py-1 gap-2 pl-8 ${
                activeTab === removeFileExtensionString(item.name)
                  ? "bg-[#545454] text-white" 
                  : "hover:bg-[#47474770]"
              }`}
            >
              <div>{item.icon}</div>
              <p className="text-sm">{item.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
