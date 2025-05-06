'use client'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  company?: string;
}

const timeline: TimelineItem[] = [
  {
    year: "2025",
    title: "Full stack Developer",
    company: "Sea-Faj Consult",
    description: "Leading the development team and implementing modern web technologies."
  },
  {
    year: "2025",
    title: "Full Stack Developer",
    company: "Sail Innovation Lab",
    description: "Developed full-stack applications using Next.js, Node.js, and MongoDB."
  },
  {
    year: "2025",
    title: "Backend Developer",
    company: "Qmart",
    description: "Created responsive web applications with React and TypeScript."
  }
];

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">About Me</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            I&apos;m a passionate developer with expertise in building modern web applications.
            I specialize in frontend development with a focus on creating beautiful,
            responsive, and user-friendly interfaces.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-highlight" />

          {/* Timeline items */}
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "flex-row-reverse" : ""
                }`}
              >
                {/* Timeline content */}
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                  <div className="p-4 glass rounded-lg hover:scale-105 transition-transform">
                    <span className="text-primary font-bold">{item.year}</span>
                    <h3 className="text-xl font-semibold mt-1">{item.title}</h3>
                    {item.company && (
                      <p className="text-text-secondary text-sm">{item.company}</p>
                    )}
                    <p className="mt-2 text-text-secondary">{item.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4">
                  <div className="w-full h-full bg-primary rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 