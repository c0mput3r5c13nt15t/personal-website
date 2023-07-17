export default function HeroiconsWrapper({
  children,
  className = "w-6 h-6",
}: {
  children: JSX.Element;
  className?: string;
}): JSX.Element {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      {children}
    </svg>
  );
}