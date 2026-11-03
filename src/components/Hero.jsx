import { FaWordpress, FaReact } from "react-icons/fa";
import { LuCode, LuArrowRight } from "react-icons/lu";
import { useState, useEffect } from "react";
import "./Hero.css";

const roles = [
  { label: "Front-end Developer", icon: LuCode, color: "var(--accent)" },
  { label: "WordPress Developer", icon: FaWordpress, color: "var(--blue)" },
  { label: "React", icon: FaReact, color: "var(--icon-home)" },
];

function CodeCard() {
  const [view, setView] = useState("open"); // "open" | "minimized" | "closed" | "expanded"

  useEffect(() => {
    if (view !== "expanded") return;
    const onKey = (e) => e.key === "Escape" && setView("open");
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [view]);

  // If the card gets hidden while expanded (rotating to portrait, resizing
  // to a phone width), drop back to the normal state so the page unlocks.
  useEffect(() => {
    const mq = window.matchMedia(
      "(orientation: portrait), (max-width: 600px), (orientation: landscape) and (max-height: 500px)",
    );
    const reset = () => {
      if (mq.matches) setView((v) => (v === "expanded" ? "open" : v));
    };

    reset(); // covers loading the page already in a hidden state
    mq.addEventListener("change", reset);
    return () => mq.removeEventListener("change", reset);
  }, []);

  const expanded = view === "expanded";
  const minimized = view === "minimized";

  if (view === "closed") {
    return (
      <div className="hero-card-wrap">
        <button className="card-reopen" onClick={() => setView("open")}>
          Reopen praise.js
        </button>
      </div>
    );
  }

  return (
    <div
      className={`hero-card-wrap ${expanded ? "is-expanded" : ""}`}
      onClick={expanded ? () => setView("open") : undefined}
    >
      <aside className="hero-card" onClick={(e) => e.stopPropagation()}>
        <div className="card-bar">
          <div className="card-lights">
            <button
              className="card-dot dot-close"
              aria-label="Close"
              onClick={() => setView("closed")}
            >
              <svg viewBox="0 0 12 12" aria-hidden="true">
                <path d="M3.5 3.5l5 5M8.5 3.5l-5 5" />
              </svg>
            </button>

            <button
              className="card-dot dot-min"
              aria-label={minimized ? "Restore" : "Minimize"}
              onClick={() => setView(minimized ? "open" : "minimized")}
            >
              <svg viewBox="0 0 12 12" aria-hidden="true">
                <path d="M3 6h6" />
              </svg>
            </button>

            <button
              className="card-dot dot-max"
              aria-label={expanded ? "Exit full screen" : "Expand"}
              onClick={() => setView(expanded ? "open" : "expanded")}
            >
              {expanded ? (
                <svg viewBox="0 0 12 12" aria-hidden="true">
                  <path className="fill" d="M4 4.2V8h3.8zM8 7.8V4H4.2z" />
                </svg>
              ) : (
                <svg viewBox="0 0 12 12" aria-hidden="true">
                  <path
                    className="fill"
                    d="M2.5 2.5v4.2l4.2-4.2zM9.5 9.5V5.3L5.3 9.5z"
                  />
                </svg>
              )}
            </button>
          </div>
          <span className="card-file">praise.js</span>
        </div>

        {!minimized && (
          <pre className="card-code">
            <code>
              <span className="c-key">const</span>{" "}
              <span className="c-var">praise</span> = {"{"}
              {"\n"}
              {"  "}location: <span className="c-str">"Lagos, Nigeria"</span>,
              {"\n"}
              {"  "}timezone: <span className="c-str">"WAT (UTC+1)"</span>,
              {"\n"}
              {"  "}building:{" "}
              <span className="c-str">"this portfolio, in React"</span>,{"\n"}
              {"  "}learning: <span className="c-str">"full-stack"</span>,{"\n"}
              {"  "}email:{" "}
              <a className="c-link" href="mailto:madukapraise15@gmail.com">
                "madukapraise15@gmail.com"
              </a>
              ,{"\n"}
              {"}"};
            </code>
          </pre>
        )}
      </aside>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <span className="hero-status">
            <span className="status-dot" />
            Available for work
          </span>

          <h1 className="hero-name">
            <span className="hero-first">Praise</span>
            <span className="hero-last">Maduka</span>
          </h1>

          <ul className="hero-chips">
            {roles.map(({ label, icon: Icon, color }) => (
              <li key={label} className="chip" style={{ "--chip": color }}>
                <Icon /> {label}
              </li>
            ))}
          </ul>

          <p className="hero-blurb">
            I build fast, clean websites and web apps. Five years of{" "}
            <strong>WordPress</strong> taught me how real sites get shipped and
            maintained, and now I build with <strong>React</strong>.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View my work <LuArrowRight />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact me
            </a>
          </div>
        </div>
        <CodeCard />
      </div>
    </section>
  );
}
