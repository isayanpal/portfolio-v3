import { Icons } from "./icons";

  
  const socials = [
    {
      title: "github",
      username: "@isayanpal",
      link: "https://github.com/isayanpal",
      icon: Icons.github,
    },
    {
      title: "linkedin",
      username: "sayan snigdha pal",
      link: "https://www.linkedin.com/in/sayan-snigdha-pal/",
      icon: Icons.linkedin,
    },
    {
      title: "twitter",
      username: "sayanstwt",
      link: "https://x.com/sayanstwt",
      icon: Icons.x,
    },
    {
      title: "resume",
      username: "resume",
      link: "https://drive.google.com/file/d/1jahVxLN3ZN64bFzCGqZ_MQQVj8kNfOH7/view",
      icon: Icons.resume,
    },
    {
      title: "email",
      username: "sayanpalb@gmail.com",
      link: "mailto:sayanpalb@gmail.com",
      icon: Icons.email,
    },
  ];
  
  export default function Socials() {
    return (
      <div className="mb-16 text-white">
        <h2 className="text-3xl font-bold mb-8">
          <span className="text-[var(--accent-color)]">*</span> socials
        </h2>
        <div className="space-y-4">
          {socials.map((social) => (
            <div key={social.title} className="group">
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-[var(--accent-color)] transition-colors duration-200"
              >
                <social.icon/>
                <span className="text-sm">{social.username}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }