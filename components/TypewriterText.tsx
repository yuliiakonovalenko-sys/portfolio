'use client'
import { useEffect, useState } from 'react'

interface Props {
  text: string
  className?: string
  startDelay?: number  // ms before animation begins
  speed?: number       // ms per word
}

export default function TypewriterText({ text, className, startDelay = 200, speed = 70 }: Props) {
  const words = text.split(' ')
  const [revealed, setRevealed] = useState(0)

  useEffect(() => {
    const start = setTimeout(() => {
      let i = 0
      const interval = setInterval(() => {
        i++
        setRevealed(i)
        if (i >= words.length) clearInterval(interval)
      }, speed)
      return () => clearInterval(interval)
    }, startDelay)

    return () => clearTimeout(start)
  }, [])

  return (
    <p className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            opacity: i < revealed ? 1 : 0.18,
            transition: i < revealed ? 'opacity 0.2s ease' : 'none',
          }}
        >
          {word}
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </p>
  )
}
