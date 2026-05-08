"use client"

import { ScrollReveal } from "./scroll-reveal"
import {
  Megaphone,
  Eye,
  Store,
  Radio,
  Target,
  Landmark,
  TrendingUp,
  Users,
  BarChart3,
} from "lucide-react"

const features = [
  {
    icon: Megaphone,
    title: "Campaigning Platform",
    description: "Launch targeted campaigns for your store without the complexity of digital advertising.",
  },
  {
    icon: Eye,
    title: "Visibility for Hidden Gems",
    description: "Even the corner laundry or best local grocery gets discovered by the right customers.",
  },
  {
    icon: Store,
    title: "Shop-in-Shop Digital Presence",
    description: "A digital storefront that showcases your products, prices, and live offers to nearby customers.",
  },
  {
    icon: Radio,
    title: "Real-time Discount Broadcasting",
    description: "Broadcast your offers in real time to customers actively searching for deals nearby.",
  },
  {
    icon: Target,
    title: "AI Customer Targeting",
    description: "Machine learning engine that matches your store with the most likely-to-convert customers.",
  },
  {
    icon: Landmark,
    title: "Working Capital Loans",
    description: "Access to financial products that help you grow your business, enabled by your performance data.",
  },
]

function ShopkeeperDashboardMock() {
  return (
    <div className="motion-panel animate-float-strong rounded-2xl border border-border/40 bg-surface overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-border/30 px-5 py-3">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-lg bg-neon/20 flex items-center justify-center">
            <span className="text-[8px] font-bold text-neon">H</span>
          </div>
          <span className="text-xs font-bold text-foreground">Store Dashboard</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-2 w-2 rounded-full bg-neon animate-pulse" />
          <span className="text-[10px] text-neon font-semibold">LIVE</span>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-px bg-border/20">
        {[
          { label: "Views Today", value: "347", icon: Eye, change: "+18%" },
          { label: "Walk-ins", value: "23", icon: Users, change: "+42%" },
          { label: "Revenue", value: "12.4K", icon: TrendingUp, change: "+2X" },
        ].map((stat) => (
          <div key={stat.label} className="bg-surface p-4 text-center">
            <stat.icon size={14} className="mx-auto text-muted-foreground/50 mb-1" />
            <p className="text-lg font-bold text-foreground">{stat.value}</p>
            <p className="text-[9px] text-muted-foreground uppercase tracking-wider">{stat.label}</p>
            <span className="text-[9px] text-neon font-bold">{stat.change}</span>
          </div>
        ))}
      </div>

      {/* Campaign active */}
      <div className="p-4">
        <div className="rounded-xl bg-neon/5 border border-neon/15 p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Megaphone size={14} className="text-neon" />
              <span className="text-xs font-bold text-foreground">Active Campaign</span>
            </div>
            <span className="text-[9px] text-neon font-semibold px-2 py-0.5 rounded-full bg-neon/10">Running</span>
          </div>
          <p className="text-[11px] text-muted-foreground">{"20% off fresh fruits & vegetables"}</p>
          <div className="mt-3 flex items-center justify-between">
            <div>
              <p className="text-[9px] text-muted-foreground">Reach</p>
              <p className="text-xs font-bold text-foreground">2.4km radius</p>
            </div>
            <div>
              <p className="text-[9px] text-muted-foreground">Impressions</p>
              <p className="text-xs font-bold text-foreground">1,247</p>
            </div>
            <div>
              <p className="text-[9px] text-muted-foreground">Conversions</p>
              <p className="text-xs font-bold text-neon">23</p>
            </div>
          </div>
          {/* Progress bar */}
          <div className="mt-3 h-1.5 w-full rounded-full bg-border/50 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-neon to-neon-dim"
              style={{ width: "72%" }}
            />
          </div>
        </div>
      </div>

      {/* Mini chart */}
      <div className="px-4 pb-4">
        <div className="flex items-center gap-2 mb-2">
          <BarChart3 size={12} className="text-muted-foreground/50" />
          <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Weekly Footfall</span>
        </div>
        <div className="flex items-end gap-1.5 h-12">
          {[40, 55, 35, 70, 85, 60, 95].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-neon/20 transition-all duration-300 hover:bg-neon/40"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="flex justify-between mt-1">
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <span key={i} className="flex-1 text-center text-[8px] text-muted-foreground/40">{d}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ShopkeeperSection() {
  return (
    <section
      id="shopkeepers"
      className="section-shell relative overflow-hidden py-28 md:py-36 lg:py-44"
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(0,255,132,0.015) 30%, rgba(0,255,132,0.015) 70%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-start lg:gap-20">
          {/* Left content */}
          <div className="w-full max-w-2xl text-center lg:sticky lg:top-32 lg:w-5/12 lg:max-w-none lg:self-start lg:text-left">
            <ScrollReveal>
              <div className="mb-6 inline-flex items-center justify-center gap-2 rounded-full border border-neon/20 bg-neon/5 px-4 py-1.5 lg:justify-start">
                <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse-neon" />
                <span className="text-xs font-semibold uppercase tracking-widest text-neon">
                  For Shopkeepers
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Powering Every{" "}
                <span className="text-neon neon-text-glow">Local Business</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
                From corner stores to local service providers, our platform gives
                every small business the tools that were previously only
                available to large retailers and online marketplaces.
              </p>
            </ScrollReveal>

            {/* Dashboard mockup instead of image */}
            <ScrollReveal delay={0.3}>
              <div className="mt-10 hidden lg:block">
                <ShopkeeperDashboardMock />
              </div>
            </ScrollReveal>
          </div>

          {/* Right features grid */}
          <div className="w-full lg:w-7/12">
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature, i) => (
                <ScrollReveal key={feature.title} delay={0.08 * (i + 1)}>
                  <div className="motion-panel group relative h-full overflow-hidden rounded-2xl border border-border/50 bg-surface/80 p-7 backdrop-blur-sm transition-all duration-500 hover:border-neon/40">
                    {/* Hover glow */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none neon-border-glow" aria-hidden="true" />
                    {/* Hover gradient */}
                    <div
                      className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(circle at top left, rgba(0,255,132,0.05) 0%, transparent 60%)",
                      }}
                      aria-hidden="true"
                    />

                    <div className="relative">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-neon/10 text-neon transition-all duration-300 group-hover:bg-neon/20 group-hover:scale-110">
                        <feature.icon size={22} />
                      </div>
                      <h3 className="mt-5 text-base font-bold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
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
