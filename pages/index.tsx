import Head from "next/head";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";
import Navbar from "@/components/navBar";
import Landing, { LandingProps } from "@/components/sections/landing";
import Work, { Project, WorkProps } from "@/components/sections/work";
import About, { AboutProps, skill as Skill } from "@/components/sections/about";
import Contact, { ContactProps } from "@/components/sections/contact";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function getStaticProps() {
  // Get props for landing section
  const landingProps = getDoc(doc(db, "sections", "landing")).then((doc) => {
    return {
      titles: doc.data()?.titles || ["Paul Maier"],
      welcomeText: doc.data()?.welcomeText || "Error fetching welcome text",
    };
  }) as Promise<LandingProps>;

  // Get props for about section
  const aboutProps = getDoc(doc(db, "sections", "about")).then((doc) => {
    return {
      title: (doc.data()?.title || "About me") as string,
      motivation: (doc.data()?.motivation ||
        "Error while fetching content") as string,
      skills: (doc.data()?.skills || []) as Skill[],
      education: (doc.data()?.education ||
        "Error while fetching content") as string,
    };
  }) as Promise<AboutProps>;

  // Get props for work section
  const workProps = getDoc(doc(db, "sections", "work")).then((doc) => {
    return {
      title: (doc.data()?.title || "My recent projects") as string,
      projects: (doc.data()?.projects || []) as Project[],
    };
  }) as Promise<WorkProps>;

  // Get props for contact section
  const contactProps = getDoc(doc(db, "sections", "contact")).then((doc) => {
    return {
      title: (doc.data()?.title || "Get in touch") as string,
      contact: {
        linkedin: (doc.data()?.contact?.linkedin || "") as string,
        github: (doc.data()?.contact?.github || "") as string,
        mail: (doc.data()?.contact?.mail || "") as string,
      },
    };
  });

  return {
    props: {
      landingProps: {
        ...(await landingProps),
        github: await contactProps.then((props) => props.contact.github), // Would be better to extract
      },
      aboutProps: await aboutProps,
      workProps: await workProps,
      contactProps: await contactProps,
      year: new Date().getFullYear(),
    },
    revalidate: parseInt(
      process.env.SECONDS_BETWEEN_REVALIDATION || "3600",
      10
    ),
  };
}

export default function Index({
  landingProps,
  aboutProps,
  workProps,
  contactProps,
  year,
}: {
  landingProps: LandingProps;
  aboutProps: AboutProps;
  workProps: WorkProps;
  contactProps: ContactProps;
  year: number;
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
        <Work {...workProps} />
        <Contact {...contactProps} />
        <Footer year={year} />
      </main>
    </>
  );
}
