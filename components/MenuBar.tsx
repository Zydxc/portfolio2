import Image from "next/image";

export default function MenuBar() {
    return(
    <div className="flex flex-row gap-6 width-full">
        <div>
            <Image src="MenuBarIcons\icons8-visual-studio-code.svg" width={50} height={50} alt="vsCode" />
        </div>
        <div>
            <p>File</p>
        </div>
        <div>
            <p>Edit</p>
        </div>
        <div>
            <p>View</p>
        </div>
        <div>
            <p>Run</p>
        </div>
        <div>
            <p>Terminal</p>
        </div>
        <div>
            <p>Help</p>
        </div>


        <div className="flex">Mel Ivan Abolencia - Visual Studio Code</div>


        <div className="flex flex-row gap-4">
            <div><Image src="MenuBarIcons\cancel-01-stroke-rounded.svg" width={50} height={50} alt="minButton" /></div>
            <div><Image src="" alt="RestoreButton" /></div>
            <div><Image src="" alt="closeButton" /></div>
        </div>
    </div> )    
}