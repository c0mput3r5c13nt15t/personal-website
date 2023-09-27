import HeroiconsWrapper from "../heroiconsWrapper";

export type Project = {
  title: string;
  start?: string;
  end?: string;
  descr: string;
  order?: number;
  link: {
    text: string;
    href: string;
  };
};

export type WorkProps = {
  title: string;
  projects: Project[];
};

export default function Work({ title, projects }: WorkProps): JSX.Element {
  return (
    <section id="work" className="section relative flex-col">
      <h1 className="section-title absolute left-1/2 top-40 -translate-x-1/2 w-full z-10">
        {title}
      </h1>
      <div className="carousel w-full bg-base-100">
        {projects.reverse()
        .map((project, index) => (
          <article
            id={`project${index}`}
            key={index}
            className="carousel-item relative w-full pt-60 pb-64"
          >
            <>
              {index !== 0 && (
                <button
                  className="hidden 2xl:flex btn btn-square btn-ghost absolute left-1/4 top-1/2 !-translate-y-1/2 !-translate-x-1/2 z-10"
                  onClick={() => {
                    document
                      .querySelector("#project" + (index - 1))
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
              )}
              {index !== projects.length - 1 && (
                <button
                  className="hidden 2xl:flex btn btn-square btn-ghost absolute left-3/4 top-1/2 !-translate-y-1/2 !-translate-x-1/2 z-10"
                  onClick={() => {
                    document
                      .querySelector("#project" + (index + 1))
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
              )}
            </>
            <div className="max-w-3xl mx-auto px-3">
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold w-full">{project.title}</h1>
                {project.start && (
                  <h2 className="text-sm opacity-70 uppercase mb-2">
                    {project.start} - {project.end || "today"}
                  </h2>
                )}
                <p className="sm:text-lg mb-1">{project.descr}</p>
                <a
                  className="link text-primary"
                  href={project.link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.link.text}
                  <HeroiconsWrapper className="inline-block h-5 w-5 ml-1 -translate-y-1">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </HeroiconsWrapper>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="btn-group absolute left-1/2 bottom-48 -translate-x-1/2">
        {Array(projects.length)
          .fill(0)
          .map((_, index) => (
            <button
              key={index}
              className="btn btn-primary btn-sm"
              onClick={() => {
                document
                  .querySelector("#project" + index)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {`${index + 1}`.slice(-2)}
            </button>
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
                        href={`#project${index}`}
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
