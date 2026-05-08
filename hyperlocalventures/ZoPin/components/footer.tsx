import Image from "next/image"
import { Apple, Play } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative border-t border-border/10 bg-white overflow-hidden">
      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[300px] w-full max-w-4xl bg-primary/5 blur-[100px] rounded-full pointer-events-none opacity-50" />
      
      {/* Divider */}
      <div className="absolute top-0 left-0 h-px w-full bg-slate-200" />

      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Image
                src="/images/logo.svg"
                alt="ZoPin Logo"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <p className="mt-4 text-[11px] font-medium uppercase tracking-widest text-slate-500 leading-relaxed">
              Hyperlocal Ventures Private Limited<br />
              Pune, Maharashtra, India
            </p>
            <a 
              href="https://zopin.in" 
              className="mt-4 block text-sm font-bold text-neon hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              zopin.in
            </a>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:gap-12 lg:gap-24">
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900">Platform</h4>
              <nav className="flex flex-col gap-2.5">
                {[
                  { label: "About", href: "#about" },
                  { label: "Impact", href: "#impact" },
                  { label: "Apply Loan", href: "/apply-loan" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium text-slate-500 transition-colors duration-300 hover:text-primary hover:translate-x-1 inline-block transform"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900">Company</h4>
              <nav className="flex flex-col gap-2.5">
                {[
                  { label: "Careers", href: "/careers" },
                  { label: "Contact Us", href: "#contact" },
                  { label: "Privacy Policy", href: "#" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium text-slate-500 transition-colors duration-300 hover:text-primary hover:translate-x-1 inline-block transform"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="col-span-2 sm:col-span-1 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900">Get the App</h4>
                <div className="flex flex-col gap-3">
                  <a
                    href="#"
                    className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 transition-all hover:border-primary/30 hover:bg-white hover:shadow-md"
                  >
                    <Play size={18} className="text-slate-400 group-hover:text-primary" />
                    <div className="leading-tight">
                      <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Android</div>
                      <div className="text-xs font-bold text-slate-900">Play Store</div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 transition-all hover:border-primary/30 hover:bg-white hover:shadow-md"
                  >
                    <Apple size={18} className="text-slate-400 group-hover:text-primary" />
                    <div className="leading-tight">
                      <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400">iOS</div>
                      <div className="text-xs font-bold text-slate-900">App Store</div>
                    </div>
                  </a>
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900">Contact</h4>
                <div className="space-y-1">
                  <a href="tel:+918600154603" className="block text-sm font-medium text-slate-600 hover:text-primary">+91 86001 54603</a>
                  <a href="mailto:support@zopin.in" className="block text-sm font-medium text-slate-600 hover:text-primary">support@zopin.in</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center gap-4 border-t border-slate-100 pt-8 md:flex-row md:justify-between">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.05em]">
            © {new Date().getFullYear()} Hyperlocal Ventures Private Limited.
          </p>
          <div className="hidden h-px w-8 bg-slate-200 md:block md:h-3 md:w-px" />
          <p className="text-[10px] text-slate-300 font-bold tracking-[0.2em] uppercase">
            THE INTELLIGENCE LAYER FOR LOCAL COMMERCE
          </p>
        </div>
      </div>
    </footer>
  )
}
