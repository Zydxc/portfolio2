import Layout from "@/components/Layout";

interface ContactData {
  name: string;
  link: string;
}

const data: ContactData[] = [
  { name: "Google", link: "mi.work2231@gmail.com" },
  { name: "Facebook", link: "https://www.facebook.com/" },
  { name: "Github", link: "https://github.com/Zydxc" },
  { name: "LinkedIn", link: "https://www.linkedin.com/" },
];

export default function Contact() {
  return (
    <>
      <Layout>
        <div className="bg-dark2 font-Cascadia">
          <h1># Contact</h1>
          <hr className="border-dark-200 my-3"></hr>
          <div>
         
            {data.map((item, i) => <p key={i} className="">{`${i + 1} ${item.name}: ${item.link}`}</p>)}
 
          </div>
        </div>
      </Layout>
    </>
  );
}
