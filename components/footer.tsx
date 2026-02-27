import Image from "next/image"

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
              <div className="relative h-24 w-[260px] overflow-hidden rounded-md">
                <Image
                  src="/logobg.png"
                  alt="Hyperlocal logo"
                  fill
                  className="object-contain object-left"
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

            {/* Contact summary */}
            <div className="text-xs text-muted-foreground/70 space-y-1 text-center md:text-right">
              <p className="font-semibold tracking-widest uppercase text-muted-foreground">
                Contact
              </p>
              <p>Phone: <a href="tel:+918600154603" className="hover:text-neon transition-colors">+91 86001 54603</a></p>
              <p>
                Email:{" "}
                <a
                  href="mailto:hyperlocalventurespvtltd@outlook.com"
                  className="hover:text-neon transition-colors"
                >
                  hyperlocalventurespvtltd@outlook.com
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
