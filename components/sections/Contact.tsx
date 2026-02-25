'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { content } from '@/data/content'
import SectionTitle from '@/components/ui/SectionTitle'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

export default function Contact() {
  const { lang } = useLanguage()
  const t = content[lang].contact

  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT
    if (!endpoint || endpoint.includes('YOUR_ID')) {
      // Simulate success in dev
      await new Promise((r) => setTimeout(r, 1000))
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      return
    }

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }

    setTimeout(() => setStatus('idle'), 5000)
  }

  const inputClass =
    'w-full bg-bg-tertiary border border-[var(--border)] rounded-lg px-4 py-3 text-text-primary placeholder-text-muted text-sm outline-none focus:border-orange-primary transition-colors'

  return (
    <section id="contact" className="py-24 px-6 bg-bg-primary">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title={t.heading} />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: info + socials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-text-secondary text-lg leading-relaxed mb-10">
              {t.subtext}
            </p>

            <div className="space-y-4">
              <a
                href="https://github.com/Danilospano00"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
                aria-label="GitHub"
              >
                <div className="w-10 h-10 rounded-lg border border-[var(--border)] flex items-center justify-center text-text-muted group-hover:border-orange-primary group-hover:text-orange-primary transition-all">
                  <GitHubIcon />
                </div>
                <span className="text-text-secondary group-hover:text-text-primary transition-colors">
                  github.com/Danilospano00
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/danilo-span%C3%B2/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
                aria-label="LinkedIn"
              >
                <div className="w-10 h-10 rounded-lg border border-[var(--border)] flex items-center justify-center text-text-muted group-hover:border-orange-primary group-hover:text-orange-primary transition-all">
                  <LinkedInIcon />
                </div>
                <span className="text-text-secondary group-hover:text-text-primary transition-colors">
                 https://www.linkedin.com/in/danilo-spanò
                </span>
              </a>

              <a
                href="mailto:danilospano00@gmail.com"
                className="flex items-center gap-4 group"
                aria-label="Email"
              >
                <div className="w-10 h-10 rounded-lg border border-[var(--border)] flex items-center justify-center text-text-muted group-hover:border-orange-primary group-hover:text-orange-primary transition-all">
                  <EmailIcon />
                </div>
                <span className="text-text-secondary group-hover:text-text-primary transition-colors">
                  danilospano00@gmail.com
                </span>
              </a>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder={t.form.name}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className={inputClass}
              aria-label={t.form.name}
            />
            <input
              type="email"
              placeholder={t.form.email}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className={inputClass}
              aria-label={t.form.email}
            />
            <textarea
              placeholder={t.form.message}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={5}
              className={`${inputClass} resize-none`}
              aria-label={t.form.message}
            />

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-orange-primary text-white font-semibold py-3 rounded-lg hover:bg-orange-deep disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
            >
              {status === 'sending' ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  {t.form.sending}
                </>
              ) : (
                t.form.send
              )}
            </button>

            {status === 'success' && (
              <p className="text-green-400 text-sm text-center">{t.form.success}</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm text-center">{t.form.error}</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
