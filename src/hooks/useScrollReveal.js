import { useLayoutEffect } from "react";

// everything that should fade up when it scrolls into view
const TARGETS = [
  ".about-copy",
  ".project-row",
  ".toolkit-row",
  ".exp-layout",
  ".edu-card",
  ".contact-blurb",
  ".contact-email",
  ".contact-links",
  ".section-head",
];
const SELECTOR = TARGETS.join(",");

export default function useScrollReveal() {
  useLayoutEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    document.querySelectorAll(SELECTOR).forEach((el) => {
      // stagger siblings of the same kind: 0ms, 70ms, 140ms...
      const peers = [...el.parentElement.children].filter((c) =>
        c.matches(SELECTOR),
      );
      const delay = Math.min(peers.indexOf(el), 5) * 70;
      el.style.setProperty("--reveal-delay", `${delay}ms`);

      el.classList.add("reveal");
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);
}
