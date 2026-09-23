import { motion } from "framer-motion";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import portfolioData from "../../data/portfolio.json";

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 450;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="projects"
      className="py-24 bg-background relative overflow-hidden font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4 block">
            Selected Works
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Architecting and delivering robust, scalable solutions for complex
            business challenges.
          </p>
        </motion.div>

        <div className="relative group/section">
          {/* Left Scroll Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 text-white hover:bg-primary/20 transition-all opacity-0 group-hover/section:opacity-100 hidden md:flex items-center justify-center shadow-2xl"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right Scroll Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 text-white hover:bg-primary/20 transition-all opacity-0 group-hover/section:opacity-100 hidden md:flex items-center justify-center shadow-2xl"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-12 scrollbar-none snap-x snap-mandatory"
          >
            {portfolioData.projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex-shrink-0 w-[300px] md:w-[450px] snap-center"
              >
                <div className="glass-card rounded-2xl overflow-hidden hover-glow transition-all duration-300 h-full border-white/5 group/card hover:border-primary/20">
                  <div className="relative h-48 md:h-60 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105 grayscale-[30%] group-hover/card:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                    {/* <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-[10px] font-black uppercase rounded-lg shadow-lg flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                        Project
                      </span>
                    </div> */}
                  </div>

                  <div className="p-6 md:p-8 space-y-6">
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-white group-hover/card:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground font-medium text-sm md:text-base leading-relaxed mt-3 line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold text-muted-foreground uppercase tracking-tight"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                      {project.liveLink && project.liveLink !== "#" && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 bg-primary/10 rounded-xl text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                          title="Live Demo"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-white/5 rounded-xl text-muted-foreground hover:bg-white/10 hover:text-white transition-all"
                        title="Repository"
                      >
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
