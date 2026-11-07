# Praise Maduka — Portfolio

My personal portfolio: a dark, mono-styled single-page site with a command-palette search, light/dark themes and a fully responsive layout.

**Live:** <https://portfolio-rust-psi-kw9r61eipy.vercel.app/>

![Portfolio preview](./public/preview.png)

## Features

- Command-palette style search (`Go to section...`) with keyboard navigation
- Light and dark mode with theme CSS variables
- Sections: Hero, About, Projects, Toolkit, Experience, Education, Contact
- Responsive layout with a mobile hamburger menu
- Scroll animations <remove if not added yet>

## Tech stack

React · Vite · CSS (custom properties, no UI framework) · Lucide icons

## Getting started

```bash
git clone <your-repo-url>
cd <repo-folder>
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Project structure

src/
├── components/ # Header, Hero, SearchPalette, ... (each with its own CSS)
├── data/ # sections.js (nav and search entries)
├── hooks/ # useSections.js, etc.
└── styles/ # global.css

## Contact

<madukapraise15@gmail.com> · <https://github.com/the-blockman>
