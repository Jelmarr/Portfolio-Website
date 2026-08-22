import { IconType } from "react-icons";
import {
  SiDotnet,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiDocker,
  SiFigma,
  SiGit,
  SiGithub,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiTypescript,
} from "react-icons/si";

export interface TechLogo {
  node: IconType;
  title: string;
  href: string;
}

export const frontEndLogos: TechLogo[] = [
  { node: SiReact, title: "React", href: "https://react.dev" },
  { node: SiNextdotjs, title: "Next.js", href: "https://nextjs.org" },
  {
    node: SiTypescript,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: SiTailwindcss,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

export const backEndLogos: TechLogo[] = [
  { node: SiNodedotjs, title: "Node.js", href: "https://nodejs.org" },
  { node: SiDotnet, title: ".NET", href: "https://dotnet.microsoft.com" },
  {
    node: SiTypescript,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  { node: SiMysql, title: "MySQL", href: "https://www.mysql.com" },
  {
    node: SiPostgresql,
    title: "PostgreSQL",
    href: "https://www.postgresql.org",
  },
];

export const toolsLogo: TechLogo[] = [
  { node: SiGit, title: "Git", href: "https://git-scm.com" },
  { node: SiGithub, title: "GitHub", href: "https://github.com" },
  { node: SiDocker, title: "Docker", href: "https://www.docker.com" },
  { node: SiFigma, title: "Figma", href: "https://www.figma.com" },
  { node: SiPostman, title: "Postman", href: "https://www.postman.com" },
];
