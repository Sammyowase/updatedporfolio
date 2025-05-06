'use client';

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "tools";
  icon: string;
}

const skills: Skill[] = [
  // Frontend
  { name: "React", level: 90, category: "frontend", icon: "⚛️" },
  { name: "TypeScript", level: 85, category: "frontend", icon: "📘" },
  { name: "Next.js", level: 88, category: "frontend", icon: "▲" },
  { name: "TailwindCSS", level: 92, category: "frontend", icon: "🎨" },
  { name: "HTML/CSS", level: 95, category: "frontend", icon: "🎯" },
  
  // Backend
  { name: "Node.js", level: 82, category: "backend", icon: "🟢" },
  { name: "Python", level: 78, category: "backend", icon: "🐍" },
  { name: "MongoDB", level: 75, category: "backend", icon: "🍃" },
  { name: "PostgreSQL", level: 70, category: "backend", icon: "🐘" },
  { name: "GraphQL", level: 72, category: "backend", icon: "📊" },
  
  // Tools
  { name: "Git", level: 88, category: "tools", icon: "📦" },
  { name: "Docker", level: 75, category: "tools", icon: "🐳" },
  { name: "AWS", level: 70, category: "tools", icon: "☁️" },
  { name: "Jest", level: 80, category: "tools", icon: "🃏" },
  { name: "Webpack", level: 72, category: "tools", icon: "📦" },
];

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<"frontend" | "backend" | "tools" | "all">("all");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredSkills = selectedCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">Skills & Expertise</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
            across different areas of software development.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12">
          {["all", "frontend", "backend", "tools"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category as "frontend" | "backend" | "tools" | "all")}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-white/5 text-text-secondary hover:bg-white/10"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass p-6 rounded-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-2xl">{skill.icon}</span>
                <div>
                  <h3 className="font-semibold">{skill.name}</h3>
                  <p className="text-text-secondary text-sm">{skill.category}</p>
                </div>
              </div>
              
              {/* Skill Level Bar */}
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-full bg-gradient-to-r from-primary to-secondary"
                />
              </div>
              <div className="mt-2 text-right text-sm text-text-secondary">
                {skill.level}%
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};