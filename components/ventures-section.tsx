"use client"

import Link from "next/link"
import Image from "next/image"
import { ScrollReveal } from "./scroll-reveal"
import { ArrowRight, ExternalLink } from "lucide-react"

export function VenturesSection() {
  return (
    <section id="ventures" className="section-shell relative overflow-hidden py-14 md:py-20">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <ScrollReveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon/20 bg-neon/5 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse-neon" />
              <span className="text-xs font-semibold uppercase tracking-widest text-neon">Our Ventures</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Products We&apos;re{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-neon animate-gradient-x">
                Building
              </span>
            </h2>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <div className="motion-panel group relative overflow-hidden rounded-3xl border border-border/50 bg-surface/80 p-8 backdrop-blur-sm transition-all duration-500 hover:border-neon/40 md:p-12 max-w-3xl mx-auto">
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
              style={{ background: "radial-gradient(circle at top left, rgba(76,29,149,0.06) 0%, transparent 60%)" }}
              aria-hidden="true"
            />
            <div className="relative">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Live</span>
              </div>
              <Image src="/images/logo.svg" alt="Zopin" width={120} height={40} style={{ height: "40px", width: "auto", mixBlendMode: "multiply" }} />
              <h3 className="mt-3 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Zopin</h3>
              <p className="mt-2 text-sm font-semibold text-primary uppercase tracking-widest">by Hyperlocalventures</p>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-xl">
                AI-powered local commerce and customer engagement platform connecting consumers
                and merchants through hyperlocal discovery, offers, loyalty, and conversational commerce.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Hyperlocal Discovery", "AI Offers", "Loyalty Engine", "Merchant Copilot", "Conversational Commerce"].map((tag) => (
                  <span key={tag} className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="https://zopin.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative flex items-center gap-2 overflow-hidden rounded-full bg-neon px-8 py-3 text-sm font-bold text-white uppercase tracking-wide transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(217,70,239,0.4)]"
                >
                  <span className="animate-shimmer pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <span className="relative">Visit Zopin</span>
                  <ExternalLink size={14} className="relative" />
                </a>
                <Link href="/ventures" className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-neon transition-colors">
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            </div>
            <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-neon/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            More ventures coming soon. We build one product at a time — with full focus.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
