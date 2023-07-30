import Head from "next/head";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";
import Navbar from "@/components/navBar";
import Landing, { LandingProps } from "@/components/sections/landing";
import Work, { Project, WorkProps } from "@/components/sections/work";
import About, { AboutProps, skill as Skill } from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function getStaticProps() {
  // Get props for landing section
  const landingProps = getDoc(doc(db, "sections", "landing")).then((doc) => {
    return {
      titles: doc.data()?.titles || ["Error fetching titles"],
      welcomeText: doc.data()?.welcomeText || "Error fetching welcome text",
    };
  }) as Promise<LandingProps>;

  // Get props for about section
  const aboutProps = getDoc(doc(db, "sections", "about")).then((doc) => {
    return {
      title: (doc.data()?.title || "Error fetching title") as string,
      motivation: (doc.data()?.motivation ||
        "Error fetching motivation") as string,
      skills: (doc.data()?.skills || []) as Skill[],
      education: (doc.data()?.education ||
        "Error fetching education") as string,
    };
  }) as Promise<AboutProps>;

  // Get props for work section
  const workProps = getDoc(doc(db, "sections", "work")).then((doc) => {
    return {
      title: (doc.data()?.title || "Error fetching title") as string,
      projects: (doc.data()?.projects || []) as Project[],
    };
  }) as Promise<WorkProps>;

  return {
    props: {
      landingProps: await landingProps,
      aboutProps: await aboutProps,
      workProps: await workProps,
    },
    revalidate: parseInt(process.env.SECONDS_BETWEEN_REVALIDATION || "3600", 10),
  };
}

export default function Index({
  landingProps,
  aboutProps,
  workProps,
}: {
  landingProps: LandingProps;
  aboutProps: AboutProps;
  workProps: WorkProps;
}) {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
        <title>Paul Maier (c0mput3r5c13nt15t)</title>
        <meta
          name="description"
          content="Hi there, I am Paul Maier and this is my personal website."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col w-full">
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Landing {...landingProps} />
        <About {...aboutProps} />
        <Work {...workProps}/>
        <Contact />
        <Footer />
      </main>
    </>
  );
}
