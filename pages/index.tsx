import Head from "next/head";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";
import Navbar from "@/components/navBar";
import Landing, { LandingProps } from "@/components/sections/landing";
import Work from "@/components/sections/work";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function getStaticProps() {
  const landingPageProps = getDoc(doc(db, "sections", "landing")).then(
    (doc) => {
      return {
        titles: doc.data()?.titles || ["Error fetching titles"],
        welcomeText: doc.data()?.welcomeText || "Error fetching welcome text",
      };
    }
  ) as Promise<LandingProps>;

  return {
    props: {
      landingPageProps: await landingPageProps,
    },
    revalidate: parseInt(process.env.REVALIDATE_SECONDS || "3600", 10),
  };
}

export default function Home({
  landingPageProps,
}: {
  landingPageProps: LandingProps;
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
        <Landing {...landingPageProps} />
        <About />
        <Work />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
