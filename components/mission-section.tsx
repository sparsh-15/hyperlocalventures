"use client"

import { ScrollReveal } from "./scroll-reveal"

export function MissionSection() {
  return (
    <section
      id="mission"
      className="section-shell relative overflow-hidden py-14 md:py-20"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(180deg, transparent 0%, rgba(76,29,149,0.04) 50%, transparent 100%)" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <ScrollReveal>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon/20 bg-neon/5 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-neon" />
            <span className="text-xs font-semibold uppercase tracking-widest text-neon">Our Mission</span>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-2xl font-bold leading-relaxed text-foreground sm:text-3xl md:text-4xl text-balance">
            We believe local businesses deserve the same digital capabilities as
            the world&apos;s largest enterprises.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Our mission is to democratize AI, commerce, engagement, and growth
            technologies for every neighborhood business — from the corner shop
            in Pune to the market street in Mumbai.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
