import {
  LuTerminal,
  LuBraces,
  LuGitBranch,
  LuFolderGit2,
  LuAtSign,
} from "react-icons/lu";

export const sections = [
  { label: "Home", href: "#home", icon: LuTerminal, color: "var(--icon-home)" },
  {
    label: "About",
    href: "#about",
    icon: LuBraces,
    color: "var(--icon-about)",
  },
  {
    label: "Experience",
    href: "#experience",
    icon: LuGitBranch,
    color: "var(--icon-experience)",
  },
  {
    label: "Projects",
    href: "#projects",
    icon: LuFolderGit2,
    color: "var(--icon-projects)",
  },
  {
    label: "Contact",
    href: "#contact",
    icon: LuAtSign,
    color: "var(--icon-contact)",
  },
];
