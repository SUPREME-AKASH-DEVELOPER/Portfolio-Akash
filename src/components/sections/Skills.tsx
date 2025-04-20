
import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    name: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind CSS", "Vite", "TypeScript", "Flutter"],
    gradient: "from-blue-400 to-cyan-500",
    delay: "delay-100"
  },
  {
    name: "Backend",
    items: ["Node.js", "Express.js", "MongoDB", "MySQL", "Firebase", "RESTful APIs", "Python", "Django", "NestJS"],
    gradient: "from-indigo-500 to-purple-500",
    delay: "delay-300"
  },
  {
    name: "Programming & Tools",
    items: ["C++", "Data Structures", "Algorithms", "Git", "GitHub", "VS Code", "Postman", "Socket.io", "Axios", "Google Cloud", "AWS"],
    gradient: "from-pink-500 to-rose-500",
    delay: "delay-500"
  },
  {
    name: "Blockchain & Others",
    items: ["Solidity", "Ethereum", "Smart Contracts", "Web3", "dApps", "Metamask", "Hardhat", "Truffle", "TensorFlow", "Arduino"],
    gradient: "from-amber-400 to-orange-500",
    delay: "delay-700"
  },
];

export function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="section-padding relative overflow-hidden" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <h2 className={cn(
          "numbered-heading font-semibold text-lightest-slate text-2xl mb-8 opacity-0 translate-y-10 transition-all duration-700",
          isInView && "opacity-100 translate-y-0"
        )}>
          <span className="text-teal mr-2 font-mono">02.</span> Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((category, index) => (
            <div 
              key={index}
              className={cn(
                "bg-light-navy/10 dark:bg-light-navy/30 rounded-lg p-6 hover:shadow-xl transition-all duration-500 border border-transparent",
                `hover:border-gradient-to-r hover:border-${category.gradient.split(" ")[1]}`,
                "transform hover:-translate-y-2",
                "opacity-0 translate-y-10 transition-all duration-700",
                category.delay,
                isInView && "opacity-100 translate-y-0"
              )}
            >
              <h3 className={cn(
                "text-lightest-slate font-semibold mb-4 text-xl",
                `bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`
              )}>
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, i) => (
                  <span 
                    key={i}
                    className={cn(
                      "bg-navy/10 dark:bg-white/5 text-slate px-3 py-1 rounded-full text-sm font-mono",
                      "hover:bg-gradient-to-r hover:from-teal-500/20 hover:to-purple-500/20 hover:text-lightest-slate",
                      "transition-all duration-300 transform hover:scale-105 cursor-default"
                    )}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
