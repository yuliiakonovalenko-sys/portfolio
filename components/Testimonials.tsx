// Testimonials.tsx
// Grid: 2 columns on md+, 1 column on mobile.

const testimonials = [
  {
    quote:
      'Yuliia has helped me with a few projects over the years, and the results have always been outstanding. I\'ve hired many designers over the years, and her eye for craft and quality is some of the best I\'ve seen.',
    initials: 'BM',
    name: 'Bryan Maniotakis',
    role: 'Design Director at lululemon',
    avatar: null,
  },
  {
    quote:
      'Yuliia\'s critical thinking and design expertise stood out as she consistently delivered intuitive, visually appealing, and user-centered solutions. Her enthusiasm and commitment to excellence were evident in every task, as she approached challenges with creativity and professionalism.',
    initials: 'WA',
    name: 'Wunmi Adekanmbi',
    role: 'Founder, ReSkill Calgary',
    avatar: null,
  },
]

export default function Testimonials() {
  return (
    <section
      id="blog"
      className="
        border-t border-border
        px-5 md:px-10 py-[50px] md:py-[100px]
      "
    >
      <h2 className="
        font-serif font-normal
        text-[clamp(32px,3.5vw,48px)]
        leading-[1.12] tracking-[-0.3px]
        mb-[60px] max-w-[600px]
      ">
        A few words from people I&apos;ve worked with
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="
              bg-card rounded-[4px]
              px-6 md:px-12 py-8 md:py-12
              flex flex-col justify-between gap-8 md:gap-12
            "
          >
            <p className="
              font-sans font-medium
              text-[clamp(16px,1.4vw,20px)]
              leading-[1.4] tracking-[0.3px]
              text-dark
            ">
              &ldquo;{t.quote}&rdquo;
            </p>

            <div className="flex items-center gap-4">
              <div className="
                w-14 h-14 rounded-full overflow-hidden flex-shrink-0
                bg-border flex items-center justify-center
                text-[18px] font-semibold text-dark
              ">
                {t.avatar
                  ? <img src={t.avatar} alt="" className="w-full h-full object-cover" />
                  : t.initials
                }
              </div>
              <div>
                <div className="font-sans font-medium text-[14px] tracking-[0.5px] text-dark mb-1">
                  {t.name}
                </div>
                <div className="font-sans font-medium text-[14px] tracking-[0.3px] text-dark">
                  {t.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
