import HeroiconsWrapper from "./heroiconsWrapper";

export default function Navbar({
  isDarkMode,
  setIsDarkMode,
}: {
  isDarkMode: boolean;
  setIsDarkMode: any;
}) {
  const sections = ["about", "work", "contact"];

  return (
    <>
      <nav className="px-2 md:px-0 pt-2 w-full max-w-3xl fixed left-1/2 -translate-x-1/2 z-50">
        <div
          data-theme="dark"
          className="text-white navbar my-glass rounded-none md:rounded-box shadow-lg dark:shadow-none"
        >
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52 gap-1"
              >
                {sections.map((section) => (
                  <li key={section}>
                    <button
                      onClick={() => {
                        document
                          .querySelector(`#${section}`)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="capitalize"
                    >
                      {section}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => {
                document
                  .querySelector("#landing")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn btn-ghost normal-case text-xl"
            >
              Paul Maier
            </button>
          </div>
          <div className="navbar-center hidden md:flex">
            <ul className="flex flex-row gap-3 px-1">
              {sections.map((section) => (
                <li key={section}>
                  <button
                    onClick={() => {
                      document
                        .querySelector(`#${section}`)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="btn btn-sm btn-ghost font-normal capitalize"
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="navbar-end">
            <button
              className="btn btn-ghost btn-square"
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              {isDarkMode ? (
                <HeroiconsWrapper>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </HeroiconsWrapper>
              ) : (
                <HeroiconsWrapper>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </HeroiconsWrapper>
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
