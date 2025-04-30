export default function About() {
    return (
      <section className="mb-16 space-y-6">
        <div>
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-[var(--accent-color)]">*</span> about
          </h2>
          <p className="text-gray-500 italic text-xs mb-4">
            [ think → build → break → fix → repeat ]
          </p>
        </div>
  
        <div className="space-y-5 text-sm">
          <p className="text-gray-300 leading-relaxed tracking-wide lowercase">
          I am a passionate Web Developer skilled in building scalable web applications using React, Node.js, Express.js, and MongoDB. I leverage Next.js for server-side rendering. Proficient in Git and GitHub, I excel in collaboration and version control, constantly applying modern technologies to create innovative solutions.
          </p>
        </div>
      </section>
    );
  }