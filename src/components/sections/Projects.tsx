
import { Github, ExternalLink } from "lucide-react";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";

const projects = [
  {
    title: "Harvesting the Future: AI Solutions for Smallholder Farmers",
    description: "A smart agricultural platform that leverages Artificial Intelligence to empower smallholder farmers with predictive insights, crop recommendations, and efficiency-boosting tools.",
    tech: ["Flask", "Python", "AI/ML", "HTML/CSS", "RESTful API"],
    github: "https://github.com/SUPREME-AKASH-DEVELOPER/Harvesting-the-Future-AI-Solutions-for-Smallholder-Farmers.git",
    external: "https://harvesting-the-future-ai-solutions.netlify.app",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2",
    gradient: "from-green-500 to-lime-500"
  },
  {
    title: "News & Weather Web App 🌦️📰",
    description: "A web application providing real-time weather updates and latest news based on location or selected category. Features include dynamic weather display, news by category, dark mode, and responsive design.",
    tech: ["HTML", "CSS", "JavaScript", "Vite", "Node.js", "Express.js", "Axios"],
    github: "https://github.com/SUPREME-AKASH-DEVELOPER/NEWS-WEATHER-WEB.git",
    external: "https://news-weather-web.onrender.com/",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Coolie Booking Service",
    description: "A web-based platform for booking coolies at train stations with online booking, real-time updates using Socket.io, and secure data handling.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Socket.io"],
    github: "https://github.com/SUPREME-AKASH-DEVELOPER/coolie-booking.git",
    external: "https://cooliebookingservice.netlify.app/",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
    gradient: "from-orange-500 to-amber-500"
  },
  {
    title: "Valentine's Day Surprise 💖",
    description: "A Valentine's Day-themed webpage with animations, a QR code, and a playable song. Features include flying hearts, an interactive QR code, and a responsive design.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/SUPREME-AKASH-DEVELOPER/Valentines-Day-Surprise.git",
    external: "https://supreme-akash-developer.github.io/Valentines-Day-Surprise/",
    image: "https://images.unsplash.com/photo-1551038247-3d9af20df552",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    title: "CSS Snowflake Animation",
    description: "A winter-themed snowflake animation using pure CSS. The project involved designing rotating and fading snowflakes using CSS @keyframes and transitions.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/SUPREME-AKASH-DEVELOPER/CSS-Snowflake-Animation.git",
    external: "https://supreme-akash-developer.github.io/CSS-Snowflake-Animation/",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    gradient: "from-sky-400 to-blue-500"
  },
  {
    title: "FOD Detection Drone System",
    description: "An autonomous drone-based system designed to enhance runway safety by detecting foreign object debris (FOD). Achieves 92% accuracy in identifying small objects like nuts and bolts.",
    tech: ["Python", "Machine Learning", "Computer Vision", "Raspberry Pi", "DJI Tello Drone"],
    github: "https://github.com/SUPREME-AKASH-DEVELOPER/Black-Falcon.git",
    external: "#",
    image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108",
    gradient: "from-purple-500 to-indigo-500"
  },
];

export function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  return (
    <section id="projects" className="section-padding relative overflow-hidden" ref={sectionRef}>
      {/* Background gradient with multiple colorful elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/3 left-1/3 w-80 h-80 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-2/3 right-1/4 w-56 h-56 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-48 h-48 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="container relative z-10">
        <h2 className={cn(
          "numbered-heading font-semibold text-lightest-slate text-2xl mb-8 opacity-0 translate-y-10 transition-all duration-700",
          isInView && "opacity-100 translate-y-0"
        )}>
          <span className="text-teal mr-2 font-mono">04.</span> Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={cn(
                "rounded-lg overflow-hidden group hover:shadow-xl transition-all duration-500 opacity-0 translate-y-10",
                `delay-${index * 100 + 300}`,
                isInView && "opacity-100 translate-y-0"
              )}
            >
              <div className={cn(
                "bg-gradient-to-br from-light-navy/30 to-navy/20 backdrop-blur-sm border border-white/5",
                "hover:border-white/20 transform hover:-translate-y-2 transition-all duration-500"
              )}>
                <div className="h-48 overflow-hidden relative">
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-r opacity-70 z-0",
                    project.gradient
                  )}></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500 mix-blend-overlay"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lightest-slate font-bold text-xl mb-2 group-hover:text-teal transition-colors duration-300">{project.title}</h3>
                  <p className="text-slate mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="bg-navy/10 dark:bg-white/5 text-slate px-2 py-1 rounded-full text-xs font-mono hover:bg-teal/10 hover:text-teal transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-4 text-slate">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-teal transition-colors duration-300 transform hover:scale-110"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={project.external} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-teal transition-colors duration-300 transform hover:scale-110"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
