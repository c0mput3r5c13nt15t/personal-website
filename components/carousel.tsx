import HeroiconsWrapper from "./heroiconsWrapper";

export default function Carousel({
  id
}: {
  id?: string;
}): JSX.Element {
  const slides = [
    {
      title: "Slide 1",
      theme: "valentine",
    },
    {
      title: "Slide 2",
      theme: "dark",
    },
    {
      title: "Slide 3",
      theme: "cyberpunk",
    },
  ];

  return (
    <section id={id} className="carousel w-full h-screen">
      {slides.map((item, index) => (
        <article
          data-theme={item.theme}
          id={`slide${index}`}
          key={index}
          className="carousel-item relative w-full"
        >
          <div className="w-full h-full flex justify-center items-center py-10">
            <div
              className="card w-96 bg-base-100 shadow-xl"
              data-theme={item.theme}
            >
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            {/* Button left */}
            <a
              href={`#slide${index - 1}`}
              className={`btn btn-circle btn-ghost hidden sm:flex ${
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
              className={`btn btn-circle btn-ghost hidden sm:flex  ${
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
