"use client";
import { fileTabData } from "@/data/data";
import { removeFileExtensionString } from "@/utils/string";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";



export default function FileTab() {
  const pathname = usePathname().replace(/^\//, "");
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
        {fileTabData.map((item, idx) => (
          <div
            key={idx}
            onClick={() => redirectPage(item.name)}
            className={`flex flex-row gap-2 w-fit items-center h-[35px] py-1 px-2 items-center
               ${
                 activeTab === removeFileExtensionString(item.name)
                   ? "border-t border-vscBlue bg-dark2 text-white"
                   : "border-r border-borderColor "
               }
               `}
          >
            <div>{item.icon}</div>
            <div className="text-sm">{item.name}</div>

            <div className="w-[20px] h-[20px] flex items-center justify-center">
              {activeTab === removeFileExtensionString(item.name) && <MdClose />}
 
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
