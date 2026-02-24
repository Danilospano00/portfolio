'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  value: number
  suffix: string
  label: string
}

export default function AnimatedCounter({ value, suffix, label }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1800
    const step = 16
    const increment = value / (duration / step)

    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, step)

    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div className="font-display font-bold text-5xl md:text-6xl text-orange-primary tabular-nums">
        {count}
        <span className="text-orange-bright">{suffix}</span>
      </div>
      <p className="text-text-secondary text-sm mt-2 max-w-[160px]">{label}</p>
    </div>
  )
}
