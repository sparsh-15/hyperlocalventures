"use client"

import { ScrollReveal } from "./scroll-reveal"
import { X, Check } from "lucide-react"

const comparisons = [
  { label: "E-commerce", isUs: false, desc: "Product shipping model" },
  { label: "Marketplace", isUs: false, desc: "Aggregation of sellers" },
  { label: "Aggregator", isUs: false, desc: "Price comparison only" },
  { label: "Intelligence Layer", isUs: true, desc: "AI-native commerce OS" },
]

export function UniquenessSection() {
  return (
    <section className="section-shell relative overflow-hidden py-28 md:py-36 lg:py-44">
      {/* Center glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-15 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,255,132,0.1) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-neon/20 bg-neon/5 px-4 py-1.5 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse-neon" />
              <span className="text-xs font-semibold uppercase tracking-widest text-neon">
                First of Its Kind
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
              A Category-Creating
              <br />
              <span className="text-neon neon-text-glow">Platform</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              No platform like this currently exists. Not ecommerce. Not a
              marketplace. Not an aggregator.{" "}
              <span className="text-foreground font-semibold">
                A true AI-native hyperlocal commerce intelligence network.
              </span>
            </p>
          </ScrollReveal>

          {/* Comparison grid */}
          <ScrollReveal delay={0.3}>
            <div className="mx-auto mt-20 max-w-4xl">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {comparisons.map((item) => (
                  <div
                    key={item.label}
                    className={`motion-panel group relative overflow-hidden rounded-2xl border p-6 transition-all duration-500 md:p-8 ${
                      item.isUs
                        ? "border-neon/50 bg-neon/5 neon-glow-strong"
                        : "border-border/50 bg-surface/80 hover:border-border"
                    }`}
                  >
                    {/* Status icon */}
                    <div className={`flex h-8 w-8 items-center justify-center rounded-full mx-auto mb-4 ${
                      item.isUs
                        ? "bg-neon/20 text-neon"
                        : "bg-border/50 text-muted-foreground/50"
                    }`}>
                      {item.isUs ? <Check size={16} /> : <X size={16} />}
                    </div>

                    <span
                      className={`block text-sm font-bold ${
                        item.isUs ? "text-neon" : "text-muted-foreground line-through decoration-muted-foreground/30"
                      }`}
                    >
                      {item.label}
                    </span>
                    <p className={`mt-2 text-xs ${
                      item.isUs ? "text-neon/80" : "text-muted-foreground/60"
                    }`}>
                      {item.desc}
                    </p>
                    {item.isUs && (
                      <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-neon/10 px-3 py-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse" />
                        <span className="text-[10px] font-bold text-neon uppercase tracking-wider">
                          {"That's us"}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
