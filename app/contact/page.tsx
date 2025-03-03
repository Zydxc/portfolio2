import Layout from "@/components/Layout";
import { contactData } from "@/data/data";

export default function Contact() {
  return (
    <>
      <Layout>
        <div className="bg-dark2 font-Cascadia">
          <h1># Contact</h1>
          <hr className="border-dark-200 my-3"></hr>
          <div>
            {contactData.map((item, i) => (
              <p key={i} className="">
                {`${i + 1} ${item.name}: `}
                {item.name === "Google" ? (
                  <a
                    href={`mailto:${item.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.link}
                  </a>
                ) : (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.link}
                  </a>
                )}
              </p>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
