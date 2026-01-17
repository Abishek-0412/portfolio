import { motion } from "framer-motion";
import { BrainCircuit, Blocks, Palette, Users, Zap } from "lucide-react";
import portfolioData from "../../data/portfolio.json";

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring" as const, stiffness: 50 }
    }
  };

  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
       {/* Decorator */}
       <div className="absolute top-40 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold mb-6">
            Technical <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">Proficiency</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive toolset developed over years of building production-grade systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={container}
              className="bg-card/50 backdrop-blur-sm border border-border p-8 rounded-2xl hover:border-primary/50 transition-colors group"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-1 h-6 bg-gradient-to-b from-primary to-blue-600 rounded-full group-hover:h-8 transition-all duration-300"></span>
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIdx) => (
                  <motion.span
                    key={skillIdx}
                    variants={item}
                    className="px-4 py-2 bg-secondary/50 border border-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 transform hover:-translate-y-1 cursor-default shadow-sm"
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
          className="mt-24"
        >
           <div className="text-center mb-16 relative">
              <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600 dark:from-white dark:to-white/60 inline-block relative z-10 pb-4">
                Core Strengths
              </h3>
              <div className="h-1 w-24 bg-blue-500 mx-auto rounded-full blur-[2px] shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { 
                  text: "Strong problem-solving and analytical skills", 
                  icon: BrainCircuit, 
                  startColor: "from-purple-500", 
                  endColor: "to-purple-900",
                  iconColor: "text-purple-400",
                  shadow: "shadow-[0_0_20px_rgba(168,85,247,0.15)]",
                  border: "border-purple-500/30"
                },
                { 
                  text: "Clean and scalable code architecture", 
                  icon: Blocks, 
                  startColor: "from-blue-500", 
                  endColor: "to-blue-900",
                  iconColor: "text-blue-400",
                  shadow: "shadow-[0_0_20px_rgba(59,130,246,0.15)]",
                  border: "border-blue-500/30"
                },
                { 
                  text: "UI/UX focused development", 
                  icon: Palette, 
                  startColor: "from-pink-500", 
                  endColor: "to-pink-900",
                  iconColor: "text-pink-400",
                  shadow: "shadow-[0_0_20px_rgba(236,72,153,0.15)]",
                  border: "border-pink-500/30"
                },
                { 
                  text: "Team leadership and mentoring", 
                  icon: Users, 
                  startColor: "from-green-500", 
                  endColor: "to-green-900",
                  iconColor: "text-green-400",
                  shadow: "shadow-[0_0_20px_rgba(34,197,94,0.15)]",
                  border: "border-green-500/30"
                },
                { 
                  text: "Performance and optimization mindset", 
                  icon: Zap, 
                  startColor: "from-yellow-500", 
                  endColor: "to-yellow-900",
                  iconColor: "text-yellow-400",
                  shadow: "shadow-[0_0_20px_rgba(234,179,8,0.15)]",
                  border: "border-yellow-500/30"
                }
              ].map((item, idx) => (
                 <motion.div
                   key={idx}
                   whileHover={{ y: -10, scale: 1.02 }}
                   className={`relative p-6 rounded-2xl border ${item.border} bg-gradient-to-b from-white/5 to-transparent backdrop-blur-md overflow-hidden flex flex-col items-center text-center h-full group transition-all duration-300 ${item.shadow} hover:shadow-xl`}
                 >
                    {/* Top Gradient Line */}
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.startColor} ${item.endColor} opacity-50 group-hover:opacity-100 transition-opacity`} />
                    
                    {/* Icon */}
                    <div className="mb-6 mt-4 relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.startColor} ${item.endColor} blur-xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full`} />
                        <item.icon size={48} className={`${item.iconColor} drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] relative z-10`} />
                    </div>

                    {/* Text */}
                    <h4 className="font-semibold text-base md:text-lg text-gray-900 dark:text-white/90 leading-tight">
                      {item.text}
                    </h4>

                    {/* Glossy Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl" />
                 </motion.div>
              ))}
           </div>
        </motion.div>
      </div>
    </section>
  );
}
