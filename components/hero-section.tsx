"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, ChevronDown, Store, Bot } from "lucide-react"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate-fade-in-up")
        })
      },
      { threshold: 0.1 }
    )
    const elements = sectionRef.current?.querySelectorAll("[data-animate]")
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="section-shell relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Floating context nodes — desktop only */}
      <div className="pointer-events-none absolute inset-0 z-[2] hidden lg:block" aria-hidden="true">
        <div className="hero-orbit hero-orbit-left -translate-y-3">
          <div className="flex flex-col items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/90 shadow-xl backdrop-blur-md border border-white/20 text-primary">
              <Store size={30} />
            </div>
            <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-neon/80">Merchants</p>
            <p className="mt-1 text-sm font-semibold text-foreground">Local businesses, empowered</p>
          </div>
        </div>
        <div className="hero-orbit hero-orbit-right -translate-y-50">
          <div className="flex flex-col items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/90 shadow-xl backdrop-blur-md border border-white/20 text-neon">
              <Bot size={30} />
            </div>
            <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-neon/80">AI Agents</p>
            <p className="mt-1 text-sm font-semibold text-foreground">Autonomous commerce intelligence</p>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 text-center mt-16 sm:px-6 sm:mt-20">

        {/* Badge */}
        <div
          data-animate
          className="mx-auto mb-8 inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 opacity-0"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">
            Hyperlocalventures — Founded 2026
          </span>
        </div>

        {/* Headline */}
        <h1
          data-animate
          className="text-2xl font-extrabold leading-[1.05] mt-4 tracking-tight text-foreground opacity-0 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[4.5rem]"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="block">BUILDING THE FUTURE OF</span>
          <span className="mt-1 block md:mt-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-neon to-accent">
              AI-POWERED LOCAL
            </span>
          </span>
          <span className="mt-1 block md:mt-2">COMMERCE</span>
        </h1>

        {/* Subtext */}
        <p
          data-animate
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground opacity-0 sm:mt-10 sm:text-lg"
          style={{ animationDelay: "0.5s" }}
        >
          Hyperlocalventures develops intelligent digital platforms that help
          businesses connect, engage, and grow within their local communities.
        </p>

        {/* CTAs */}
        <div
          data-animate
          className="mt-10 flex flex-col items-center gap-4 opacity-0 sm:flex-row sm:justify-center md:mt-14"
          style={{ animationDelay: "0.7s" }}
        >
          <Link
            href="/ventures"
            className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-neon px-10 py-4 text-sm font-bold tracking-wide text-white uppercase transition-all duration-300"
          >
            
            <span className="relative">Explore Our Ventures</span>
            <ArrowRight size={16} className="relative transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-10 py-4 text-sm font-bold tracking-wide text-primary uppercase transition-all duration-300 hover:border-primary/50 hover:bg-primary/10"
          >
            Contact Us
          </Link>
        </div>

        {/* Stats bar */}
        <div
          data-animate
          className="motion-panel mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/40 bg-border/20 opacity-0 sm:grid-cols-4 md:mt-28"
          style={{ animationDelay: "0.9s" }}
        >
          {[
            { value: "2026", label: "Founded" },
            { value: "1", label: "Live Product" },
            { value: "Mumbai & Pune", label: "Cities Targeted" },
            { value: "India-wide", label: "Vision" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/80 p-6 text-center backdrop-blur-sm transition-all duration-500 hover:bg-primary/5 md:p-8"
            >
              <p className="whitespace-nowrap text-base font-bold tracking-wide text-primary sm:text-lg">
                {stat.value}
              </p>
              <p className="mt-1.5 text-xs tracking-wider text-muted-foreground uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="animate-float absolute bottom-28 left-1/2 z-10 -translate-x-1/2">
        <a
          href="#mission"
          className="flex flex-col items-center gap-1 text-muted-foreground/50 transition-colors hover:text-primary"
          aria-label="Scroll down"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <ChevronDown size={16} />
        </a>
      </div>
    </section>
  )
}
