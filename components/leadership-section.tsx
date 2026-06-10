"use client"

import Link from "next/link"
import { ScrollReveal } from "./scroll-reveal"
import { Linkedin, ArrowRight } from "lucide-react"

const leaders = [
  {
    name: "Shashank Mohare",
    role: "Founder & CEO",
    bio: "Visionary builder focused on transforming local commerce through AI. Passionate about empowering every neighborhood business with enterprise-grade technology.",
    linkedin: "#",
    initials: "SM",
  },
]

export function LeadershipSection() {
  return (
    <section className="section-shell relative overflow-hidden py-14 md:py-20">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <ScrollReveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon/20 bg-neon/5 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse-neon" />
              <span className="text-xs font-semibold uppercase tracking-widest text-neon">Leadership</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              The Team{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-neon animate-gradient-x">
                Behind It
              </span>
            </h2>
          </ScrollReveal>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {leaders.map((leader, i) => (
            <ScrollReveal key={leader.name} delay={0.1 * (i + 2)}>
              <div className="motion-panel group relative w-72 overflow-hidden rounded-2xl border border-border/50 bg-surface/80 p-8 backdrop-blur-sm transition-all duration-500 hover:border-neon/40 text-center">
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
                  style={{ background: "radial-gradient(circle at top center, rgba(76,29,149,0.06) 0%, transparent 60%)" }}
                  aria-hidden="true"
                />
                <div className="relative">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-neon text-2xl font-extrabold text-white">
                    {leader.initials}
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-foreground">{leader.name}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-neon">{leader.role}</p>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{leader.bio}</p>
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Linkedin size={16} />
                    LinkedIn
                  </a>
                </div>
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-neon/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <Link
              href="/leadership"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-neon transition-colors"
            >
              View full leadership page <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
