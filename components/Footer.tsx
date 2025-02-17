import Image from "next/image";

export default function Footer() { 
    return (
        <div>
            <div><Image src='' alt="branchName"/></div>
            <div><Image src='' alt="errors"/> <Image src='' alt="warnings"/></div>
            <div><Image src='' alt="nextJSIcon"/><p>Powered By Next.js</p></div>
            <div><Image src='' alt="doubleCheck"/> <p>Prettier</p> </div>
            <div><Image src='' alt="notifs"/></div>
        </div>
    )
 }