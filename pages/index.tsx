import Head from "next/head";
import TopBar from "@/components/topBar";
import CodeWindow from "@/components/codeWindow";
import BackgroundImage from "@/components/backgroundImage";
import Footer from "@/components/footer";
import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Section from "@/components/section";

export const getStaticProps = async () => {
  async function getProjects(section: string): Promise<any[]> {
    const q = query(collection(db, section));
    const querySnapshot = await getDocs(q);
    const projects: any[] = [];
    querySnapshot.docs.map((doc) => {
      const data = doc.data();
      const new_project = { ...data };
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
    revalidate: 60 * 60, // Every hours
  };
};

export default function Home({ me, sections }: { me: any; sections: any[] }) {
  const keysByOrderForMe = [
    "name",
    "age",
    "academics",
    "emoji-representation",
    "fields",
    "languages",
    "contact",
  ];

  function scrollDown() {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Head>
        <title>Paul Maier (c0mput3r5c13nt15t)</title>
        <meta
          name="description"
          content="Hi there, I am Paul Maier and this is my personal website."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col">
        <TopBar />
        <div className="hero md:min-h-screen bg-base-200 mb-7">
          <BackgroundImage />
          <div className="hero-content py-20 lg:py-0 !w-screen max-w-2xl">
            <CodeWindow
              object={me}
              keysByOrder={keysByOrderForMe}
              variableName="me"
            />
          </div>
        </div>
        <div className="bottom-5 w-full text-center absolute invisible md:visible z-10">
          <button className="btn btn-circle btn-ghost" onClick={scrollDown}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
        <div id="projects" />
        {sections.map((section) => (
          <Section
            key={section.title}
            title={section.title}
            description={section.description}
            projects={section.projects}
          />
        ))}
        <Footer />
      </main>
    </>
  );
}
