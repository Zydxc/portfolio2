'use client';
import Image from "next/image";
import { useState } from "react";

export default function FileExplorer() { 
    const [isExpanded, setIsExpanded] = useState(false);

    const triggerExpand = () => {
        setIsExpanded(!isExpanded);
    }
    return (
    <div className="bg-dark3 h-full text-defaultFont">
        <p>EXPLORER</p> 

        <div className="flex flex-row" onClick={() =>triggerExpand()}>
            <Image src={isExpanded ? "FileTabIcons\arrow-down-01-stroke-rounded.svg" : "FileTabIcons\arrow-right-01-stroke-rounded.svg"} alt="disclosure" width={30} height={30}  />
            <p>PORTFOLIO</p>
        </div>

        <div><span></span> <p>About</p></div>

        <div><span></span> <p>Experience</p></div>

        <div><span></span> <p>Skills</p> </div>

        <div><span></span> <p>Projects</p></div>

        <div><span></span> <p>Contact</p></div>
    </div>
)
}