import HeroiconsWrapper from "../heroiconsWrapper";
import Image from "next/image";

export default function Work(): JSX.Element {
  const slides = [
    {
      title: "Diribitio",
      tags: ["Angular", "Laravel", "Python", "Docker"],
      theme: "diribitio",
      github: "https://github.com/diribitio/diribitio",
    },
    {
      title: "Birklehof IT",
      tags: ["React", "Next.js", "TailwindCSS", "TypeScript"],
      theme: "birklehof",
      image: "/assets/birklehof.jpg",
      github: "https://github.com/Birklehof",
    },
    {
      title: "Astro Pi",
      tags: ["Python", "Machine Learning", "Raspberry Pi"],
      theme: "astropi",
      github: "https://github.com/cloudic-ai",
    },
  ];

  return (
    <section id="work" className="section relative flex-col">
      <h1 className="font-bold text-3xl absolute left-1/2 top-44 -translate-x-1/2">
        My recent projects
      </h1>
      <div className="carousel w-full bg-base-100">
        {slides.map((item, index) => (
          <article
            id={`slide${index}`}
            key={index}
            className="carousel-item relative w-full pt-64 pb-64"
          >
            <>
              <button
                className="btn btn-circle btn-ghost absolute left-1/4 top-1/2 !-translate-y-1/2 !-translate-x-1/2 z-10"
                onClick={() => {
                  document
                    .querySelector("#slide" + (index - 1))
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <HeroiconsWrapper>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </HeroiconsWrapper>
              </button>
              <button
                className="btn btn-circle btn-ghost absolute left-3/4 top-1/2 !-translate-y-1/2 !-translate-x-1/2 z-10"
                onClick={() => {
                  document
                    .querySelector("#slide" + (index + 1))
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <HeroiconsWrapper>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </HeroiconsWrapper>
              </button>
            </>
            <div className="max-w-3xl mx-auto px-3">
              <div className="flex flex-row gap-5">
                <Image
                  alt="Project image"
                  src={item.image ?? "/assets/pp.jpg"}
                  width={400}
                  height={400}
                  className="rounded-lg shadow-lg w-40"
                  style={{ objectFit: "cover" }}
                />
                <div className="flex flex-col gap-3">
                  <h1 className="text-xl font-bold w-full">{item.title}</h1>
                  <p className="text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Omnis eligendi, cupiditate esse harum optio repellat nemo,
                    dolor recusandae velit repellendus quae? Commodi qui
                    laboriosam illo culpa dicta facere. Exercitationem, in.
                  </p>
                  <a
                    className="link text-accent"
                    href={item.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on GitHub
                    <HeroiconsWrapper
                      className="inline-block h-5 w-5 ml-1 -translate-y-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </HeroiconsWrapper>
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      {/* <div className="hero bg-base-100 items-start">
        <div className="hero-content max-w-none w-full lg:flex-row-reverse items-start px-0">
          <div className="flex flex-col gap-3 w-full items-center">
            <div className="tabs max-w-3xl w-full justify-start px-4">
              <a className="tab tab-lg tab-bordered transition-all tab-active">
                Projects
              </a>
              <div className="grow tab-bordered" />
            </div>
            <div className="flex flex-row w-full">
              <div className="block w-full">
                <div className="carousel">
                  {slides.map((item, index) => (
                    <article
                      id={`slide${index}`}
                      key={index}
                      className="carousel-item relative w-full pt-40"
                    >
                      <div className="max-w-3xl mx-auto px-3">
                        <h1 className="text-2xl font-bold mb-2 w-full min-w-0">
                          {item.title}
                        </h1>
                        <p className="min-w-0">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis eligendi, cupiditate esse harum optio repellat nemo, dolor recusandae velit repellendus quae? Commodi qui laboriosam illo culpa dicta facere. Exercitationem, in.
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
                <div className="flex justify-center w-full py-2 gap-2 pb-40">
                  {Array(slides.length)
                    .fill(0)
                    .map((_, index) => (
                      <a
                        href={`#slide${index}`}
                        key={index}
                        className="btn h-4 w-4 min-h-0 btn-circle btn-primary"
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
