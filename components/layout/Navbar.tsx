'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { content } from '@/data/content'

export default function Navbar() {
  const { lang, setLang } = useLanguage()
  const t = content[lang]
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-bg-primary/90 backdrop-blur-md border-b border-[rgba(249,115,22,0.1)]'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="font-display font-bold text-xl text-orange-primary tracking-tight"
            aria-label="Danilo Spanò — home"
          >
            DS
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {t.nav.links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-orange-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Right: lang toggle + CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language toggle */}
            <button
              onClick={() => setLang(lang === 'en' ? 'it' : 'en')}
              className="flex items-center gap-1 text-xs font-mono border border-[var(--border)] rounded-full px-3 py-1.5 text-text-secondary hover:border-orange-primary hover:text-text-primary transition-all"
              aria-label="Toggle language"
            >
              <span className={lang === 'en' ? 'text-orange-primary font-bold' : ''}>EN</span>
              <span className="text-text-muted">|</span>
              <span className={lang === 'it' ? 'text-orange-primary font-bold' : ''}>IT</span>
            </button>

            {/* Download CV */}
            <a
              href="/cv-danilo-spano.pdf"
              download
              className="text-sm border border-orange-primary text-orange-primary px-4 py-1.5 rounded-lg hover:bg-orange-primary hover:text-white transition-all duration-300 font-medium"
              aria-label="Download CV"
            >
              {t.nav.cta}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-bg-primary/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {t.nav.links.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => handleNavClick(link.href)}
                className="text-2xl font-display font-bold text-text-primary hover:text-orange-primary transition-colors"
              >
                {link.label}
              </motion.button>
            ))}

            <div className="flex items-center gap-4 mt-4">
              <button
                onClick={() => {
                  setLang(lang === 'en' ? 'it' : 'en')
                  setMenuOpen(false)
                }}
                className="flex items-center gap-1 text-xs font-mono border border-[var(--border)] rounded-full px-3 py-1.5 text-text-secondary"
              >
                <span className={lang === 'en' ? 'text-orange-primary font-bold' : ''}>EN</span>
                <span className="text-text-muted">|</span>
                <span className={lang === 'it' ? 'text-orange-primary font-bold' : ''}>IT</span>
              </button>

              <a
                href="/cv-danilo-spano.pdf"
                download
                onClick={() => setMenuOpen(false)}
                className="text-sm border border-orange-primary text-orange-primary px-4 py-1.5 rounded-lg"
              >
                {t.nav.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
