import { notFound } from 'next/navigation'
import { PROJECTS, type Section } from '@/lib/projects-data'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import OtherProjects from '@/components/OtherProjects'

// ── Static params for pre-rendering ──────────────────────────────────────────
export function generateStaticParams() {
  return PROJECTS.map(p => ({ id: p.id }))
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const p = PROJECTS.find(p => p.id === params.id)
  return { title: p ? `${p.title} — Yuliia Konovalenko` : 'Project' }
}

// ── Section renderers ────────────────────────────────────────────────────────

function SectionIntro({ text }: { text: string }) {
  return (
    <div className="px-5 md:px-10 py-10 md:py-[72px]">
      <p className="text-[16px] md:text-[20px] font-medium leading-[1.25] tracking-[0.5px] max-w-[760px]">
        {text}
      </p>
    </div>
  )
}

function SectionFullImage({ src, alt }: { src: string; alt?: string }) {
  return (
    <div className="px-5 md:px-10 overflow-hidden">
      <img
        src={src} alt={alt || ''}
        className="w-full block"
        onError={undefined}
      />
    </div>
  )
}

function SectionTwoCol({ left, right }: {
  left: { label: string; text: string }
  right: { label: string; text: string }
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="px-5 md:px-10 py-8 md:py-16">
        <div className="text-[16px] md:text-[20px] font-medium tracking-[0.5px] text-dark mb-5">{left.label}</div>
        <p   className="text-[16px] md:text-[20px] font-medium leading-[1.25] tracking-[0.5px] text-[#797e97]">{left.text}</p>
      </div>
      <div className="px-5 md:px-10 py-8 md:py-16">
        <div className="text-[16px] md:text-[20px] font-medium tracking-[0.5px] text-dark mb-5">{right.label}</div>
        <p   className="text-[16px] md:text-[20px] font-medium leading-[1.25] tracking-[0.5px] text-[#797e97]">{right.text}</p>
      </div>
    </div>
  )
}

function SectionChallenges({ heading, items }: {
  heading?: string
  items: { title: string; text: string }[]
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="px-5 md:px-10 py-10 md:py-[72px]">
        <h2 className="font-serif font-normal text-[clamp(32px,3.5vw,48px)] leading-[1.1] tracking-[-0.3px]">
          {heading || 'Project Tasks and Challenges'}
        </h2>
      </div>
      <div className="px-5 md:px-10 py-10 md:py-[72px]">
        <div className="flex flex-col">
          {items.map((item, i) => (
            <div key={i} className={`py-7 ${i === 0 ? 'pt-0' : ''} ${i < items.length - 1 ? 'border-b border-border' : ''}`}>
              <div className="text-[16px] md:text-[20px] font-medium tracking-[0.5px] text-dark mb-2">{item.title}</div>
              <div className="text-[16px] md:text-[20px] font-medium leading-[1.25] tracking-[0.5px] text-[#797e97]">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function SectionGoals({ heading, items }: { heading?: string; items: string[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="px-5 md:px-10 py-10 md:py-[72px] flex items-start">
        <h2 className="font-serif font-normal text-[clamp(32px,3.5vw,48px)] leading-[1.1] tracking-[-0.3px]">
          {heading || 'Key Project Goals'}
        </h2>
      </div>
      <div className="px-5 md:px-10 py-10 md:py-[72px]">
        <div className="flex flex-col">
          {items.map((item, i) => (
            <div key={i} className={`grid grid-cols-[40px_1fr] gap-0 py-6 ${i === 0 ? 'pt-0' : ''} ${i < items.length - 1 ? 'border-b border-border' : ''}`}>
              <div className="text-[16px] md:text-[20px] font-medium text-[#797e97] tracking-[0.5px]">
                {String(i + 1).padStart(2, '0')}.
              </div>
              <div className="text-[16px] md:text-[20px] font-medium leading-[1.25] tracking-[0.5px] text-dark">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function SectionPhase({ number, name, text, image }: {
  number: number; name: string; text: string | string[]; image?: string
}) {
  const texts = Array.isArray(text) ? text : [text]
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 px-5 md:px-10 py-10 md:py-[72px] gap-6 md:gap-10">
        <div>
          <div className="font-serif font-normal text-[clamp(28px,3vw,42px)] leading-[1.1] text-dark">Phase {number}:</div>
          <div className="font-serif font-normal text-[clamp(28px,3vw,42px)] leading-[1.1] text-dark">{name}</div>
        </div>
        <div className="flex flex-col gap-4 md:self-center">
          {texts.map((t, i) => (
            <p key={i} className="text-[16px] md:text-[20px] font-medium leading-[1.25] tracking-[0.5px] text-dark">{t}</p>
          ))}
        </div>
      </div>
      {image && (
        <div className="overflow-hidden">
          <img src={image} alt={name} className="w-full block" />
        </div>
      )}
    </div>
  )
}

function SectionResults({ heading, items }: {
  heading?: string
  items: { title: string; text: string }[]
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="px-5 md:px-10 py-10 md:py-[72px] flex items-start">
        <h2 className="font-serif font-normal text-[clamp(32px,3.5vw,48px)] leading-[1.1] tracking-[-0.3px]">
          {heading || 'Results'}
        </h2>
      </div>
      <div className="px-5 md:px-10 py-10 md:py-[72px]">
        <div className="flex flex-col">
          {items.map((item, i) => (
            <div key={i} className={`py-6 ${i === 0 ? 'pt-0' : ''} ${i < items.length - 1 ? 'border-b border-border' : 'pb-0'}`}>
              <div className="text-[16px] md:text-[20px] font-medium tracking-[0.5px] text-dark mb-2">{item.title}</div>
              <div className="text-[16px] md:text-[20px] font-medium leading-[1.25] tracking-[0.5px] text-[#797e97]">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function SectionConclusion({ heading, text }: { heading?: string; text: string | string[] }) {
  const texts = Array.isArray(text) ? text : [text]
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="px-5 md:px-10 py-10 md:py-[72px] flex items-start">
        <h2 className="font-serif font-normal text-[clamp(32px,3.5vw,48px)] leading-[1.1] tracking-[-0.3px]">
          {heading || 'Conclusion'}
        </h2>
      </div>
      <div className="px-5 md:px-10 py-10 md:py-[72px] flex flex-col gap-5">
        {texts.map((t, i) => (
          <p key={i} className="text-[16px] md:text-[20px] font-medium leading-[1.25] tracking-[0.5px] text-dark">{t}</p>
        ))}
      </div>
    </div>
  )
}

function SectionImagePair({ left, right }: { left: string; right: string }) {
  return (
    <div className="grid grid-cols-2 gap-5 px-5 md:px-10">
      <img src={left}  alt="" className="w-full block" />
      <img src={right} alt="" className="w-full block" />
    </div>
  )
}

function SectionVideo({ youtubeId, heading }: { youtubeId: string; heading?: string }) {
  return (
    <div className="px-5 md:px-10 flex flex-col gap-4">
      {heading && (
        <div className="text-[16px] md:text-[20px] font-medium tracking-[0.5px] text-[#797e97]">{heading}</div>
      )}
      <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}`}
          title={heading || 'Video'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
}

function SectionBulletList({ heading, items }: { heading?: string; items: string[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="px-5 md:px-10 py-10 md:py-[72px] flex items-start">
        <h2 className="font-serif font-normal text-[clamp(32px,3.5vw,48px)] leading-[1.1] tracking-[-0.3px]">
          {heading}
        </h2>
      </div>
      <div className="px-5 md:px-10 py-10 md:py-[72px]">
        <ul className="flex flex-col gap-4">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[16px] md:text-[20px] font-medium leading-[1.25] tracking-[0.5px] text-dark">
              <span className="mt-[0.45em] w-1.5 h-1.5 rounded-full bg-dark flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function renderSection(section: Section, i: number) {
  switch (section.type) {
    case 'intro':        return <SectionIntro       key={i} {...section} />
    case 'full-image':   return <SectionFullImage   key={i} {...section} />
    case 'two-col':      return <SectionTwoCol      key={i} {...section} />
    case 'challenges':   return <SectionChallenges  key={i} {...section} />
    case 'goals':        return <SectionGoals       key={i} {...section} />
    case 'bullet-list':  return <SectionBulletList  key={i} {...section} />
    case 'image-pair':   return <SectionImagePair   key={i} {...section} />
    case 'phase':        return <SectionPhase       key={i} {...section} />
    case 'results':      return <SectionResults     key={i} {...section} />
    case 'conclusion':   return <SectionConclusion  key={i} {...section} />
    case 'video':        return <SectionVideo       key={i} {...section} />
    default:           return null
  }
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = PROJECTS.find(p => p.id === params.id)
  if (!project) notFound()

  const others = PROJECTS.filter(p => p.id !== project.id)
  const intro   = project.sections.find(s => s.type === 'intro')
  const content = project.sections.filter(s => s.type !== 'intro')
  const roleItems = project.myRole
    .split('. ')
    .filter(Boolean)
    .map(s => s.replace(/\.$/, ''))

  return (
    <div className="bg-bg text-dark font-sans font-medium min-h-screen overflow-x-hidden">
      <Nav />

      {/* ── Hero text ── */}
      <div className="px-5 md:px-10 pt-10 md:pt-[72px] pb-8 md:pb-[60px] border-b border-border bg-bg">
        <a
          href="/#work"
          className="inline-flex items-center gap-4 text-[16px] font-semibold tracking-[0.5px] text-[#797e97] hover:text-dark no-underline mb-8 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z"/>
            <path fill="currentColor" d="M15 17h-2v-2h-2v-2H9v-2h2V9h2V7h2z"/>
          </svg>
          Back to all work
        </a>

        <h1 className="font-serif font-normal text-[clamp(36px,5vw,68px)] leading-[1.08] tracking-[-1px] max-w-[900px] mb-7 text-dark">
          {project.headline || project.title}
        </h1>

        {project.website && (
          <a
            href={project.website}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex items-center
              text-[16px] md:text-[20px] font-semibold tracking-[0.5px] leading-[1.25]
              text-dark underline underline-offset-4 decoration-dark
              hover:text-[#797e97] hover:decoration-[#797e97]
              mt-5 transition-colors
            "
          >
            Visit website
          </a>
        )}
      </div>

      {/* ── Overview cards ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 px-5 md:px-10 bg-bg">
        {/* Left: project overview */}
        <div className="py-8 md:py-10 border-b md:border-b-0 md:border-r border-border md:pr-5 flex flex-col gap-4">
          <div className="text-[16px] md:text-[20px] font-medium text-[#797e97] tracking-[0.5px] leading-[1.25]">
            [ Project overview ]
          </div>
          <div className="flex flex-col gap-4">
            {project.team.studio && (
              <div className="text-[16px] md:text-[20px] font-medium text-dark leading-[1.25] tracking-[0.5px]">
                <span className="font-semibold">Created at:</span>{' '}
                {project.team.studioUrl
                  ? <a href={project.team.studioUrl} target="_blank" rel="noreferrer" className="text-dark underline-offset-[3px]">{project.team.studio}</a>
                  : project.team.studio
                }
              </div>
            )}
            <div className="text-[16px] md:text-[20px] font-medium text-dark leading-[1.25] tracking-[0.5px]">
              <span className="font-semibold">Team:</span>{' '}
              {project.team.members.map(m => m.role).join(', ')}
            </div>
          </div>
        </div>

        {/* Right: what I worked on */}
        <div className="py-8 md:py-10 md:pl-5 flex flex-col gap-4">
          <div className="text-[16px] md:text-[20px] font-medium text-[#797e97] tracking-[0.5px] leading-[1.25]">
            [ What I worked on ]
          </div>
          <div className="flex flex-col gap-1.5">
            {roleItems.map((item, i) => (
              <div key={i} className="text-[16px] md:text-[20px] font-medium text-dark leading-[1.25] tracking-[0.5px] flex items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="flex-shrink-0">
                  <path fill="none" d="M0 0h24v24H0z"/>
                  <path fill="currentColor" d="M4 2h16v2H4zm0 18h16v2H4zM2 4h2v16H2zm18 0h2v16h-2zM7 12h2v2H7zm2 2h2v2H9zm2-2h2v2h-2zm2-2h2v2h-2zm2-2h2v2h-2z"/>
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Hero image (heroImage if set, otherwise cover thumbnail) ── */}
      <div className="px-5 md:px-10 overflow-hidden">
        <img src={project.heroImage ?? project.cover} alt={project.title} className="w-full block" />
      </div>

      {/* ── Intro ── */}
      {intro && intro.type === 'intro' && <div className="mt-5"><SectionIntro text={intro.text} /></div>}

      {/* ── Content sections — gap-5 (20px) between every block ── */}
      <div className="flex flex-col gap-5">
        {content.map((section, i) => renderSection(section, i))}
      </div>

      {/* ── Other projects ── */}
      <OtherProjects projects={others} />

      <Footer />
    </div>
  )
}
