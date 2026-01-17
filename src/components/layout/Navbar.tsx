import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun, Github, Linkedin, Twitter } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import { cn } from "../../lib/utils";
import portfolioData from "../../data/portfolio.json";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Experience", href: "/#experience" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              onClick={() => window.scrollTo(0, 0)}
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600"
            >
              {portfolioData.personalInfo.name.split(' ')[0]}
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
             <div className="flex items-center gap-4 border-r border-border pr-4">
                <a href={portfolioData.personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground transition-colors">
                  <Github size={20} />
                </a>
                <a href={portfolioData.personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href={portfolioData.personalInfo.social.twitter} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground transition-colors">
                  <Twitter size={20} />
                </a>
             </div>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-accent transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-4 px-3 py-2 mt-4 border-t border-border">
                <a href={portfolioData.personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground">
                  <Github size={20} />
                </a>
                <a href={portfolioData.personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground">
                  <Linkedin size={20} />
                </a>
                <a href={portfolioData.personalInfo.social.twitter} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground">
                  <Twitter size={20} />
                </a>
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="ml-auto p-2 rounded-full hover:bg-accent"
                >
                  {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
