// this is for the activity bar on the left side of the screen

import Image from "next/image";

export default function ActivityBar() {
  return(
  <div className="h-full gap-6 flex flex-col bg-dark3 w-[50px] content-around">
    <div><Image src="ActivityBarIcons\files-01-stroke-rounded.svg" alt="" width={40} height={40}/></div>
    <div><Image src="ActivityBarIcons\github-stroke-rounded.svg" alt="" width={40} height={40}/></div>
    <div><Image src="ActivityBarIcons\paint-brush-01-stroke-rounded.svg" alt="" width={40} height={40}/></div>
    <div><Image src="ActivityBarIcons\source-code-stroke-rounded.svg" alt="" width={40} height={40}/></div>
    <div><Image src="ActivityBarIcons\typescript-03-stroke-rounded.svg" alt="" width={40} height={40}/></div>
  </div>)
}
