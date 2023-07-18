import HeroiconsWrapper from "../heroiconsWrapper";

export default function Work(): JSX.Element {
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
    <section id="work" className="carousel w-full min-h-screen">
      {slides.map((item, index) => (
        <article
          data-theme={item.theme}
          id={`slide${index}`}
          key={index}
          className="carousel-item relative w-full"
        >
          <div className="w-full h-full flex justify-center lg:items-center p-2 bg-base-200">
            <div
              className="card lg:card-side w-full max-w-3xl bg-base-100 shadow-xl"
              data-theme={item.theme}
            >
              <figure className="max-h-40 lg:max-h-full">
                <img
                  className="w-full object-cover"
                  src="https://images.unsplash.com/photo-1689164750404-f9db7b564e60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                  alt="Album"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <div className="flex flex-row gap-1">
                  <div className="badge badge-primary">primary</div>
                  <div className="badge badge-secondary">secondary</div>
                  <div className="badge badge-accent">accent</div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  voluptatum, quibusdam, voluptate, quia voluptas quod
                  voluptatem quos dolorum quae voluptatibus quidem. Quisquam
                </p>
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
