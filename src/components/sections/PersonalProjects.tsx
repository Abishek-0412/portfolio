import { motion } from "framer-motion";
import { Github, CheckCircle, Clock, Smartphone } from "lucide-react";
import portfolioData from "../../data/portfolio.json";

type StatusKey = "Completed" | "In Development";

const statusConfig: Record<
  StatusKey,
  { label: string; color: string; icon: typeof CheckCircle }
> = {
  Completed: {
    label: "Completed",
    color: "text-emerald-300 bg-emerald-400/10 border-emerald-400/20",
    icon: CheckCircle,
  },
  "In Development": {
    label: "In Development",
    color: "text-amber-300 bg-amber-400/10 border-amber-400/20",
    icon: Clock,
  },
};

export default function PersonalProjects() {
  const projects = portfolioData.personalProjects;

  return (
    <section
      id="personal-projects"
      className="scroll-mt-20 py-24 bg-background relative overflow-hidden font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4 block">
            Independent Work
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white">
            My Own <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Apps I design and build on my own, separate from company work —
            a private chat that keeps nothing on disk, and voice calls that
            stay on WiFi or Bluetooth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, idx) => {
            const statusCfg =
              statusConfig[project.status as StatusKey] ??
              statusConfig.Completed;
            const StatusIcon = statusCfg.icon;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <article className="glass-card rounded-2xl overflow-hidden hover-glow transition-all duration-300 h-full border-white/5 group hover:border-primary/20 flex flex-col">
                  <div className="relative h-52 md:h-60 overflow-hidden bg-slate-950 flex items-center justify-center">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_68%)]" />
                    <img
                      src={project.image}
                      alt={`${project.title} icon`}
                      className="relative z-10 h-28 md:h-32 w-auto object-contain drop-shadow-[0_12px_30px_rgba(0,0,0,0.45)] transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-background/80 backdrop-blur-sm border border-white/10 text-[10px] font-bold uppercase text-white rounded-lg">
                        <Smartphone size={11} />
                        {project.platform}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 z-10">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 border text-[10px] font-bold uppercase rounded-lg ${statusCfg.color}`}
                      >
                        <StatusIcon size={10} />
                        {statusCfg.label}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 md:p-8 space-y-6 flex flex-col flex-1">
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-xs font-semibold text-primary/80 uppercase tracking-widest mt-2">
                        {project.tagline}
                      </p>
                      <p className="text-muted-foreground font-medium text-sm md:text-base leading-relaxed mt-3">
                        {project.description}
                      </p>
                    </div>

                    <ul className="space-y-2">
                      {project.highlights.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold text-muted-foreground uppercase tracking-tight"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 pt-4 border-t border-white/5 mt-auto">
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/5 rounded-xl text-muted-foreground hover:bg-white/10 hover:text-white transition-all text-sm font-semibold"
                      >
                        <Github size={18} />
                        View on GitHub
                      </a>
                    </div>
                  </div>
                </article>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
