import Head from "next/head";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";
import Navbar from "@/components/navBar";
import Landing, { LandingProps } from "@/components/sections/landing";
import Work, { Project, WorkProps } from "@/components/sections/work";
import About, {
  AboutProps,
  interest as Interest,
} from "@/components/sections/about";
import Contact, { ContactProps } from "@/components/sections/contact";
import { doc, getDoc } from "firebase/firestore/lite";
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
      interests: (doc.data()?.interests || []) as Interest[],
      education: (doc.data()?.education ||
        "Error while fetching content") as string,
    };
  }) as Promise<AboutProps>;

  // Get props for work section
  const workProps = getDoc(doc(db, "sections", "work")).then((doc) => {
    return {
      title: (doc.data()?.title || "My recent projects") as string,
      projects: ((doc.data()?.projects || []) as Project[]).sort(
        (a, b) => (b.order || 0) - (a.order || 0)
      ),
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
        discord: (doc.data()?.contact?.discord || "") as string,
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
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDarkMode(true);
    }

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        setIsDarkMode(e.matches);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Paul Maier (c0mput3r5c13nt15t)</title>

        {/* Meta tags for search engines */}
        <meta
          key="description"
          name="description"
          content="Hi there, I am Paul Maier and this is my personal website."
        />
        <meta
          key="keywords"
          name="keywords"
          content={[
            "Paul Maier",
            "c0mput3r5c13nt15t",
            "Cybersecurity",
            "Computer Science",
            "Software Engineering",
          ].join(", ")}
        />
        <meta name="author" content="Paul Maier" />

        {/* Open Graph (OG) tags for link previews */}
        <meta key="og-title" property="og:title" content="Paul Maier" />
        <meta
          key="og-description"
          property="og:description"
          content="Hi there, I am Paul Maier and this is my personal website."
        />
        <meta
          key="og-image"
          property="og:image"
          content="https://paulmaier.online/assets/landing/pp.jpg"
        />
        <meta
          key="og-url"
          property="og:url"
          content="https://paulmaier.online"
        />

        {/* Twitter card tags for link previews */}
        <meta key="twitter-title" name="twitter:title" content="Paul Maier" />
        <meta
          key="twitter-description"
          name="twitter:description"
          content="Hi there, I am Paul Maier and this is my personal website."
        />
        <meta
          key="twitter-image"
          name="twitter:image"
          content="https://paulmaier.online/assets/landing/pp.jpg"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col w-full">
        <Navbar />
        <Landing {...landingProps} />
        <About {...aboutProps} />
        <Work {...workProps} />
        <Contact {...contactProps} />
        <Footer year={year} />
      </main>
    </>
  );
}
