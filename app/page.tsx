import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProblemSection } from "@/components/problem-section"
import { ShopkeeperSection } from "@/components/shopkeeper-section"
import { CustomerSection } from "@/components/customer-section"
import { ImpactSection } from "@/components/impact-section"
import { UniquenessSection } from "@/components/uniqueness-section"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="relative z-10">
        <HeroSection />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <ProblemSection />
        <SectionDivider />
        <ShopkeeperSection />
        <SectionDivider />
        <CustomerSection />
        <SectionDivider />
        <ImpactSection />
        <SectionDivider />
        <UniquenessSection />
        <SectionDivider />
        <CTASection />
      </div>
    </main>
  )
}

function SectionDivider() {
  return (
    <div className="relative mx-auto w-full max-w-7xl px-6" aria-hidden="true">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </div>
  )
}
