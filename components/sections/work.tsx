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
    <section id="work" className="carousel w-full min-h-screen">
      {slides.map((item, index) => (
        <article
          data-theme={item.theme}
          id={`slide${index}`}
          key={index}
          className="carousel-item relative w-full"
        >
          <div className="w-full h-full flex justify-center items-center p-2 bg-base-200">
            <div
              className="card lg:card-side w-full max-w-3xl bg-base-100 shadow-xl h-fit"
              data-theme={item.theme}
            >
              {item.image && (
                <figure className="bg-red-500 lg:max-w-xs max-h-40 lg:max-h-max">
                  <Image
                    className="w-full object-cover h-full !relative"
                    src={item.image}
                    alt="Album"
                    fill={true}
                  />
                </figure>
              )}
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <div className="flex flex-row gap-1 flex-wrap">
                  {item.tags.map((tag, index) => (
                    <div
                      key={index}
                      className="badge badge-outline badge-accent"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  voluptatum, quibusdam, voluptate, quia voluptas quod
                  voluptatem quos dolorum quae voluptatibus quidem. Quisquam
                </p>
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-primary"
                    onClick={() => window.open(item.github, "_blank")}
                  >
                    View on GitHub{" "}
                    <HeroiconsWrapper className="h-5 w-5">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </HeroiconsWrapper>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            {/* Button left */}
            <a
              href={`#slide${index - 1}`}
              className={`btn btn-circle btn-ghost hidden lg:flex ${
                index === 0 && "invisible"
              }`}
            >
              <HeroiconsWrapper>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </HeroiconsWrapper>
            </a>
            {/* Button right */}
            <a
              href={`#slide${index + 1}`}
              className={`btn btn-circle btn-ghost hidden lg:flex  ${
                index === slides.length - 1 ? "invisible" : ""
              }`}
            >
              <HeroiconsWrapper>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </HeroiconsWrapper>
            </a>
          </div>
        </article>
      ))}
    </section>
  );
}
