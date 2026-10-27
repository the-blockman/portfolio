import { useState, useEffect } from "react";
import { FiSearch, FiExternalLink, FiSun, FiMoon } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import "./Header.css";
import SearchPalette from "./SearchPalette";
import { sections } from "../data/sections";

const SITE_NAME = "praise-maduka"; // change to however you want your name shown

const getTime = () =>
  new Date().toLocaleTimeString("en-GB", { timeZone: "Africa/Lagos" });

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);

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
  const [time, setTime] = useState(getTime());
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark",
  );

  useEffect(() => {
    const id = setInterval(() => setTime(getTime()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  return (
    <>
      <header className="header">
        <div className="header__left">
          <nav className="nav">
            {sections.map((s) => (
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
            href="https://github.com/YOUR-USERNAME"
            target="_blank"
            rel="noreferrer"
            className="icon-btn"
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
      <SearchPalette open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
