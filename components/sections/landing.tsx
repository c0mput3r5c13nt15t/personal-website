import Image from "next/image";
import { useEffect, useState } from "react";
import HeroiconsWrapper from "../heroiconsWrapper";

export type LandingProps = {
  titles: string[];
  welcomeText: string;
  github: string;
};

export default function Landing({
  titles,
  welcomeText,
  github,
}: LandingProps): JSX.Element {
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

  return (
    <section id="landing" className="section relative">
      <Image
        alt="Background"
        src={"/assets/bg-landing.webp"}
        fill={true}
        quality={100}
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <img
        id="about"
        alt="Wave"
        className="themed-svg scale-y-[20%] translate-y-[calc(40%+1px)] w-full h-full absolute bottom-0 left-0"
        src={"/assets/wave-inverted.svg"}
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
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
                  style={{ objectFit: "cover" }}
                  priority={true}
                />
              </div>
            </div>
            <div className="text-zinc-900 w-full">
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

              <p className="pb-4 text-lg text-black hidden sm:block">
                {welcomeText}
              </p>
              <div className="flex flex-row gap-2 invisible sm:visible">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    document
                      .querySelector("#about")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  More about me
                </button>
                {github && (
                  <a
                    aria-label="GitHub"
                    className="btn btn-square"
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      className="h-7 w-7"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                    >
                      <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="btn btn-circle btn-ghost absolute bottom-0 left-1/2 !-translate-x-1/2 mb-5 sm:hidden"
        onClick={() => {
          document
            .querySelector("#about")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <HeroiconsWrapper>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </HeroiconsWrapper>
      </button>
    </section>
  );
}
