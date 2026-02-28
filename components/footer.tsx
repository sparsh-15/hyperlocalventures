import Image from "next/image"
import { Apple, Play } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative border-t border-border/30">
      {/* Neon top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 max-w-xl bg-linear-to-r from-transparent via-neon/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <div
                className="relative h-24 w-[260px] rounded-md overflow-visible flex items-center justify-start"
                // style={{ boxShadow: "0 0 20px rgba(255,255,255,0.4), 0 0 40px rgba(255,255,255,0.2)" }}
              >
                <Image
                  src="/images/logonew.png"
                  alt="Hyperlocal logo"
                  fill
                  className="object-contain object-left"
                  style={{ filter: "drop-shadow(0 0 8px rgba(255,255,255,0.8)) drop-shadow(0 0 20px rgba(255,255,255,0.5))" }}
                  sizes="260px"
                />
              </div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Hyperlocal Ventures Private Limited
            </p>
            <p className="mt-1 text-xs text-muted-foreground/60">
              Registered Address: Pune, Maharashtra, India
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-1 flex-col items-center gap-6 md:items-end">
            <nav className="flex flex-wrap items-center justify-center gap-6">
              {[
                { label: "About", href: "#about" },
                { label: "Proposition", href: "#problem" },
                { label: "Impact", href: "#impact" },
                { label: "Apply Loan", href: "/apply-loan" },
                { label: "Careers", href: "/careers" },
                { label: "Contact Us", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors duration-300 hover:text-neon"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Store badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
              <a
                href="#"
                className="group inline-flex items-center gap-3 rounded-2xl border border-neon/40 bg-neon/10 px-4 py-2 text-left text-xs uppercase tracking-[0.18em] text-neon transition-all duration-300 hover:bg-neon hover:text-background hover:shadow-[0_0_30px_rgba(0,255,132,0.45)]"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-background/90 text-neon group-hover:bg-background">
                  <Play size={16} />
                </div>
                <div className="leading-tight">
                  <div className="text-[10px] opacity-80">Get it on</div>
                  <div className="text-xs font-semibold">Google Play</div>
                </div>
              </a>
              <a
                href="#"
                className="group inline-flex items-center gap-3 rounded-2xl border border-border/60 bg-background/80 px-4 py-2 text-left text-xs uppercase tracking-[0.18em] text-muted-foreground transition-all duration-300 hover:border-neon/60 hover:text-neon hover:bg-surface/90 hover:shadow-[0_0_24px_rgba(0,255,132,0.35)]"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-surface text-muted-foreground group-hover:text-neon">
                  <Apple size={16} />
                </div>
                <div className="leading-tight">
                  <div className="text-[10px] opacity-80">Download on the</div>
                  <div className="text-xs font-semibold">App Store</div>
                </div>
              </a>
            </div>

            {/* Contact summary */}
            <div className="text-xs text-muted-foreground/70 space-y-1 text-center md:text-right">
              <p className="font-semibold tracking-widest uppercase text-muted-foreground">
                Contact
              </p>
              <p>Phone: <a href="tel:+918600154603" className="hover:text-neon transition-colors">+91 86001 54603</a></p>
              <p>
                Email:{" "}
                <a
                  href="mailto:support@hyperlocalventures.com"
                  title="Email Hyperlocal Ventures support"
                  target="_self"
                  rel="noopener"
                  className="hover:text-neon transition-colors"
                >
                  support@hyperlocalventures.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center gap-3 border-t border-border/20 pt-6 md:flex-row md:justify-between">
          <p className="text-xs text-muted-foreground/50">
            {new Date().getFullYear()} Hyperlocal Ventures Private Limited. All rights
            reserved.
          </p>
          <p className="text-xs text-muted-foreground/30 font-mono tracking-wider">
            THE INTELLIGENCE LAYER FOR LOCAL COMMERCE
          </p>
        </div>
      </div>
    </footer>
  )
}
