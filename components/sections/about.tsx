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
  const tabes = ["motivation", "skills", "education"];
  const [activeTab, setActiveTab] = useState<string>("skills");

  function styleText(text: string) {
    return { __html: text.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>") };
  }

  return (
    <section className="section">
      <div className="hero bg-base-100 items-start">
        <div className="hero-content w-full max-w-3xl lg:flex-row-reverse items-start">
          <div className="flex flex-col gap-3 w-full">
            <h1 className="font-bold text-3xl w-full text-center mb-5">
              {title}
            </h1>
            <div className="tabs w-full justify-start">
              {tabes.map((tab) => (
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
            <div className="flex flex-row">
              <div
                className={`block w-full -mr-[100%] ${
                  activeTab !== "motivation" ? "invisible" : ""
                }`}
              >
                <p
                  className="sm:text-lg"
                  dangerouslySetInnerHTML={styleText(motivation)}
                />
              </div>
              <div
                className={`block w-full -mr-[100%] ${
                  activeTab !== "skills" ? "invisible" : ""
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
                className={`block w-full -mr-[100%] ${
                  activeTab !== "education" ? "invisible" : ""
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
