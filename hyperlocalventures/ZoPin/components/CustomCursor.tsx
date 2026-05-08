"use client"

import React, { useEffect, useState } from "react"

const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setTargetPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }

    const handleLeave = () => {
      setVisible(false)
    }

    let rafId: number

    const animate = () => {
      setPos((current) => {
        const lerpFactor = 0.22
        const nextX = current.x + (targetPos.x - current.x) * lerpFactor
        const nextY = current.y + (targetPos.y - current.y) * lerpFactor
        return { x: nextX, y: nextY }
      })
      rafId = requestAnimationFrame(animate)
    }

    rafId = requestAnimationFrame(animate)

    window.addEventListener("mousemove", handleMove)
    window.addEventListener("mouseleave", handleLeave)

    return () => {
      window.removeEventListener("mousemove", handleMove)
      window.removeEventListener("mouseleave", handleLeave)
      cancelAnimationFrame(rafId)
    }
  }, [targetPos.x, targetPos.y])

  if (!visible) return null

  return (
    <div
      className="pointer-events-none fixed z-60"
      style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
    >
      <div className="relative -translate-x-1/2 -translate-y-1/2 will-change-transform">
        <div className="h-6 w-6 rounded-full border border-neon/70 bg-neon/25 shadow-[0_0_22px_rgba(0,255,132,0.5)]" />
        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon" />
      </div>
    </div>
  )
}

export default CustomCursor

