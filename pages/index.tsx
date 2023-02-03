import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";
import Clock from "react-live-clock";

interface Link {
  text: string;
  url: string;
}

export default function Home() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const body = document.body;
    body.setAttribute("data-theme", theme);
  }, [theme]);

  const user = {
    name: "Paul Maier",
    profilePic: "image:/thirteen.svg",
    email: "pauljustus279@gmail.com",
    born: true,
    language: ["german", "english"],
    projectBuilt: 2,
    sports: undefined,
    github: {
      text: "github",
      url: "https://github.com",
    } as Link,
  };

  const projects = [
    {
      name: "Next.js",
      url: "https://nextjs.org",
      profilePic: "image:/thirteen.svg",
      email: "pauljustus279@gmail.com",
      born: true,
      language: ["german", "english"],
      projectBuilt: 2,
      sports: undefined,
      github: {
        text: "github",
        url: "https://github.com",
      } as Link,
    },
    {
      name: "React",
      url: "https://reactjs.org",
      profilePic: "image:/thirteen.svg",
      email: "pauljustus279@gmail.com",
      born: true,
      language: ["german", "english"],
      projectBuilt: 2,
      sports: undefined,
      github: {
        text: "github",
        url: "https://github.com",
      } as Link,
    },
    {
      name: "React",
      url: "https://reactjs.org",
      profilePic: "image:/thirteen.svg",
      email: "pauljustus279@gmail.com",
      born: true,
      language: ["german", "english"],
      projectBuilt: 2,
      sports: undefined,
      github: {
        text: "github",
        url: "https://github.com",
      } as Link,
    },
    {
      name: "React",
      url: "https://reactjs.org",
      profilePic: "image:/thirteen.svg",
      email: "pauljustus279@gmail.com",
      born: true,
      language: ["german", "english"],
      projectBuilt: 2,
      sports: undefined,
      github: {
        text: "github",
        url: "https://github.com",
      } as Link,
    },
    {
      name: "React",
      url: "https://reactjs.org",
      profilePic: "image:/thirteen.svg",
      email: "pauljustus279@gmail.com",
      born: true,
      language: ["german", "english"],
      projectBuilt: 2,
      sports: undefined,
      github: {
        text: "github",
        url: "https://github.com",
      } as Link,
    },
  ];

  function displayValue(value: any): ReactNode {
    if (typeof value === "string") {
      if (value.startsWith("http://") || value.startsWith("https://")) {
        return (
          <>
            <Link href={value}>
              <span className="value-string">
                "<span className="underline">{value}</span>"
              </span>
            </Link>
            <span className="white">,</span>
          </>
        );
      } else if (value.includes("@")) {
        return (
          <>
            <Link href={"mailto:" + value}>
              <span className="value-string">
                "<span className="underline">{value}</span>"
              </span>
            </Link>
            <span className="white">,</span>
          </>
        );
      } else if (value.startsWith("image:")) {
        return (
          <>
            <Image
              src={value.replace("image:", "")}
              width={20}
              height={20}
              className="inline-block"
              alt=" "
            />
            <Link href={value.replace("image:", "")}>
              <span className="ml-1 value-string">
                <span className="underline">
                  {value.replace("image:/", "")}
                </span>
              </span>
            </Link>
            <span className="white">,</span>
          </>
        );
      }
      return (
        <>
          <span className="value-string">"{value}"</span>
          <span className="white">,</span>
        </>
      );
    } else if (typeof value === "boolean") {
      return (
        <>
          <span className="value-boolean">{value.toString()}</span>
          <span className="white">,</span>
        </>
      );
    } else if (typeof value === "number") {
      return (
        <>
          <span className="value-number">{value.toString()}</span>
          <span className="white">,</span>
        </>
      );
    } else if (typeof value === "undefined") {
      return (
        <>
          <span className="value-undefined">undefined</span>
          <span className="white">,</span>
        </>
      );
    } else if (typeof value === "object") {
      return (
        <>
          <span className="brackets">{"{"}</span>{" "}
          {Object.keys(value).map((key) => (
            <pre key={key} className="ml-4">
              <span className="key">{key}: </span>
              {displayValue(value[key])}
            </pre>
          ))}
          <pre className="brackets">
            {"}"}
            <span className="white">,</span>
          </pre>
        </>
      );
    }
    return <span className="value-error">Error loading</span>;
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col">
        <div className="hero md:min-h-screen bg-base-200">
          <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <div className="bg-slate-500 bg-opacity-40 w-full h-5 absolute top-0 left-0 z-10 backdrop-blur-3xl flex flex-row justify-between items-center">
              <p className="text-white text-sm font-semibold mx-4">
                <Link href={"https://github.com/c0mput3r5c13nt15t"}>
                  c0mput3r5c13nt15t
                </Link>
              </p>
              <button
                className="text-white text-sm font-semibold text-center mx-4"
                onClick={toggleTheme}
              >
                {theme === "dark" ? (
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p>Dark</p>
                  </div>
                ) : (
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3"
                    >
                      <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                    </svg>

                    <p>Light</p>
                  </div>
                )}
              </button>
            </div>
            <Image
              alt="Mountains"
              loading="eager"
              src={theme === "dark" ? "/bg-dark.jpg" : "/bg-light.jpg"}
              layout="fill"
              unoptimized={true}
              objectFit="cover"
            />
          </div>
          <div className="hero-content text-left flex-col py-20 lg:py-0">
            <div className="max-w-md">
              <div className="mockup-code bg-zinc-800 text-zinc-600 bg-opacity-95 text-size">
                {/* Loop through the users properties */}
                <pre className="brackets">
                  <span className="const">const</span>{" "}
                  <span className="variable">me</span>{" "}
                  <span className="white">=</span> {"{"}
                </pre>
                {Object.keys(user).map((key) => (
                  <pre key={key} className="ml-4">
                    <span className="key">{key}: </span>
                    {displayValue(user[key])}
                  </pre>
                ))}
                <pre className="brackets">
                  {"}"}
                  <span className="white">;</span>
                </pre>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <div className="flex flex-row justify-center gap-5 md:gap-10 p-5 md:p-10 min-w-min max-w-5xl flex-wrap text-size">
            {projects.map((project) => (
              <div className="mockup-code bg-zinc-800 text-zinc-600 bg-opacity-95 grow">
                {/* Loop through the users properties */}
                <pre className="brackets">
                  <span className="const">const</span>{" "}
                  <span className="variable">{project.name}</span>{" "}
                  <span className="white">=</span> {"{"}
                </pre>
                {Object.keys(project).map((key) => (
                  <pre key={key} className="ml-4">
                    <span className="key">{key}: </span>
                    {displayValue(project[key])}
                  </pre>
                ))}
                <pre className="brackets">
                  {"}"}
                  <span className="white">;</span>
                </pre>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
