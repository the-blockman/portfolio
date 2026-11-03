import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { LuArrowUpRight, LuX } from "react-icons/lu";
import { projects } from "../data/projects.js";
import "./Projects.css";

function ProjectRow({ project, index, onOpen }) {
  const [active, setActive] = useState(0);
  const { title, description, tag, tone, tech, live, github, images } = project;
  const slug = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <article
      className={`project-row ${index % 2 ? "flip" : ""}`}
      style={{ "--tone": tone }}
    >
      <div className="project-media">
        <div className="shot-frame">
          <div className="shot-bar">{slug}</div>
          <button
            className="shot-main"
            aria-label={`Enlarge ${title} screenshot`}
            onClick={() =>
              onOpen({
                src: images[active],
                alt: `${title} screenshot ${active + 1}`,
              })
            }
          >
            <img src={images[active]} alt="" />
          </button>
        </div>

        {images.length > 1 && (
          <div className="shot-thumbs">
            {images.map((src, i) => (
              <button
                key={src}
                className={`shot-thumb ${i === active ? "is-active" : ""}`}
                aria-label={`Show screenshot ${i + 1}`}
                onClick={() => setActive(i)}
              >
                <img src={src} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="project-info">
        <p className="project-tag">
          {String(index + 1).padStart(2, "0")} · {tag}
        </p>
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>

        <ul className="project-tech">
          {tech.map((t) => (
            <li key={t} className="project-chip">
              {t}
            </li>
          ))}
        </ul>

        {(live || github) && (
          <div className="project-links">
            {live && (
              <a
                className="project-link"
                href={live}
                target="_blank"
                rel="noreferrer"
              >
                Live <LuArrowUpRight />
              </a>
            )}
            {github && (
              <a
                className="project-link"
                href={github}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub /> GitHub <LuArrowUpRight />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  const [open, setOpen] = useState(null); // { src, alt } or null

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section id="projects" className="section projects">
      <header className="section-head">
        <p className="section-label">Projects</p>
        <h2 className="section-heading">
          Things <span className="dim">I've built</span>
        </h2>
        <p className="section-sub">// click a screenshot to see it full size</p>
      </header>

      <div className="projects-list">
        {projects.map((p, i) => (
          <ProjectRow key={p.title} project={p} index={i} onOpen={setOpen} />
        ))}
      </div>

      {open && (
        <div className="lightbox" onClick={() => setOpen(null)}>
          <img
            src={open.src}
            alt={open.alt}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="lightbox-close"
            aria-label="Close"
            onClick={() => setOpen(null)}
          >
            <LuX />
          </button>
        </div>
      )}
    </section>
  );
}
