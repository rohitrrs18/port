import { KineticText } from "@/components/ui/kinetic-text";
import { GlitchText } from "@/components/ui/glitch-text";
import { KineticAccordion } from "@/components/sections/kinetic-accordion";
import { WorkRedesign } from "@/components/sections/work-redesign";
import { MegaContact } from "@/components/sections/mega-contact";
import { Footer } from "@/components/layout/footer";
import { NeuralFeed } from "@/components/sections/neural-feed";
import { Expertise } from "@/components/sections/expertise";
import { AboutMe } from "@/components/sections/about-me";
import { CareerBlueprint } from "@/components/sections/career-blueprint";
import { NeuralLink } from "@/components/sections/neural-testimonials";
import { LiquidChromeWrapper } from "@/components/canvas/liquid-chrome-wrapper";
import { getSortedPostsData } from "@/lib/blog";

export default function Home() {
  const posts = getSortedPostsData().slice(0, 3);

  return (
    <main className="relative min-h-screen bg-neutral-950 text-neutral-100 selection:bg-neutral-100 selection:text-neutral-950 overflow-hidden">

      {/* 3D Background Layer */}
      <div className="fixed inset-0 z-0">
        <LiquidChromeWrapper />
      </div>

      {/* Content Layer */}
      <div className="relative z-10">

        {/* Hero Section */}
        <section className="h-[90vh] md:h-screen flex flex-col justify-center items-center pointer-events-none px-4">
          <div className="mix-blend-difference z-20 text-center">
            <KineticText text="BEYOND IMAGINATION" className="text-[18vw] md:text-[15vw] font-black leading-none tracking-tighter opacity-80" baseVelocity={2} />
            <KineticText text="DIGITAL EXPERIENCE" className="text-[18vw] md:text-[15vw] font-black leading-none tracking-tighter opacity-80" baseVelocity={-2} />
          </div>

          <div className="mt-20 mix-blend-difference pointer-events-auto">
            <p className="text-xl md:text-2xl font-mono tracking-widest uppercase mb-4 text-center">
              <GlitchText text="Rohit // Full Stack Developer" />
            </p>
          </div>
        </section>

        {/* Editorial Content Layout */}
        <div className="bg-neutral-950/95 relative z-20 shadow-2xl">
          <AboutMe />
          <CareerBlueprint />
          <KineticAccordion />
          <WorkRedesign />
          <NeuralFeed posts={posts} />
          <Expertise />
          <NeuralLink />
          <MegaContact />
          <Footer />
        </div>

      </div>
    </main>
  );
}
