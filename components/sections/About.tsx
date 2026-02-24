'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { content } from '@/data/content'
import SectionTitle from '@/components/ui/SectionTitle'

export default function About() {
  const { lang } = useLanguage()
  const t = content[lang].about

  return (
    <section id="about" className="py-24 px-6 bg-bg-secondary">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title={t.heading} />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-text-secondary text-lg leading-relaxed"
          >
            {t.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative card */}
            <div className="border border-[var(--border)] rounded-xl p-6 bg-bg-tertiary orange-glow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-2 text-text-muted text-xs font-mono">danilo.dart</span>
              </div>
              <pre className="font-mono text-sm text-text-secondary leading-relaxed overflow-x-auto">
                <code>
{`class DaniloSpano extends Developer {
  final String name = "Danilo Spanò";
  final String role = "Flutter Developer";
  final int years = 5;

  final List<String> values = [
    "clean code",
    "thoughtful UX",
    "open source",
  ];

  bool get isAvailable => true;
}`}
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
