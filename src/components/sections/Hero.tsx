import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center section-padding pt-28 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 blur-3xl animate-pulse [animation-delay:2s]"></div>
        <div className="absolute top-1/2 right-1/4 w-56 h-56 rounded-full bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 blur-3xl animate-pulse [animation-delay:4s]"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl">
          <h1 
            className={cn(
              "font-mono text-teal mb-5 opacity-0",
              isVisible && "animate-fadeIn [animation-delay:200ms]"
            )}
          >
            Hi, my name is
          </h1>
          <h2 
            className={cn(
              "text-4xl md:text-5xl lg:text-7xl font-bold text-lightest-slate mb-4 opacity-0",
              isVisible && "animate-fadeIn [animation-delay:400ms]"
            )}
          >
            Akash Lakhwan.
          </h2>
          <h3 
            className={cn(
              "text-3xl md:text-4xl lg:text-6xl font-bold text-slate mb-8 opacity-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent",
              isVisible && "animate-fadeIn [animation-delay:600ms]"
            )}
          >
            Aspiring SDE & Tech Enthusiast.
          </h3>
          <p 
            className={cn(
              "text-slate max-w-xl mb-12 text-lg opacity-0",
              isVisible && "animate-fadeIn [animation-delay:800ms]"
            )}
          >
            Setting out on the path to engineering, I am fueled by an unyielding
            thirst for knowledge and a deep passion for unraveling the
            mysteries of computer science. With each challenge I encounter,
            my enthusiasm for innovative problem-solving only grows stronger.
          </p>
          <div 
            className={cn(
              "opacity-0 flex gap-4 flex-wrap",
              isVisible && "animate-fadeIn [animation-delay:1000ms]"
            )}
          >
            <a href="#projects" className="btn bg-gradient-to-r from-teal-400 to-cyan-500 text-navy hover:from-teal-500 hover:to-cyan-600 border-none">
              Check out my projects!
            </a>
            
            <a 
              href="https://drive.google.com/file/d/1lZdym7DfvCqX48WfjZ8Vn1NQf9geh96e/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              download="Akash_Lakhwan_Resume.pdf"
              className="btn flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 border-none"
            >
              <FileDown size={16} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-teal flex justify-center items-start p-1">
          <div className="w-1 h-2 bg-teal rounded-full animate-scrollDown"></div>
        </div>
      </div>
    </section>
  );
}
