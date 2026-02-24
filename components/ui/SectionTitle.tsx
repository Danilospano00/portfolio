'use client'

import { motion } from 'framer-motion'

interface SectionTitleProps {
  title: string
  className?: string
}

export default function SectionTitle({ title, className = '' }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${className}`}
    >
      <div className="flex items-center gap-4">
        <div className="h-px w-8 bg-orange-primary" />
        <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary">
          {title}
        </h2>
      </div>
    </motion.div>
  )
}
