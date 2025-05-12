"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "../magicui/marquee";

const tools = [
  {
    name: "HTML",
    icon: "https://cdn.simpleicons.org/html5",
  },
  {
    name: "CSS",
    icon: "https://cdn.simpleicons.org/css3",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.simpleicons.org/javascript",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.simpleicons.org/typescript",
  },
  {
    name: "React",
    icon: "https://cdn.simpleicons.org/react",
  },
  {
    name: "Next.js",
    icon: "https://cdn.simpleicons.org/nextdotjs",
  },
  {
    name: "Framer Motion",
    icon: "https://cdn.simpleicons.org/framer",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.simpleicons.org/tailwindcss",
  },
  {
    name: "Redux",
    icon: "https://cdn.simpleicons.org/redux",
  },
  {
    name: "Node.js",
    icon: "https://cdn.simpleicons.org/nodedotjs",
  },
  {
    name: "Express.js",
    icon: "https://cdn.simpleicons.org/express",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.simpleicons.org/mongodb",
  },
  {
    name: "Firebase",
    icon: "https://cdn.simpleicons.org/firebase",
  },
  {
    name: "Supabase",
    icon: "https://cdn.simpleicons.org/supabase",
  },
  {
    name: "Prisma",
    icon: "https://cdn.simpleicons.org/prisma",
  },
  {
    name: "Cloudflare",
    icon: "https://cdn.simpleicons.org/cloudflare",
  },
  {
    name: "Git",
    icon: "https://cdn.simpleicons.org/git",
  },
  {
    name: "Github",
    icon: "https://cdn.simpleicons.org/github",
  },
  {
    name: "Postman",
    icon: "https://cdn.simpleicons.org/postman",
  },
  {
    name: "Docker",
    icon: "https://cdn.simpleicons.org/docker",
  },
];

const firstRow = tools.slice(0, tools.length / 2);
const secondRow = tools.slice(tools.length / 2);

const ToolCard = ({ name, icon }: { name: string; icon: string }) => {
  return (
    <div
      className={cn(
        "relative h-full w-40 cursor-pointer overflow-hidden rounded-2xl border p-2 gap-2 flex flex-row items-center justify-center",
        // light
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.25] dark:hover:bg-gray-50/[.35]"
      )}
    >
      <img src={icon} alt={name} className="w-6 h-6" />
      <p className="text-xs font-medium text-center dark:text-white">{name}</p>
    </div>
  );
};

export default function Tools() {
  return (
    <section className="mb-16 space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-[var(--accent-color)]">*</span> tools i work
          with
        </h2>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:40s]">
          {firstRow.map((tool) => (
            <ToolCard key={tool.name} {...tool} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:40s]">
          {secondRow.map((tool) => (
            <ToolCard key={tool.name} {...tool} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </section>
  );
}
