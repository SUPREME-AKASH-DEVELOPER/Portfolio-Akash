
import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={sectionRef}>
      {/* Background gradient elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-pink-600 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gradient-to-r from-sky-400 via-cyan-500 to-blue-600 blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <h2 className={cn(
          "numbered-heading font-semibold text-lightest-slate text-2xl mb-8 opacity-0 translate-y-10 transition-all duration-700",
          isInView && "opacity-100 translate-y-0"
        )}>
          <span className="text-teal mr-2 font-mono">01.</span> About Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className={cn(
            "md:col-span-2 text-slate opacity-0 translate-y-10 transition-all duration-700 delay-300",
            isInView && "opacity-100 translate-y-0"
          )}>
            <p className="mb-4">
              Hi <span className="inline-block animate-wave">👋</span> My name is Akash Lakhwan, an aspiring SDE, tech enthusiast, and future IT innovator with a passion for C++ & DSA. (He/Him)
            </p>
            
            <p className="mb-4">
              I am passionate about technology and innovation, with hands-on experience in both frontend and backend development. 
              Skilled in C++, Data Structures & Algorithms (DSA), and modern web technologies, I enjoy building end-to-end solutions and tackling complex problems.
            </p>
            
            <p className="mb-4">
              I've worked on full-stack projects, explored emerging fields like AI/ML and blockchain, and actively participate in hackathons and open-source contributions. 
              With a growth mindset and a drive to make an impact, I'm always eager to learn, collaborate, and shape the future of software development.
            </p>
            
            <div className="p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-6">
              <p className="text-lightest-slate italic">
                "Setting out on the path to engineering, I am fueled by an unyielding thirst for knowledge and a deep passion for unraveling the mysteries of computer science. 
                With each challenge I encounter, my enthusiasm for innovative problem-solving only grows stronger."
              </p>
            </div>
            
            <ul className="grid grid-cols-2 mt-6 font-mono text-sm">
              <li className="flex items-center mb-2 group">
                <span className="text-teal mr-2 group-hover:rotate-90 transition-transform duration-300">▹</span> 
                <span className="group-hover:text-teal transition-colors duration-300">JavaScript (ES6+)</span>
              </li>
              <li className="flex items-center mb-2 group">
                <span className="text-teal mr-2 group-hover:rotate-90 transition-transform duration-300">▹</span> 
                <span className="group-hover:text-teal transition-colors duration-300">React.js</span>
              </li>
              <li className="flex items-center mb-2 group">
                <span className="text-teal mr-2 group-hover:rotate-90 transition-transform duration-300">▹</span> 
                <span className="group-hover:text-teal transition-colors duration-300">Node.js</span>
              </li>
              <li className="flex items-center mb-2 group">
                <span className="text-teal mr-2 group-hover:rotate-90 transition-transform duration-300">▹</span> 
                <span className="group-hover:text-teal transition-colors duration-300">TypeScript</span>
              </li>
              <li className="flex items-center mb-2 group">
                <span className="text-teal mr-2 group-hover:rotate-90 transition-transform duration-300">▹</span> 
                <span className="group-hover:text-teal transition-colors duration-300">Express</span>
              </li>
              <li className="flex items-center mb-2 group">
                <span className="text-teal mr-2 group-hover:rotate-90 transition-transform duration-300">▹</span> 
                <span className="group-hover:text-teal transition-colors duration-300">MongoDB</span>
              </li>
              <li className="flex items-center mb-2 group">
                <span className="text-teal mr-2 group-hover:rotate-90 transition-transform duration-300">▹</span> 
                <span className="group-hover:text-teal transition-colors duration-300">C++</span>
              </li>
              <li className="flex items-center mb-2 group">
                <span className="text-teal mr-2 group-hover:rotate-90 transition-transform duration-300">▹</span> 
                <span className="group-hover:text-teal transition-colors duration-300">Blockchain/Web3</span>
              </li>
            </ul>
          </div>
          
          <div className={cn(
            "relative group opacity-0 translate-y-10 transition-all duration-700 delay-500",
            isInView && "opacity-100 translate-y-0"
          )}>
            <div className="relative rounded-md overflow-hidden w-full max-w-xs mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/30 to-purple-500/30 z-10 rounded-md transition-opacity duration-300 group-hover:opacity-0"></div>
              <img 
                src="/lovable-uploads/d05b4b58-2758-4e02-8907-0c602fef03a3.png" 
                alt="Akash Lakhwan"
                className="w-full rounded-md grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-105" 
              />
            </div>
            <div className="absolute -z-10 top-4 left-4 h-full w-full border-2 border-teal rounded-md transition-all duration-300 group-hover:top-5 group-hover:left-5 group-hover:border-purple-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
