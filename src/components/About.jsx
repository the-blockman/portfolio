import "./About.css";

export default function About() {
  return (
    <section id="about" className="section section-alt about">
      <div className="about-grid">
        <header className="section-head">
          <p className="section-label">About</p>
          <h2 className="section-heading">
            Hi <span className="dim">There!</span>
          </h2>
          <p className="section-sub">// who I am · what I do · where I build</p>
        </header>

        <div className="about-copy">
          <p>
            I'm a <strong>WordPress developer</strong> based in Lagos, Nigeria,
            growing into a <strong>front-end and full-stack developer</strong>.
          </p>

          <p className="about-statement">
            I like building things that keep working.
          </p>

          <p>
            For over five years I've looked after{" "}
            <strong>cfamchurch.org</strong> end to end: hosting, DNS, plugins
            and custom CSS. It taught me that launching a site is the easy part,
            and keeping it healthy is the real job.
          </p>

          <p>
            Now I'm building with <strong>React</strong>, and this portfolio is
            part of that: built from scratch, one section at a time.
          </p>
        </div>
      </div>
    </section>
  );
}
