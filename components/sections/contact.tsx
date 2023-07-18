export default function Contact() {
  const contact = {
    linkedin: "https://www.linkedin.com/in/paul-maier-c0mput3r5c13nt15t/",
    gitHub: "https://github.com/c0mput3r5c13nt15t",
    mail: "pauljustus279@gmail.com",
  };

  return (
    <section id="contact" className="section flex flex-col gap-5">
      <h1 className="text-4xl font-bold">
        <span className="text-accent">Contact</span> me
      </h1>
      <div className="flex flex-row gap-3 flex-wrap w-full justify-center">
        <a
          aria-label="LinkedIn"
          className="btn btn-circle btn-lg btn-outline btn-primary"
          href={contact.linkedin}
          target="_blank"
        >
          in
        </a>
        <a
          aria-label="GitHub"
          className="btn btn-circle btn-lg btn-outline btn-primary"
          href={contact.gitHub}
          target="_blank"
        >
          gh
        </a>
        <a
          aria-label="Mail"
          className="btn btn-circle btn-lg btn-outline btn-primary"
          href={"mailto:" + contact.mail}
          target="_blank"
        >
          @
        </a>
      </div>
    </section>
  );
}
