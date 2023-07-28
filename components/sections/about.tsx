import { useState } from "react";
import CodeWindow from "../codeWindow";
import { db } from "@/lib/firebase";
import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";

export default function About({ me }: { me: any }) {
  const tabes = ["skills", "motivation", "education"];
  const [activeTab, setActiveTab] = useState<string>("skills");
  const content = {
    skills:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque recusandae earum ut, beatae ratione ipsam qui nobis similique? Impedit sit nostrum nesciunt quis debitis eveniet ea facere repellat qui reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque recusandae earum ut, beatae ratione ipsam qui nobis similique? Impedit sit nostrum nesciunt quis debitis eveniet ea facere repellat qui reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque recusandae earum ut, beatae ratione ipsam qui nobis similique? Impedit sit nostrum nesciunt quis debitis eveniet ea facere repellat qui reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque recusandae earum ut, beatae ratione ipsam qui nobis similique? Impedit sit nostrum nesciunt quis debitis eveniet ea facere repellat qui reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque recusandae earum ut, beatae ratione ipsam qui nobis similique? Impedit sit nostrum nesciunt quis debitis eveniet ea facere repellat qui reiciendis.",
    motivation: "Lorem ipsum2",
    education: "Lorem ipsum3",
  };

  return (
    <section className="section">
      <div className="hero bg-base-100 items-start">
        <div className="hero-content w-full max-w-3xl lg:flex-row-reverse items-start">
          <div className="flex flex-col gap-3 w-full">
            <h1 className="font-bold text-3xl w-full text-center mb-5">
              About Me
            </h1>
            <div className="tabs w-full justify-start">
              {tabes.map((tab) => (
                <a
                  key={tab}
                  className={`tab sm:tab-lg tab-bordered transition-all capitalize ${
                    tab === activeTab ? "tab-active" : ""
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </a>
              ))}
              <div className="grow tab-bordered" />
            </div>
            <div className="flex flex-row">
              <div
                className={`block w-full -mr-[100%] ${
                  activeTab !== "skills" ? "invisible" : ""
                }`}
              >
                <p className="sm:text-lg">{content["skills"]}</p>
              </div>
              <div
                className={`block w-full -mr-[100%] ${
                  activeTab !== "motivation" ? "invisible" : ""
                }`}
              >
                <progress className="progress" value={0} max="100"></progress>
                <progress className="progress" value="10" max="100"></progress>
                <progress className="progress" value="40" max="100"></progress>
                <progress className="progress" value="70" max="100"></progress>
                <progress className="progress" value="100" max="100"></progress>
              </div>
              <div
                className={`block w-full -mr-[100%] ${
                  activeTab !== "education" ? "invisible" : ""
                }`}
              >
                <p className="sm:text-lg">{content["education"]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
