'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { content } from '@/data/content'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

export default function ImpactNumbers() {
  const { lang } = useLanguage()
  const t = content[lang].impact

  return (
    <section className="py-24 px-6 bg-bg-primary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="h-px w-12 bg-orange-primary mb-6" />
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary">
            {t.heading}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {t.numbers.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <AnimatedCounter value={item.value} suffix={item.suffix} label={item.label} />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-text-muted text-sm font-mono text-center mt-10"
        >
          {t.context}
        </motion.p>
      </div>
    </section>
  )
}
