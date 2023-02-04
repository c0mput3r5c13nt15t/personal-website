import Link from "next/link";
import { ReactNode } from "react";
import Image from "next/image";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

export default function CodeWindow({
  object,
  keysByOrder,
  variableName,
}: {
  object: any;
  keysByOrder: string[];
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

  function displayValue(value: any): ReactNode {
    if (typeof value === "string") {
      if (value.startsWith("http://") || value.startsWith("https://")) {
        return (
          <>
            <Link href={value} target="_blank">
              <span className="value-string">
                "<span className="underline">{value}</span>"
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
                "<span className="underline">{value}</span>"
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
          <span className="value-string inline-block max-w-sm break-before-all whitespace-normal">
            "{value}"<span className="white">,</span>
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
    <div className="mockup-code bg-zinc-800 text-zinc-600 bg-opacity-95 text-size w-full">
      <div className="mx-4">
        <SimpleBar>
          <pre className="brackets -ml-4">
            <span className="const">const</span>{" "}
            <span className="variable">
              {variableName || object.name.replaceAll(" ", "_")}
            </span>{" "}
            <span className="white">=</span> {"{"}
          </pre>
          {Object.keys(object)
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
