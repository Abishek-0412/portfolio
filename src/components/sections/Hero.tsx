import { motion } from "framer-motion";
import { Download, Github, Linkedin, Twitter, Code2 } from "lucide-react";
import portfolioData from "../../data/portfolio.json";
import { useEffect, useState } from "react";

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [showCursor, setShowCursor] = useState(true);

  const words = ["Full Stack Developer", "Developer Lead", "Engineering Specialist", "AI System Architect"];

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
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-blue-600/10 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,23,42,0.4)_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xs md:text-sm font-bold tracking-[0.2em] text-primary uppercase mb-6 block"
            >
              Excellence in Engineering
            </motion.span>
            
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight text-white">
              Hi, I'm <span className="text-gradient">{portfolioData.personalInfo.name}</span>
            </h1>

            {/* Mobile Circular Image */}
            <div className="block lg:hidden mb-10 relative w-40 h-40 mx-auto">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-50" />
                <img 
                  src={portfolioData.personalInfo.image} 
                  alt={portfolioData.personalInfo.name}
                  className="relative w-full h-full object-cover object-top rounded-full border border-white/10 shadow-xl"
                />
            </div>
            
            <div className="text-xl md:text-3xl font-bold mb-8 h-10 flex items-center justify-center lg:justify-start gap-2">
              <span className="text-foreground/50 font-medium italic">a </span>
              <span className="text-white">
                {text}
              </span>
              <span className={`w-1 h-8 md:h-10 bg-primary ${showCursor ? "opacity-100" : "opacity-0"}`} />
            </div>

            <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              {portfolioData.hero.subtitle}
              <br className="hidden md:block" />
              <span className="text-foreground/40 mt-2 block italic text-sm">Building reliable systems with a focus on performance and observability.</span>
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-16">
               <a
                href="#projects"
                className="px-6 py-3 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group"
                title="View Projects"
              >
                <Code2 size={20} className="group-hover:rotate-12 transition-transform" />
                <span>{portfolioData.hero.ctaText}</span>
              </a>
              <a
                href={portfolioData.hero.resumeLink}
                download
                className="px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 text-foreground font-bold rounded-xl hover:bg-white/10 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                title="Download Resume"
              >
                 <Download size={20} /> 
                 <span>Resume</span>
              </a>
            </div>

            {/* Social Proof / Find With Me */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-12">
               <div className="lg:hidden w-full">
                  <h3 className="text-[10px] font-black tracking-[0.2em] text-muted-foreground uppercase mb-6 text-center">
                    FIND ME ON
                  </h3>
                  <div className="flex justify-center gap-6">
                     {socialIcons.map(({ Icon, href }, idx) => (
                        <a
                          key={idx}
                          href={href}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-5 bg-white/5 border border-white/10 rounded-2xl shadow-xl hover:bg-primary/10 hover:border-primary/50 hover:-translate-y-2 transition-all group"
                        >
                           <Icon size={24} className="text-foreground group-hover:text-primary transition-colors" />
                        </a>
                     ))}
                  </div>
               </div>
               
               <div className="hidden sm:block lg:hidden w-px h-20 bg-white/10" />

               <div className="w-full sm:w-auto">
                  <h3 className="text-[10px] font-black tracking-[0.2em] text-muted-foreground uppercase mb-6 text-center lg:text-left">
                    EXPERTISE IN
                  </h3>
                   <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                      {["React", "Node.js", "Go", "Python"].map((skill, idx) => (
                         <div key={idx} className="px-5 py-3 bg-white/5 border border-white/10 rounded-xl font-bold text-sm text-foreground/70 hover:text-primary transition-all cursor-default">
                            {skill}
                         </div>
                      ))}
                   </div>
               </div>
            </div>

          </motion.div>

          {/* Right Content - Image */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, ease: "easeOut" }}
             className="hidden lg:block flex-1 w-full max-w-md relative"
          >
             <div className="relative z-10 w-full group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-cyan-400/30 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img 
                  src={portfolioData.personalInfo.image} 
                  alt={portfolioData.personalInfo.name}
                  className="w-full h-auto object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:scale-105"
                />
             </div>
             
             {/* Abstract floating elements */}
             <motion.div 
               animate={{ y: [0, -20, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-10 -right-10 p-6 glass-card rounded-2xl shadow-2xl"
             >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-ping" />
                  <span className="text-sm font-bold">Available for Hire</span>
                </div>
             </motion.div>

             <motion.div 
               animate={{ y: [0, 20, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute -bottom-10 -left-10 p-6 glass-card rounded-2xl shadow-2xl"
             >
                <div className="text-center">
                  <div className="text-2xl font-black text-primary">4+</div>
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Years Experience</div>
                </div>
             </motion.div>
             
             {/* Background Blob behind image */}
             <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(59,130,246,0.15)_0%,transparent_70%)] rounded-full blur-[80px]" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
