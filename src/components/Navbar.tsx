import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", url: "#home" },
  { name: "About", url: "#about" },
  { name: "Skills", url: "#skills" },
  { name: "Education", url: "#education" },
  { name: "Projects", url: "#projects" },
  { name: "Experience", url: "#experience" },
  { name: "Contact", url: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "py-4 bg-white/90 dark:bg-navy/90 shadow-md backdrop-blur"
          : "py-6 bg-transparent"
      )}
    >
      <nav className="container flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold text-navy dark:text-white">
          <span className="font-mono text-teal">{"<"}</span>
          Akash
          <span className="font-mono text-teal">{"/>"}</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex space-x-8">
            {navLinks.map((link, i) => (
              <li key={i} className="font-mono text-sm">
                <a
                  href={link.url}
                  className="nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="text-teal mr-1">0{i + 1}.</span> {link.name}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn">
            Resume
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-1 text-slate hover:text-teal"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white/90 dark:bg-navy/90 z-40 transform transition-transform duration-300 md:hidden",
          menuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <ul className="flex flex-col items-center space-y-6 text-lg">
            {navLinks.map((link, i) => (
              <li key={i} className="font-mono">
                <a
                  href={link.url}
                  className="nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="text-teal mr-1">0{i + 1}.</span> {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn mt-10"
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
