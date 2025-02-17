'use client'
import { useState } from "react";

// NOTE: need implementation, if disclose is true, show the content of the tab else hide it
export default function FileTab() { 
    const [disclose, SetDisclose] = useState(true);
return (
    <>   
    <div> <img src="" alt="" /> PORTFOLIO</div>
    <div>
        <div>
            <p>About</p>
        </div>
        <div>
            <p>Experience</p>
        </div>
        <div>
            <p>Skills</p>
        </div>
        <div>
            <p>Projects</p>
        </div>
        <div>
            <p>Contact</p>
        </div>
    </div>
</>
 
)}
