export type interestElement =
  | string
  | {
      name: string;
      experienced?: boolean;
      new?: boolean;
    };

export type interest = {
  elements: interestElement[];
};

export type AboutProps = {
  title: string;
  motivation: string;
  interests: interest[];
  education: string;
};

export default function About({
  title,
  motivation,
  interests,
  education,
}: AboutProps): JSX.Element {
  const contents: { [id: string]: string | interest[] } = {
    motivation: motivation,
    education: education,
    interests: interests,
  };

  function styleText(text: string) {
    return { __html: text.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>") };
  }

  return (
    <section className="section">
      <div className="hero bg-base-100 items-start">
        <div className="hero-content w-full max-w-3xl lg:flex-row-reverse items-start">
          <div className="flex flex-col gap-3 w-full cursor-default">
            <h1 className="section-title">{title}</h1>
            <div className="tabs tabs-bordered">
              {Object.keys(contents).map((tab) => (
                <>
                  <input
                    key={`${tab}-radio`}
                    type="radio"
                    name="about-tabs"
                    className="tab transition-all capitalize max-w-[calc((100vw-3rem)/3)]"
                    aria-label={tab}
                    defaultChecked={tab === "motivation"}
                  />
                  <div
                    key={`${tab}-content`}
                    aria-labelledby={tab}
                    className="tab-content pt-2"
                  >
                    {contents[tab] ? (
                      (typeof contents[tab] === "string" && (
                        <p
                          className="sm:text-lg"
                          dangerouslySetInnerHTML={styleText(
                            contents[tab] as string
                          )}
                        />
                      )) || (
                        <div className="flex flex-col gap-6 pt-1">
                          <div className="flex flex-wrap gap-x-2 gap-y-2 sm:gap-y-3">
                            {(contents[tab] as interest[]).map(
                              (interest, i) => {
                                const items = interest.elements?.map(
                                  (element, j) => (
                                    <div
                                      key={`${tab}-content-interest-${i}-${j}`}
                                      className={`badge badge-outline sm:badge-lg capitalize ${
                                        typeof element === "object" &&
                                        (element.experienced
                                          ? "badge-primary font-medium"
                                          : "") +
                                          " " +
                                          (element.new
                                            ? "badge-accent font-medium"
                                            : "")
                                      }`}
                                    >
                                      {typeof element === "string" && element}
                                      {typeof element === "object" &&
                                        element.name}
                                    </div>
                                  )
                                );
                                if (i !== interests.length - 1) {
                                  items.push(<div key={i + "-end"}>|</div>);
                                }
                                return items;
                              }
                            )}
                          </div>
                          <div className="flex flex-wrap gap-x-2 gap-y-1 sm:gap-y-3">
                            <div className="badge badge-outline sm:badge-lg badge-primary font-medium">
                              Very Experienced
                            </div>
                            <div className="badge badge-outline sm:badge-lg badge-accent font-medium">
                              Beginner
                            </div>
                          </div>
                        </div>
                      )
                    ) : (
                      <p>Could not find content for tab {tab}</p>
                    )}
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
