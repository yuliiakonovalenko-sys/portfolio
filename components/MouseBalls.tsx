'use client'
import { useEffect } from 'react'

export default function MouseBalls() {
  useEffect(() => {
    if ('ontouchstart' in window) return

    const actual  = { x: -1, y: -1 }
    const display = { x: -1, y: -1 }
    const LERP = 0.1
    let rafId: number
    let isMoving = false
    let moveTimer: ReturnType<typeof setTimeout>

    const onMove = (e: MouseEvent) => {
      actual.x = e.clientX
      actual.y = e.clientY
      isMoving = true
      clearTimeout(moveTimer)
      moveTimer = setTimeout(() => { isMoving = false }, 80) // stop after 80ms of no movement
    }
    const onLeave = () => { actual.x = -1; actual.y = -1; isMoving = false }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)

    // Lerp loop
    const lerp = () => {
      if (actual.x >= 0) {
        if (display.x < 0) {
          display.x = actual.x
          display.y = actual.y
        } else {
          display.x += (actual.x - display.x) * LERP
          display.y += (actual.y - display.y) * LERP
        }
      } else {
        display.x = -1
        display.y = -1
      }
      rafId = requestAnimationFrame(lerp)
    }
    rafId = requestAnimationFrame(lerp)

    // Check if cursor is over nav/header
    const isOverNav = () => {
      if (actual.x < 0) return false
      const el = document.elementFromPoint(actual.x, actual.y)
      return !!el?.closest('nav')
    }

    const rand = (min: number, max: number) =>
      Math.round(Math.random() * (max - min + 1)) + min

    const interval = setInterval(() => {
      if (!isMoving || display.x < 0 || isOverNav()) return

      const size = rand(8, 24)
      const range = 14
      const ball = document.createElement('div')
      ball.className = 'mouse-ball'
      ball.style.cssText = `
        left: ${rand(display.x - range - size, display.x + range)}px;
        top:  ${rand(display.y - range - size, display.y + range)}px;
        width: ${size}px;
        height: ${size}px;
        background: rgb(${rand(0,255)},${rand(0,255)},${rand(0,255)});
      `
      document.body.appendChild(ball)
      ball.addEventListener('animationend', () => ball.remove(), { once: true })
    }, 1)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(rafId)
      clearInterval(interval)
      clearTimeout(moveTimer)
    }
  }, [])

  return null
}
