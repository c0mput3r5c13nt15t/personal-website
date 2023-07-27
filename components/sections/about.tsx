import { useState } from "react";
import CodeWindow from "../codeWindow";
import { db } from "@/lib/firebase";
import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";

export default function About({ me }: { me: any }) {
  const [tab, setTab] = useState<"skills" | "motivation" | "education">(
    "skills"
  );
  const content = {
    skills:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque recusandae earum ut, beatae ratione ipsam qui nobis similique? Impedit sit nostrum nesciunt quis debitis eveniet ea facere repellat qui reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque recusandae earum ut, beatae ratione ipsam qui nobis similique? Impedit sit nostrum nesciunt quis debitis eveniet ea facere repellat qui reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque recusandae earum ut, beatae ratione ipsam qui nobis similique? Impedit sit nostrum nesciunt quis debitis eveniet ea facere repellat qui reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque recusandae earum ut, beatae ratione ipsam qui nobis similique? Impedit sit nostrum nesciunt quis debitis eveniet ea facere repellat qui reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque recusandae earum ut, beatae ratione ipsam qui nobis similique? Impedit sit nostrum nesciunt quis debitis eveniet ea facere repellat qui reiciendis.",
    motivation: "Lorem ipsum2",
    education: "Lorem ipsum3",
  };

  return (
    <section className="section">
      <div className="hero bg-base-100 items-start pb-20 pt-10">
        <div className="hero-content w-full max-w-3xl lg:flex-row-reverse items-start">
          <div className="flex flex-col gap-3 w-full">
            <div className="tabs w-full justify-start">
              <a
                className={`tab tab-bordered transition-all	 ${
                  tab === "skills" ? "tab-active" : ""
                }`}
                onClick={() => setTab("skills")}
              >
                Skills
              </a>
              <a
                className={`tab tab-bordered transition-all	 ${
                  tab === "motivation" ? "tab-active" : ""
                }`}
                onClick={() => setTab("motivation")}
              >
                Motivation
              </a>
              <a
                className={`tab tab-bordered transition-all	 ${
                  tab === "education" ? "tab-active" : ""
                }`}
                onClick={() => setTab("education")}
              >
                Education
              </a>
              <div className="grow tab-bordered" />
            </div>
            <div className="flex flex-row">
              <div
                className={`block w-full -mr-[100%] ${
                  tab !== "skills" ? "invisible" : ""
                }`}
              >
                <p>{content["skills"]}</p>
              </div>
              <div
                className={`block w-full -mr-[100%] ${
                  tab !== "motivation" ? "invisible" : ""
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
                  tab !== "education" ? "invisible" : ""
                }`}
              >
                {content["education"]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
