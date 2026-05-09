"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
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

      <div className="relative z-10 mx-auto max-w-6xl px-4 text-center mt-16 sm:px-6 sm:mt-20">


        {/* Headline */}
        <h1
          data-animate
          className="text-2xl font-extrabold leading-[1.05] mt-8 tracking-tight text-foreground opacity-0 sm:text-3xl sm:mt-5 md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[4.5rem]"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="block">THE INTELLIGENCE</span>
          <span className="mt-1 block md:mt-2">
            LAYER FOR <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-neon to-accent animate-gradient-x">LOCAL</span>
          </span>
          <span className="mt-1 block md:mt-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-neon to-primary animate-gradient-x">COMMERCE</span>
          </span>
        </h1>

        {/* Subtext */}
        <div
          data-animate
          className="mx-auto mt-6 max-w-2xl px-1 text-base leading-snug text-muted-foreground opacity-0 sm:mt-8 sm:text-lg md:mt-10"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <div className="flex items-center gap-2">
              <span className="font-bold text-primary">Buy Local. Save More.</span>
              <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse" />
            </div>
            <p className="text-sm sm:text-base">
              The intelligence layer for hyperlocal commerce.
            </p>
          </div>
          <hr className="my-4 border-border/40" />
          <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="text-left sm:text-center">
              <span className="font-bold text-primary block mb-1">For Business</span>
              <p className="text-[11px] leading-tight opacity-80">Smart Offers 🎯 | Area Targeting 📍 | Boost Sales 📈</p>
            </div>
            <div className="text-left sm:text-center border-l border-border/40 pl-4 sm:border-none sm:pl-0">
              <span className="font-bold text-primary block mb-1">For Customers</span>
              <p className="text-[11px] leading-tight opacity-80">Discover Deals 💰 | Easy Delivery 🚚 | Shop Smart 🎉</p>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Visual */}
        <div
          data-animate
          className="relative mt-12 block lg:hidden opacity-0"
          style={{ animationDelay: "1.1s" }}
        >
          <div className="relative mx-auto w-full max-w-[280px]">
            {/* Floating 3D Elements for "Enhancement" */}
            <div className="absolute -left-8 top-10 z-20 animate-float-strong" style={{ animationDelay: "0.2s" }}>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/90 shadow-xl backdrop-blur-md border border-white/20">
                <span className="text-2xl">📦</span>
              </div>
            </div>
            <div className="absolute -right-6 top-40 z-20 animate-float-strong-reverse" style={{ animationDelay: "0.5s" }}>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 shadow-xl backdrop-blur-md border border-white/20">
                <span className="text-2xl">👟</span>
              </div>
            </div>
            <div className="absolute -left-4 bottom-20 z-20 animate-float-strong" style={{ animationDelay: "0.8s" }}>
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/90 shadow-xl backdrop-blur-md border border-white/20">
                <span className="text-xl">🥤</span>
              </div>
            </div>

            {/* Phone Mockup Frame */}
            <div className="relative rounded-[2.5rem] border-4 border-foreground/10 bg-foreground/5 p-2.5 shadow-2xl">
              <div className="absolute left-1/2 top-0 z-30 h-6 w-24 -translate-x-1/2 rounded-b-xl bg-foreground/10" />
              <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-background">
                <Image
                  src="/images/zopin-mobile-hero.png"
                  alt="ZoPin Mobile App Interface"
                  width={280}
                  height={560}
                  className="w-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Glow effect behind phone */}
            <div className="absolute inset-0 -z-10 bg-primary/20 blur-[60px] rounded-full" />
          </div>
        </div>

        {/* CTAs */}
        <div
          data-animate
          className="mt-10 flex flex-col items-center gap-4 opacity-0 sm:flex-row sm:justify-center md:mt-14"
          style={{ animationDelay: "0.7s" }}
        >
          <a
            href="#about"
            className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-neon px-10 py-4 text-sm font-bold tracking-wide text-white uppercase transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(217,70,239,0.5)]"
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
            className="flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-10 py-4 text-sm font-bold tracking-wide text-primary uppercase transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(76,29,149,0.15)]"
          >
            Partner With Us
          </a>

        </div>

        {/* Badge */}
        <div
          data-animate
          className="mx-auto mt-10 mb-8 inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 opacity-0"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="relative flex h-2 w-2 ">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="text-xs font-semibold tracking-widest text-primary uppercase ">
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
            { value: "ZoPin", label: "Pin-code Targeting" },
            { value: "Real-time", label: "Offer Intelligence" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/80 p-6 text-center backdrop-blur-sm transition-all duration-500 hover:bg-primary/5 md:p-8"
            >
              <p className="whitespace-nowrap text-base font-bold tracking-wide text-primary sm:text-lg md:text-xl">
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
          href="#about"
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
