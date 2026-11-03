import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaReact,
  FaWordpress,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiVite,
  SiReactrouter,
  SiElementor,
  SiGoogleappsscript,
  SiGooglesheets,
  SiVisualstudiocode,
  SiCpanel,
  SiCloudflare,
} from "react-icons/si";

// icon is optional: a chip without one is just text
export const toolkit = [
  {
    group: "Languages",
    tone: "var(--icon-home)",
    items: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "PHP", icon: FaPhp },
    ],
  },
  {
    group: "Front-end",
    tone: "var(--icon-about)",
    items: [
      { name: "React", icon: FaReact },
      { name: "React Router", icon: SiReactrouter },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Vite", icon: SiVite },
      { name: "Context API" },
    ],
  },
  {
    group: "WordPress",
    tone: "var(--icon-projects)",
    items: [
      { name: "WordPress", icon: FaWordpress },
      { name: "Elementor", icon: SiElementor },
      { name: "ThemeREX Addons" },
      { name: "Slider Revolution" },
      { name: "The Events Calendar" },
      { name: "Custom post types" },
    ],
  },
  {
    group: "Automation",
    tone: "var(--icon-contact)",
    items: [
      { name: "Google Apps Script", icon: SiGoogleappsscript },
      { name: "Google Sheets", icon: SiGooglesheets },
    ],
  },
  {
    group: "Tools",
    tone: "var(--icon-experience)",
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Figma", icon: FaFigma },
      { name: "VS Code", icon: SiVisualstudiocode },
      { name: "Node.js", icon: FaNodeJs },
    ],
  },
  {
    group: "Hosting & DNS",
    tone: "var(--teal)",
    items: [
      { name: "cPanel", icon: SiCpanel },
      { name: "Cloudflare", icon: SiCloudflare },
      { name: "DNS" },
      { name: "LiteSpeed Cache" },
    ],
  },
];
