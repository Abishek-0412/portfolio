import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import portfolioData from "../../data/portfolio.json";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
               {portfolioData.personalInfo.name}
            </h3>
            <p className="text-muted-foreground mt-2 text-sm max-w-md">
              {portfolioData.personalInfo.bio}
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href={portfolioData.personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href={portfolioData.personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href={portfolioData.personalInfo.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href={`mailto:${portfolioData.personalInfo.email}`}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© {currentYear} {portfolioData.personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
