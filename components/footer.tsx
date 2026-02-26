import Image from "next/image"

export function Footer() {
  return (
    <footer className="relative border-t border-border/30">
      {/* Neon top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 max-w-xl bg-gradient-to-r from-transparent via-neon/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <div className="relative h-32 w-[400px] overflow-hidden rounded-md">
                <Image
                  src="/logobg.png"
                  alt="Hyperlocal logo"
                  fill
                  className="scale-[1.22] object-contain object-left"
                  sizes="230px"
                />
              </div>
            </div>
            <p className=" text-sm text-muted-foreground">
              Hyperlocal Ventures Private Limited
            </p>
            <p className="mt-1 text-xs text-muted-foreground/60">
              Registered Address: Pune, Maharashtra, India
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              { label: "About", href: "#about" },
              { label: "Problem", href: "#problem" },
              { label: "Shopkeepers", href: "#shopkeepers" },
              { label: "Customers", href: "#customers" },
              { label: "Impact", href: "#impact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors duration-300 hover:text-neon"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center gap-3 border-t border-border/20 pt-8 md:flex-row md:justify-between">
          <p className="text-xs text-muted-foreground/50">
            {new Date().getFullYear()} Hyperlocal Ventures Private Limited. All
            rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/30 font-mono tracking-wider">
            THE INTELLIGENCE LAYER FOR LOCAL COMMERCE
          </p>
        </div>
      </div>
    </footer>
  )
}
