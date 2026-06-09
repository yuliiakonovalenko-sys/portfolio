'use client'

import { useState } from 'react'
import { type Project } from '@/lib/projects-data'

export default function OtherProjects({ projects }: { projects: Project[] }) {
  const [index, setIndex] = useState(0)
  const visible = 3
  const max = Math.max(0, projects.length - visible)

  const slide = (dir: number) => {
    setIndex(i => Math.max(0, Math.min(i + dir, max)))
  }

  return (
    <div className="mt-[80px] md:mt-[120px] border-t border-border px-5 md:px-10 pt-[60px] md:pt-[80px] pb-[80px] md:pb-[120px]">

      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="font-serif font-normal text-[clamp(36px,5vw,68px)] leading-[1.08] tracking-[-1px] text-dark">
          Other projects
        </h2>
        {/* Arrows — desktop only */}
        <div className="hidden md:flex gap-3">
          <button
            onClick={() => slide(-1)}
            disabled={index === 0}
            className="bg-transparent border-none cursor-pointer p-1 opacity-100 disabled:opacity-20 hover:opacity-50 transition-opacity"
          >
            <img src="/assets/arrow left.svg" alt="prev" className="w-8 h-8 block" />
          </button>
          <button
            onClick={() => slide(1)}
            disabled={index >= max}
            className="bg-transparent border-none cursor-pointer p-1 opacity-100 disabled:opacity-20 hover:opacity-50 transition-opacity"
          >
            <img src="/assets/arrow right.svg" alt="next" className="w-8 h-8 block" />
          </button>
        </div>
      </div>

      {/* Mobile: vertical list — show only first 2 */}
      <div className="flex flex-col gap-10 md:hidden">
        {projects.slice(0, 2).map((p) => (
          <a
            key={p.id}
            href={`/project/${p.id}`}
            className="flex flex-col gap-4 no-underline text-dark"
          >
            <div className="w-full overflow-hidden rounded-[2px]" style={{ aspectRatio: '4/3' }}>
              <img src={p.cover} alt={p.title} className="w-full h-full object-cover block" />
            </div>
            <div className="text-[20px] font-medium tracking-[0.5px] leading-[1.25]">{p.title}</div>
          </a>
        ))}
      </div>

      {/* Desktop: horizontal slider */}
      <div className="hidden md:block overflow-hidden">
        <div
          className="flex gap-5 transition-transform duration-400 ease-in-out"
          style={{ transform: `translateX(calc(-${index} * (100% / ${visible} + ${20 / visible}px * ${visible - 1} / ${visible})))` }}
        >
          {projects.map((p) => (
            <a
              key={p.id}
              href={`/project/${p.id}`}
              className="op-card flex-none flex flex-col gap-4 no-underline text-dark"
              style={{ width: `calc(${100 / visible}% - ${(20 * (visible - 1)) / visible}px)` }}
            >
              <div className="op-card-img w-full overflow-hidden rounded-[2px]" style={{ aspectRatio: '4/3' }}>
                <img src={p.cover} alt={p.title} className="w-full h-full object-cover block transition-transform duration-400 ease-in-out" />
              </div>
              <div className="text-[20px] font-medium tracking-[0.5px] leading-[1.25]">{p.title}</div>
            </a>
          ))}
        </div>
      </div>

    </div>
  )
}
