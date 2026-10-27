import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { sections } from "../data/sections";
import "./SearchPalette.css";

export default function SearchPalette({ open, onClose }) {
  if (!open) return null;
  return <PaletteContent onClose={onClose} />;
}

function PaletteContent({ onClose }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const results = sections.filter((s) =>
    s.label.toLowerCase().includes(query.toLowerCase()),
  );

  const go = (section) => {
    onClose();
    document
      .querySelector(section.href)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results[active]) {
      go(results[active]);
    }
  };

  return (
    <div className="palette-backdrop" onClick={onClose}>
      <div className="palette" onClick={(e) => e.stopPropagation()}>
        <div className="palette__top">
          <FiChevronRight className="palette__prompt" />
          <input
            autoFocus
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Go to section..."
          />
          <kbd onClick={onClose}>Esc</kbd>
        </div>

        <div className="palette__label">SECTIONS</div>

        <ul className="palette__list">
          {results.length === 0 && (
            <li className="palette__empty">No results</li>
          )}
          {results.map((s, i) => {
            const Icon = s.icon;
            return (
              <li
                key={s.href}
                className={`palette__item ${i === active ? "is-active" : ""}`}
                onMouseEnter={() => setActive(i)}
                onClick={() => go(s)}
              >
                <span
                  className="palette__icon"
                  style={{
                    color: s.color,
                    background: `color-mix(in srgb, ${s.color} 14%, transparent)`,
                  }}
                >
                  <Icon size={16} strokeWidth={1.75} />
                </span>
                <span>{s.label}</span>
                <span className="palette__hint">{s.href}</span>
              </li>
            );
          })}
        </ul>

        <div className="palette__footer">
          <span>↑↓ navigate · ↵ open · Esc close</span>
        </div>
      </div>
    </div>
  );
}
