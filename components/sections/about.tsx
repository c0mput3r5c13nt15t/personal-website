import { useState } from "react";

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
  const tabs = ["motivation", "education", "interests"];
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  function styleText(text: string) {
    return { __html: text.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>") };
  }

  return (
    <section className="section">
      <div className="hero bg-base-100 items-start">
        <div className="hero-content w-full max-w-3xl lg:flex-row-reverse items-start">
          <div className="flex flex-col gap-3 w-full cursor-default">
            <h1 className="section-title">{title}</h1>
            <div className="tabs w-full justify-start">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`tab sm:tab-lg tab-bordered transition-all capitalize ${
                    tab === activeTab ? "tab-active" : ""
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
              <div className="grow tab-bordered" />
            </div>
            <div className="flex flex-row flex-wrap">
              {/* Motivation tab */}
              <div
                className={`about-me-tab ${
                  activeTab !== "motivation" ? "opacity-0" : ""
                }`}
              >
                <p
                  className="sm:text-lg"
                  dangerouslySetInnerHTML={styleText(motivation)}
                />
              </div>
              {/* Education tab */}
              <div
                className={`about-me-tab ${
                  activeTab !== "education" ? "opacity-0" : ""
                }`}
              >
                <p
                  className="sm:text-lg"
                  dangerouslySetInnerHTML={styleText(education)}
                />
              </div>
              {/* Interests tab */}
              <div
                className={`about-me-tab ${
                  activeTab !== "interests" ? "opacity-0" : ""
                }`}
              >
                <div className="flex flex-col gap-8">
                  <div className="flex flex-wrap gap-x-2 gap-y-2 sm:gap-y-3">
                    {interests &&
                      interests.map((interest, i) => {
                        const items = interest.elements?.map((element, j) => (
                          <div
                            className={`badge badge-outline sm:badge-lg capitalize ${
                              typeof element === "object" &&
                              (element.experienced ? "badge-primary font-medium" : "") +
                                " " +
                                (element.new ? "badge-accent font-medium" : "")
                            }`}
                            key={i + "-" + j}
                          >
                            {typeof element === "string" && element}
                            {typeof element === "object" && element.name}
                          </div>
                        ));
                        if (i !== interests.length - 1) {
                          items.push(<div key={i + "-end"}>|</div>);
                        }
                        return items;
                      })}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
