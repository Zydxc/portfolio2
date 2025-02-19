'use client'
import { iconStyle } from "@/styles/icons";
import Image from "next/image";
import React from "react";
import { BiCopy, BiMinus } from "react-icons/bi";
import { MdClose } from "react-icons/md";

const data: { name: string }[] = [
  { name: "File" },
  { name: "Edit" },
  { name: "View" },
  { name: "Run" },
  { name: "Terminal" },
  { name: "Help" },
];

const data2: { icon: React.ReactElement }[] = [
  { icon: <BiMinus /> },
  { icon: <BiCopy /> },
  { icon: <MdClose /> },
];

export default function MenuBar() {
  return (
    <div className="py-1 px-2 flex text-xs  cursor-default width-full bg-dark3 border-b border-borderColor justify-between">
      <div className="flex flex-row gap-1 items-center ">
        <Image
          src="MenuBarIcons\icons8-visual-studio-code.svg"
          width={20}
          height={20}
          className="px"
          alt="vsCode"
        />

        {data.map((item, idx) => (
          <div
            key={idx}
            className={`text-defaultFont px-2 rounded-md hover:bg-vscBlue`}
          >
            {item.name}
          </div>
        ))}
      </div>

      <div className="flex items-center text-sm text-defaultFont">
        My Portfolio - Visual Studio Code
      </div>

      <div className="flex items-center flex-row gap-2">
        {data2.map((item, idx) => (
          <div key={idx} className={`flex items-center justify-content hover:bg-[#3a3a3a] size-6`}>
            {React.cloneElement(item.icon, {
              size: 16,
              style: iconStyle,
              key: idx,
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
