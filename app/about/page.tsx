import Layout from "@/components/Layout";

export default function About() {
  return (
    <>
      <Layout>
        <div className="bg-dark2 font-Cascadia">
          <h1># About</h1>
          <hr className="border-dark-200 my-3"></hr>
          <p>
            Hi! My name is [My-Name]. I am a full stack software engineer
            currently working at FullScript as a backend Ruby developer, helping
            to build the future of whole person care! While originally going to
            school for economics and finance, I started coding as a hobby
            through 2021 and from that point on, I was hooked. Since then I have
            been learning and building every opportunity I get. For some
            examples of recent work, see .
          </p>
          
          <p>For information on how to reach out,see Contact.json.</p>
        </div>
      </Layout>
    </>
  );
}
