// Hero.tsx
// Layout: stacked column on mobile (description first, CTA card below)
//         flex row on md+ (CTA card left, description right)
//
// CTA card sizing & overlay positioning → globals.css (.hero-cta-wrap, .hero-cta-content, etc.)
// Everything else → Tailwind classes here.
// Changing text or padding here won't touch the CTA card positioning.

export default function Hero() {
  return (
    <section className="
      relative overflow-hidden
      border-b border-border
      h-auto md:h-[770px]
    ">
      <div className="
        relative z-10
        w-full max-w-[1280px] mx-auto
        flex flex-col gap-7 md:gap-[42px]
        px-5 pt-10
        md:px-10 md:pt-[76px]
      ">

        {/* ── Title ── */}
        <h1 className="
          font-serif font-normal text-center
          leading-[1.12] tracking-[-0.5px]
          text-[clamp(36px,6vw,82px)]
          whitespace-normal md:whitespace-nowrap
        ">
          (Brand &amp; Product Designer)
        </h1>

        {/* ── Two-column row ── */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">

          {/* Description — mobile: 1st (top), desktop: 2nd (right) */}
          <div className="
            order-1 md:order-2
            w-full md:w-[615px]
            flex flex-col gap-5
            pb-8 md:pb-0
          ">
            <p className="text-[17px] md:text-[22px] font-medium leading-[1.25] tracking-[0.5px]">
              8+ years designing brand identities, marketing websites, and digital products — at Awwwards-recognized studios and for B2B companies and startups.
            </p>
            <p className="text-[17px] md:text-[22px] font-medium leading-[1.25] tracking-[0.5px]">
              I help product-led companies build the visual systems that hold their
              brand together, from logo and identity to launch sites and in-product moments.
            </p>

            {/* Badges */}
            <div className="flex flex-col gap-5 mt-5">
              <div className="flex items-center gap-[10px] text-[17px] md:text-[22px] font-medium leading-[1.25] tracking-[0.5px]">
                <img src="/assets/icon_awwwards jury.svg" alt="" className="w-[26px] h-[26px] flex-shrink-0" />
                <span>
                  <a href="https://www.awwwards.com/jury-member/Yuliia_Konovalenko" target="_blank" rel="noreferrer" className="text-dark underline-offset-[3px]">
                    Awwwards Jury Member
                  </a>{' '}
                  since 2023
                </span>
              </div>
              <div className="flex items-center gap-[10px] text-[17px] md:text-[22px] font-medium leading-[1.25] tracking-[0.5px]">
                <img src="/assets/icon_map pin.svg" alt="" className="w-[26px] h-[26px] flex-shrink-0" />
                <span>Based in Halifax, Canada</span>
              </div>
            </div>
          </div>

          {/* CTA Card — mobile: 2nd (bottom), desktop: 1st (left)
              Dimensions and overlay are in .hero-cta-wrap / .hero-cta-content (globals.css)
              so changing anything in this file won't shift those pixel values. */}
          <div className="order-2 md:order-1 hero-cta-wrap">
            <img
              src="/assets/cta-card.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="hero-cta-content">
              <div className="hero-cta-photo">
                <img src="/assets/photo.png" alt="Yuliia Konovalenko" className="hero-photo-img" />
                <div className="hero-emoji-ring">
                  {[
                    { emoji: '👋', delay: '0s' },
                    { emoji: '🦄', delay: '-2s' },
                    { emoji: '📝', delay: '-1.5s' },
                    { emoji: '💅', delay: '-1s' },
                    { emoji: '👩‍💻', delay: '-0.5s' },
                  ].map(({ emoji, delay }) => (
                    <span key={emoji} className="hero-emoji" style={{ animationDelay: delay }}>
                      {emoji}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href="mailto:yuliia.konovalenko@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-[17px] no-underline w-full"
              >
                <span className="hero-cta-text">Chat with me</span>
                <img src="/assets/arrow.svg" alt="" className="w-[31px] h-[31px]" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
