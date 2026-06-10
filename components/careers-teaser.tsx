"use client"

import Link from "next/link"
import { ScrollReveal } from "./scroll-reveal"
import { ArrowRight } from "lucide-react"

export function CareersTeaserSection() {
  return (
    <section className="section-shell relative overflow-hidden py-14 md:py-20">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(76,29,149,0.06) 0%, transparent 60%)" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <ScrollReveal>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon/20 bg-neon/5 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-neon" />
            <span className="text-xs font-semibold uppercase tracking-widest text-neon">Careers</span>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Join us in shaping the future of{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-neon">
              local commerce
            </span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            We&apos;re building a team of builders, thinkers, and doers who care about
            creating real impact for businesses in every neighborhood.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <Link
            href="/careers"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-neon px-10 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300"
          >
            View Open Roles
            <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
