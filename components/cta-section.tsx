"use client"

import { ScrollReveal } from "./scroll-reveal"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section
      id="contact"
      className="section-shell relative overflow-hidden py-28 md:py-36 lg:py-44"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,255,132,0.08) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* Side glows */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,255,132,0.2) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,255,132,0.2) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-neon/20 bg-neon/5 px-4 py-1.5 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse-neon" />
            <span className="text-xs font-semibold uppercase tracking-widest text-neon">
              Who Is This For
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            For Every{" "}
            <span className="text-neon neon-text-glow">Customer</span>.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h2 className="mt-2 text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            For Every{" "}
            <span className="text-neon neon-text-glow">Shopkeeper</span>.
          </h2>
        </ScrollReveal>

        {/* Divider */}
        <ScrollReveal delay={0.3}>
          <div className="mx-auto mt-12 h-px w-40 bg-gradient-to-r from-transparent via-neon/50 to-transparent" />
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <p className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Join us in building the intelligence layer that will power local
            commerce across India. Whether you run a store or shop at one, this
            platform is for you.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:contact@hyperlocalventures.com"
              className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-neon px-12 py-4.5 text-sm font-bold text-background tracking-wide uppercase transition-all duration-300 hover:shadow-[0_0_50px_rgba(0,255,132,0.5)] hover:scale-[1.03]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer pointer-events-none" />
              <span className="relative">Partner With Us</span>
              <ArrowRight size={16} className="relative transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="flex items-center gap-2 rounded-full border border-neon/25 bg-neon/5 px-12 py-4.5 text-sm font-bold text-neon tracking-wide uppercase transition-all duration-300 hover:bg-neon/10 hover:border-neon/50"
            >
              Learn More
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
