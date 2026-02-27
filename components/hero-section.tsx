"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { ParticleGrid } from "./particle-grid"
import { ArrowRight, ChevronDown } from "lucide-react"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
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
      <ParticleGrid />

      {/* Large radial glow */}
      <div
        className="absolute left-1/2 top-[36%] h-[920px] w-[920px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,132,0.1) 0%, rgba(0,255,132,0.03) 32%, transparent 72%)",
        }}
        aria-hidden="true"
      />

      {/* Secondary glow bottom */}
      <div
        className="absolute bottom-0 left-1/2 h-[360px] w-[760px] -translate-x-1/2 rounded-full opacity-14 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(0,255,132,0.06) 0%, transparent 72%)",
        }}
        aria-hidden="true"
      />

      {/* Large moving media visuals */}
      <div
        className="pointer-events-none absolute inset-0 z-[2] hidden lg:block"
        aria-hidden="true"
      >
        <div className="hero-orbit hero-orbit-left -translate-y-3">
          <div className="flex flex-col items-center animate-float-strong-reverse">
            <div className="relative mx-auto aspect-square w-56 overflow-hidden rounded-full border border-border/40">
              <Image
                src="/images/customer-discovery.jpg"
                alt=""
                fill
                className="animate-media-pan object-cover"
                sizes="(min-width: 1280px) 20vw, 0px"
                priority
              />
            </div>
            <div className="mt-3 text-center">
              <p className="text-[10px] uppercase tracking-[0.18em] text-neon/80">
                Customer Discovery
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground">
                Proximity-led offer matching in real time
              </p>
            </div>
          </div>
        </div>

        <div className="hero-orbit hero-orbit-right -translate-y-50">
          <div className="flex flex-col items-center animate-float-strong">
            <div className="relative mx-auto aspect-square w-56 overflow-hidden rounded-full border border-border/40">
              <Image
                src="/images/f-shopkeeper.png"
                alt=""
                fill
                className="animate-media-pan object-cover"
                sizes="(min-width: 1280px) 20vw, 0px"
                priority
              />
            </div>
            <div className="mt-3 text-center">
              <p className="text-[10px] uppercase tracking-[0.18em] text-neon/80">
                Partner Growth
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground">
                Turning local offers into loyal customers
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center mt-20">
      

        {/* Headline */}
        <h1
          data-animate
          className="text-5xl font-bold leading-[1.05] mt-5 tracking-tight text-foreground opacity-0 sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem]"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="block">THE INTELLIGENCE</span>
          <span className="mt-1 block md:mt-2">
            LAYER FOR <span className="neon-text-glow text-neon">LOCAL</span>
          </span>
          <span className="mt-1 block md:mt-2">
            <span className="neon-text-glow text-neon">COMMERCE</span>
            <span className="text-neon">.</span>
          </span>
        </h1>

        {/* Subtext */}
        <p
          data-animate
          className="mx-auto mt-8 max-w-2xl text-lg leading-snug text-muted-foreground opacity-0 sm:text-lg md:mt-10"
          style={{ animationDelay: "0.5s" }}
        >
          Connect with your customers with precision and impact. 
          ✨ Launch Discounts/Offers, showcase New Arrivals, Free Home Delivery etc. — all in just a few clicks. Target by Pincode, City, State, or Pan India and elevate your outreach effortlessly. 🚀
        </p>

        {/* CTAs */}
        <div
          data-animate
          className="mt-10 flex flex-col items-center gap-4 opacity-0 sm:flex-row sm:justify-center md:mt-14"
          style={{ animationDelay: "0.7s" }}
        >
          <a
            href="#about"
            className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-neon px-10 py-4 text-sm font-bold tracking-wide text-background uppercase transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(0,255,132,0.5)]"
          >
            <span className="animate-shimmer pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <span className="relative">Explore the Platform</span>
            <ArrowRight
              size={16}
              className="relative transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full border border-neon/25 bg-neon/5 px-10 py-4 text-sm font-bold tracking-wide text-neon uppercase transition-all duration-300 hover:border-neon/50 hover:bg-neon/10 hover:shadow-[0_0_20px_rgba(0,255,132,0.15)]"
          >
            Partner With Us
          </a>

        </div>

          {/* Badge */}
        <div
          data-animate
          className="mx-auto mt-10 mb-8 inline-flex items-center gap-2.5 rounded-full border border-neon/20 bg-neon/5 px-5 py-2 opacity-0"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="relative flex h-2 w-2 ">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-neon" />
          </span>
          <span className="text-xs font-semibold tracking-widest text-neon uppercase ">
            AI-Native Commerce Intelligence
          </span>
        </div>

        {/* Stats bar */}
        <div
          data-animate
          className="motion-panel mx-auto mt-20 grid max-w-4xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border/40 bg-border/20 opacity-0 md:mt-28"
          style={{ animationDelay: "0.9s" }}
        >
          {[
            { value: "AI-Native", label: "Commerce Platform" },
            { value: "Hyperlocal", label: "Pin-code Targeting" },
            { value: "Real-time", label: "Offer Intelligence" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-surface/80 p-6 text-center backdrop-blur-sm transition-all duration-500 hover:bg-neon/5 md:p-8"
            >
              <p className="text-base font-bold tracking-wide text-neon sm:text-lg md:text-xl">
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
      <div className="animate-float absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <a
          href="#about"
          className="flex flex-col items-center gap-1 text-muted-foreground/50 transition-colors hover:text-neon"
          aria-label="Scroll down"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <ChevronDown size={16} />
        </a>
      </div>
    </section>
  )
}
