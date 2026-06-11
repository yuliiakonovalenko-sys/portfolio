// ── Types ────────────────────────────────────────────────────────────────────

export type TeamMember = {
  name: string
  role: string
  isMe?: boolean
}

export type Team = {
  studio: string | null
  studioUrl?: string
  members: TeamMember[]
}

export type Section =
  | { type: 'intro';        text: string }
  | { type: 'full-image';   src: string; alt?: string }
  | { type: 'two-col';      left: { label: string; text: string }; right: { label: string; text: string } }
  | { type: 'challenges';   heading?: string; items: { title: string; text: string }[] }
  | { type: 'goals';        heading?: string; items: string[] }
  | { type: 'bullet-list';  heading?: string; items: string[] }
  | { type: 'image-pair';   left: string; right: string }
  | { type: 'phase';        number: number; name: string; text: string | string[]; image?: string }
  | { type: 'results';      heading?: string; items: { title: string; text: string }[] }
  | { type: 'conclusion';   heading?: string; text: string | string[] }
  | { type: 'video';        youtubeId: string; heading?: string }

export type Project = {
  id: string
  industry: string
  website?: string
  title: string
  headline?: string
  tagline?: string
  subtitle: string
  client: string
  country: string
  year: string
  services: string[]
  myRole: string
  team: Team
  cover: string       // thumbnail on the main page grid
  heroImage?: string  // large image shown on the project page (defaults to cover)
  color: string
  sections: Section[]
  next: string
}

// ── Data ─────────────────────────────────────────────────────────────────────

export const PROJECTS: Project[] = [
  {
    id: "olsom",
    industry: "B2B Manufacturing SaaS",
    website: "https://www.olsom.com/",
    title: "Olsom",
    headline: "Olsom — designing a B2B website for a modular manufacturing platform",
    tagline: "Translating deep B2B product logic into a site buyers trust in under 3 minutes.",
    subtitle: "B2B manufacturing SaaS — web design",
    client: "Olsom", country: "Ukraine", year: "2024",
    services: ["Web Design", "UI/UX", "Motion Design"],
    myRole: "Website design and visual storytelling. Motion teaser creation. Webflow collaboration and implementation support.",
    team: {
      studio: "Snig Digital", studioUrl: "https://www.snig.digital",
      members: [
        { name: "Brand Designer",        role: "Brand Designer" },
        { name: "Yuliia Konovalenko",     role: "UI/UX Designer", isMe: true },
        { name: "Project Manager",        role: "PM" },
        { name: "Webflow Developer",      role: "Webflow Developer" },
      ],
    },
    cover: "/assets/proj-olsom.jpg",
    heroImage: "/assets/projects/Olsom project/1.jpg",
    color: "#1A2332",
    sections: [
      // Overview
      {
        type: "conclusion",
        heading: "Overview",
        text: [
          "Olsom is a modular manufacturing workflow platform that helps industrial companies improve production visibility, traceability, and operational efficiency. The goal of the website was to present a complex B2B solution in a clear, structured, and engaging way for enterprise decision-makers.",
          "Rather than explaining every technical detail, the website focuses on communicating the platform's value, flexibility, and implementation approach while guiding potential clients toward a consultation.",
        ],
      },
      { type: "video", youtubeId: "sJfMmw_YTPE", heading: "Motion teaser" },
      { type: "image-pair", left: "/assets/projects/Olsom project/2_1.jpg", right: "/assets/projects/Olsom project/2_2.jpg" },

      // My Role
      {
        type: "bullet-list",
        heading: "My Role",
        items: [
          "Designing the website UI and page layouts",
          "Creating visual storytelling for product modules and workflows",
          "Designing reusable page templates and content blocks",
          "Defining website interactions and micro-animation concepts",
          "Creating a short motion teaser for the initial landing page",
          "Collaborating with the Webflow developer during implementation",
        ],
      },
      { type: "image-pair", left: "/assets/projects/Olsom project/3.jpg", right: "/assets/projects/Olsom project/4.jpg" },

      // Project Goals
      {
        type: "goals",
        heading: "Project Goals",
        items: [
          "Transform the established brand into a modern digital experience",
          "Present a complex industrial solution in a simple and approachable way",
          "Build trust with enterprise customers through a professional visual language",
          "Create a scalable design system for future website growth",
        ],
      },
      { type: "full-image", src: "/assets/projects/Olsom project/5.jpg", alt: "Olsom website" },

      // Challenges
      {
        type: "conclusion",
        heading: "Challenges",
        text: [
          "The biggest challenge was not understanding the manufacturing platform itself, but finding visual ways to communicate technical concepts quickly and clearly.",
          "Industrial companies often have limited marketing assets, so many sections relied on custom layouts, interface-inspired graphics, and visual storytelling rather than traditional promotional imagery.",
          "This project significantly improved my ability to simplify complex information through design.",
        ],
      },
      { type: "image-pair", left: "/assets/projects/Olsom project/6_1.jpg", right: "/assets/projects/Olsom project/6_2.jpg" },

      // Process — Phase 1
      {
        type: "phase", number: 1, name: "Landing Page",
        text: "We first created a branded landing page and a short motion teaser that introduced the company's positioning and generated early interest while the full website was being developed.",
      },
      { type: "image-pair", left: "/assets/projects/Olsom project/7.jpg", right: "/assets/projects/Olsom project/8.jpg" },

      // Process — Phase 2
      {
        type: "phase", number: 2, name: "Homepage",
        text: "The homepage became the foundation of the entire experience. My goal was to organize a large amount of marketing content into a logical storytelling flow where every section had a clear purpose and visual identity.",
      },
      { type: "full-image", src: "/assets/projects/Olsom project/9.jpg" },
      { type: "full-image", src: "/assets/projects/Olsom project/10.jpg" },

      // Process — Phase 3
      {
        type: "phase", number: 3, name: "Internal Pages",
        text: "After the homepage was approved, I designed the remaining pages, including both unique layouts and reusable templates that could support future content without requiring redesign.",
      },
      { type: "image-pair", left: "/assets/projects/Olsom project/11.jpg", right: "/assets/projects/Olsom project/12.jpg" },

      // Collaboration
      {
        type: "conclusion",
        heading: "Collaboration",
        text: [
          "The branding and content strategy were developed by the creative and marketing teams. My role was to translate those foundations into a consistent digital experience by combining layout, hierarchy, illustration, interaction, and visual storytelling into one cohesive system.",
          "I also collaborated closely with the Webflow developer, providing design specifications and interaction concepts to ensure the final implementation matched the intended experience.",
        ],
      },
      { type: "image-pair", left: "/assets/projects/Olsom project/13.jpg", right: "/assets/projects/Olsom project/14.jpg" },

      // Key Takeaway
      {
        type: "conclusion",
        heading: "Key Takeaway",
        text: [
          "One of my biggest takeaways from this project is that great B2B design is not about making interfaces visually complex — it is about making complex ideas feel simple.",
          "When strong photography or marketing assets are limited, design itself becomes the storytelling tool through composition, graphics, hierarchy, and interaction.",
        ],
      },
      { type: "full-image", src: "/assets/projects/Olsom project/15.jpg", alt: "Olsom website" },
    ],
    next: "termopot",
  },
  {
    id: "termopot",
    industry: "IoT / Mobile App",
    website: "",
    title: "Termopot",
    headline: "Smart Thermopot — designing a mobile app for a connected home appliance",
    tagline: "Turning a startup idea into an investor-ready product concept — research, UX, and UI for a connected home appliance.",
    subtitle: "IoT mobile app — product design",
    client: "Smart Home Startup", country: "Ukraine", year: "2023",
    services: ["UX Research", "Product Design", "UI Design"],
    myRole: "User research, competitor analysis, and persona definition. CJM and wireframes. UI design — delivered as an ideation concept for investor presentation.",
    team: {
      studio: null,
      members: [
        { name: "Yuliia Konovalenko", role: "2 Product Designers", isMe: true },
        { name: "Art Director",       role: "Art Director" },
      ],
    },
    cover: "/assets/proj-termopot.png",
    heroImage: "/assets/projects/Termopot/1.jpg",
    color: "#2D3A2E",
    sections: [
      {
        type: "conclusion",
        heading: "Overview",
        text: [
          "A smart home startup came to us at the ideation stage with a clear vision: build affordable, stylish appliances for young families — think IKEA, but for connected home devices. They needed to show investors not just an idea, but a real product experience: who it's for, how it works, and what it looks like.",
          "Our team of four designers was brought in to take that vision from zero to a tangible concept. I led the UX research and UI design work, mapping out the user landscape, defining the core experience, and designing the app screens that would become the face of the pitch.",
        ],
      },
      { type: "image-pair", left: "/assets/projects/Termopot/2.jpg", right: "/assets/projects/Termopot/3.jpg" },

      {
        type: "goals",
        heading: "Project Goals",
        items: [
          "Design a mobile app for remote thermopot control that anyone can use without a manual",
          "Enable real-time temperature and water level monitoring",
          "Build safety features that matter for families with young children",
          "Create a visual identity aligned with the brand's Scandinavian, minimalist values",
        ],
      },
      { type: "full-image", src: "/assets/projects/Termopot/4.jpg" },
      { type: "full-image", src: "/assets/projects/Termopot/5.jpg" },

      {
        type: "conclusion",
        heading: "Research & User Insight",
        text: [
          "I identified five user groups — families with children, elderly users, office workers, café owners, and health enthusiasts — and developed a primary persona: a busy mom who needs hot water ready throughout the day, quickly and safely.",
          "The key insight from research was that existing apps in this category were either overloaded with settings nobody used, or so stripped-down they offered no real control. The opportunity was in the middle: clear, fast, and purposeful.",
        ],
      },
      { type: "full-image", src: "/assets/projects/Termopot/6.jpg" },
      { type: "full-image", src: "/assets/projects/Termopot/7.jpg" },

      {
        type: "conclusion",
        heading: "Design Decisions",
        text: [
          "Based on the CJM and competitor gaps, I made three core decisions: reduce temperature options to three presets (60°C, 80°C, 98°C) that map directly to real use cases; surface water level and device status on the main screen so users never have to dig for it; and add a safety lock feature as a first-class UI element, not a buried setting.",
          "The visual direction followed the brand's four principles — Stylish, Available, Minimalist, Comfortable — using a soft neutral palette, rounded shapes, and typography that feels calm rather than technical.",
        ],
      },
      { type: "full-image", src: "/assets/projects/Termopot/8.jpg" },
      { type: "full-image", src: "/assets/projects/Termopot/9.jpg" },

      {
        type: "conclusion",
        heading: "Key Takeaway",
        text: [
          "IoT design taught me that the physical and digital experience are inseparable. When someone interacts with a real object — hot water, a child nearby, a morning routine — every moment of confusion in the app has real consequences.",
          "The discipline of cutting features rather than adding them was the hardest and most valuable part of this project.",
        ],
      },
      { type: "full-image", src: "/assets/projects/Termopot/10.jpg", alt: "Termopot final UI" },
    ],
    next: "ilnp",
  },
  {
    id: "ilnp",
    industry: "Beauty E-commerce",
    website: "https://ilnp.com",
    title: "iLNP",
    headline: "iLNP — enhancing an e-commerce design system for a boutique nail polish brand",
    tagline: "Improving key shopping moments within an established design system — without breaking what already works.",
    subtitle: "Beauty e-commerce — UI/UX, design system",
    client: "iLNP", country: "USA", year: "2024",
    services: ["UI/UX Design", "Design System", "E-commerce"],
    myRole: "Extending the existing design system. Improving cart and product card UX, refining mobile experience. Developing a conceptual visual redesign.",
    team: {
      studio: "Snig Digital", studioUrl: "https://www.snig.digital",
      members: [
        { name: "Art Director",           role: "Art Director" },
        { name: "Yuliia Konovalenko",      role: "UI/UX Designer", isMe: true },
      ],
    },
    cover: "/assets/proj-ilnp.png",
    heroImage: "/assets/projects/iLNP/1.jpg",
    color: "#0D0D0D",
    sections: [
      {
        type: "conclusion",
        heading: "Overview",
        text: [
          "iLNP is a boutique nail polish brand known for its holographic and metallic shades, with an established e-commerce store and a mature design system developed by the team. My involvement focused on refining specific parts of the shopping experience — improving usability, adapting components to new requirements, and exploring a conceptual design refresh at the client's request.",
          "This project was an exercise in working within constraints: understanding an existing system deeply enough to extend it thoughtfully, rather than reinventing it.",
        ],
      },
      { type: "image-pair", left: "/assets/projects/iLNP/2.jpg", right: "/assets/projects/iLNP/3.jpg" },

      {
        type: "bullet-list",
        heading: "My Role",
        items: [
          "Adapting and extending existing components within the established design system",
          "Improving product card layouts, particularly for mobile viewports",
          "Redesigning the cart (My Cart) screen — clarity of item states, coupon logic, out-of-stock handling",
          "Refining navigation patterns and menu structure",
          "Developing a conceptual visual direction as an exploratory redesign proposal",
        ],
      },
      { type: "image-pair", left: "/assets/projects/iLNP/4.jpg", right: "/assets/projects/iLNP/5.jpg" },

      {
        type: "goals",
        heading: "Project Goals",
        items: [
          "Improve usability of key shopping moments without disrupting the existing system",
          "Make the mobile product card experience cleaner and more scannable",
          "Bring clarity to the cart screen — especially edge cases users encounter during checkout",
          "Explore a fresh visual direction as a separate concept for the client to consider",
        ],
      },
      { type: "full-image", src: "/assets/projects/iLNP/6.jpg" },

      {
        type: "conclusion",
        heading: "Challenges",
        text: [
          "Working inside someone else's design system means every decision has a ripple effect. The challenge wasn't designing from scratch — it was knowing where the existing system could stretch, and where it needed a new pattern entirely.",
          "The cart screen in particular required thinking through multiple states at once: an empty cart, items on hold, applied coupons, unavailable products. Each state needed to feel consistent with the rest of the system while being immediately clear to the user.",
        ],
      },
      { type: "image-pair", left: "/assets/projects/iLNP/7.jpg", right: "/assets/projects/iLNP/8.jpg" },

      {
        type: "conclusion",
        heading: "Conceptual Redesign",
        text: [
          "Alongside the refinement work, the client asked for a more open-ended exploration — a concept that could take the brand's visual identity in a new direction. This gave me space to work more freely with typography, layout density, and overall visual energy while still respecting the brand's premium positioning.",
        ],
      },
      { type: "full-image", src: "/assets/projects/iLNP/9.jpg" },
      { type: "full-image", src: "/assets/projects/iLNP/10.jpg" },

      {
        type: "conclusion",
        heading: "Key Takeaway",
        text: [
          "This project taught me that working within an existing design system is a skill in itself. You have to resist the urge to redesign everything, stay aligned with established patterns, and make targeted improvements that feel native — not patched.",
          "It also reinforced how much clarity matters in transactional flows. Cart and checkout screens carry high user anxiety — every ambiguous state is a potential drop-off.",
        ],
      },
      { type: "image-pair", left: "/assets/projects/iLNP/11.jpg", right: "/assets/projects/iLNP/12.jpg" },
    ],
    next: "saastorm",
  },
  {
    id: "saastorm",
    industry: "B2B SaaS",
    website: "",
    title: "SaaStorm",
    headline: "SaaStorm — designing a website for a B2B SaaS organic growth agency",
    tagline: "9 pages, component library, custom infographics — finding the right visual language for a complex product.",
    subtitle: "B2B SaaS agency — web design",
    client: "SaaStorm", country: "UK", year: "2025",
    services: ["Web Design", "UI Design", "Figma System"],
    myRole: "Homepage and 8 inner pages — layout, visual design, and responsive. Color styles and component library in Figma. Custom infographics, hero visuals, and AI-generated imagery.",
    team: {
      studio: "Snig Digital", studioUrl: "https://www.snig.digital",
      members: [
        { name: "Yuliia Konovalenko", role: "UI/UX Designer", isMe: true },
        { name: "Art Director",       role: "Art Director" },
        { name: "Project Manager",    role: "Project Manager" },
      ],
    },
    cover: "/assets/proj-saastorm.png",
    heroImage: "/assets/projects/Saastorm/1.jpg",
    color: "#0A1628",
    sections: [
      {
        type: "conclusion",
        heading: "Overview",
        text: [
          "SaaStorm is a B2B SaaS agency focused on organic growth — SEO, AI search visibility, and content systems for teams from Seed to Series D. They came with an existing site and a clear goal: redesign it to better communicate their positioning and results to founders and CMOs.",
          "The client provided all content upfront. There was no brand identity work — the challenge was to find a visual language that felt right for them quickly, and then build a complete, scalable site system around it.",
        ],
      },
      { type: "image-pair", left: "/assets/projects/Saastorm/2.jpg", right: "/assets/projects/Saastorm/3.jpg" },

      {
        type: "goals",
        heading: "Project Goals",
        items: [
          "Design a homepage and 8 inner pages with consistent visual language",
          "Build a Figma component library and color system organized by usage",
          "Create custom infographics and hero visuals that make complex services feel tangible",
          "Deliver a responsive design ready for development handoff",
        ],
      },
      { type: "full-image", src: "/assets/projects/Saastorm/4.jpg" },
      { type: "image-pair", left: "/assets/projects/Saastorm/5.jpg", right: "/assets/projects/Saastorm/6.jpg" },

      {
        type: "conclusion",
        heading: "Challenges",
        text: [
          "The biggest challenge was finding the right visual direction without a brand identity to start from. I went through several concept rounds to establish a style the client felt confident in — balancing a dark, authoritative aesthetic with enough warmth to feel approachable to their audience.",
          "The volume of content across 9 pages also required a structured approach. I used AI tools to generate low-fidelity prototypes from the client's content, which gave both the team and the client a fast, shared understanding of page structure before visual design began.",
        ],
      },
      { type: "full-image", src: "/assets/projects/Saastorm/7.jpg" },
      { type: "full-image", src: "/assets/projects/Saastorm/8.jpg" },
      { type: "image-pair", left: "/assets/projects/Saastorm/9.jpg", right: "/assets/projects/Saastorm/10.jpg" },
      { type: "image-pair", left: "/assets/projects/Saastorm/11.jpg", right: "/assets/projects/Saastorm/12.jpg" },

      {
        type: "conclusion",
        heading: "Design system",
        text: [
          "I built the Figma file as a proper system from the start — color styles organized by function (Text, Action, Surface, Border, Icon), a full component library, and reusable section patterns across all pages.",
          "This made it possible to design 9 pages consistently and give the developer a clean, navigable handoff file.",
        ],
      },
      { type: "full-image", src: "/assets/projects/Saastorm/13.jpg" },
      { type: "full-image", src: "/assets/projects/Saastorm/14.jpg" },
      { type: "image-pair", left: "/assets/projects/Saastorm/15.jpg", right: "/assets/projects/Saastorm/16.jpg" },

      {
        type: "conclusion",
        heading: "Key Takeaway",
        text: [
          "This project showed me how much the craft of design has compounded for me. The site is visually complex — detailed infographics, layered layouts, a dark system with precise color logic — and it came together cohesively because the system was built right from the start.",
          "Using AI tools to prototype content structure before designing also saved significant time and reduced back-and-forth with the client on scope.",
        ],
      },
      { type: "image-pair", left: "/assets/projects/Saastorm/17.jpg", right: "/assets/projects/Saastorm/18.jpg" },
    ],
    next: "global",
  },
  {
    id: "global",
    industry: "Non-profit / Certification",
    website: "",
    title: "Global Standards",
    headline: "Global Standards — building a brand identity system for an international certification body",
    tagline: "A scalable visual language that works across print, digital, social media, and future brand extensions.",
    subtitle: "Brand identity & design system",
    client: "Global Standards gGmbH", country: "Germany", year: "2025",
    services: ["Brand Identity", "Design System", "Visual Guidelines"],
    myRole: "Brand book and visual guidelines — logo system, color, typography, core elements. Social media templates for Instagram and LinkedIn. Digital and print application examples, infographics.",
    team: {
      studio: "Snig Digital", studioUrl: "https://www.snig.digital",
      members: [
        { name: "Art Director",        role: "Art Director" },
        { name: "Yuliia Konovalenko",  role: "UI/Brand Designer", isMe: true },
        { name: "Project Manager",     role: "Project Manager" },
      ],
    },
    cover: "/assets/proj-global.jpg",
    heroImage: "/assets/projects/GS/1.jpg",
    color: "#1A5C38",
    sections: [
      {
        type: "conclusion",
        heading: "Overview",
        text: [
          "Global Standards gGmbH is an international certification body focused on responsible, structured decision-making across complex global supply chains. The project was to build their full brand identity system from the ground up — a comprehensive visual language that could scale consistently across digital, print, and social media.",
          "My role was to translate the brand strategy (developed by the Art Director and management) into a complete, documented design system — something any team could pick up and apply correctly without needing a designer in the room. Delivered as a 56-page brand book.",
        ],
      },

      { type: "image-pair", left: "/assets/projects/GS/2.jpg", right: "/assets/projects/GS/3.jpg" },

      {
        type: "bullet-list",
        heading: "My Role",
        items: [
          "Developed the full brand book — logo system, color palette, typography rules, core graphic elements",
          "Designed reusable social media templates for Instagram and LinkedIn, with Do's & Don'ts documentation",
          "Created digital and print application examples, infographics, and visual assets",
        ],
      },
      { type: "full-image", src: "/assets/projects/GS/4.jpg" },
      { type: "image-pair", left: "/assets/projects/GS/5.jpg", right: "/assets/projects/GS/6.jpg" },

      {
        type: "goals",
        heading: "Project Goals",
        items: [
          "Create a visual identity that communicates authority, credibility, and global reach",
          "Build a system flexible enough to cover print, digital, presentations, and social media",
          "Document brand rules clearly so different teams can apply the identity consistently",
          "Design a color system and typography hierarchy that scales across all touchpoints",
        ],
      },
      { type: "full-image", src: "/assets/projects/GS/7.jpg" },

      {
        type: "conclusion",
        heading: "Design system",
        text: [
          "The visual language is built from three core elements derived directly from the logo — Square, Corner, and Circle. Each has specific rules for how it can be used: as a structural frame, image mask, infographic element, or background composition. Together they create a consistent visual signature without feeling rigid.",
          "The color palette — Soft Sunlight, Fresh Sage, Mist Blue — uses warm natural tones as backgrounds paired with black or white text. I built a full shade scale (100–900) for each color, plus functional colors for error/warning states, all documented with accessibility contrast checks.",
        ],
      },
      { type: "image-pair", left: "/assets/projects/GS/8.jpg", right: "/assets/projects/GS/9.jpg" },
      { type: "image-pair", left: "/assets/projects/GS/10.jpg", right: "/assets/projects/GS/11.jpg" },

      {
        type: "conclusion",
        heading: "Key Takeaway",
        text: [
          "This project shifted my thinking about what design work actually means at scale. Creating guidelines is harder than creating designs — you have to anticipate every misuse, document every exception, and make the rules clear enough that someone who wasn't in the room can still get it right.",
          "It also gave me deep experience with brand systems thinking: how a logo becomes a graphic language, how a color becomes a functional system, and how visual consistency builds institutional trust.",
        ],
      },
      { type: "image-pair", left: "/assets/projects/GS/12.jpg", right: "/assets/projects/GS/13.jpg" },
      { type: "full-image", src: "/assets/projects/GS/14.jpg" },
    ],
    next: "incare",
  },
  {
    id: "incare",
    industry: "Family / Mobile App",
    website: "https://www.figma.com/proto/Yqr0GxptZMeaOpipEBBeBK/Mobile-Apps-33?node-id=596-16316&viewport=39%2C-3000%2C0.21&t=egbfH7QPArjFU2nO-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=596%3A16316&page-id=134%3A2220",
    title: "InCare",
    headline: "InCare — designing a daycare monitoring app for connected, informed parents",
    tagline: "Self-initiated mobile product design — from competitive research to 38 screens and an interactive prototype.",
    subtitle: "Mobile app — product design",
    client: "Concept Project", country: "Canada", year: "2024",
    services: ["UX Research", "Product Design", "Design System"],
    myRole: "Competitive research, information architecture, and user flow design (3 iterations). UI design from Apple native components to custom design system — 38 screens total.",
    team: {
      studio: null,
      members: [
        { name: "Yuliia Konovalenko", role: "Lead UX/UI Designer", isMe: true },
        { name: "Mentor",             role: "10 sessions" },
      ],
    },
    cover: "/assets/proj-incare.png",
    heroImage: "/assets/projects/Incare/1.jpg",
    color: "#F5C842",
    sections: [
      {
        type: "conclusion",
        heading: "Overview",
        text: [
          "A self-initiated project to deepen my mobile product design skills — a daycare monitoring app that helps parents stay informed, receive real-time updates, and communicate seamlessly with daycare staff.",
          "I designed the complete product over 120+ hours, going through competitive research, three iterations of user flows, and two rounds of UI design — from Apple native components to a fully custom design system.",
        ],
      },

      { type: "image-pair", left: "/assets/projects/Incare/2.jpg", right: "/assets/projects/Incare/3.jpg" },

      {
        type: "conclusion",
        heading: "Research",
        text: [
          "The market is dominated by Brightwheel and HiMama (Lillio), both with 4.9/5 App Store ratings. I analyzed customer reviews to uncover pain points, studied their UX patterns to understand what makes them work, and compared features to identify opportunities — particularly around notification balance and AI-driven personalization that neither had built well.",
        ],
      },

      { type: "image-pair", left: "/assets/projects/Incare/5.jpg", right: "/assets/projects/Incare/6.jpg" },

      {
        type: "goals",
        heading: "Project Goals",
        items: [
          "Help parents stay informed with real-time updates from daycare staff",
          "Reduce friction — make key features instantly accessible without overloading notifications",
          "Build trust through transparency and predictable interactions",
          "Design a system that feels warm and parent-friendly, not clinical",
        ],
      },

      {
        type: "phase",
        number: 1,
        name: "Native foundation",
        text: "I started with Apple's Human Interface Guidelines to establish solid UX foundations — native iOS components, accessibility best practices, and seamless system integration. This gave the product a reliable base before any custom styling.",
      },

      { type: "full-image", src: "/assets/projects/Incare/4.jpg" },

      {
        type: "phase",
        number: 2,
        name: "Custom design system",
        text: "Once the structure was validated through three flow iterations, I moved to a custom design system — a pastel color palette for a warm, parent-friendly feel, custom typography and iconography, and a balance between playful and professional that builds trust without feeling like a toy.",
      },

      { type: "full-image", src: "/assets/projects/Incare/7.jpg" },
      { type: "full-image", src: "/assets/projects/Incare/8.jpg" },
      { type: "full-image", src: "/assets/projects/Incare/9.jpg" },

      {
        type: "conclusion",
        heading: "Key Takeaway",
        text: [
          "Choosing a problem space I understood deeply — family routines, daily communication, trust between parents and caregivers — made for sharper design decisions and more meaningful research insights.",
          "The project strengthened my mobile-specific UX thinking: how IA from web translates (and doesn't) to mobile, how notification design is its own discipline, and how Apple's guidelines are a starting point, not a ceiling.",
        ],
      },
      { type: "full-image", src: "/assets/projects/Incare/10.jpg" },
      { type: "full-image", src: "/assets/projects/Incare/11.jpg" },
    ],
    next: "olsom",
  },
]
