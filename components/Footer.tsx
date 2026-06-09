// Footer.tsx

import CopyEmail from './CopyEmail'

export default function Footer() {
  return (
    <footer
      id="cv"
      className="
        border-t border-border
        px-5 md:px-10 py-7 md:py-9
        flex flex-col md:flex-row
        items-center justify-between
        gap-[10px] md:gap-0
        text-center md:text-left
      "
    >
      <p className="text-[14px] tracking-[0.5px] text-dark">
        © 2026 Yuliia Konovalenko
      </p>
      <CopyEmail className="text-dark text-[14px] tracking-[0.5px] no-underline hover:underline" />
    </footer>
  )
}
