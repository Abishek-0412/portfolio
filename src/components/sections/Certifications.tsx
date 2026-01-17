import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";
import portfolioData from "../../data/portfolio.json";

export default function Certifications() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6 text-primary">
            <Award size={32} />
          </div>
          <h2 className="text-3xl font-bold mb-4">Certifications</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {portfolioData.certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card border border-border px-8 py-6 rounded-xl shadow-sm hover:shadow-md hover:border-primary/30 transition-all flex items-center gap-4 min-w-[300px]"
            >
              <CheckCircle className="text-green-500 shrink-0" size={24} />
              <span className="font-semibold text-lg">{cert}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
