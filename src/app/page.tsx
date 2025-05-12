import About from "@/components/custom/About";
import Github from "@/components/custom/Github";
import { Item, SectionList } from "@/components/custom/section-list";
import Socials from "@/components/custom/Socials";
import Tools from "@/components/custom/Tools";
import { HyperText } from "@/components/magicui/hyper-text";
import Image from "next/image";

export default function Home() {

  const workItems: Item[] = [
    {
      title: "RAD media solutions",
      role: "frontend developer intern",
      period: "nov 2024 - feb 2025",
      description:
        "engineered user-centric web applications with performance optimizations and responsive design. Resolved critical crash causes and implemented seamless state management using TypeScript.",
      href: "https://www.linkedin.com/company/rad-media-solutions/",
    },
    {
      title: "pephub",
      role: "software developer intern",
      period: "aug 2023 - nov 2023",
      description:
        "built a robust feedback aggregation system from diverse sources to support data-driven decisions using ReactJS, MongoDB, and ExpressJS.",
      href: "https://www.pephub.tech/",
    },
    {
      title: "v-books",
      role: "web developer intern",
      period: "july 2023 - sept 2023",
      description:
        "led the complete redesign of the company website and implemented optimized routing, reducing page load time by 40%.",
      href: "https://www.linkedin.com/company/v-books/",
    },
  ];

  return (
<main className="flex flex-col min-h-[100dvh] space-y-10 mx-auto px-6">
  <section id="header" className="mt-10">
  <div className="mt-10 md:mt-0 mb-10 flex flex-row items-center gap-5 border border-zinc-800 p-4">
        <div>
          <div className="overflow-hidden flex items-center justify-center">
            <Image
              src="/sayan.jpg"
              alt="Profile Image"
              width={60}
              height={60}
              className="object-contain object-center w-full h-full"
            />
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold">
            <HyperText>sayan snigdha pal</HyperText>
          </h1>
          <p className="text-sm text-gray-400">@isayanpal</p>
        </div>
      </div>
  </section>
  <About/>
  <Tools/>
  <Github/>
  <SectionList title="worked at" items={workItems}/>
  <Socials/>
</main>
  );
}
