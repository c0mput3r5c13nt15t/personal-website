import Image from "next/image";
import { useEffect, useState } from "react";

export default function Landing() {
  const isDarkMode = false;

  const iam = [
    "Paul Maier",
    "a student",
    "a developer",
    "a designer",
    "a maker",
    "a team player",
  ];

  useEffect(() => {
    let test = 0;
    document
      .getElementById("typingContent")
      ?.addEventListener("animationiteration", () => {
        test += 1;
        const texts = ["Paul Maier", "C0mput3r5c13nt15t", "a student"];
        document.getElementById("typingContent")!.innerHTML =
          iam[test % iam.length];
      });
  }, []);

  function scrollDown() {
    document.getElementById("bottom")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="landing" className="section">
      <div className="text-accent absolute h-full w-full overflow-hidden">
        <svg
          className="min-h-full min-w-full relative left-1/2 -translate-x-1/2"
          viewBox="0 0 900 600"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <rect x="0" y="0" width="900" height="600" fill="transparent"></rect>
          <defs>
            <linearGradient id="grad1_0" x1="33.3%" y1="0%" x2="100%" y2="100%">
              <stop offset="20%" stopColor="transparent" stopOpacity="1"></stop>
              <stop offset="80%" stopColor="transparent" stopOpacity="1"></stop>
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="grad2_0" x1="0%" y1="0%" x2="66.7%" y2="100%">
              <stop offset="20%" stopColor="transparent" stopOpacity="1"></stop>
              <stop offset="80%" stopColor="transparent" stopOpacity="1"></stop>
            </linearGradient>
          </defs>
          <g transform="translate(900, 0)">
            <path
              d="M0 486.7C-51.7 445.9 -103.3 405.1 -158 381.6C-212.8 358 -270.5 351.7 -323.1 323.1C-375.8 294.6 -423.3 243.8 -449.7 186.3C-476.1 128.7 -481.4 64.4 -486.7 0L0 0Z"
              fill="currentColor"
            ></path>
          </g>
          <g transform="translate(0, 600)">
            <path
              d="M0 -486.7C51.4 -454.3 102.8 -421.9 167.6 -404.7C232.4 -387.4 310.5 -385.4 344.2 -344.2C377.9 -303 367.1 -222.7 383.4 -158.8C399.8 -94.9 443.3 -47.5 486.7 0L0 0Z"
              fill="currentColor"
            ></path>
          </g>
        </svg>
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
                  {iam[0]}
                </div>
              </div>
            </h1>

            <p className="pb-6 pt-3">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <a href="#about" className="btn btn-primary">
              More about me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
