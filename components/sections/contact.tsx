export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="card w-full max-w-3xl bg-base-100 shadow-xl">
        <div className="card-body">
          <form className="flex flex-col gap-2">
            <h2 className="card-title">Contact me</h2>
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered w-full"
            />
            <textarea
              placeholder="Message"
              className="textarea textarea-bordered"
              rows={5}
            />
            <input
              type="submit"
              value="Send"
              className="btn btn-primary w-full"
            />
          </form>
        </div>
      </div>
    </section>
  );
}
