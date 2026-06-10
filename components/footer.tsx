import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: "#1E0A3C" }}>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-75 w-full max-w-4xl bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 h-px w-full bg-white/10" />

      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="mb-4">
              <Image
                src="/images/hv.png"
                alt="Hyperlocalventures"
                width={180}
                height={56}
                style={{ height: "56px", width: "auto", mixBlendMode: "screen" }}
              />
            </div>
            <p className="mt-4 text-sm font-semibold text-white/80 leading-relaxed">
              Hyperlocal Ventures Private Limited
            </p>
            <p className="text-xs text-white/50">Pune, Maharashtra, India</p>
            <a
              href="mailto:support@hyperlocalventure.in"
              className="mt-3 block text-sm font-bold text-purple-300 hover:text-white transition-colors hover:underline"
            >
              support@hyperlocalventure.in
            </a>
            <a
              href="https://zopin.in"
              className="mt-1 block text-sm font-semibold text-purple-400 hover:text-white transition-colors hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              zopin.in ↗
            </a>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:gap-12 lg:gap-24">
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">Company</h4>
              <nav className="flex flex-col gap-2.5">
                {[
                  { label: "About Us", href: "/about" },
                  { label: "Ventures", href: "/ventures" },
                  { label: "Technology", href: "/technology" },
                ].map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">Connect</h4>
              <nav className="flex flex-col gap-2.5">
                {[
                  { label: "Careers", href: "/careers" },
                  { label: "Contact Us", href: "/contact" },
                  { label: "Privacy Policy", href: "/privacy-policy" },
                ].map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="col-span-2 sm:col-span-1 flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">Ventures</h4>
              <a
                href="https://zopin.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <Image src="/images/zopin.png" alt="Zopin" width={80} height={28} style={{ height: "28px", width: "auto" }} />
              </a>
              <p className="text-xs text-white/50">AI-powered local commerce</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center gap-4 border-t border-white/10 pt-8 md:flex-row md:justify-between">
          <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.05em]">
            © {new Date().getFullYear()} Hyperlocal Ventures Private Limited.
          </p>
          <p className="text-[10px] text-white/20 font-bold tracking-[0.2em] uppercase">
            Building the Future of AI-Powered Local Commerce
          </p>
        </div>
      </div>
    </footer>
  )
}
