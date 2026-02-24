'use client'

import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { content } from '@/data/content'

export default function Hero() {
  const { lang } = useLanguage()
  const t = content[lang].hero
  const prefersReducedMotion = useReducedMotion()

  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  // Typewriter effect
  useEffect(() => {
    const current = t.roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
      } else {
        timeout = setTimeout(() => setTyping(false), 2000)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
      } else {
        setRoleIndex((i) => (i + 1) % t.roles.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex, t.roles])

  const fadeUp = prefersReducedMotion
    ? {}
    : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }

  const handleScrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center px-6 overflow-hidden flutter-pattern">
      {/* Orange radial glow */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)',
          transform: 'translate(-30%, -30%)',
        }}
      />

      <div className="max-w-6xl mx-auto w-full pt-24 pb-16">
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono text-orange-primary text-sm tracking-widest mb-4"
        >
          {t.greeting}
        </motion.p>

        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-display font-black text-text-primary leading-none mb-4"
          style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
        >
          {t.name}
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-display font-bold text-orange-primary mb-6"
          style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}
        >
          {displayed}
          <span className="animate-blink ml-0.5 inline-block w-0.5 h-[1em] bg-orange-primary align-middle" />
        </motion.div>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-text-secondary text-lg md:text-xl max-w-xl mb-8 leading-relaxed"
        >
          {t.tagline}
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          <button
            onClick={() => handleScrollTo('#experience')}
            className="px-6 py-3 bg-orange-primary text-white font-semibold rounded-lg hover:bg-orange-deep transition-all duration-300 hover:scale-[1.02]"
          >
            {t.cta1}
          </button>
          <a
            href="/cv-danilo-spano.pdf"
            download
            className="px-6 py-3 border border-orange-primary text-orange-primary font-semibold rounded-lg hover:bg-[rgba(249,115,22,0.08)] transition-all duration-300"
          >
            {t.cta2}
          </a>
        </motion.div>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-text-muted text-sm font-mono"
        >
          {t.subtext}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-text-muted text-xs font-mono tracking-wider">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-orange-primary"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
