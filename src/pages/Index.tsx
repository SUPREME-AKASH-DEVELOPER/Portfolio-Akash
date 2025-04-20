import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { SocialLinks } from "@/components/SocialLinks";
import { LiveChat } from "@/components/LiveChat";
import { ThemeProvider } from "@/components/ThemeProvider";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = entry.target as HTMLElement;
          const sectionId = section.id;
          
          if (sectionId === 'about') {
            section.classList.add('animate-fadeIn');
          } else if (sectionId === 'skills') {
            section.classList.add('animate-scaleUp');
          } else if (sectionId === 'projects') {
            section.classList.add('animate-slideRight');
          } else if (sectionId === 'experience') {
            section.classList.add('animate-slideLeft');
          } else if (sectionId === 'education') {
            section.classList.add('animate-zoomIn');
          } else if (sectionId === 'awards') {
            section.classList.add('animate-bounce');
          } else {
            section.classList.add('animate-slideUp');
          }
          
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section:not(#home)').forEach((section) => {
      section.classList.add('opacity-0');
      observer.observe(section);
    });

    const createParticles = () => {
      const particleContainer = document.createElement('div');
      particleContainer.className = 'fixed inset-0 pointer-events-none z-0';
      document.body.appendChild(particleContainer);

      const colors = ['#64ffda', '#c792ea', '#ffcb6b', '#82aaff', '#f78c6c', '#ff5370'];
      
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 5 + 2;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.className = 'absolute rounded-full';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = color;
        particle.style.opacity = (Math.random() * 0.6 + 0.2).toString();
        
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 10;
        particle.style.animation = `floating ${duration}s ease-in-out ${delay}s infinite alternate`;
        
        particleContainer.appendChild(particle);
      }
      
      if (!document.querySelector('#particle-animation')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'particle-animation';
        styleSheet.textContent = `
          @keyframes floating {
            0% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(10px, 15px) rotate(5deg); }
            50% { transform: translate(-5px, 10px) rotate(-5deg); }
            75% { transform: translate(-15px, -10px) rotate(10deg); }
            100% { transform: translate(5px, -15px) rotate(-10deg); }
          }
          
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes scaleUp {
            from { opacity: 0; transform: scale(0.8); }
            to { opacity: 1; transform: scale(1); }
          }
          
          @keyframes slideRight {
            from { opacity: 0; transform: translateX(-50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          
          @keyframes slideLeft {
            from { opacity: 0; transform: translateX(50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          
          @keyframes zoomIn {
            from { opacity: 0; transform: scale(0.5); }
            to { opacity: 1; transform: scale(1); }
          }
          
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(50px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .animate-fadeIn {
            animation: fadeIn 1s ease forwards;
          }
          
          .animate-scaleUp {
            animation: scaleUp 1s ease forwards;
          }
          
          .animate-slideRight {
            animation: slideRight 1s ease forwards;
          }
          
          .animate-slideLeft {
            animation: slideLeft 1s ease forwards;
          }
          
          .animate-zoomIn {
            animation: zoomIn 1s ease forwards;
          }
          
          .animate-slideUp {
            animation: slideUp 1s ease forwards;
          }
        `;
        document.head.appendChild(styleSheet);
      }
    };
    
    createParticles();

    return () => {
      observer.disconnect();
      const particleContainer = document.querySelector('div.fixed.inset-0.pointer-events-none');
      if (particleContainer) {
        document.body.removeChild(particleContainer);
      }
      
      const styleSheet = document.querySelector('#particle-animation');
      if (styleSheet) {
        document.head.removeChild(styleSheet);
      }
    };
  }, []);

  return (
    <ThemeProvider defaultTheme="light">
      <Navbar />
      
      <main className="bg-background text-foreground pb-10 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-gradient-to-br from-purple-500 via-transparent to-teal-500"></div>
          <div className="absolute bottom-0 left-0 w-full h-2/3 opacity-10 bg-gradient-to-tr from-orange-500 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-1">
          <Hero />
          <About />
          <Skills />
          <Education />
          <Projects />
          <Experience />
          <Contact />
        </div>
      </main>

      <div className="fixed bottom-0 left-6 md:left-10 right-auto z-10 hidden md:block">
        <SocialLinks vertical={true} />
      </div>

      <div className="fixed bottom-0 left-auto right-6 md:right-10 z-10 hidden md:block">
        <div className="flex flex-col items-center mb-8">
          <a 
            href="mailto:akashlakhwan2329@gmail.com" 
            className="font-mono text-sm text-slate hover:text-teal writing-vertical-lr transition-colors duration-300 mb-6"
          >
            
          </a>
          <div className="w-[1px] h-20 bg-gradient-to-b from-slate to-teal"></div>
        </div>
      </div>
      
      <Footer />
      <LiveChat />
    </ThemeProvider>
  );
};

export default Index;
