import Image from "next/image";
import { useEffect, useState } from "react";

export type LandingProps = {
  titles: string[];
  welcomeText: string;
};

export default function Landing({
  titles,
  welcomeText,
}: LandingProps): JSX.Element {
  const isDarkMode = false;

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
      <Image
        id="about"
        alt="Wave"
        className="themed-svg scale-y-[20%] translate-y-[calc(40%+1px)]"
        src={"/assets/wave-inverted.svg"}
        fill={true}
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
                  style={{ objectFit: "contain" }}
                  priority={true}
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

              <p className="pb-6 pt-1 text-lg text-black hidden sm:block">
                {welcomeText}
              </p>
              <button
                className="btn btn-primary invisible sm:visible"
                onClick={() => {
                  document
                    .querySelector("#about")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                More about me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
