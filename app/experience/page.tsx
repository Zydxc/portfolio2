import Layout from "@/components/Layout";
import { expData } from "@/data/data";
import { convertMonthToWord } from "@/utils/string";

export default function Experience() {
  return (
    <>
      <Layout>
        <div className="bg-dark2 font-Cascadia">
          <h1># Experience</h1>
          <hr className="border-dark-200 my-3"></hr>
          <div className="">
            {expData.map((item, i) => (
              <div className="mt-6" key={i}>
                <h3>{item.company}</h3>
                <div className="flex justify-between">
                  <h5>{item.position}</h5>
                  <div className="">
                    <p>{`${convertMonthToWord(
                      item.startDate
                    )} - ${convertMonthToWord(item.startDate)}`}</p>
                  </div>
                </div>

                <div>
                  <ul className="list-inside list-disc marker:text-sky-400">
                    {item.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
