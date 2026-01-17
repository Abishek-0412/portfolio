import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import portfolioData from "../../data/portfolio.json";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  // Helper for Netlify form submission
  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    setIsError(false);

    // Simulate submission or real Netlify submission
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data }),
    })
      .then(() => {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 inline-block mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-xl p-8 shadow-sm"
          >
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className={`w-full px-4 py-2 rounded-md border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${
                      errors.name ? "border-red-500" : "border-border"
                    }`}
                    placeholder="John Doe"
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <span className="text-xs text-red-500">{errors.name.message}</span>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className={`w-full px-4 py-2 rounded-md border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${
                      errors.email ? "border-red-500" : "border-border"
                    }`}
                    placeholder="john@example.com"
                     disabled={isSubmitting}
                  />
                  {errors.email && (
                    <span className="text-xs text-red-500">{errors.email.message}</span>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message", { required: "Message is required" })}
                  className={`w-full px-4 py-2 rounded-md border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none ${
                    errors.message ? "border-red-500" : "border-border"
                  }`}
                  placeholder="Tell me about your project..."
                   disabled={isSubmitting}
                />
                {errors.message && (
                  <span className="text-xs text-red-500">{errors.message.message}</span>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : isSuccess ? (
                    <>
                      Sent Successfully <CheckCircle size={18} />
                    </>
                  ) : isError ? (
                     <>
                      Error Sending <AlertCircle size={18} />
                    </>
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </button>
              </div>
              
               {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-green-500/10 border border-green-500/20 rounded-md text-green-600 text-sm text-center"
                >
                  Thanks for reaching out! I'll get back to you soon.
                </motion.div>
              )}
            </form>
            
             <div className="mt-8 pt-8 border-t border-border flex justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-green-500"></div>
                   Available for work
                </div>
                <div>
                   {portfolioData.personalInfo.email}
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
