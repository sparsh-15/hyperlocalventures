"use client"

import { type ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  duration?: number
  variant?: string
  className?: string
  distance?: number
  once?: boolean
}

export function ScrollReveal({ children, className = "" }: ScrollRevealProps) {
  return <div className={className}>{children}</div>
}
