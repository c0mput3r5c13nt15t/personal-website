import CodeWindow from "./codeWindow";

export default function Section({
  title,
  description,
  projects,
}: {
  title: string;
  description?: string;
  projects: any[];
}) {
  const keysByOrderForProjects = [
    "name",
    "descr",
    "description",
    "under-development",
    "university",
    "lecture",
    "url",
    "github",
    "technologies",
  ];
  const hiddenKeys = ["id", "large"];

  return (
    <div className="py-4 w-full max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left md:col-span-2 px-3 pb-2">
        {title}
      </h1>
      {description && (
        <p className="text-md md:text-2xl text-center md:text-left md:col-span-2 px-3">
          {description}
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row-dense md:pt-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className={
              "py-2 md:py-3 px-3" + (project.large ? " md:col-span-2" : "")
            }
          >
            <CodeWindow
              object={project}
              keysByOrder={keysByOrderForProjects}
              hiddenKeys={hiddenKeys}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
