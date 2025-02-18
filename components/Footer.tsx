import {
  VscError,
  VscGithub,
  VscSourceControl,
  VscWarning,
} from "react-icons/vsc";



export default function Footer() {
  return (
    <div className="flex flex-row  h-fit bg-dark3 text-defaultFont">
        <div></div>
      <VscSourceControl size={20} />
      <VscGithub size={20} />
      <VscError size={20} />
      <VscWarning size={20} />
    </div>
  );
}
