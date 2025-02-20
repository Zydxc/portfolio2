import Layout from "@/components/Layout";
import { skillsData } from "@/data/data";

export default function Skills() {
  return (
    <>
      <Layout>
        <div className="bg-dark2 font-Cascadia">
          <h1># Technical Skills </h1>
          <hr className="border-dark-200 my-3"></hr>
          <div className="px-4">
            <ul>
              {skillsData.map((item, index) => <li className="list-disc marker:text-sky-400" key={index}>{item.skill}</li>)}
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
}
