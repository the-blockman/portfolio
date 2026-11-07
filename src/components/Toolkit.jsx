import { toolkit } from "../data/toolkit.js";
import "./Toolkit.css";

export default function Toolkit() {
  return (
    <section id="toolkit" className="section toolkit">
      <header className="section-head">
        <p className="section-label">Toolkit</p>
        <h2 className="section-heading">
          What I <span className="dim">work with</span>
        </h2>
        <p className="section-sub">// the tools behind the projects</p>
      </header>

      <div className="toolkit-list">
        {toolkit.map(({ group, tone, items }) => (
          <div key={group} className="toolkit-row" style={{ "--tone": tone }}>
            <h3 className="toolkit-group">{group}</h3>
            <ul className="toolkit-items">
              {items.map(({ name, icon: Icon }) => (
                <li key={name} className="tool-chip">
                  {Icon && <Icon />}
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
