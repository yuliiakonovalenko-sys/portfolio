// Nav.tsx
// Layout: 2-column grid on mobile (name left | links right)
//         3-column grid on md+ (links | name | email)
// Responsive behaviour is purely Tailwind — no global CSS involved.

import CopyEmail from './CopyEmail'

export default function Nav() {
  return (
    <>
    {/* Spacer so content doesn't hide under the fixed nav */}
    <div className="h-[60px] sm:h-[72px] md:h-[84px]" aria-hidden="true" />
    <nav className="
      fixed top-0 left-0 right-0 z-50
      grid grid-cols-2
      h-[60px] sm:h-[72px] md:h-[84px]
      md:grid-cols-3
      border-b border-border
      bg-bg/80 backdrop-blur-[10px]
    ">

      {/* ── Name ──────────────────────────────────────────
          Mobile  → order-1 (left column), border-r to right
          Desktop → order-2 (center column), keeps border-r  */}
      <a
        href="/"
        className="
          order-1 md:order-2
          flex items-center justify-center gap-2
          px-3 sm:px-6
          border-r border-border
          font-semibold text-[13px] sm:text-base tracking-[0.5px] whitespace-nowrap
          text-dark no-underline
        "
      >
        <img
          src="/assets/icon_nera my name.svg"
          alt=""
          className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
        />
        Yuliia Konovalenko
      </a>

      {/* ── Links ─────────────────────────────────────────
          Mobile  → order-2 (right column), no border-r (last column)
          Desktop → order-1 (left column), add border-r  */}
      <div className="
        order-2 md:order-1
        flex items-center justify-end md:justify-center
        gap-1 px-3 sm:px-6
        md:border-r md:border-border
      ">
        <a href="/#work" className="nav-link" data-emoji="😎">Work</a>
        <a href="https://drive.google.com/file/d/1P4ZnScTabwcejSMvTigIh7ON0KZti5IM/view?usp=drive_link" target="_blank" rel="noreferrer" className="nav-link" data-emoji="👀">CV</a>
      </div>

      {/* ── Email ─────────────────────────────────────────
          Hidden on mobile, shown as order-3 on desktop  */}
      <div className="
        hidden
        md:flex md:order-3
        md:items-center md:justify-center md:px-5
        font-semibold text-base tracking-[0.5px]
      ">
        <CopyEmail className="text-dark hover:underline" />
      </div>

    </nav>
    </>
  )
}
