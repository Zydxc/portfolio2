"use client";
import { usePathname } from "next/navigation";
import {
  VscArrowDown,
  VscArrowUp,
  VscBell,
  VscBracketDot,
  VscCheckAll,
  VscError,
  VscGitCommit,
  VscRemote,
  VscSourceControl,
  VscSync,
  VscWarning
} from "react-icons/vsc";

export default function Footer() {
  const pathname = usePathname().replace(/^\//, "");

  const renderLanguage = () => {
    if (!pathname) return "error";
    if (pathname === "experience") return "Typescript ";
    if (pathname === "about") return "Javascript";
    if (pathname === "skills") return "Next";
    if (pathname === "projects") return "Plain Text";
    if (pathname === "contact") return "JSON";
  };
  return (
    <div className="flex flex-row h-fit bg-dark3 text-defaultFont text-xs border-t gap-1 items-center justify-between  border-borderColor">
      <div className="flex items-center text-xs gap-1">
        <div className="bg-[#0078d4] px-2 py-1">
          <VscRemote fill="#fff" size={16} />
        </div>

        <div className="flex flex-row hover:bg-[#47474790]">
          <VscSourceControl size={16} />
          <span>master*</span>
        </div>

        <div className="flex flex-row gap-4 ">
          <div className="flex flex-row hover:bg-[#47474790]">
            <VscSync size={16} />

            <VscArrowDown size={16} />
            <span>1</span>
            <VscArrowUp size={16} />
            <span>3</span>
          </div>

          <div className="hover:bg-[#47474790]">

            <VscGitCommit size={16} />
          </div>

          <div className="flex flex-row gap-1 hover:bg-[#47474790]">
            <VscError size={16} />
            <span>0</span>
            <VscWarning size={16} />
            <span>1</span>
          </div>
        </div>
      </div>

      <div className="flex items-center text-xs gap-2">
        <span className="hover:bg-[#47474790]">UTF-8</span>
        <span className="hover:bg-[#47474790]">LF</span>
        <div className="flex items-center gap-1 hover:bg-[#47474790]">
          <VscBracketDot size={16} />
          <span>{renderLanguage()}</span>
        </div>

        <div className="flex flex-row gap-1 items-center pr-4 ">
          <div className="hover:bg-[#47474790] flex flex-row">
            <VscCheckAll size={16} />
            <span>Prettier</span>
          </div>

          <div className="hover:bg-[#47474790]">
            <VscBell size={16} />
          </div>
        </div>
      </div>
    </div>
  );
}
