'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Lang = 'en' | 'it'

interface LanguageContextType {
  lang: Lang
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('dspano-lang') as Lang | null
    if (stored === 'en' || stored === 'it') {
      setLangState(stored)
    } else {
      const browser = navigator.language.toLowerCase()
      setLangState(browser.startsWith('it') ? 'it' : 'en')
    }
    setMounted(true)
  }, [])

  const setLang = (newLang: Lang) => {
    setLangState(newLang)
    localStorage.setItem('dspano-lang', newLang)
  }

  if (!mounted) return null

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
