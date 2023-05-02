import Link from "next/link";
import { ReactNode } from "react";
import Image from "next/image";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

export default function CodeWindow({
  object,
  keysByOrder,
  hiddenKeys = [],
  variableName,
}: {
  object: any;
  keysByOrder: string[];
  hiddenKeys?: string[];
  variableName?: string;
}) {
  function compareObjectPropertyKeys(a: string, b: string) {
    const aIndex = keysByOrder.indexOf(a);
    const bIndex = keysByOrder.indexOf(b);
    if (aIndex === -1 && bIndex === -1) {
      // compare alphabetically
      return a.localeCompare(b);
    } else if (aIndex === -1) {
      return 1;
    } else if (bIndex === -1) {
      return -1;
    } else {
      return aIndex - bIndex;
    }
  }

  const abbreviations: { [key: string]: string } = {
    Jugend: "Ju",
    forscht: "Fo",
    Bundeswettbewerb: "Bw",
    Informatik: "Inf",
    Chemie: "Ch",
    Schülerstudium: "SchüStu",
    Wintersemester: "WS",
    AI: "AI",
    "2022/23": "2223",
  };

  function abbreviate(name: string) {
    if (name.indexOf(" ") >= 0) {
      const words = name.split(" ");
      let abbreviation = "";
      for (let i = 0; i < words.length; i++) {
        if (abbreviations[words[i]]) {
          abbreviation += abbreviations[words[i]];
          continue;
        }

        if (words[i][0] === words[i][0].toLowerCase()) {
          const lastChar = abbreviation.slice(-1);
          if (i === 0 || (lastChar && lastChar == lastChar.toUpperCase())) {
            abbreviation += words[i].toLowerCase();
            continue;
          }
          abbreviation += words[i][0].toUpperCase() + words[i].slice(1);
          continue;
        }

        abbreviation += words[i][0];
      }

      // if the abbreviation is all uppercase, make it lowercase
      if (abbreviation === abbreviation.toUpperCase()) {
        return abbreviation.toLowerCase();
      }

      return abbreviation;
    } else {
      return name.toLowerCase();
    }
  }

  function displayValue(value: any): ReactNode {
    if (typeof value === "string") {
      if (value.startsWith("http://") || value.startsWith("https://")) {
        return (
          <>
            <Link href={value} target="_blank">
              <span className="value-string">
                &quot;<span className="underline">{value}</span>&quot;
              </span>
            </Link>
            <span className="white">,</span>
          </>
        );
      } else if (value.includes("@")) {
        return (
          <>
            <Link href={"mailto:" + value} target="_blank">
              <span className="value-string">
                &quot;<span className="underline">{value}</span>&quot;
              </span>
            </Link>
            <span className="white">,</span>
          </>
        );
      } else if (value.startsWith("image:")) {
        return (
          <>
            <Image
              src={value.replace("image:", "")}
              width={20}
              height={20}
              className="inline-block"
              alt=" "
            />
            <Link href={value.replace("image:", "")} target="_blank">
              <span className="ml-1 value-string">
                <span className="underline">
                  {value.replace("image:/", "")}
                </span>
              </span>
            </Link>
            <span className="white">,</span>
          </>
        );
      }
      return (
        <>
          <span className="value-string inline-block break-before-all whitespace-normal">
            &quot;{value}&quot;<span className="white">,</span>
          </span>
        </>
      );
    } else if (typeof value === "boolean") {
      return (
        <>
          <span className="value-boolean">
            {value.toString()}
            <span className="white">,</span>
          </span>
        </>
      );
    } else if (typeof value === "number") {
      return (
        <>
          <span className="value-number">
            {value.toString()}
            <span className="white">,</span>
          </span>
        </>
      );
    } else if (typeof value === "undefined") {
      return (
        <>
          <span className="value-undefined">
            undefined<span className="white">,</span>
          </span>
        </>
      );
    } else if (typeof value === "object") {
      return (
        <>
          <span className="brackets">{"{"}</span>{" "}
          {Object.keys(value)
            .sort((a, b) => {
              return compareObjectPropertyKeys(a, b);
            })
            .map((key) =>
              (() => {
                if (typeof value[key] === "string") {
                  return (
                    <pre key={key} className="flex ml-4">
                      <span className="key">{key}: </span>
                      {displayValue(value[key])}
                    </pre>
                  );
                } else {
                  return (
                    <pre key={key} className="ml-4">
                      <span className="key">{key}: </span>
                      {displayValue(value[key])}
                    </pre>
                  );
                }
              })()
            )}
          <pre className="brackets">
            {"}"}
            <span className="white">,</span>
          </pre>
        </>
      );
    }
    return <span className="value-error">Error loading</span>;
  }

  return (
    <div className="mockup-code bg-zinc-800 text-zinc-600 bg-opacity-95 text-size w-full h-full">
      <div className="mx-4">
        <SimpleBar>
          <pre className="brackets -ml-4">
            <span className="const">const</span>{" "}
            <span className="variable">
              {variableName || abbreviate(object.name)}
            </span>{" "}
            <span className="white">=</span> {"{"}
          </pre>
          {Object.keys(object)
            .filter((key) => !hiddenKeys.includes(key))
            .sort((a, b) => {
              return compareObjectPropertyKeys(a, b);
            })
            .map((key) =>
              (() => {
                if (typeof object[key] === "string") {
                  return (
                    <pre key={key} className="flex">
                      <span className="key">{key}: </span>
                      {displayValue(object[key])}
                    </pre>
                  );
                } else {
                  return (
                    <pre key={key}>
                      <span className="key">{key}: </span>
                      {displayValue(object[key])}
                    </pre>
                  );
                }
              })()
            )}
          <pre className="brackets brackets -ml-4">
            {"}"}
            <span className="white">;</span>
          </pre>
        </SimpleBar>
      </div>
    </div>
  );
}
