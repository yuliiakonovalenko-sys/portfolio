'use client'

import { useState } from 'react'

export default function CopyEmail({ className }: { className?: string }) {
  const [copied, setCopied] = useState(false)
  const email = 'yuliia.konovalenko@gmail.com'

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }

  return (
    <a
      href={`mailto:${email}`}
      onClick={handleClick}
      className={className}
      title="Click to copy"
    >
      {copied ? 'Copied!' : email}
    </a>
  )
}
