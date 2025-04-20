import { SocialLinks } from "./SocialLinks";
import { cn } from "@/lib/utils";
import { MessageSquareText, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-10 mt-24 border-t border-lightest-navy/20 relative overflow-hidden">
      {/* Background gradient with multiple colors */}
      <div className="absolute inset-0 z-0 opacity-15">
        <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-teal-400/30 via-navy/5 to-transparent blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-pink-400/20 to-purple-500/20 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-amber-400/20 to-orange-500/20 blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center justify-center">
          <SocialLinks className="mb-6" iconSize={24} />
          
          <p className="text-slate text-center max-w-md mb-3 bg-gradient-to-r from-slate via-light-slate to-slate bg-clip-text font-medium">
            Thank you for visiting my personal portfolio website.
            Connect with me over socials. Keep Rising 🚀.
          </p>
          
          <div className="flex items-center gap-2 mb-6 text-slate hover:text-teal transition-colors duration-300 group">
            <MessageSquareText size={18} className="group-hover:animate-pulse" />
            <p className="group-hover:text-teal transition-colors duration-300">
              Connect with me over live chat!
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-lg mx-auto mb-6">
            {[
              "C++", "DSA", "Web Dev", "React", "Node.js", "MongoDB", 
              "Blockchain", "Ethereum", "Solidity", "Problem Solving",
              "UI/UX", "Python", "AI/ML", "Express.js"
            ].map((tag, index) => (
              <span 
                key={index} 
                className={cn(
                  "px-3 py-1 text-xs font-mono rounded-full",
                  "bg-gradient-to-r from-navy/30 to-light-navy/20 backdrop-blur-sm border border-white/5",
                  "hover:border-teal/30 transition-all duration-300 cursor-default"
                )}
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-teal/20 via-navy/0 to-teal/20 h-px w-24 my-4"></div>
          
          <p className="mt-4 text-sm text-slate font-mono">
            Designed & Built with <Heart size={14} className="inline text-pink-500 animate-pulse" /> by Akash Lakhwan
          </p>
          <p className="text-xs text-slate/70 mt-1">© 2025 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
