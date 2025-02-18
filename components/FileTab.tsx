import { BiLogoTypescript } from "react-icons/bi";
import { BsDatabaseFill } from "react-icons/bs";
import { MdJavascript } from "react-icons/md";
import { SiNextdotjs } from "react-icons/si";
import { TbJson } from "react-icons/tb";

const data: { name: string; icon: React.ReactElement }[] = [
  { name: "About", icon: <MdJavascript size={30} /> },
  { name: "Experience", icon: <BiLogoTypescript size={20} /> },
  { name: "Skills", icon: <SiNextdotjs size={20} /> },
  { name: "Projects", icon: <BsDatabaseFill size={20} /> },
  { name: "Contact", icon: <TbJson size={20} /> },
];

export default function FileTab() {
  return (
    <>
      <div className="flex flex-row gap-6 h-fit w-full text-defaultFont bg-dark3">
        {data.map((item, idx) => (
          <div key={idx} className="flex flex-row gap-2 align-center">
            <div>{item.icon}</div>
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}
