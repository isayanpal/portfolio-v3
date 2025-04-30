import { ProjectCard } from "@/components/custom/project-card";
import { HyperText } from "@/components/magicui/hyper-text";

export default function ProjectsPage() {
  const projects = [
    {
      title: "GistIQ",
      description:
        "AI-powered tool to summarize PDFs using Gemini AI. Upload PDFs, generate concise summaries, and download them for reference.",
      technologies: [
        "react",
        "typescript",
        "shadcn ui",
        "tailwind css",
        "framer motion",
        "gemini ai",
        "node.js",
        "express.js",
        "multer",
      ],
      href: "https://github.com/isayanpal/gistIQ",
    },
    {
      title: "WanderAI",
      description:
        "AI-based trip planner generating personalized travel itineraries with real-time location data and Gemini AI.",
      technologies: [
        "react",
        "shadcn ui",
        "tailwind css",
        "framer motion",
        "firebase",
        "google oauth",
        "gemini ai",
        "google map api",
      ],
      href: "https://github.com/isayanpal/wanderAI",
    },
    {
      title: "ThoughtCloud",
      description:
        "Personal blogging platform to create, view, update, and delete blog posts with smooth UX.",
      technologies: [
        "react",
        "typescript",
        "shadcn ui",
        "zustand",
        "node.js",
        "express.js",
        "prisma",
        "mongodb",
        "jwt",
      ],
      href: "https://github.com/isayanpal/thoughtCLoud",
    },
    {
      title: "Doc Book",
      description:
        "Appointment booking platform connecting doctors, patients, and admins seamlessly.",
      technologies: ["react", "node.js", "express.js", "mongodb", "jwt"],
      href: "https://github.com/isayanpal/docBook",
    },
    {
      title: "LearnSync",
      description:
        "Adaptive learning system using personality tests and AI to detect disorders like ADHD.",
      technologies: [
        "react",
        "framer motion",
        "tailwind css",
        "mongodb",
        "node.js",
        "express.js",
        "cohere ai api",
      ],
      href: "https://github.com/isayanpal/LearnSync",
    },
    {
      title: "Log Sync",
      description:
        "Web app to efficiently log and track daily activities with Google OAuth.",
      technologies: [
        "next.js",
        "typescript",
        "shadcn ui",
        "supabase",
        "google oauth",
      ],
      href: "https://github.com/isayanpal/LogSync",
    },
    {
      title: "Resourcify",
      description:
        "A centralized platform offering curated development and design learning resources.",
      technologies: ["react", "tailwind css"],
      href: "https://github.com/isayanpal/Resources",
    },
    {
      title: "NewsTech",
      description:
        "Web app that fetches and displays the latest technology news from multiple sources.",
      technologies: ["react", "newsapi", "tailwind css"],
      href: "https://github.com/isayanpal/newstech",
    },
    {
      title: "Dev Buddy",
      description:
        "Search for GitHub profiles based on location and view user details easily.",
      technologies: ["react", "node.js", "express.js", "github api"],
      href: "https://github.com/isayanpal/devBuddy",
    },
    {
      title: "Quick Task",
      description:
        "Task management app with authentication and state management using Redux Toolkit.",
      technologies: ["mern stack", "redux toolkit", "jwt"],
      href: "https://github.com/isayanpal/quick_task",
    },
    {
      title: "Hoo Bank",
      description:
        "Modern and responsive banking website with a sleek, intuitive UI.",
      technologies: ["react", "tailwind css"],
      href: "https://github.com/isayanpal/hbank_modern_app",
    },
  ];

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 mx-auto px-4 mt-10">
      <h1 className="text-3xl font-bold mb-8 text-white flex flex-row">
        <span className="text-accent mr-4">*</span><HyperText>projects</HyperText>
      </h1>

      <p className="text-gray-400 mb-12 leading-relaxed">
        here are some of the projects i&apos;ve worked on.
      </p>

      <div className="space-y-12">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </main>
  );
}
