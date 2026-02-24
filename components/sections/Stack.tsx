'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { content } from '@/data/content'
import SectionTitle from '@/components/ui/SectionTitle'

const techColors: Record<string, string> = {
  Flutter: 'text-[#54C5F8]',
  Dart: 'text-[#00B4AB]',
  Kotlin: 'text-[#7F52FF]',
  Java: 'text-[#ED8B00]',
  BLoC: 'text-orange-primary',
  Redux: 'text-[#764ABC]',
  GetX: 'text-[#00BCD4]',
  Provider: 'text-[#4CAF50]',
  'Node.js': 'text-[#339933]',
  'Spring Boot': 'text-[#6DB33F]',
  HTML: 'text-[#E34F26]',
  CSS: 'text-[#1572B6]',
  Git: 'text-[#F05032]',
  GitHub: 'text-text-primary',
  Figma: 'text-[#F24E1E]',
  Jira: 'text-[#0052CC]',
  Firebase: 'text-[#FFCA28]',
  SQLite: 'text-[#003B57]',
}

const techIcons: Record<string, string> = {
  Flutter: '◈',
  Dart: '◆',
  Kotlin: 'K',
  Java: '☕',
  BLoC: '⬡',
  Redux: '△',
  GetX: 'G',
  Provider: 'P',
  'Node.js': '⬡',
  'Spring Boot': '🌿',
  HTML: '◇',
  CSS: '◇',
  Git: '⎇',
  GitHub: '○',
  Figma: '◉',
  Jira: '▣',
  Firebase: '🔥',
  SQLite: '🗄',
}

export default function Stack() {
  const { lang } = useLanguage()
  const t = content[lang].stack

  return (
    <section id="stack" className="py-24 px-6 bg-bg-secondary">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title={t.heading} />

        <div className="space-y-10">
          {t.groups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
            >
              <h3 className="font-mono text-text-muted text-xs tracking-widest uppercase mb-4">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.techs.map((tech, ti) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: gi * 0.08 + ti * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className={`flex items-center gap-2 border border-[var(--border)] rounded-lg px-4 py-2.5 bg-bg-tertiary hover:border-orange-primary/50 transition-all duration-200 cursor-default ${
                      tech === 'Flutter' ? 'ring-1 ring-orange-primary/30' : ''
                    }`}
                  >
                    <span className={`font-mono text-sm ${techColors[tech] ?? 'text-text-secondary'}`}>
                      {techIcons[tech] ?? '•'}
                    </span>
                    <span className={`text-sm font-medium ${tech === 'Flutter' ? 'text-text-primary' : 'text-text-secondary'}`}>
                      {tech}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
