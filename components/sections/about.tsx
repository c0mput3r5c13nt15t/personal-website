import { useState } from "react";
import CodeWindow from "../codeWindow";
import { db } from "@/lib/firebase";
import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";

export default function About({ me }: { me: any }) {
  const keysByOrderForMe = [
    "name",
    "age",
    "education",
    "emoji-representation",
    "fields",
    "languages",
    "contact",
    "German",
    "English",
    "French",
  ];

  return (
    <section id="about" className="section">
      <div className="hero min-h-screen">
        <div className="hero-content w-full max-w-3xl flex-col lg:flex-row-reverse">
          <div className="grid grid-cols-2 w-full">
            <div>Bla</div>
            <div>
              <CodeWindow object={me} keysByOrder={keysByOrderForMe} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
