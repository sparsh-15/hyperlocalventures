import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="relative border-t border-border/10 bg-white overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-75 w-full max-w-4xl bg-primary/5 blur-[100px] rounded-full pointer-events-none opacity-50" />
      <div className="absolute top-0 left-0 h-px w-full bg-slate-200" />

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
                style={{ height: "56px", width: "auto" }}
              />
            </div>
            <p className="mt-4 text-sm font-semibold text-slate-700 leading-relaxed">
              Hyperlocal Ventures Private Limited
            </p>
            <p className="text-xs text-slate-500">Pune, Maharashtra, India</p>
            <a
              href="mailto:support@hyperlocalventure.in"
              className="mt-3 block text-sm font-bold text-neon hover:underline"
            >
              support@hyperlocalventure.in
            </a>
            <a
              href="https://zopin.in"
              className="mt-1 block text-sm font-semibold text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              zopin.in ↗
            </a>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:gap-12 lg:gap-24">
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900">Company</h4>
              <nav className="flex flex-col gap-2.5">
                {[
                  { label: "About Us", href: "/about" },
                  { label: "Ventures", href: "/ventures" },
                  { label: "Technology", href: "/technology" },
                  { label: "Leadership", href: "/leadership" },
                ].map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium text-slate-500 transition-colors duration-300 hover:text-primary hover:translate-x-1 inline-block transform"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900">Connect</h4>
              <nav className="flex flex-col gap-2.5">
                {[
                  { label: "Careers", href: "/careers" },
                  { label: "Contact Us", href: "/contact" },
                  { label: "Privacy Policy", href: "/privacy-policy" },
                ].map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium text-slate-500 transition-colors duration-300 hover:text-primary hover:translate-x-1 inline-block transform"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="col-span-2 sm:col-span-1 flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900">Venture</h4>
              <a
                href="https://zopin.in"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition-all hover:border-primary/30 hover:bg-white hover:shadow-md"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 overflow-hidden">
                  <Image src="/images/logo.svg" alt="Zopin" width={28} height={28} style={{ height: "28px", width: "28px", objectFit: "contain", mixBlendMode: "multiply" }} />
                </div>
                <div className="leading-tight">
                  <div className="text-xs font-bold text-slate-900">Zopin</div>
                  <div className="text-[10px] text-slate-400">AI-powered local commerce</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center gap-4 border-t border-slate-100 pt-8 md:flex-row md:justify-between">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.05em]">
            © {new Date().getFullYear()} Hyperlocal Ventures Private Limited.
          </p>
          <p className="text-[10px] text-slate-300 font-bold tracking-[0.2em] uppercase">
            Building the Future of AI-Powered Local Commerce
          </p>
        </div>
      </div>
    </footer>
  )
}
