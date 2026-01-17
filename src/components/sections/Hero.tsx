import { motion } from "framer-motion";
import { Download, Github, Linkedin, Twitter, Code2, Mail } from "lucide-react";
import portfolioData from "../../data/portfolio.json";
import { useEffect, useState } from "react";

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [showCursor, setShowCursor] = useState(true);

  const words = ["Full Stack Engineer", "Professional Coder", "Software Developer"];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTypingSpeed(2000); // Pause at end
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500); // Pause before start
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  const socialIcons = [
    { Icon: Github, href: portfolioData.personalInfo.social.github },
    { Icon: Linkedin, href: portfolioData.personalInfo.social.linkedin },
    { Icon: Twitter, href: portfolioData.personalInfo.social.twitter }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background pt-20 lg:pt-0">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-blue-600/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <span className="text-sm md:text-base font-bold tracking-widest text-primary uppercase mb-4 block">
              Welcome to my world
            </span>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              Hi, I'm <span className="text-primary">{portfolioData.personalInfo.name}</span>
            </h1>

            {/* Mobile Circular Image */}
            <div className="block lg:hidden mb-6 relative w-40 h-40 mx-auto">
                <img 
                  src={portfolioData.personalInfo.image} 
                  alt={portfolioData.personalInfo.name}
                  className="w-full h-full object-cover object-top rounded-full border-4 border-primary/20 shadow-xl"
                />
            </div>
            
            <div className="text-2xl md:text-4xl font-bold mb-6 h-12 flex items-center justify-center lg:justify-start gap-1">
              <span className="text-foreground/80">a </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                {text}
              </span>
              <span className={`w-1 h-8 md:h-10 bg-primary ${showCursor ? "opacity-100" : "opacity-0"}`} />
            </div>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {portfolioData.hero.subtitle}
              <br className="hidden md:block" />
              I use animation as a third dimension to simplify experiences and guide interactions.
            </p>

            {/* Buttons */}
            <div className="flex flex-row gap-4 justify-center lg:justify-start mb-12">
               <a
                href="#projects"
                className="px-6 py-3 bg-primary text-primary-foreground font-bold rounded-lg shadow-lg hover:shadow-primary/25 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                title="View Projects"
              >
                <Code2 size={24} />
                <span className="hidden sm:inline">{portfolioData.hero.ctaText}</span>
              </a>
              <a
                href={portfolioData.hero.resumeLink}
                download
                className="px-6 py-3 bg-card border border-border text-foreground font-bold rounded-lg hover:border-primary hover:text-primary transition-all hover:-translate-y-1 flex items-center justify-center gap-2 shadow-sm"
                title="Download Resume"
              >
                 <Download size={24} /> 
                 <span className="hidden sm:inline">Resume</span>
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-card border border-border text-foreground font-bold rounded-lg hover:border-primary hover:text-primary transition-all hover:-translate-y-1 flex items-center justify-center gap-2 shadow-sm"
                title="Contact Me"
              >
                <Mail size={24} />
                <span className="hidden sm:inline">Contact Me</span>
              </a>
            </div>

            {/* Social Proof / Find With Me */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-8">
               <div className="lg:hidden">
                  <h3 className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-4">
                    Find with me
                  </h3>
                  <div className="flex gap-4">
                     {socialIcons.map(({ Icon, href }, idx) => (
                        <a
                          key={idx}
                          href={href}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-4 bg-card border border-border rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 hover:text-primary transition-all group"
                        >
                           <Icon size={20} className="text-foreground group-hover:text-primary transition-colors" />
                        </a>
                     ))}
                  </div>
               </div>
               
               <div className="hidden sm:block lg:hidden w-px h-16 bg-border/50" />

               <div>
                  <h3 className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-4">
                    Best Skill On
                  </h3>
                   <div className="flex gap-4">
                      {["React", "Node.js", "Python"].map((skill, idx) => (
                         <div key={idx} className="px-4 py-3 bg-card border border-border rounded-lg shadow-sm font-semibold text-sm text-foreground/80 hover:border-primary/50 transition-colors cursor-default">
                            {skill}
                         </div>
                      ))}
                   </div>
               </div>
            </div>

          </motion.div>

          {/* Right Content - Image */}
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="hidden lg:block flex-1 w-full max-w-sm lg:max-w-md relative mx-auto lg:mx-0"
          >
             <div className="relative z-10 w-full">
                <img 
                  src={portfolioData.personalInfo.image} 
                  alt={portfolioData.personalInfo.name}
                  className="w-full h-auto object-contain object-bottom drop-shadow-2xl transition-transform duration-700 hover:scale-105"
                />
             </div>
             
             {/* Background Blob behind image */}
             <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-primary/20 to-blue-600/20 rounded-full blur-[80px] animate-pulse" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
