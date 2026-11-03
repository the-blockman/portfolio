export const projects = [
  {
    title: "CFAM Church Website",
    tag: "Team project",
    tone: "var(--icon-projects)",
    description:
      "A multi-page church website built with a small team from a Figma design, with routing and responsive layouts.",
    tech: ["React", "Vite", "React Router", "Tailwind CSS"],
    live: "https://cfamchurch.org/demo",
    github: "", // paste the repo URL
    images: ["/projects/cfam-1.png"],
  },
  {
    title: "Shopping Cart",
    tag: "Front-end",
    tone: "var(--icon-home)",
    description:
      "A store with a product page, a cart and quantity controls. Cart state lives in Context and products load from a public API.",
    tech: ["React", "React Router", "Context API"],
    live: "https://shopping-cart-delta-amber.vercel.app/", // paste the live URL
    github: "", // paste the repo URL
    images: ["/projects/cart-1.png"],
  },
  {
    title: "Church Check-in System",
    tag: "Internal tool",
    tone: "var(--icon-about)",
    description:
      "A web app volunteers use at the door on Sundays: fast fuzzy name search across the church register and one-tap attendance marking, saved straight to a Google Sheet. Used live at services.",
    tech: ["Google Apps Script", "Google Sheets", "HTML / CSS / JS"],
    live: "",
    github: "",
    images: ["/projects/checkin-1.png", "/projects/checkin-2.png"],
  },
];
