'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Vista-Grande",
    description: "A Premium real estate platform named Vista Grand, specializing in luxury property listings across Nigeria. It offers a curated selection of high-end properties, including land developments, modern housing constructions, agricultural investments, and farmland opportunities..",
    image: "/projects/project2.jpg",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    liveUrl: "https://vistagrande.vercel.app/",
    githubUrl: "https://github.com/sammyowase/vistagrande",
    featured: true,
  },
  {
    title: "Hubforge",
    description: "A modern web application built with Next.js and TypeScript.",
    image: "/hubforge.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://hubforge.vercel.app/",
    githubUrl: "https://github.com/hubforge",
    featured: true,
  },
  {
    title: "RSVP Birthday Suprise Party",
    description: "Attendance for a surprise birthday Party.",
    image: "/projects/project5.jpg",
    tags: ["React, Next.js", "Tailwindcss", "Nodemailer"],
    liveUrl: "https://tayos-surprise-party.onrender.com",
    githubUrl: "https://github.com/yourusername/project5",
  },
 
  {
    title: "Speech to Text Transcription App",
    description: "A modern, user-friendly web application that converts speech to text in real-time with powerful export capabilities.",
    image: "/projects/project3.jpg",
    tags: ["React", "shadcn-ui", "Tailwind CSS", "Vite",
      "TypeScript"],
    liveUrl: "https://speachtotext-puce.vercel.app/",
    githubUrl: "https://github.com/Sammyowase/speak-scribe-save-easy",
    featured: true,
  },
  {
    title: "Chat Application Backend",
    description: "A modern chat application backend built with FastAPI, featuring real-time messaging, file uploads, and user management.",
    image: "/projects/project4.jpg",
    tags: ["Python", "FastAPI", "SQLAlchemy with PostgreSQL", "JWT", "Cloudinary", "Fernet (cryptography)", "pytest" ],
    liveUrl: "https://chat-candy.onrender.com/docs",
    githubUrl: "https://github.com/Sammyowase/chat_candy",
  },
  
  {
    title: "Project Six",
    description: "Blockchain-based decentralized application.",
    image: "/projects/project6.jpg",
    tags: ["Solidity", "Web3.js", "React"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project6",
  },
];

export const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showAll, setShowAll] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  // Get unique tags from all projects
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

  // Filter projects based on selected tag and showAll state
  const filteredProjects = projects.filter(project => {
    const tagMatch = selectedTag ? project.tags.includes(selectedTag) : true;
    return showAll ? tagMatch : tagMatch && project.featured;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    show: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const tagVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15
      }
    },
    tap: { scale: 0.95 }
  };

  return (
    <section id="projects" className="min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background/50 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-1/2 -right-1/2 w-full h-full rounded-full bg-gradient-to-b from-primary/5 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -left-1/2 w-full h-full rounded-full bg-gradient-to-t from-secondary/5 to-transparent blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl font-bold sm:text-4xl mb-4 bg-gradient-to-r from-primary via-secondary to-highlight bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-text-secondary max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            A showcase of my recent work and projects I&apos;ve been involved with.
          </motion.p>

          {/* Tags filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.button
              variants={tagVariants}
              whileTap="tap"
              onClick={() => setSelectedTag(null)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                        backdrop-blur-md border
                        ${selectedTag === null
                          ? "bg-primary/20 text-primary border-primary/30 shadow-lg shadow-primary/20"
                          : "bg-white/5 text-text-secondary border-white/10 hover:bg-white/10 hover:border-white/20"
                        }`}
            >
              All
            </motion.button>
            {allTags.map((tag) => (
              <motion.button
                key={tag}
                variants={tagVariants}
                whileTap="tap"
                onClick={() => setSelectedTag(tag)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                          backdrop-blur-md border
                          ${selectedTag === tag
                            ? "bg-primary/20 text-primary border-primary/30 shadow-lg shadow-primary/20"
                            : "bg-white/5 text-text-secondary border-white/10 hover:bg-white/10 hover:border-white/20"
                          }`}
              >
                {tag}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTag || 'all'}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                onHoverStart={() => setHoveredProject(project.title)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group relative"
              >
                {/* Card glow effect */}
                <motion.div
                  className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/20 via-secondary/20 to-highlight/20 opacity-40 blur-xl transition duration-500
                            group-hover:from-primary/30 group-hover:via-secondary/30 group-hover:to-highlight/30 group-hover:opacity-100"
                  animate={{
                    scale: hoveredProject === project.title ? 1.05 : 1,
                  }}
                />
                
                {/* Main card content */}
                <motion.div
                  className="relative rounded-xl overflow-hidden backdrop-blur-md
                            border border-white/10
                            bg-gradient-to-br from-white/10 via-white/[0.07] to-white/[0.05]
                            shadow-[0_8px_16px_rgb(0_0_0/0.2)]
                            group-hover:border-white/20 transition-all duration-500
                            before:absolute before:inset-0 
                            before:bg-gradient-to-br before:from-primary/[0.07] before:via-secondary/[0.05] before:to-highlight/[0.03]
                            before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500"
                  animate={{
                    y: hoveredProject === project.title ? -5 : 0,
                    scale: hoveredProject === project.title ? 1.02 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Project image/preview section */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/90 z-10" />
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-secondary/[0.05] to-highlight/[0.03] flex items-center justify-center text-4xl"
                        animate={{
                          scale: hoveredProject === project.title ? 1.1 : 1,
                          rotate: hoveredProject === project.title ? 5 : 0,
                        }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      >
                        🖼️
                      </motion.div>
                    )}

                    {/* Project links overlay */}
                    <AnimatePresence>
                      {hoveredProject === project.title && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{ type: "spring", stiffness: 200, damping: 20 }}
                          className="absolute inset-0 z-20 bg-black/60 backdrop-blur-sm
                                   flex items-center justify-center gap-4"
                        >
                          {project.liveUrl && (
                            <motion.a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium
                                       bg-primary/60 hover:bg-primary/80 text-white
                                       shadow-lg shadow-primary/20 hover:shadow-primary/30
                                       border border-primary/30 hover:border-primary/50
                                       backdrop-blur-sm transition-all duration-300"
                              whileHover={{ scale: 1.05, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <ExternalLink className="w-4 h-4" />
                              Live Demo
                            </motion.a>
                          )}
                          {project.githubUrl && (
                            <motion.a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium
                                       bg-white/10 hover:bg-white/20 text-white
                                       shadow-lg shadow-black/10 hover:shadow-black/20
                                       border border-white/10 hover:border-white/20
                                       backdrop-blur-sm transition-all duration-300"
                              whileHover={{ scale: 1.05, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Github className="w-4 h-4" />
                              GitHub
                            </motion.a>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Project details */}
                  <motion.div 
                    className="p-6 relative z-10"
                    animate={{
                      y: hoveredProject === project.title ? -2 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <motion.h3 
                      className="text-xl font-semibold mb-3 bg-gradient-to-r from-primary via-secondary to-highlight bg-clip-text text-transparent"
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p 
                      className="text-text-secondary mb-4 line-clamp-2"
                    >
                      {project.description}
                    </motion.p>
                    <motion.div 
                      className="flex flex-wrap gap-2"
                    >
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: 0.1 + tagIndex * 0.1,
                            type: "spring",
                            stiffness: 200,
                            damping: 15
                          }}
                          className="px-3 py-1 text-xs font-medium rounded-full
                                   bg-primary/[0.08] text-primary/90
                                   border border-primary/10 hover:border-primary/20
                                   shadow-sm hover:shadow-md hover:shadow-primary/10
                                   transition-all duration-300"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {!showAll && projects.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <motion.button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 rounded-full font-medium
                       bg-gradient-to-r from-primary/60 via-secondary/60 to-highlight/60
                       hover:from-primary/80 hover:via-secondary/80 hover:to-highlight/80
                       text-white shadow-lg hover:shadow-xl shadow-primary/10 hover:shadow-primary/20
                       border border-white/10 hover:border-white/20
                       backdrop-blur-sm transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View More Projects
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}; 