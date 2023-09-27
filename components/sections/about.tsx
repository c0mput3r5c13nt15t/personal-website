import { useState } from "react";
import CodeWindow from "../codeWindow";
import { db } from "@/lib/firebase";
import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";

export type skill = {
  name: string;
  level: number;
};

export type AboutProps = {
  title: string;
  motivation: string;
  skills: skill[];
  education: string;
};

export default function About({
  title,
  motivation,
  skills,
  education,
}: AboutProps): JSX.Element {
  const tabs = ["motivation", "education", "skills"];
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  function styleText(text: string) {
    return { __html: text.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>") };
  }

  return (
    <section className="section">
      <div className="hero bg-base-100 items-start">
        <div className="hero-content w-full max-w-3xl lg:flex-row-reverse items-start">
          <div className="flex flex-col gap-3 w-full">
            <h1 className="section-title">
              {title}
            </h1>
            <div className="tabs w-full justify-start">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`tab tab-md sm:tab-lg tab-bordered transition-all capitalize ${
                    tab === activeTab ? "tab-active" : ""
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
              <div className="grow tab-bordered" />
            </div>
            <div className="flex flex-row">
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
              <div
                className={`about-me-tab ${
                  activeTab !== "skills" ? "opacity-0" : ""
                }`}
              >
                {skills.map((skill) => (
                  <div
                    className="grid grid-cols-5 sm:grid-cols-6 gap-2 sm:gap-3"
                    key={skill.name}
                  >
                    <p className="text-sm sm:text-lg text-right">
                      {skill.name}
                    </p>
                    <progress
                      className="progress progress-primary col-span-4 sm:col-span-5 sm:h-3 my-auto"
                      value={skill.level}
                      max="100"
                    />
                  </div>
                ))}
                {skills.length === 0 && (
                  <p className="text-sm sm:text-lg text-right">
                    Error while fetching content
                  </p>
                )}
              </div>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
