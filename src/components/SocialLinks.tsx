
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";

type SocialLinksProps = {
  className?: string;
  iconSize?: number;
  vertical?: boolean;
};

export function SocialLinks({ className, iconSize = 20, vertical = false }: SocialLinksProps) {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/akash-lakhwan-5a729a250/",
      icon: Linkedin,
      color: "hover:text-blue-500"
    },
    {
      name: "GitHub",
      url: "https://github.com/SUPREME-AKASH-DEVELOPER",
      icon: Github,
      color: "hover:text-purple-500"
    },
    {
      name: "Twitter",
      url: "https://x.com/LakhwanAkash",
      icon: Twitter,
      color: "hover:text-cyan-400"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/ak.ashhhhhhhhh/profilecard/?igsh=NnltZDZzejVnZTMw",
      icon: Instagram,
      color: "hover:text-pink-500"
    },
  ];

  return (
    <ul
      className={cn(
        vertical
          ? "flex flex-col items-center space-y-6 after:content-[''] after:block after:w-[1px] after:h-20 after:bg-gradient-to-b after:from-slate after:to-teal/50"
          : "flex items-center space-x-6",
        className
      )}
    >
      {socialLinks.map((social, i) => (
        <li
          key={i}
          className={cn(
            "transition-all duration-300 hover:-translate-y-2 hover:scale-110",
            vertical ? `delay-${i * 100}` : ""
          )}
        >
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className={cn(
              "text-slate transition-colors duration-300",
              social.color
            )}
          >
            <social.icon size={iconSize} />
          </a>
        </li>
      ))}
    </ul>
  );
}
