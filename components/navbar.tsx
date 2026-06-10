"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "About Us", href: "/about" },
  {
    label: "Ventures",
    href: "/ventures",
    children: [{ label: "Zopin", href: "/ventures" }],
  },
  { label: "Technology", href: "/technology" },
  { label: "Leadership", href: "/leadership" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [venturesOpen, setVenturesOpen] = useState(false);
  const venturesRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!venturesOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (venturesRef.current && !venturesRef.current.contains(e.target as Node)) {
        setVenturesOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [venturesOpen]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-none bg-white shadow-sm py-2"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex min-w-0 shrink-0 items-center" aria-label="Hyperlocalventures home">
          <Image
            src="/images/hv.png"
            alt="Hyperlocalventures"
            width={165}
            height={48}
            style={{ height: "48px", width: "auto" }}
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative" ref={venturesRef}>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setVenturesOpen((v) => !v); }}
                  className={`inline-flex items-center gap-1 text-sm font-medium transition-colors duration-300 hover:text-primary ${
                    venturesOpen || pathname.startsWith(link.href) ? "text-primary" : "text-muted-foreground"
                  }`}
                  aria-haspopup="true"
                  aria-expanded={venturesOpen}
                >
                  <span>{link.label}</span>
                  <ChevronDown size={14} className={`transition-transform ${venturesOpen ? "rotate-180" : ""}`} />
                </button>
                {venturesOpen && (
                  <div className="absolute left-0 top-full z-50 mt-1.5 w-44">
                    <div className="rounded-2xl border border-primary/10 bg-white/95 p-2 shadow-xl backdrop-blur-md">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setVenturesOpen(false)}
                          className="flex items-center rounded-xl px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-primary/5 hover:text-primary"
                        >
                          <Image src="/images/logo.svg" alt="Zopin" width={18} height={18} style={{ height: "18px", width: "auto", mixBlendMode: "multiply" }} />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
                  pathname === link.href
                    ? "text-primary after:w-full"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-neon px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(217,70,239,0.4)] hover:scale-[1.03]"
        >
          Contact Us
          <ArrowRight size={14} />
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="text-foreground lg:hidden p-1"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-black/40 lg:hidden" aria-hidden="true" />
          <div className="glass-strong-mobile mt-3 mx-4 rounded-2xl p-6 lg:hidden border border-neon/10 relative z-50">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="flex flex-col gap-1.5">
                    <span className="text-sm font-semibold text-foreground">{link.label}</span>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="pl-4 text-base text-muted-foreground transition-colors hover:text-primary"
                      >
                        └── {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-base transition-colors hover:text-primary py-1 ${
                      pathname === link.href ? "text-primary font-semibold" : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="mt-2 h-px bg-border/40" />
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-neon px-6 py-3 text-sm font-bold text-white shadow-lg shadow-neon/20"
              >
                Contact Us
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
