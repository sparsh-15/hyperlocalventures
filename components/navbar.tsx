"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X, ArrowRight } from "lucide-react"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Problem", href: "#problem" },
  { label: "Shopkeepers", href: "#shopkeepers" },
  { label: "Customers", href: "#customers" },
  { label: "Impact", href: "#impact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong py-3" : "py-5 bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#" className="group flex items-center">
          <div className="relative h-20 w-[210px] overflow-hidden rounded-md transition-all duration-300 sm:h-14 sm:w-[250px]">
            <Image
              src="/logobg.png"
              alt="Hyperlocal logo"
              fill
              className="scale-[1.25] object-contain object-left"
              sizes="(min-width: 640px) 250px, 210px"
              priority
            />
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors duration-300 hover:text-neon relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-neon after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-neon px-6 py-2.5 text-sm font-bold text-background transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,255,132,0.4)] hover:scale-[1.03]"
        >
          Partner With Us
          <ArrowRight size={14} />
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground lg:hidden p-1"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="glass-strong mt-3 mx-4 rounded-2xl p-6 lg:hidden border border-neon/10">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base text-muted-foreground transition-colors hover:text-neon py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-neon px-6 py-3 text-sm font-bold text-background"
            >
              Partner With Us
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
