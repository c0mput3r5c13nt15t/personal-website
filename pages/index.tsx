import Head from "next/head";
import CodeWindow from "@/components/codeWindow";
import Image from "next/image";
import Footer from "@/components/footer";
import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Section from "@/components/section";
import { useDarkMode } from "usehooks-ts";
import { useEffect } from "react";

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
  const { isDarkMode, toggle } = useDarkMode();
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

  function scrollDown() {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  }

  async function shareUrl() {
    try {
      const shareData = {
        title: "Paul Maier (c0mput3r5c13nt15t)",
        text: "Hi there, I am Paul Maier and this is my personal website.",
        url: "https://personal-website-c0mput3r5c13nt15t.vercel.app/",
      };

      await navigator.share(shareData);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    const body = document.body;
    body.setAttribute("data-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

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
        <button
          className="btn btn-circle btn-ghost absolute  top-3 left-3 z-10"
          onClick={shareUrl}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          className="btn btn-circle btn-ghost top-3 right-3 absolute z-10"
          onClick={toggle}
        >
          {isDarkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
            </svg>
          )}
        </button>
        <div className="hero md:min-h-screen bg-base-200 mb-7">
          <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <Image
              alt="Mountains"
              loading="eager"
              src={"/bg-" + (isDarkMode ? "dark" : "light") + ".jpg"}
              fill={true}
              sizes="100vw"
              quality={100}
              priority={true}
              placeholder="blur"
              blurDataURL={"/bg-light-blur.webp"}
              style={{ objectFit: "cover" }}
            />
          </div>
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
