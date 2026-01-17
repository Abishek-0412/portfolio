import { motion } from "framer-motion";
import { Briefcase, Calendar, GraduationCap } from "lucide-react";
import portfolioData from "../../data/portfolio.json";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 inline-block mb-4">
            Professional Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My career path and academic milestones.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Briefcase className="text-primary" /> Work Experience
            </h3>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              {portfolioData.experience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className="relative pl-8 sm:pl-12 group"
                >
                  <div className="absolute left-2 sm:left-4 top-1 w-3 h-3 bg-primary rounded-full border border-background shadow-[0_0_0_4px_hsl(var(--background))] group-hover:scale-150 transition-transform duration-300" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                    <h4 className="text-xl font-bold group-hover:text-primary transition-colors">{exp.role}</h4>
                    <span className="text-sm font-medium text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full flex items-center gap-1 w-fit mt-1 sm:mt-0">
                       <Calendar size={12} /> {exp.period}
                    </span>
                  </div>
                  <div className="text-lg font-medium text-foreground/80 mb-4">
                    {exp.company}
                  </div>
                  <motion.ul 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 + (idx * 0.1) }}
                    className="space-y-2 text-muted-foreground list-disc list-outside ml-4"
                  >
                    {exp.description.map((point, pointIdx) => (
                      <li key={pointIdx} className="pl-1">{point}</li>
                    ))}
                  </motion.ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <GraduationCap className="text-primary" /> Education
            </h3>
            <div className="space-y-8">
              {portfolioData.education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className="bg-card border border-border p-6 rounded-xl shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <h4 className="text-xl font-bold group-hover:text-primary transition-colors flex items-center gap-3">
                        {edu.degree}
                        <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap">
                          {edu.period}
                        </span>
                      </h4>
                      <div className="text-foreground/80 font-medium mt-1">{edu.institution}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
