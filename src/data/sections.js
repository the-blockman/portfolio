import {
  LuTerminal,
  LuBraces,
  LuGitBranch,
  LuFolderGit2,
  LuAtSign,
  LuWrench,
  LuGraduationCap,
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
    label: "Projects",
    href: "#projects",
    icon: LuFolderGit2,
    color: "var(--icon-projects)",
  },
  {
    label: "Toolkit",
    href: "#toolkit",
    icon: LuWrench,
    color: "var(--teal)",
    inHeader: false,
  },
  {
    label: "Experience",
    href: "#experience",
    icon: LuGitBranch,
    color: "var(--icon-experience)",
  },
  {
    label: "Education",
    href: "#education",
    icon: LuGraduationCap,
    color: "var(--blue)",
    inHeader: false,
  },
  {
    label: "Contact",
    href: "#contact",
    icon: LuAtSign,
    color: "var(--icon-contact)",
  },
];
