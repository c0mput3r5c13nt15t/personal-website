import Head from "next/head";
import Footer from "@/components/footer";
import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Section from "@/components/section";
import { useEffect, useState } from "react";
import Navbar from "@/components/navBar";
import Landing from "@/components/sections/landing";
import Carousel from "@/components/carousel";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";

export const getStaticProps = async () => {
  async function getProjects(section: string): Promise<any[]> {
    const q = query(collection(db, section));
    const querySnapshot = await getDocs(q);
    const projects: any[] = [];
    querySnapshot.docs.map((doc) => {
      const data = doc.data();
      const new_project = { id: doc.id, ...data };
      projects.push(new_project);
    });
    return projects;
  }

  async function getMe(): Promise<any> {
    const docRef = doc(db, "me", "0WGLUBVzOZYN07RZ2bmI");
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  }

  return {
    props: {
      me: await getMe(),
      sections: [
        {
          title: "Computer Science Projects",
          description:
            "In elementary school, I learned to program. Since then I have worked on many projects. Here is a selection of the most important ones. Even more can be found on my GitHub profile.",
          projects: await getProjects("projects"),
        },
        {
          title: "Competitions",
          description:
            "Over the years, I have also taken part in many competitions, the most important ones of which are listed here.",
          projects: await getProjects("competitions"),
        },
        {
          title: "Miscellaneous",
          description:
            "Besides my computer science projects and competitions, I have done several internships and am involved in voluntary work.",
          projects: await getProjects("miscellaneous"),
        },
      ],
    },
    revalidate: parseInt(process.env.REVALIDATE_SECONDS || "3600", 10),
  };
};

export default function Home({ me, sections }: { me: any; sections: any[] }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const keysByOrderForMe = [
    "name",
    "age",
    "education",
    "emoji-representation",
    "fields",
    "languages",
    "contact",
    "German",
    "English",
    "French",
  ];

  useEffect(() => {
    if (localStorage.getItem("darkMode") == "true") {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", isDarkMode ? "dark" : "light");
    localStorage.setItem("darkMode", isDarkMode ? "true" : "false");
  }, [isDarkMode]);

  return (
    <>
      <Head>
        <title>Paul Maier (C0mput3r5c13nt15t)</title>
        <meta
          name="description"
          content="Hi there, I am Paul Maier and this is my personal website."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col w-full">
        <Navbar />
        <Landing />
        <About />
        <Carousel id="work" />
        <Contact />
        {/* {sections.map((section) => (
          <Section
            key={section.title}
            title={section.title}
            description={section.description}
            projects={section.projects}
          />
        ))} */}
        <Footer />
      </main>
    </>
  );
}
