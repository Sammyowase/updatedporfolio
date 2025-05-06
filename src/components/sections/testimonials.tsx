'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { AvatarPlaceholder } from '@/components/ui/avatar-placeholder'
import { useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Quote } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mr Yusuf",
    role: "CEO",
    company: "VistaGrande",
    content: "Working with this developer was an absolute pleasure. Their attention to detail and problem-solving skills are exceptional. They delivered high-quality code consistently.",
    image: "😊" // Replace with actual image path
  },
  {
    id: 2,
    name: "Wofai Samuel",
    role: "Director General",
    company: "Nigerian American Chamber Of Commerce",
    content: "An outstanding professional who consistently delivers beyond expectations. Their technical expertise and communication skills made our project a success.",
    image: "🌟" // Replace with actual image path
  },
  {
    id: 3,
    name: "Alayo Azeezat",
    role: "Chanter",
    company: "Alayo",
    content: "Exceptional talent and dedication. They brought innovative solutions to complex problems and were always ready to go the extra mile.",
    image: "🚀" // Replace with actual image path
  }
]

export const Testimonials = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="testimonials" className="min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background/50 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 -left-1/2 w-full h-full rounded-full bg-gradient-to-b from-primary/5 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full bg-gradient-to-t from-secondary/5 to-transparent blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-highlight bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Hear what others have to say about working with me
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              onHoverStart={() => setHoveredId(testimonial.id)}
              onHoverEnd={() => setHoveredId(null)}
              onClick={() => setExpandedId(expandedId === testimonial.id ? null : testimonial.id)}
              className="group relative cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: testimonial.id * 0.2 }}
            >
              {/* Card glow effect */}
              <motion.div
                className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/20 via-secondary/20 to-highlight/20 opacity-40 blur-xl transition duration-500
                          group-hover:from-primary/30 group-hover:via-secondary/30 group-hover:to-highlight/30 group-hover:opacity-100"
                animate={{
                  scale: hoveredId === testimonial.id ? 1.05 : 1,
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
                  y: hoveredId === testimonial.id ? -5 : 0,
                  scale: hoveredId === testimonial.id ? 1.02 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="p-6 relative">
                  {/* Quote icon */}
                  <motion.div
                    className="absolute top-4 right-4 text-primary/10 group-hover:text-primary/30 transition-colors duration-300"
                    animate={{
                      rotate: hoveredId === testimonial.id ? [0, -10, 10, -5, 5, 0] : 0,
                    }}
                    transition={{ duration: 1, delay: 0.2 }}
                  >
                    <Quote size={24} />
                  </motion.div>

                  {/* Testimonial content */}
                  <div className="mb-6">
                    <motion.p
                      className={`text-text-secondary/90 ${expandedId === testimonial.id ? '' : 'line-clamp-4'}`}
                    >
                      {testimonial.content}
                    </motion.p>
                    {!expandedId && testimonial.content.length > 150 && (
                      <motion.button
                        className="mt-2 text-primary/40 hover:text-primary/70 text-sm font-medium transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Read More
                      </motion.button>
                    )}
                  </div>

                  {/* Author info */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/[0.08] via-secondary/[0.05] to-highlight/[0.03] 
                                  border border-white/10 group-hover:border-white/20 transition-all duration-300
                                  flex items-center justify-center text-2xl shadow-inner">
                      {testimonial.image}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white/90 group-hover:text-white transition-colors duration-300">{testimonial.name}</h4>
                      <p className="text-sm text-text-secondary/80 group-hover:text-text-secondary transition-colors duration-300">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 