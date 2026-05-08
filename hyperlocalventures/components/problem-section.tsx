"use client"

import { ScrollReveal } from "./scroll-reveal"
import {
  Clock,
  TrendingDown,
  MapPinOff,
  BanknoteX,
  EyeOff,
  Store,
} from "lucide-react"

const problems = [
  {
    icon: Clock,
    title: "Wasted Customer Time",
    description:
      "Customers visit multiple shops searching for the right deal, wasting hours every week.",
    number: "01",
  },
  {
    icon: TrendingDown,
    title: "Low Footfall Despite Discounts",
    description:
      "Genuine discounts go unseen. Great deals exist but no one walks in.",
    number: "02",
  },
  {
    icon: MapPinOff,
    title: "No Pin-code Discovery",
    description:
      "Zero hyperlocal discovery. Customers can not find what is near them in real time.",
    number: "03",
  },
  {
    icon: BanknoteX,
    title: "Wasted Ad Spend",
    description:
      "Small businesses spend on broad, inefficient advertising that never reaches nearby customers.",
    number: "04",
  },
  {
    icon: EyeOff,
    title: "No Real-time Visibility",
    description:
      "Offers expire, prices change, stocks run out. There is no live pulse on local commerce.",
    number: "05",
  },
  {
    icon: Store,
    title: "No Platform for Small Stores",
    description:
      "Mom-and-pop shops, corner laundries, and local grocers lack any digital campaigning platform.",
    number: "06",
  },
]

export function ProblemSection() {
  return (
    <section
      id="problem"
      className="section-shell relative overflow-hidden py-28 md:py-36 lg:py-44"
    >
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-neon/20 bg-neon/5 px-4 py-1.5 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse-neon" />
              <span className="text-xs font-semibold uppercase tracking-widest text-neon">
                What We Are Solving
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
              Why Local Commerce
              <br />
              <span className="text-neon neon-text-glow">Needs Intelligence</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground leading-relaxed md:text-lg">
              The local commerce ecosystem is broken. Billions in value lost every day to inefficiency, invisibility, and disconnection.
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:mt-24">
          {problems.map((problem, i) => (
            <ScrollReveal key={problem.title} delay={0.08 * (i + 1)}>
              <div className="motion-panel group relative h-full overflow-hidden rounded-2xl border border-border/50 bg-surface/80 p-8 backdrop-blur-sm transition-all duration-500 hover:border-neon/40">
                {/* Glow border effect on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none neon-border-glow"
                  aria-hidden="true"
                />

                {/* Hover gradient */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at bottom right, rgba(0,255,132,0.05) 0%, transparent 60%)",
                  }}
                  aria-hidden="true"
                />

                <div className="relative">
                  {/* Number + icon row */}
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neon/10 text-neon transition-all duration-300 group-hover:bg-neon/20 group-hover:scale-110">
                      <problem.icon size={22} />
                    </div>
                    <span className="text-3xl font-bold text-border/60 group-hover:text-neon/20 transition-colors duration-500 font-mono">
                      {problem.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-foreground">
                    {problem.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
