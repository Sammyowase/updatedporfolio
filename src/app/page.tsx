'use client';

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ParticlesBackground } from "@/components/particles-background";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <ParticlesBackground />
      
      {/* Hero Section */}
      <section id="home" className="relative flex min-h-screen w-full flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-6xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-highlight bg-clip-text text-transparent">
            Samuel Owase
            </span>
          </h1>
          
          <div className="mb-8 h-[60px] text-2xl font-semibold sm:text-3xl">
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                1000,
                "Web Developer",
                1000,
                "Backend Developer",
                1000,
                "Full Stack Engineer",
                1000,
                "Software Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-text-secondary"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <MagneticButton href="#projects">
              View My Work
            </MagneticButton>
            <MagneticButton href="#contact" variant="outline">
              Get in Touch
            </MagneticButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute bottom-8"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <span className="mb-2 text-sm text-text-secondary">Scroll Down</span>
            <svg
              className="h-6 w-6 text-text-secondary"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <About />

      {/* Projects Section - Moved before Skills */}
      <Projects />

      {/* Skills Section */}
      <Skills />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
