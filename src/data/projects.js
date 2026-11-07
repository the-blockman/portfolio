export const projects = [
  {
    title: "CFAM Church Website",
    tag: "Live site · WordPress",
    tone: "var(--icon-projects)",
    description:
      "A full redesign of the live church website, built with Elementor and a customized theme. Includes a custom Sermons post type with speaker taxonomy. I also manage the hosting, DNS, caching and performance.",
    tech: [
      "WordPress",
      "Elementor",
      "PHP",
      "CSS",
      "Slider Revolution",
      "Cloudflare",
    ],
    live: "https://cfamchurch.org",
    github: "", // no public repo for the WordPress site
    images: ["/projects/cfam-wp-home.png"],
  },
  {
    title: "Shopping Cart",
    tag: "Front-end",
    tone: "var(--icon-home)",
    description:
      "A store with a product page, a cart and quantity controls. Cart state lives in Context and products load from a public API.",
    tech: ["React", "React Router", "Context API"],
    live: "https://shopping-cart-delta-amber.vercel.app/", // paste the live URL
    github: "https://github.com/the-blockman/shopping-cart",
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
