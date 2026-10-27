import { useState, useEffect, useRef } from "react";
import { FiChevronRight } from "react-icons/fi";
import { sections } from "../data/sections";
import "./SearchPalette.css";

export default function SearchPalette({ open, onClose }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);

  const results = sections.filter((s) =>
    s.label.toLowerCase().includes(query.toLowerCase()),
  );

  useEffect(() => {
    if (open) {
      setQuery("");
      inputRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  if (!open) return null;

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
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
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
                <Icon />
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
