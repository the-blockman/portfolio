import { useState } from "react";
import { experience } from "../data/experience.js";
import "./Experience.css";

export default function Experience() {
  const [active, setActive] = useState(0);
  const job = experience[active];

  return (
    <section id="experience" className="section experience">
      <header className="section-head">
        <p className="section-label">Experience</p>
        <h2 className="section-heading">
          Where I've <span className="dim">been</span>
        </h2>
        <p className="section-sub">// roles · responsibilities · stack</p>
      </header>

      <div className="exp-layout">
        <ul className="exp-rail" role="tablist" aria-label="Roles">
          {experience.map((item, i) => (
            <li key={item.id}>
              <button
                type="button"
                role="tab"
                aria-selected={i === active}
                className={`exp-tab ${i === active ? "is-active" : ""}`}
                onClick={() => setActive(i)}
              >
                <span className="exp-dot" />
                <span className="exp-tab-text">
                  <span className="exp-tab-company">{item.company}</span>
                  <span className="exp-tab-meta">
                    {item.role} · {item.year}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>

        <article className="exp-card" role="tabpanel" key={job.id}>
          <p className="exp-date">
            {job.period} <span>· {job.location}</span>
          </p>
          <h3 className="exp-role">{job.role}</h3>
          <p className="exp-company">@ {job.company}</p>
          <p className="exp-summary">{job.summary}</p>
          <ul className="exp-points">
            {job.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <ul className="exp-chips">
            {job.tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
