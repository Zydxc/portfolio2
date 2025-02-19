import Layout from "@/components/Layout";

export default function Experience() {
  return (
    <>
      <Layout>
        <div className="bg-dark2 font-Cascadia">
          <h1># Experience</h1>
          <hr className="border-dark-200 my-3"></hr>
          <div>
            {/* {expData.map((item, i) => )} */}
            <div>
              <h3>CompanyName</h3>
              <div>
                <h5>Position: Web Developer Intern</h5>
                <p>Feb 2024 - May 2024</p>
              </div>

              <div>
                <ul className="list-inside">
                  <li>
                    Collaborated with two other interns as developers and one
                    quality assurance intern
                  </li>
                  <li>
                    Arranged multiple documents that contains information on how
                    the project works from inside out
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
