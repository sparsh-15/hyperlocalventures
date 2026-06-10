import { ScrollReveal } from "@/components/scroll-reveal"
import { Heart, TrendingUp, Users, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"

const whyJoin = [
  { icon: Zap, title: "Build from Scratch", description: "Join at ground zero. Every system you build, every product you ship becomes part of the foundation." },
  { icon: Heart, title: "Real Impact", description: "Your work directly empowers local businesses and communities. The impact is immediate and visible." },
  { icon: TrendingUp, title: "Grow Fast", description: "In a small, focused team, you wear multiple hats and grow at a pace impossible in large organisations." },
  { icon: Users, title: "Mission-Driven Team", description: "Work with people who care deeply about what they're building — not just the paycheck." },
]

const culturePoints = [
  "We write, ship, and iterate — not plan, present, and delay.",
  "Ownership is the default. Everyone takes responsibility.",
  "We value clear thinking over impressive-sounding ideas.",
  "Feedback flows freely and is welcomed in all directions.",
  "We celebrate learning from failure as much as success.",
]

function SectionDivider() {
  return (
    <div className="relative mx-auto w-full max-w-7xl px-6" aria-hidden="true">
      <div className="h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent" />
    </div>
  )
}

export default function CareersPage() {
  return (
    <main className="relative min-h-screen overflow-hidden pt-24">
      <div className="relative z-10">

        {/* Header */}
        <section className="section-shell relative overflow-hidden py-14 md:py-20">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at top, rgba(76,29,149,0.06) 0%, transparent 60%)" }} aria-hidden="true" />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <ScrollReveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon/20 bg-neon/5 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse-neon" />
                <span className="text-xs font-semibold uppercase tracking-widest text-neon">Careers</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Join Us in Shaping{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-neon animate-gradient-x">Local Commerce</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                We&apos;re building one of India&apos;s first AI-native local commerce platforms. If that excites you — we want to meet you.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <SectionDivider />

        {/* Why Join Us */}
        <section className="section-shell relative overflow-hidden py-14 md:py-20">
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <ScrollReveal>
                <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                  Why{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-neon animate-gradient-x">Join Us?</span>
                </h2>
              </ScrollReveal>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {whyJoin.map((item, i) => (
                <ScrollReveal key={item.title} delay={0.1 * (i + 1)}>
                  <div className="motion-panel group relative h-full overflow-hidden rounded-2xl border border-border/50 bg-surface/80 p-8 backdrop-blur-sm transition-all duration-500 hover:border-neon/40 text-center">
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" style={{ background: "radial-gradient(circle at top center, rgba(76,29,149,0.06) 0%, transparent 60%)" }} aria-hidden="true" />
                    <div className="relative">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-neon/10 text-neon group-hover:bg-neon/20 group-hover:scale-105 transition-all duration-300">
                        <item.icon size={28} />
                      </div>
                      <h3 className="mt-5 text-lg font-bold text-foreground">{item.title}</h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                    <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-neon/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Open Positions */}
        <section className="section-shell relative overflow-hidden py-14 md:py-20">
          <div className="relative mx-auto max-w-4xl px-6">
            <div className="text-center mb-16">
              <ScrollReveal>
                <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                  Open{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-neon animate-gradient-x">Positions</span>
                </h2>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.1}>
              <div className="motion-panel rounded-2xl border border-border/50 bg-surface/80 p-12 text-center backdrop-blur-sm">
                <div className="inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon/10 px-4 py-2 mb-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-neon">Coming Soon</span>
                </div>
                <p className="text-lg text-muted-foreground">
                  We&apos;re preparing to open positions across product, engineering, operations, and growth.
                </p>
                <p className="mt-4 text-base text-muted-foreground">
                  Interested in joining early? Send your resume to{" "}
                  <a href="mailto:careers@hyperlocalventures.com" className="font-semibold text-neon hover:underline">
                    careers@hyperlocalventures.com
                  </a>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <SectionDivider />

        {/* Culture */}
        <section className="section-shell relative overflow-hidden py-14 md:py-20">
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
              <div>
                <ScrollReveal>
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon/20 bg-neon/5 px-4 py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse-neon" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-neon">Our Culture</span>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                    How We{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-neon animate-gradient-x">Work</span>
                  </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                    We are a small team with a large ambition. Culture here is not a poster on the wall — it&apos;s the sum of how we behave every day.
                  </p>
                </ScrollReveal>
              </div>
              <div className="mt-10 lg:mt-0 space-y-4">
                {culturePoints.map((point, i) => (
                  <ScrollReveal key={point} delay={0.1 * (i + 2)}>
                    <div className="flex items-start gap-4 rounded-2xl border border-border/50 bg-surface/80 p-5 backdrop-blur-sm">
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neon/10 text-neon">
                        <span className="text-xs font-bold">{i + 1}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{point}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Growth Opportunities */}
        <section className="section-shell relative overflow-hidden py-14 md:py-20">
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <ScrollReveal>
                <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                  Growth{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-neon animate-gradient-x">Opportunities</span>
                </h2>
              </ScrollReveal>
            </div>
            <div className="grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
              {[
                { title: "Cross-functional Ownership", desc: "Work across product, tech, and business — not siloed in one lane." },
                { title: "Direct Founder Access", desc: "Work closely with founders and have real influence on company direction." },
                { title: "Equity Participation", desc: "Share in the value you help create as the company grows." },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={0.1 * (i + 1)}>
                  <div className="motion-panel rounded-2xl border border-border/50 bg-surface/80 p-6 text-center backdrop-blur-sm">
                    <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Submit Resume */}
        <section className="section-shell relative overflow-hidden py-14 md:py-20">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(76,29,149,0.06) 0%, transparent 60%)" }} aria-hidden="true" />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <ScrollReveal>
              <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Don&apos;t See a Role?{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-neon animate-gradient-x">Reach Out Anyway.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
                We&apos;re always interested in exceptional people. Send your resume and a note about what you want to build.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href="mailto:careers@hyperlocalventures.com"
                  className="inline-flex items-center gap-2 rounded-full bg-neon px-10 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(217,70,239,0.4)]"
                >
                  Submit Your Resume
                  <ArrowRight size={16} />
                </a>
                <Link href="/contact" className="flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-10 py-4 text-sm font-bold uppercase tracking-wide text-primary transition-all duration-300 hover:border-primary/50 hover:bg-primary/10">
                  Get in Touch
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </div>
    </main>
  )
}
