import useRemoteConfig from "@/lib/firebase/useRemoteConfig";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Landing() {
  const isDarkMode = false;
  const [titles] = useRemoteConfig<string[]>("titles_landing", [
    "Paul Maier",
    "a student",
    "a developer",
    "a designer",
    "a maker",
    "a team player",
  ]);
  const [text] = useRemoteConfig<string>("text_landing", "Hello there!");

  useEffect(() => {
    let iteration = 0;
    document
      .getElementById("typingContent")
      ?.addEventListener("animationiteration", () => {
        iteration += 1;
        document.getElementById("typingContent")!.innerHTML =
          titles[iteration % titles.length];
      });
  }, [titles]);

  function scrollDown() {
    document.getElementById("bottom")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="landing" className="section">
      <div className="text-accent absolute h-full w-full overflow-hidden">
        <Image
          alt="Background"
          src={"/assets/bg-landing.svg"}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <Image
          alt="Drone"
          src={"/assets/drone.svg"}
          width={100}
          height={100}
          className="absolute animate-hover top-3/4 right-96"
        />
        <Image
          alt="Drone"
          src={"/assets/drone.svg"}
          width={100}
          height={100}
          className="absolute animate-hover top-1/2 left-60"
        />
      </div>
      <div className="hero min-h-screen">
        <div className="hero-content w-full max-w-3xl flex-col lg:flex-row gap-14">
          <div className="avatar">
            <div className="w-40 lg:w-60 rounded-full shadow-lg">
              <Image
                alt="Profile picture"
                src={"/pp.jpg"}
                width={400}
                height={400}
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold inline-block w-full">
              Hi there! I am
              <div className="w-max">
                <div
                  id="typingContent"
                  className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-primary pr-3 text-4xl font-bold text-primary"
                >
                  {titles[0]}
                </div>
              </div>
            </h1>

            <p className="pb-6 pt-3">
              {text}
            </p>
            <a href="#about" className="btn btn-accent">
              More about me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
