'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { content } from '@/data/content'
import SectionTitle from '@/components/ui/SectionTitle'
import Tag from '@/components/ui/Tag'

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
)

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

export default function OpenSource() {
  const { lang } = useLanguage()
  const t = content[lang].openSource

  return (
    <section id="open-source" className="py-24 px-6 bg-bg-primary">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title={t.heading} />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-text-secondary text-lg max-w-2xl mb-12"
        >
          {t.subheading}
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {t.items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`flex flex-col border rounded-xl p-6 bg-bg-secondary transition-all duration-300 hover:scale-[1.02] ${
                item.isAuthor
                  ? 'border-orange-primary/50 orange-glow'
                  : 'border-[var(--border)] hover:border-orange-primary/30'
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2 text-text-muted">
                  <GitHubIcon />
                </div>
                <span
                  className={`text-xs font-mono px-2.5 py-1 rounded-full ${
                    item.isAuthor
                      ? 'bg-orange-primary/20 text-orange-primary border border-orange-primary/40'
                      : 'bg-bg-tertiary text-text-secondary border border-[var(--border)]'
                  }`}
                >
                  {item.badge}
                </span>
              </div>

              <h3 className="font-mono font-bold text-text-primary text-lg mb-1">
                {item.name}
              </h3>

              {/* Stars */}
              {item.stars !== '—' && (
                <div className="flex items-center gap-1 mb-3">
                  <StarIcon />
                  <span className="text-text-muted text-xs">{item.stars} stars</span>
                </div>
              )}

              <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-4">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {item.tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 mt-auto">
                <a
                  href={item.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-orange-primary hover:text-orange-bright transition-colors font-medium"
                  aria-label={`${item.name} GitHub repository`}
                >
                  <GitHubIcon />
                  {t.viewOnGithub}
                </a>
                {item.pr && (
                  <>
                    <span className="text-text-muted">·</span>
                    <a
                      href={item.pr}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                      aria-label={`View PR for ${item.name}`}
                    >
                      {t.viewPr}
                    </a>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
