"use client"

import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-70 flex h-11 w-11 items-center justify-center rounded-full border border-neon/60 bg-background/80 text-neon shadow-[0_0_24px_rgba(0,255,132,0.35)] backdrop-blur-md transition-all duration-300 hover:bg-neon hover:text-background hover:shadow-[0_0_36px_rgba(0,255,132,0.55)]"
      aria-label="Back to top"
    >
      <ChevronUp size={18} />
    </button>
  )
}

