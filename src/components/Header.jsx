import { useState, useEffect } from "react";
import {
  FiSearch,
  FiExternalLink,
  FiSun,
  FiMoon,
  FiMenu,
  FiX,
  FiChevronRight,
} from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import "./Header.css";
import SearchPalette from "./SearchPalette";
import { sections } from "../data/sections";

const SITE_NAME = "praise-maduka";

const getTime = () =>
  new Date().toLocaleTimeString("en-GB", { timeZone: "Africa/Lagos" });

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState(getTime());
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark",
  );

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setTime(getTime()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // stop the page scrolling behind the open sheet
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="header">
        <div className="header__left">
          <button
            className="icon-btn menu-btn"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <FiMenu />
          </button>

          <nav className="nav">
            {sections
              .filter((s) => s.inHeader !== false)
              .map((s) => (
                <a key={s.href} href={s.href}>
                  {s.label}
                </a>
              ))}
          </nav>
        </div>

        <button
          className="search"
          type="button"
          onClick={() => setSearchOpen(true)}
          aria-label="Search"
        >
          <FiSearch />
          <span>{SITE_NAME} : portfolio</span>
          <kbd>Ctrl K</kbd>
        </button>

        <div className="header__right">
          <div className="clock">
            <span className="clock__dot" />
            {time}
          </div>

          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>

          <a
            href="https://github.com/the-blockman"
            target="_blank"
            rel="noreferrer"
            className="icon-btn header-github"
          >
            <FaGithub />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="resume-btn"
          >
            Resume <FiExternalLink />
          </a>
        </div>
      </header>

      {menuOpen && (
        <div className="sheet-backdrop" onClick={closeMenu}>
          <div className="sheet" onClick={(e) => e.stopPropagation()}>
            <div className="sheet__handle" />

            <div className="sheet__top">
              <span className="sheet__name">{SITE_NAME}</span>
              <div className="clock">
                <span className="clock__dot" />
                {time}
              </div>
              <button
                className="icon-btn"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <FiSun /> : <FiMoon />}
              </button>
              <button
                className="icon-btn"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <FiX />
              </button>
            </div>

            <div className="sheet__divider">
              <span>SECTIONS</span>
            </div>

            <ul className="sheet__list">
              {sections.map((s) => {
                const Icon = s.icon;
                return (
                  <li key={s.href}>
                    <a className="sheet__row" href={s.href} onClick={closeMenu}>
                      <span
                        className="palette__icon"
                        style={{
                          color: s.color,
                          background: `color-mix(in srgb, ${s.color} 14%, transparent)`,
                        }}
                      >
                        <Icon size={16} strokeWidth={1.75} />
                      </span>
                      {s.label}
                      <FiChevronRight />
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="sheet__footer">
              <a
                href="https://github.com/the-blockman"
                target="_blank"
                rel="noreferrer"
                className="sheet__btn"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="resume-btn"
              >
                Resume <FiExternalLink />
              </a>
            </div>
          </div>
        </div>
      )}

      <SearchPalette open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
