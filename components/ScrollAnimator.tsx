'use client'
import { useEffect } from 'react'

export default function ScrollAnimator() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-animate]')

    // Apply transition-delay from data-delay attribute
    elements.forEach(el => {
      const delay = el.getAttribute('data-delay') ?? '0'
      ;(el as HTMLElement).style.transitionDelay = `${delay}ms`
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return null
}
