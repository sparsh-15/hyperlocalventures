import { ScrollReveal } from "@/components/scroll-reveal"
import { Heart, Lightbulb, Shield, Sparkles, Zap } from "lucide-react"

const values = [
  { icon: Heart, title: "Customer Obsession", description: "Every decision starts with the customer — merchant or consumer. Their success is our success." },
  { icon: Lightbulb, title: "Innovation", description: "We push boundaries in AI, commerce, and hyperlocal technology to create solutions that never existed before." },
  { icon: Shield, title: "Trust", description: "We build transparent, reliable products that businesses and consumers can depend on every day." },
  { icon: Sparkles, title: "Simplicity", description: "Complex technology should feel effortless. We hide the hard parts and surface what matters." },
  { icon: Zap, title: "Execution Excellence", description: "Ideas without execution are worthless. We ship, learn, and improve — fast." },
]

function SectionDivider() {
  return (
    <div className="relative mx-auto w-full max-w-7xl px-6" aria-hidden="true">
      <div className="h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent" />
    </div>
  )
}

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden pt-24">
      <div className="relative z-10">

        {/* Our Story */}
        <section className="section-shell relative overflow-hidden py-14 md:py-20">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at top, rgba(76,29,149,0.06) 0%, transparent 60%)" }} aria-hidden="true" />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <ScrollReveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon/20 bg-neon/5 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-neon" />
                <span className="text-xs font-semibold uppercase tracking-widest text-neon">Our Story</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Why We{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-neon">Started</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                Hyperlocalventures was founded in 2026 with a single conviction: India&apos;s tens of millions of local businesses are underserved by technology. While global e-commerce platforms thrive, the corner shop, the neighbourhood market, and the local service provider have been left behind. We set out to change that.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                Starting in Mumbai and Pune, we are building AI-native platforms that give every local business the same intelligence, reach, and engagement capabilities previously reserved for enterprise brands.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <SectionDivider />

        {/* Market Problem */}
        <section className="section-shell relative overflow-hidden py-14 md:py-20">
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
              <div>
                <ScrollReveal>
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon/20 bg-neon/5 px-4 py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-neon" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-neon">Market Problem</span>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                    Local Commerce Is{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-neon">Broken</span>
                  </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                    Over 63 million small and medium businesses in India operate without meaningful digital presence, customer data, or engagement tools. They compete blindly against each other and against large aggregators — without the technology to understand their customers or grow intelligently.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.3}>
                  <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                    Meanwhile, consumers searching for local products and services have no reliable way to discover what&apos;s nearby, what&apos;s available, and what offers exist in real time. The gap between local supply and local demand is enormous — and almost entirely unaddressed.
                  </p>
                </ScrollReveal>
              </div>
              <ScrollReveal delay={0.25}>
                <div className="mt-12 lg:mt-0 grid grid-cols-2 gap-4">
                  {[
                    { value: "63M+", label: "SMBs in India" },
                    { value: "<5%", label: "Digitally Enabled" },
                    { value: "₹40T", label: "Local Commerce Market" },
                    { value: "0", label: "True AI-Native Platforms" },
                  ].map((stat) => (
                    <div key={stat.label} className="motion-panel rounded-2xl border border-border/50 bg-surface/80 p-6 text-center backdrop-blur-sm">
                      <p className="text-3xl font-extrabold text-primary">{stat.value}</p>
                      <p className="mt-2 text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Our Vision */}
        <section className="section-shell relative overflow-hidden py-14 md:py-20">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(76,29,149,0.05) 0%, transparent 60%)" }} aria-hidden="true" />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <ScrollReveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon/20 bg-neon/5 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-neon" />
                <span className="text-xs font-semibold uppercase tracking-widest text-neon">Our Vision</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Local Commerce{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-neon">Transformation</span>
                {" "}Across India
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-muted-foreground font-medium">
                &ldquo;Every neighborhood business in India, powered by AI — discovering customers, building loyalty, and growing intelligently.&rdquo;
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                We envision a future where the local kirana store has the same customer intelligence as a Fortune 500 retailer. Where a neighbourhood restaurant knows exactly which offer will bring back a lapsed customer. Where local commerce is not a disadvantage — it&apos;s a superpower.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <SectionDivider />

        {/* Our Values */}
        <section className="section-shell relative overflow-hidden py-14 md:py-20">
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <ScrollReveal>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon/20 bg-neon/5 px-4 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-neon" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-neon">Our Values</span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                  What We{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-neon">Stand For</span>
                </h2>
              </ScrollReveal>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value, i) => (
                <ScrollReveal key={value.title} delay={0.1 * (i + 1)}>
                  <div className="motion-panel group relative h-full overflow-hidden rounded-2xl border border-border/50 bg-surface/80 p-8 backdrop-blur-sm transition-all duration-500 hover:border-neon/40">
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" style={{ background: "radial-gradient(circle at top left, rgba(76,29,149,0.06) 0%, transparent 60%)" }} aria-hidden="true" />
                    <div className="relative">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neon/10 text-neon group-hover:bg-neon/20 group-hover:scale-105 transition-all duration-300">
                        <value.icon size={24} />
                      </div>
                      <h3 className="mt-5 text-lg font-bold text-foreground">{value.title}</h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                    <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-neon/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Future Roadmap */}
        <section className="section-shell relative overflow-hidden py-14 md:py-20">
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <ScrollReveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon/20 bg-neon/5 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-neon" />
                <span className="text-xs font-semibold uppercase tracking-widest text-neon">Future Roadmap</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Where We&apos;re{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-neon">Headed</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                We are building a portfolio of AI-powered solutions for merchants, consumers, and local ecosystems. Starting with Zopin in Mumbai and Pune, we plan to expand our geographic reach and add new venture products that address adjacent opportunities in local commerce.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
                Each product we build will be AI-native, deeply hyperlocal, and focused on delivering measurable value to the businesses and communities it serves.
              </p>
            </ScrollReveal>
          </div>
        </section>

      </div>
    </main>
  )
}
