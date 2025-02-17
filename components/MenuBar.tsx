import Image from "next/image";

export default function MenuBar() {
  return (
    <div className="py-1 flex flex-row gap-6 width-full bg-dark3 border-b border-[#1a1e22]">

      <div className="flex flex-row gap-4">
        <div>
          <Image
            src="MenuBarIcons\icons8-visual-studio-code.svg"
            width={25}
            height={25}
            alt="vsCode"
          />
        </div>
        <div>
          <p className="text-defaultFont">File</p>
        </div>
        <div>
          <p className="text-defaultFont">Edit</p>
        </div>
        <div>
          <p className="text-defaultFont">View</p>
        </div>
        <div>
          <p className="text-defaultFont">Run</p>
        </div>
        <div>
          <p className="text-defaultFont">Terminal</p>
        </div>
        <div>
          <p className="text-defaultFont">Help</p>
        </div>
      </div>

      <div className="flex text-defaultFont">MyName - Visual Studio Code</div>

      <div className="flex flex-row gap-4">
        <div>
          <Image
            src=""
            width={25}
            height={25}
            alt="minButton"
          />
        </div>
        <div>
          <Image src="" alt="RestoreButton"  width={25} height={25} />
        </div>
        <div>
          <Image src="MenuBarIcons\cancel-01-stroke-rounded.svg"  width={25}
            height={25} alt="closeButton" />
        </div>
      </div>
    </div>
  );
}
