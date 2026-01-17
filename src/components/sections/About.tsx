import { motion } from "framer-motion";
import portfolioData from "../../data/portfolio.json";

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 mb-6 inline-block">
              About Me
            </h2>
            <div className="prose prose-lg dark:prose-invert text-muted-foreground mb-8 max-w-none">
               {portfolioData.about.description.map((paragraph, index) => (
                 <p key={index} className="text-lg leading-relaxed mb-6">
                   {paragraph}
                 </p>
               ))}
            </div>

            <div className="bg-card border border-border p-6 rounded-xl shadow-sm mb-8">
              <h3 className="text-lg font-semibold mb-2 text-primary">Career Objective</h3>
              <p className="text-muted-foreground italic">
                "{portfolioData.careerObjective}"
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-8">
               <div className="flex flex-col items-center md:items-start">
                  <span className="text-4xl font-bold text-primary">4+</span>
                  <span className="text-sm text-muted-foreground uppercase tracking-wider mt-1">Years Experience</span>
               </div>
               <div className="w-px h-16 bg-border hidden md:block"></div>
               <div className="flex flex-col items-center md:items-start">
                  <span className="text-4xl font-bold text-primary">5+</span>
                  <span className="text-sm text-muted-foreground uppercase tracking-wider mt-1">Projects Completed</span>
               </div>
               <div className="w-px h-16 bg-border hidden md:block"></div>
               {/* <div className="flex flex-col items-center md:items-start">
                  <span className="text-4xl font-bold text-primary">20+</span>
                  <span className="text-sm text-muted-foreground uppercase tracking-wider mt-1">Happy Clients</span>
               </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
