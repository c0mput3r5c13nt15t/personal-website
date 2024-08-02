import HeroiconsWrapper from "../heroiconsWrapper";
import Image from "next/image";
import bg_contacts from "../../public/assets/contacts/bg.webp";

export type ContactProps = {
  title: string;
  contact: {
    linkedin?: string;
    github?: string;
    mail?: string;
    discord?: string;
  };
};

export default function Contact({
  title,
  contact: { linkedin, github, mail, discord },
}: ContactProps): JSX.Element {
  return (
    <section
      id="contact"
      className="section relative h-screen overflow-hidden bg-base-100"
    >
      <Image
        alt="Background"
        className="border-y-black border-t-[2px] opacity-70 object-cover"
        src={bg_contacts} // Copyright: https://tiago-sousa.artstation.com/projects/xJWg9W
        fill
      />
      <Image
        alt="Blob"
        className="themed-svg scale-150 md:scale-125"
        src={"/assets/blob.svg"}
        fill
      />
      <Image
        alt="Wave"
        className="scale-y-[20%] -translate-y-[calc(40%)] themed-svg object-wave"
        src={"/assets/wave.svg"}
        fill
      />
      <Image
        alt="Wave"
        className="themed-svg -scale-y-[20%] translate-y-[calc(40%)] object-wave"
        src={"/assets/wave.svg"}
        fill
      />
      <div className="z-10">
        <h1 className="text-4xl font-bold mb-4 w-full text-center">{title}</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-fit mx-auto">
          {mail && (
            <a
              aria-label="Mail"
              className="contact-button"
              href={"mailto:" + mail}
            >
              <HeroiconsWrapper className="h-7 w-7">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </HeroiconsWrapper>
            </a>
          )}
          {github && (
            <a
              aria-label="GitHub"
              className="contact-button"
              href={github}
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="h-7 w-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
              >
                <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
              </svg>
            </a>
          )}
          {linkedin && (
            <a
              aria-label="LinkedIn"
              className="contact-button"
              href={linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                viewBox="0 0 512 512"
                fill="currentColor"
              >
                <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z" />
              </svg>
            </a>
          )}
          {discord && (
            <a
              aria-label="Discord"
              className="contact-button"
              href={discord}
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="h-7 w-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -28.5 256 256"
                fill="currentColor"
              >
                <path
                  d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                  fill="#currentColor"
                ></path>
              </svg>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
