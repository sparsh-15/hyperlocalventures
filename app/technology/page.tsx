import { ScrollReveal } from "@/components/scroll-reveal"
import { Brain, MapPin, Bot, Users, Star, Layers } from "lucide-react"

const techLayers = [
  { icon: Layers, title: "Unified Commerce Platform", description: "The foundation that connects merchants, consumers, and data streams into a single coherent operating layer. Every product we build runs on this platform.", highlight: "Foundation Layer" },
  { icon: Brain, title: "AI Engine", description: "Our proprietary AI engine powers decision-making across the platform — from offer generation and demand forecasting to personalization and anomaly detection.", highlight: "Intelligence Core" },
  { icon: MapPin, title: "Hyperlocal Intelligence Layer", description: "Pin-code level understanding of supply, demand, consumer behavior, and competitive dynamics. This is what makes our products truly local — not just geo-tagged.", highlight: "Spatial Intelligence" },
  { icon: Bot, title: "Merchant Copilot", description: "An AI assistant for every merchant — helping them create offers, understand their customers, manage inventory signals, and grow their business intelligently.", highlight: "Merchant Layer" },
  { icon: Users, title: "Consumer Engagement Engine", description: "A system that learns individual consumer preferences, intent signals, and shopping patterns to deliver timely, relevant, and actionable local commerce experiences.", highlight: "Consumer Layer" },
  { icon: Star, title: "Loyalty Engine", description: "A flexible, programmable loyalty infrastructure that powers retention mechanics for merchants — from points and cashback to streak rewards and referral programs.", highlight: "Retention Layer" },
]

export default function TechnologyPage() {
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
                <span className="text-xs font-semibold uppercase tracking-widest text-neon">Technology</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Built for{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-neon animate-gradient-x">Intelligence</span>
                {" "}at Every Layer
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Hyperlocalventures is a technology company. Our platform is not a feature set — it is a system of interconnected layers, each purpose-built for local commerce intelligence.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <div className="relative mx-auto w-full max-w-7xl px-6" aria-hidden="true">
          <div className="h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent" />
        </div>

        {/* Tech stack */}
        <section className="section-shell relative overflow-hidden py-14 md:py-20">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(76,29,149,0.15) 0%, transparent 70%)" }} aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {techLayers.map((layer, i) => (
                <ScrollReveal key={layer.title} delay={0.08 * (i + 1)}>
                  <div className="motion-panel group relative h-full overflow-hidden rounded-2xl border border-border/50 bg-surface/80 p-8 backdrop-blur-sm transition-all duration-500 hover:border-neon/40">
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" style={{ background: "radial-gradient(circle at top left, rgba(76,29,149,0.06) 0%, transparent 60%)" }} aria-hidden="true" />
                    <div className="relative">
                      <div className="flex items-start justify-between">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neon/10 text-neon group-hover:bg-neon/20 group-hover:scale-105 transition-all duration-300">
                          <layer.icon size={28} />
                        </div>
                        <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                          {layer.highlight}
                        </span>
                      </div>
                      <h3 className="mt-6 text-xl font-bold text-foreground">{layer.title}</h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{layer.description}</p>
                    </div>
                    <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-neon/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <div className="relative mx-auto w-full max-w-7xl px-6" aria-hidden="true">
          <div className="h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent" />
        </div>

        {/* Positioning statement */}
        <section className="section-shell relative overflow-hidden py-14 md:py-20">
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <ScrollReveal>
              <p className="text-2xl font-bold text-foreground sm:text-3xl leading-relaxed text-balance">
                We are not an app company. We are not a marketplace.{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-neon animate-gradient-x">
                  We are a technology company building the intelligence infrastructure for local commerce.
                </span>
              </p>
            </ScrollReveal>
          </div>
        </section>

      </div>
    </main>
  )
}
