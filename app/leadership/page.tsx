import { ScrollReveal } from "@/components/scroll-reveal"
import { Linkedin } from "lucide-react"
import Link from "next/link"

const leaders = [
  {
    name: "Shashank Mohare",
    role: "Founder & CEO",
    bio: "Visionary builder focused on transforming local commerce through technology. Passionate about empowering neighborhood businesses across India with enterprise-grade AI capabilities.",
    linkedin: "#",
    initials: "SM",
  },
  // Add more founders here
]

export default function LeadershipPage() {
  return (
    <main className="relative min-h-screen overflow-hidden pt-24">
      <div className="relative z-10">

        {/* Header */}
        <section className="section-shell relative overflow-hidden py-14 md:py-20">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at top, rgba(76,29,149,0.06) 0%, transparent 60%)" }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <ScrollReveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon/20 bg-neon/5 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse-neon" />
                <span className="text-xs font-semibold uppercase tracking-widest text-neon">Leadership</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                The People{" "}
                <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-neon animate-gradient-x">
                  Building It
                </span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Hyperlocalventures is led by founders who believe deeply in the potential
                of local commerce and the transformative power of AI.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <div className="relative mx-auto w-full max-w-7xl px-6" aria-hidden="true">
          <div className="h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent" />
        </div>

        {/* Founder profiles */}
        <section className="section-shell relative overflow-hidden py-14 md:py-20">
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="flex flex-wrap justify-center gap-10">
              {leaders.map((leader, i) => (
                <ScrollReveal key={leader.name} delay={0.1 * (i + 1)}>
                  <div className="motion-panel group relative w-80 overflow-hidden rounded-2xl border border-border/50 bg-surface/80 backdrop-blur-sm transition-all duration-500 hover:border-neon/40">
                    <div
                      className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
                      style={{ background: "radial-gradient(circle at top center, rgba(76,29,149,0.06) 0%, transparent 60%)" }}
                      aria-hidden="true"
                    />

                    {/* Photo area */}
                    <div className="relative h-56 bg-gradient-to-br from-primary/10 via-neon/5 to-accent/10 flex items-center justify-center">
                      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-br from-primary to-neon text-3xl font-extrabold text-white shadow-xl">
                        {leader.initials}
                      </div>
                      <p className="absolute bottom-3 left-0 right-0 text-center text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60">
                        Professional photo coming soon
                      </p>
                    </div>

                    <div className="relative p-7 text-center">
                      <h2 className="text-xl font-bold text-foreground">{leader.name}</h2>
                      <p className="mt-1 text-xs font-bold uppercase tracking-widest text-neon">{leader.role}</p>
                      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{leader.bio}</p>
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary transition-all hover:border-primary/40 hover:bg-primary/10"
                      >
                        <Linkedin size={14} />
                        LinkedIn Profile
                      </a>
                    </div>

                    <div className="absolute bottom-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-neon/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <div className="relative mx-auto w-full max-w-7xl px-6" aria-hidden="true">
          <div className="h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent" />
        </div>

        {/* CTA */}
        <section className="section-shell relative overflow-hidden py-12 md:py-16">
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <ScrollReveal>
              <p className="text-lg text-muted-foreground">
                Interested in joining the team behind Hyperlocalventures?
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/careers"
                  className="inline-flex items-center gap-2 rounded-full bg-neon px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(217,70,239,0.4)]"
                >
                  View Open Roles
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-8 py-3 text-sm font-bold uppercase tracking-wide text-primary transition-all duration-300 hover:border-primary/50 hover:bg-primary/10"
                >
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
