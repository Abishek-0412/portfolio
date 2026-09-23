import { motion } from "framer-motion";
import { Database, Zap, Sparkles, BrainCircuit, Microscope, MessageSquare, Server, Cpu, Layout, LineChart } from "lucide-react";
import portfolioData from "../../data/portfolio.json";

export default function Skills() {
  const strengthIcons = [
    { icon: Server, color: "from-blue-500 to-blue-900", iconColor: "text-blue-400" },
    { icon: MessageSquare, color: "from-cyan-500 to-cyan-900", iconColor: "text-cyan-400" },
    { icon: Database, color: "from-emerald-500 to-emerald-900", iconColor: "text-emerald-400" },
    { icon: BrainCircuit, color: "from-purple-500 to-purple-900", iconColor: "text-purple-400" },
    { icon: Microscope, color: "from-amber-500 to-amber-900", iconColor: "text-amber-400" }
  ];

  return (
    <section id="skills" className="py-32 bg-background relative overflow-hidden">
        {/* Decorator */}
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-blue-600/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4 block">Skills & Expertise</span>
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white">Technical <span className="text-gradient">Proficiency</span></h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Comprehensive knowledge across the full stack, built through years of hands-on engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {portfolioData.skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl hover-glow group transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-3">
                <span className="w-8 h-1 bg-primary rounded-full group-hover:w-12 transition-all" />
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2 mt-auto">
                {skillGroup.items.map((skill, skillIdx) => (
                  <motion.span
                    key={skillIdx}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-white/5 border border-white/10 text-white/70 rounded-xl text-sm font-bold hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Strengths Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-32"
        >
           <div className="text-center mb-20">
              <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-white">
                Core Strengths
              </h3>
              <div className="h-1.5 w-32 bg-gradient-to-r from-primary to-cyan-400 mx-auto rounded-full blur-[1px]"></div>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {portfolioData.strengths.map((strength, idx) => {
                const Icon = strengthIcons[idx]?.icon || Zap;
                const colors = strengthIcons[idx]?.color || "from-gray-500 to-gray-900";
                const iconColor = strengthIcons[idx]?.iconColor || "text-gray-400";
                
                return (
                 <motion.div
                   key={idx}
                   whileHover={{ y: -12, scale: 1.02 }}
                   className={`relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl flex flex-col items-center text-center h-full group transition-all duration-500 hover:border-primary/30`}
                 >
                    {/* Top Gradient Line */}
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colors} opacity-30 group-hover:opacity-100 transition-opacity`} />
                    
                    {/* Icon */}
                    <div className="mb-8 mt-4 relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${colors} blur-2xl opacity-10 group-hover:opacity-30 transition-opacity rounded-full`} />
                        <Icon size={56} className={`${iconColor} drop-shadow-[0_0_15px_rgba(0,0,0,0.5)] relative z-10 transition-transform duration-500 group-hover:scale-110`} />
                    </div>

                    {/* Text */}
                    <h4 className="font-black text-base md:text-lg text-white/90 leading-tight tracking-tight uppercase px-2">
                      {strength}
                    </h4>

                    {/* Glossy Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-3xl" />
                 </motion.div>
                );
              })}
           </div>
        </motion.div>
      </div>
    </section>
  );
}
