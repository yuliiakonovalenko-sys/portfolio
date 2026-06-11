// WorkSection.tsx
// Projects grid: 2 columns on md+, 1 column on mobile.
// To add/remove projects — edit the `projects` array only.
// Layout classes won't change when you edit project content.

const projects = [
  {
    id: 'olsom',
    name: 'Olsom',
    desc: 'B2B manufacturing SaaS — web design',
    img: '/assets/proj-olsom.jpg',
  },
  {
    id: 'saastorm',
    name: 'SaaStorm',
    desc: 'B2B SaaS agency — brand & web design',
    img: '/assets/proj-saastorm.png',
  },
  {
    id: 'termopot',
    name: 'Termopot',
    desc: 'Smart home IoT — mobile app design',
    img: '/assets/proj-termopot.png',
  },
  {
    id: 'ilnp',
    name: 'iLNP',
    desc: 'Beauty e-commerce — UI/UX & design system',
    img: '/assets/proj-ilnp.png',
  },
  {
    id: 'global',
    name: 'Global Standards',
    desc: 'Non-profit — brand identity & design system',
    img: '/assets/proj-global.jpg',
  },
  {
    id: 'incare',
    name: 'InCare',
    desc: 'Caregiver platform — mobile app design',
    img: '/assets/proj-incare.png',
  },
]

export default function WorkSection() {
  return (
    <section id="work" className="px-5 md:px-10 pt-10 md:pt-[60px] pb-[60px] md:pb-[100px]">

      {/* Label */}
      <div className="flex items-center justify-center gap-[10px] mb-5 md:mb-[30px]">
        <img src="/assets/icon_projects.svg" alt="" className="w-5 h-5 md:w-[26px] md:h-[26px] flex-shrink-0" />
        <span className="font-medium text-[16px] md:text-[22px] tracking-[0.5px] text-dark whitespace-nowrap">
          Selected projects
        </span>
      </div>

      {/* Grid */}
      <div className="
        grid grid-cols-1 md:grid-cols-2
        gap-10 md:gap-x-5 md:gap-y-[72px]
      ">
        {projects.map((p, i) => (
          <div key={p.id} data-animate data-delay={i * 80} className="flex flex-col gap-3 md:gap-[22px]">

            {/* Image link — hover zoom handled by .project-img-link in globals.css */}
            <a
              href={`/project/${p.id}`}
              className="project-img-link"
              style={{ aspectRatio: '670/570' }}
            >
              <img src={p.img} alt={p.name} loading="lazy" />
            </a>

            {/* Info */}
            <div className="flex flex-col gap-[14px]">
              <div className="
                font-serif font-normal
                text-[36px] md:text-[clamp(36px,3vw,48px)]
                leading-[1.12] tracking-[-0.3px]
              ">
                {p.name}
              </div>
              <div className="text-[15px] md:text-[20px] font-medium tracking-[0.5px] leading-[1.25]">
                {p.desc}
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}
