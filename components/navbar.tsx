"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const navLinks: NavItem[] = [
  { label: "About", href: "#about" },
  {
    label: "Proposition",
    href: "#problem",
    children: [
      { label: "What we are Solving", href: "#problem" },
      { label: "For Shopkeepers", href: "#shopkeepers" },
      { label: "For Customers", href: "#customers" },
    ],
  },
  { label: "Impact", href: "#impact" },
  { label: "Apply Loan", href: "/apply-loan" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [propositionOpen, setPropositionOpen] = useState(false);
  const propositionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!propositionOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (propositionRef.current && !propositionRef.current.contains(e.target as Node)) {
        setPropositionOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [propositionOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong py-2" : "py-3 bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Logo - responsive alignment */}
        <a
          href="#"
          className="flex min-w-0 shrink-0 flex-col items-start justify-center sm:items-center"
          aria-label="Hyperlocal home"
        >
          <div className="relative h-12 w-28 sm:h-16 sm:w-24 flex items-center justify-center shrink-0">
            <Image
              src="/images/logonew.png"
              alt="Hyperlocal logo"
              fill
              className="object-contain object-left sm:object-center"
              style={{ filter: "drop-shadow(0 0 8px rgba(255,255,255,0.8)) drop-shadow(0 0 20px rgba(255,255,255,0.5))" }}
              sizes="(max-width: 640px) 140px, 360px"
              priority
            />
          </div>
          <p className="mt-0.5 text-[9px] sm:text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground/80 sm:text-center">
            Shop nearby. Save big.
          </p>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative" ref={propositionRef}>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setPropositionOpen((prev) => !prev);
                  }}
                  className={`inline-flex items-center gap-1 text-sm transition-colors duration-300 hover:text-neon ${
                    propositionOpen ? "text-neon" : "text-muted-foreground"
                  }`}
                  aria-haspopup="true"
                  aria-expanded={propositionOpen}
                >
                  <span>{link.label}</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${propositionOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {propositionOpen && (
                  <div className="absolute left-0 top-full z-50 mt-1.5 w-56">
                    <div className="glass-strong rounded-2xl border border-neon/10 bg-background/95 p-3 shadow-xl backdrop-blur-md">
                      {link.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          onClick={() => setPropositionOpen(false)}
                          className="flex items-center rounded-xl px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-neon/5 hover:text-neon"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors duration-300 hover:text-neon relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-neon after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            )
          )}
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
        {mobileOpen ? (
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-foreground lg:hidden p-1"
            aria-label="Close menu"
            aria-expanded="true"
          >
            <X size={24} />
          </button>
        ) : (
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-foreground lg:hidden p-1"
            aria-label="Open menu"
            aria-expanded="false"
          >
            <Menu size={24} />
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="glass-strong mt-3 mx-4 rounded-2xl p-6 lg:hidden border border-neon/10">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-foreground">{link.label}</span>
                  {link.children.map((child) => (
                    <a
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="pl-3 text-base text-muted-foreground transition-colors hover:text-neon"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base text-muted-foreground transition-colors hover:text-neon py-1"
                >
                  {link.label}
                </a>
              )
            )}
            <div className="mt-2 h-px bg-linear-to-r from-transparent via-border to-transparent" />
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
  );
}
