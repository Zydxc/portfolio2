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
    <div className="py-1 px-2 flex  width-full bg-dark3 border-b border-borderColor justify-between">
      <div className="flex flex-row gap-4">
        <Image
          src="MenuBarIcons\icons8-visual-studio-code.svg"
          width={25}
          height={25}
          alt="vsCode"
        />

        {data.map((item) => (
          <div key={item.name} className="text-defaultFont">
            {item.name}
          </div>
        ))}
      </div>

      <div className="flex text-defaultFont">My Portfolio - Visual Studio Code</div>

      <div className="flex flex-row gap-4">
        {data2.map((item) => React.cloneElement(item.icon, { size: 15, style: iconStyle } ))}
      </div>
    </div>
  );
}
