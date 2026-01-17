import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import portfolioData from "../../data/portfolio.json";

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400; // Approx card width + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects" className="py-20 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative group/section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6 text-primary">
            <Code2 size={32} />
          </div>
          <h2 className="text-4xl font-bold mb-4">Featured <span className="text-primary">Projects</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Showcasing real-world applications and technical solutions.
          </p>
        </motion.div>

        <div className="relative">
            {/* Left Scroll Button */}
            <button 
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 lg:-ml-12 z-10 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg text-foreground hover:text-primary hover:border-primary transition-all duration-300 opacity-0 group-hover/section:opacity-100 hidden md:block"
                aria-label="Scroll left"
            >
                <ChevronLeft size={24} />
            </button>

            {/* Right Scroll Button */}
            <button 
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 lg:-mr-12 z-10 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg text-foreground hover:text-primary hover:border-primary transition-all duration-300 opacity-0 group-hover/section:opacity-100 hidden md:block"
                aria-label="Scroll right"
            >
                <ChevronRight size={24} />
            </button>

            <motion.div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory px-4 -mx-4 scrollbar-none"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.2
                }
                }
            }}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
            {portfolioData.projects.map((project, idx) => (
                <motion.div
                key={idx}
                variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50 } }
                }}
                className="min-w-[320px] md:min-w-[400px] snap-center group bg-card border border-border rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col h-full"
                >
                <div className="relative overflow-hidden aspect-video">
                    <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-[2px]">
                    <a 
                        href={project.repoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-primary hover:text-white transition-all transform hover:scale-110 border border-white/20"
                        title="View Code"
                    >
                        <Github size={22} />
                    </a>
                    <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-primary hover:text-white transition-all transform hover:scale-110 border border-white/20"
                        title="View Live"
                    >
                        <ExternalLink size={22} />
                    </a>
                    </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">
                    {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.slice(0, 4).map((tech, techIdx) => (
                        <span 
                        key={techIdx} 
                        className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-secondary"
                        >
                        {tech}
                        </span>
                    ))}
                    {project.technologies.length > 4 && (
                        <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">+{project.technologies.length - 4}</span>
                    )}
                    </div>
                </div>
                </motion.div>
            ))}
            </motion.div>
        </div>
      </div>
    </section>
  );
}
