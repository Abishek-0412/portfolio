import { motion } from "framer-motion";
import { Check, Lightbulb } from "lucide-react";
import portfolioData from "../../data/portfolio.json";

export default function AdditionalExpertise() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
           <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 inline-block mb-4">
            Additional Expertise
          </h2>
          <p className="text-muted-foreground w-full max-w-2xl mx-auto">
             Going beyond coding to deliver complete solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
           {/* Domains */}
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all"
           >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                 <div className="p-2 bg-primary/10 rounded-lg text-primary">
                   <Lightbulb size={24} />
                 </div>
                 Domain Knowledge
              </h3>
              <div className="flex flex-col gap-4">
                 {portfolioData.additionalExpertise.domains.map((domain, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                       <Check size={18} className="text-green-500" />
                       <span className="font-medium text-foreground/80">{domain}</span>
                    </div>
                 ))}
              </div>
           </motion.div>

           {/* Methodologies */}
           <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all"
           >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                 <div className="p-2 bg-blue-500/10 rounded-lg text-blue-600">
                   <Check size={24} />
                 </div>
                 Methodologies
              </h3>
              <div className="flex flex-col gap-4">
                 {portfolioData.additionalExpertise.methodologies.map((method, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                       <Check size={18} className="text-green-500" />
                       <span className="font-medium text-foreground/80">{method}</span>
                    </div>
                 ))}
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
