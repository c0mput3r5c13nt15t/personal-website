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
  const [text] = useRemoteConfig<string>(
    "text_landing",
    "On this website you can learn about me, my goals and the projects I worked or still am working on. If you want to, feel free to contact me."
  );

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
    <>
      <Image
        alt="Background"
        src={"/assets/bg-landing.svg"}
        fill={true}
        quality={100}
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <div className="custom-shape-divider-bottom-1690479286">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <section id="landing" className="section">
        <div className="hero min-h-screen">
          <div className="hero-content w-full max-w-[18rem] sm:max-w-3xl">
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 sm:mb-36 items-center">
              <div className="avatar ml-auto mr-auto">
                <div className="w-full rounded-full shadow-lg">
                  <Image
                    alt="Profile picture"
                    src={"/assets/pp.jpg"}
                    width={400}
                    height={400}
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
              <div className="text-zinc-900">
                <h1 className="text-3xl font-bold inline-block text-ellipsis overflow-hidden">
                  Hi there! I am
                  <div className="w-min max-w-[18rem]">
                    <div
                      id="typingContent"
                      className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-primary pr-3 text-4xl font-bold text-primary"
                    >
                      {titles[0]}
                    </div>
                  </div>
                </h1>

                <p className="pb-6 pt-3 text-lg">{text}</p>
                <a href="#about" className="btn btn-accent">
                  More about me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
