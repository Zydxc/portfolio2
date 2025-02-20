import Layout from "@/components/Layout";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Layout>
        <div className="bg-dark2 font-Cascadia">
          <h1># About</h1>
          <hr className="border-dark-200 my-3"></hr>
          <p>
            Hi! My name is [My-Name]. I am a full stack web developer. I have a
            passion for learning and building web applications. At times I
            create new and exciting stuff that piques my interest. If my
            character interests you feel free to see my projects or contact me. 
          </p>

            
          <p className="mt-4">
            For information on how to reach out,see{" "}
            <Link
              className="underline text-yellow-200 decoration-yellow-400"
              href="/contact"
            >
              contact.json
            </Link>


          </p>
        </div>
      </Layout>
    </>
  );
}
