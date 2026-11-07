import "./Contact.css";

const EMAIL = "madukapraise15@gmail.com";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <header className="section-head">
        <p className="section-label">Contact</p>
        <h2 className="section-heading">
          Let's build <span className="dim">something</span>
        </h2>
        <p className="section-sub">
          // open to work, collabs & good conversations
        </p>
      </header>

      <p className="contact-blurb">
        Open to front-end and WordPress roles, and to interesting projects. The
        fastest way to reach me is email.
      </p>

      <a className="contact-email" href={`mailto:${EMAIL}`}>
        {EMAIL}
      </a>

      <div className="contact-links">
        <a
          href="https://github.com/the-blockman"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>
        <a href="/resume.pdf" download>
          Resume <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
