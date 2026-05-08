"use client"

import { useEffect, useRef, type ReactNode } from "react"

type AnimationVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "scale-up"
  | "scale-down"
  | "blur-in"
  | "rotate-in"

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  duration?: number
  variant?: AnimationVariant
  className?: string
  distance?: number
  once?: boolean
}

const variantStyles: Record<AnimationVariant, (distance: number) => string> = {
  "fade-up": (d) => `translate3d(0, ${d}px, 0)`,
  "fade-down": (d) => `translate3d(0, -${d}px, 0)`,
  "fade-left": (d) => `translate3d(${d}px, 0, 0)`,
  "fade-right": (d) => `translate3d(-${d}px, 0, 0)`,
  "scale-up": () => `scale(0.85)`,
  "scale-down": () => `scale(1.1)`,
  "blur-in": () => `translate3d(0, 20px, 0)`,
  "rotate-in": () => `rotate3d(1, 0, 0, 15deg) translate3d(0, 30px, 0)`,
}

export function ScrollReveal({
  children,
  delay = 0,
  duration = 1.05,
  variant = "fade-up",
  className = "",
  distance = 60,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      el.style.opacity = "1"
      el.style.transform = "none"
      el.style.filter = "none"
      return
    }

    const ease = "cubic-bezier(0.16, 1, 0.3, 1)"

    // Set initial hidden state
    el.style.opacity = "0"
    el.style.transform = variantStyles[variant](distance)
    el.style.transformOrigin = "50% 50%"
    if (variant === "blur-in") {
      el.style.filter = "blur(12px)"
    }
    el.style.transition = `opacity ${duration}s ${ease} ${delay}s, transform ${duration}s ${ease} ${delay}s, filter ${duration}s ${ease} ${delay}s`
    el.style.willChange = "opacity, transform, filter"

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1"
          el.style.transform = "translate3d(0, 0, 0) scale(1) rotate3d(0, 0, 0, 0deg)"
          if (variant === "blur-in") {
            el.style.filter = "blur(0px)"
          }
          if (once) {
            observer.unobserve(el)
            window.setTimeout(() => {
              el.style.willChange = "auto"
            }, (duration + delay) * 1000 + 120)
          }
        } else if (!once) {
          el.style.opacity = "0"
          el.style.transform = variantStyles[variant](distance)
          if (variant === "blur-in") {
            el.style.filter = "blur(12px)"
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -70px 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, duration, variant, distance, once])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
