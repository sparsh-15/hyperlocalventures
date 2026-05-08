"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ScrollReveal } from "./scroll-reveal"
import { Brain, MapPin, Clock, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

const aboutImages = [
  { src: "/images/shopkeeper.jpg", alt: "Local shopkeeper reviewing live offer performance" },
  { src: "/images/img21.png", alt: "Customer discovering local deals" },
  { src: "/images/img3.png", alt: "Partner shopkeeper growth" },
  { src:"/images/img4.png",alt: "Hyperlocal commerce" },
  { src: "/images/img5.png", alt: "Local commerce platform" },
]

const pillars = [
  {
    icon: Brain,
    title: "Real-time Offer Intelligence",
    description:
      "AI-driven discovery engine that surfaces the most relevant deals to customers in their vicinity, in real time.",
    metric: "< 100ms",
    metricLabel: "Response Time",
  },
  {
    icon: MapPin,
    title: "Pin-code Level Targeting",
    description:
      "Hyper-granular targeting that connects customers with stores in their immediate neighborhood, down to the pin code.",
    metric: "19,000+",
    metricLabel: "Pin Codes",
  },
  {
    icon: Clock,
    title: "Timing-based Deal Matching",
    description:
      "Intelligent matching of offers based on time sensitivity, customer intent, and proximity to maximize conversions.",
    metric: "2X",
    metricLabel: "Revenue Growth",
  },
]

export function AboutSection() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api])
  const scrollNext = useCallback(() => api?.scrollNext(), [api])

  useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => setCurrent(api.selectedScrollSnap()))
  }, [api])

  useEffect(() => {
    if (!api) return
    const interval = setInterval(() => api.scrollNext(), 2000)
    return () => clearInterval(interval)
  }, [api])

  return (
    <section
      id="about"
      className="section-shell relative overflow-hidden py-28 md:py-36 lg:py-44"
    >
      {/* Subtle gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(76,29,149,0.02) 50%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="lg:flex lg:items-center lg:gap-16">
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:flex-1 lg:text-left">
            <ScrollReveal>
              <div className="mb-6 inline-flex items-center justify-center gap-2 rounded-full border border-neon/20 bg-neon/5 px-4 py-1.5 lg:justify-start">
                <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse-neon" />
                <span className="text-xs font-semibold uppercase tracking-widest text-neon">
                  What We Are Building
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                ZoPin -
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-neon animate-gradient-x neon-text-glow">
                  An AI-Native Hyperlocal Commerce Platform
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground lg:mx-0">
                We are building an AI-native hyperlocal commerce platform that
                connects customers to the right nearby store in real time. Not
                ecommerce. Not a marketplace.{" "}
                <span className="text-foreground font-medium">A true intelligence layer.</span>
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.25}>
            <div className="mt-10 flex justify-center lg:mt-0 lg:flex-1">
              <div className="hero-media-card motion-panel relative w-full max-w-sm overflow-hidden rounded-2xl border border-border/50 bg-surface/80 backdrop-blur-sm">
                <Carousel
                  setApi={setApi}
                  opts={{
                    align: "start",
                    loop: true,
                    duration: 28,
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-0">
                    {aboutImages.map((img, index) => (
                      <CarouselItem key={img.src} className="pl-0">
                        <div className="relative aspect-[4/5] overflow-hidden">
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-cover transition-transform duration-500 ease-out"
                            sizes="(min-width: 1280px) 24vw, 60vw"
                            priority={index === 0}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <button
                    type="button"
                    onClick={scrollPrev}
                    className="absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border/60 bg-background/80 text-foreground shadow-md backdrop-blur-sm transition-colors hover:bg-neon/10 hover:border-neon/40 hover:text-neon"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={scrollNext}
                    className="absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border/60 bg-background/80 text-foreground shadow-md backdrop-blur-sm transition-colors hover:bg-neon/10 hover:border-neon/40 hover:text-neon"
                    aria-label="Next slide"
                  >
                    <ChevronRight size={20} />
                  </button>
                  <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
                    {aboutImages.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => api?.scrollTo(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          index === current
                            ? "w-6 bg-neon"
                            : "w-1.5 bg-white/40 hover:bg-white/60"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </Carousel>
                <div className="px-5 py-4">
                  <Image
                    src="/images/logo.svg"
                    alt="ZoPin Logo"
                    width={100}
                    height={32}
                    className="h-7 w-auto"
                  />
                  <p className="mt-2 text-sm font-semibold text-foreground">
                    Live view of offers and local demand
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Pillars */}
        <div className="mt-20 grid gap-6 md:grid-cols-3 md:mt-24">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={0.1 * (i + 3)}>
              <div className="motion-panel group relative h-full overflow-hidden rounded-2xl border border-border/50 bg-surface/80 p-8 backdrop-blur-sm transition-all duration-500 hover:border-neon/40">
                {/* Hover gradient */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at top left, rgba(76,29,149,0.06) 0%, transparent 60%)",
                  }}
                  aria-hidden="true"
                />

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none neon-border-glow" aria-hidden="true" />

                <div className="relative">
                  {/* Top row: icon + metric */}
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neon/10 text-neon transition-all duration-300 group-hover:bg-neon/20 group-hover:scale-105">
                      <pillar.icon size={28} />
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-neon">{pillar.metric}</p>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{pillar.metricLabel}</p>
                    </div>
                  </div>

                  <h3 className="mt-8 text-xl font-bold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Arrow */}
                  <div className="mt-6 flex items-center gap-1.5 text-neon/50 transition-colors group-hover:text-neon">
                    <span className="text-xs font-medium uppercase tracking-wider">Learn more</span>
                    <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Bottom glow line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-neon/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
