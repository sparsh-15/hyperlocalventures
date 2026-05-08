"use client"

import { ScrollReveal } from "./scroll-reveal"
import {
  MapPin,
  Zap,
  Sparkles,
  Bell,
  Eye,
} from "lucide-react"

const features = [
  {
    icon: MapPin,
    title: "Hyperlocal Discovery",
    description: "Find stores and deals within walking distance, powered by your exact location.",
  },
  {
    icon: Zap,
    title: "Live Nearby Offers",
    description: "See real-time discounts from shops around you, updated as they happen.",
  },
  {
    icon: Sparkles,
    title: "Smart AI Recommendations",
    description: "Our AI learns your preferences to surface the most relevant deals for you.",
  },
  {
    icon: Bell,
    title: "Time-sensitive Alerts",
    description: "Never miss a flash deal. Get notified about limited-time offers near you.",
  },
  {
    icon: Eye,
    title: "Real-time Visibility",
    description: "Live inventory, price comparisons, and store availability at your fingertips.",
  },
]

export function CustomerSection() {
  return (
    <section
      id="customers"
      className="section-shell relative overflow-hidden py-28 md:py-36 lg:py-44"
    >
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-20">
          {/* Phone mockup */}
          <div className="w-full lg:w-5/12">
            <ScrollReveal>
              <div className="mx-auto max-w-[320px]">
                {/* Phone shell */}
                <div className="motion-panel animate-float-strong-reverse relative rounded-[2.5rem] border-2 border-border/60 bg-surface p-3 shadow-2xl shadow-neon/5">
                  {/* Phone notch */}
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 h-7 w-32 rounded-b-2xl bg-background z-10" />

                  {/* Screen */}
                  <div className="rounded-[2rem] bg-background overflow-hidden">
                    {/* Status bar */}
                    <div className="flex items-center justify-between px-6 pt-9 pb-2">
                      <span className="text-[10px] text-muted-foreground font-mono">9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-neon" />
                        <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground/30" />
                        <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground/30" />
                      </div>
                    </div>

                    {/* App header */}
                    <div className="px-5 pb-3 pt-2">
                      <div className="flex items-center gap-2">
                        <div className="h-7 w-7 rounded-lg bg-neon/20 flex items-center justify-center border border-neon/20">
                          <span className="text-[9px] font-bold text-neon">H</span>
                        </div>
                        <div>
                          <span className="text-xs font-bold text-foreground block leading-none">Hyperlocal</span>
                          <span className="text-[8px] text-neon">Live near you</span>
                        </div>
                      </div>
                    </div>

                    {/* Search bar */}
                    <div className="mx-5 rounded-xl bg-surface border border-border/50 p-3">
                      <div className="flex items-center gap-2">
                        <MapPin size={12} className="text-neon shrink-0" />
                        <span className="text-[10px] text-muted-foreground">
                          Search deals near Kothrud, Pune...
                        </span>
                      </div>
                    </div>

                    {/* Category pills */}
                    <div className="mt-3 px-5 flex gap-2 overflow-hidden">
                      {["All", "Grocery", "Laundry", "Electronics"].map((cat, i) => (
                        <span
                          key={cat}
                          className={`shrink-0 rounded-full px-3 py-1 text-[9px] font-medium ${
                            i === 0
                              ? "bg-neon text-background"
                              : "bg-surface border border-border/50 text-muted-foreground"
                          }`}
                        >
                          {cat}
                        </span>
                      ))}
                    </div>

                    {/* Offers */}
                    <div className="mt-3 space-y-2.5 px-5 pb-10">
                      <div className="text-[10px] font-bold text-foreground uppercase tracking-wider">
                        Live Near You
                      </div>
                      {[
                        {
                          name: "Fresh Mart Grocery",
                          offer: "20% off fruits & vegetables",
                          dist: "0.3 km",
                          live: true,
                          time: "Ends in 2h",
                        },
                        {
                          name: "QuickWash Laundry",
                          offer: "Buy 2 Get 1 Free",
                          dist: "0.5 km",
                          live: true,
                          time: "Ends in 4h",
                        },
                        {
                          name: "Kumar Electronics",
                          offer: "Flat 15% off accessories",
                          dist: "0.8 km",
                          live: false,
                          time: "Tomorrow",
                        },
                      ].map((item) => (
                        <div
                          key={item.name}
                          className="flex items-center gap-3 rounded-xl bg-surface border border-border/30 p-3 transition-colors hover:border-neon/20"
                        >
                          <div className="h-10 w-10 shrink-0 rounded-xl bg-neon/10 flex items-center justify-center">
                            <Zap size={14} className="text-neon" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-[10px] font-bold text-foreground">
                              {item.name}
                            </p>
                            <p className="text-[9px] text-neon font-medium">{item.offer}</p>
                            <p className="text-[8px] text-muted-foreground mt-0.5">{item.time}</p>
                          </div>
                          <div className="text-right shrink-0">
                            <p className="text-[9px] text-muted-foreground font-mono">
                              {item.dist}
                            </p>
                            {item.live && (
                              <div className="mt-0.5 flex items-center gap-1 justify-end">
                                <div className="h-1 w-1 rounded-full bg-neon animate-pulse" />
                                <span className="text-[8px] text-neon font-bold">LIVE</span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Home indicator */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 rounded-full bg-muted-foreground/30" />
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right content */}
          <div className="w-full max-w-2xl text-center lg:w-7/12 lg:max-w-none lg:text-left">
            <ScrollReveal>
              <div className="mb-6 inline-flex items-center justify-center gap-2 rounded-full border border-neon/20 bg-neon/5 px-4 py-1.5 lg:justify-start">
                <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse-neon" />
                <span className="text-xs font-semibold uppercase tracking-widest text-neon">
                  For Customers
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
                Find the Right Store.{" "}
                <span className="text-neon neon-text-glow">Right Now.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground lg:mx-0">
                Stop wasting time searching. Our AI instantly connects you with
                the best deals from stores in your neighborhood.
              </p>
            </ScrollReveal>

            <div className="mt-12 space-y-3 text-left">
              {features.map((feature, i) => (
                <ScrollReveal key={feature.title} delay={0.1 * (i + 3)}>
                  <div className="motion-panel group flex gap-5 rounded-2xl border border-transparent p-5 transition-all duration-300 hover:border-neon/20 hover:bg-surface/80">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-neon/10 text-neon transition-all duration-300 group-hover:bg-neon/20 group-hover:scale-110">
                      <feature.icon size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
