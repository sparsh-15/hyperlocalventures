import { HeroSection } from "@/components/hero-section"
import { MissionSection } from "@/components/mission-section"
import { VenturesSection } from "@/components/ventures-section"
import { CapabilitiesSection } from "@/components/capabilities-section"
import { WhySection } from "@/components/why-section"
import { LeadershipSection } from "@/components/leadership-section"
import { CareersTeaserSection } from "@/components/careers-teaser"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="relative z-10">
        <HeroSection />
        <SectionDivider />
        <MissionSection />
        <SectionDivider />
        <VenturesSection />
        <SectionDivider />
        <CapabilitiesSection />
        <SectionDivider />
        <WhySection />
        <SectionDivider />
        <LeadershipSection />
        <SectionDivider />
        <CareersTeaserSection />
        <SectionDivider />
        <CTASection />
      </div>
    </main>
  )
}

function SectionDivider() {
  return (
    <div className="relative mx-auto w-full max-w-7xl px-6" aria-hidden="true">
      <div className="h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent" />
    </div>
  )
}
