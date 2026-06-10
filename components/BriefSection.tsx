// BriefSection.tsx
// Grid: 4 columns on md+, 2 columns on mobile.
// Completely isolated — editing this component doesn't affect any other section.

const thumbs = [
  { src: '/assets/thumb1.png' },
  { src: '/assets/thumb2.png' },
  { src: '/assets/thumb3.png' },
  { src: '/assets/thumb4.jpg' },
]

export default function BriefSection() {
  return (
    <div id="about" className="px-5 md:px-10 pt-[60px] md:pt-[120px] pb-10 md:pb-[60px]">

      <h2 className="
        font-serif font-normal text-center
        text-[clamp(30px,3.3vw,48px)]
        leading-[1.12] tracking-[-0.3px]
        mb-10
      ">
        From brief to final pixel
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
        {thumbs.map((t, i) => (
          <div key={i} className="overflow-hidden rounded-[2px]" style={{ aspectRatio: '325/359' }}>
            <img src={t.src} alt="" className="w-full h-full object-cover block" loading="lazy" />
          </div>
        ))}
      </div>

    </div>
  )
}
