import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import BriefSection from '@/components/BriefSection'
import WorkSection from '@/components/WorkSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    // position:relative so the page-level gradient image can be absolutely positioned
    <div className="relative bg-bg overflow-x-hidden">

      {/* Page-level gradient — behind everything (z-0).
          Positioned 199px from the top of the page, horizontally centered.
          This mirrors the original: body { position:relative } + .hero-bg-img { position:absolute } */}
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-0"
        style={{ top: '199px' }}
      >
        <img
          src="/assets/bg gradient new for hero.png"
          alt=""
          style={{ height: '840px', width: 'auto', maxWidth: 'none' }}
        />
      </div>

      {/* All content sits above the gradient (z-10) */}
      <div className="relative z-10">
        <Nav />
        <Hero />
        <BriefSection />
        <WorkSection />
        <Footer />
      </div>

    </div>
  )
}
