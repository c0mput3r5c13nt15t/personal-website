import Head from "next/head";
import TopBar from "@/components/topBar";
import CodeWindow from "@/components/codeWindow";
import BackgroundImage from "@/components/backgroundImage";
import Footer from "@/components/footer";
import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import { db } from "@/lib/firebase";

export const getStaticProps = async () => {
  async function getProjects(): Promise<any[]> {
    const q = query(collection(db, "/projects"));
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
      projects: await getProjects(),
    },
    revalidate: 60 * 60, // Every hours
  };
};

export default function Home({ me, projects }: { me: any; projects: any[] }) {
  const keysByOrderForMe = [
    "name",
    "age",
    "academics",
    "emoji-representation",
    "fields",
    "languages",
    "contact",
  ];

  const keysByOrderForProjects = [
    "id",
    "name",
    "description",
    "under-development",
    "university",
    "lecture",
    "url",
    "github",
    "technologies",
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
        <div className="hero md:min-h-screen bg-base-200">
          <BackgroundImage />
          <div className="hero-content py-20 lg:py-0 !w-screen max-w-2xl">
            <CodeWindow
              object={me}
              keysByOrder={keysByOrderForMe}
              variableName="me"
            />
          </div>
        </div>
        <div className="bottom-5 w-full text-center hidden md:absolute">
          <button
            className="btn btn-circle btn-outline opacity-95 text-zinc-400 hover:text-zinc-100 hover:bg-transparent"
            onClick={scrollDown}
          >
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
        <div
          id="projects"
          // className="flex flex-row flex-wrap justify-center xl:w-2/3 lg:py-3"
          className="grid grid-cols-1 md:grid-cols-2 md:py-3 w-full max-w-5xl grid-flow-row-dense mx-auto"
        >
          {projects.map((project) => (
            <div key={project.id} className="p-3">
              <CodeWindow
                object={project}
                keysByOrder={keysByOrderForProjects}
              />
            </div>
          ))}
        </div>
        <Footer />
      </main>
    </>
  );
}
