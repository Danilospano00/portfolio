'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { content } from '@/data/content'
import SectionTitle from '@/components/ui/SectionTitle'
import Tag from '@/components/ui/Tag'

export default function Experience() {
  const { lang } = useLanguage()
  const t = content[lang].experience

  const handleScrollToImpact = () => {
    document.querySelector('#impact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="experience" className="py-24 px-6 bg-bg-secondary">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title={t.heading} />

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px timeline-line" />

          <div className="space-y-8">
            {t.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-6 top-5 w-4 h-4 rounded-full border-2 border-orange-primary bg-bg-primary" />

                <div
                  className={`border rounded-xl p-6 bg-bg-tertiary transition-all duration-300 hover:scale-[1.01] hover:border-orange-primary/40 ${
                    item.highlight
                      ? 'border-orange-primary/40 orange-glow'
                      : 'border-[var(--border)]'
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-display font-bold text-xl text-text-primary">
                        {item.company}
                      </h3>
                      <p className="text-orange-primary font-medium">{item.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-text-secondary text-sm">{item.period}</p>
                      <p className="text-text-muted text-xs">{item.location}</p>
                    </div>
                  </div>

                  {/* Chips */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs bg-bg-secondary border border-[var(--border)] text-text-muted px-2.5 py-0.5 rounded-full">
                      {item.type}
                    </span>
                    <span className="text-xs bg-bg-secondary border border-[var(--border)] text-text-muted px-2.5 py-0.5 rounded-full">
                      {item.duration}
                    </span>
                    {item.highlight && (
                      <button
                        onClick={handleScrollToImpact}
                        className="text-xs bg-[rgba(249,115,22,0.1)] border border-orange-primary/40 text-orange-primary px-2.5 py-0.5 rounded-full hover:bg-[rgba(249,115,22,0.2)] transition-colors"
                      >
                        🏆 See impact
                      </button>
                    )}
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Tag key={tag} label={tag} />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
