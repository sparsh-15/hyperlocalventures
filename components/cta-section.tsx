"use client"

import { ScrollReveal } from "./scroll-reveal"
import { ArrowRight, Phone, Mail } from "lucide-react"

export function CTASection() {
  return (
    <section
      id="contact"
      className="section-shell relative overflow-hidden py-28 md:py-36 lg:py-44"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,255,132,0.08) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* Side glows */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,255,132,0.2) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,255,132,0.2) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-neon/20 bg-neon/5 px-4 py-1.5 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse-neon" />
            <span className="text-xs font-semibold uppercase tracking-widest text-neon">
              Contact Us
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Partner with{" "}
            <span className="text-neon neon-text-glow">MyOffers</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Whether you&apos;re a business owner, customer, or self-service agent,
            we&apos;d love to hear from you. Share your details and our team will
            get in touch.
          </p>
        </ScrollReveal>

        {/* Contact & form */}
        <div className="mt-12 grid gap-8 text-left md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)]">
          {/* Contact details */}
          <ScrollReveal delay={0.3}>
            <div className="motion-panel rounded-2xl border border-border/60 bg-surface/80 p-6 backdrop-blur-sm">
              <h3 className="text-base font-semibold text-foreground">
                Contact Us
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Reach out directly or use the form alongside to share your interest.
              </p>

              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neon/10 text-neon">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Phone
                    </p>
                    <a
                      href="tel:+918600154603"
                      className="text-sm text-foreground hover:text-neon transition-colors"
                    >
                      +91 86001 54603
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neon/10 text-neon">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Email
                    </p>
                    <a
                      href="mailto:hyperlocalventurespvtltd@outlook.com"
                      className="text-sm text-foreground hover:text-neon transition-colors break-all"
                    >
                      hyperlocalventurespvtltd@outlook.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact form */}
          <ScrollReveal delay={0.35}>
            <form
              id="contact-form"
              className="motion-panel rounded-2xl border border-border/60 bg-surface/80 p-6 backdrop-blur-sm space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    className="h-10 rounded-lg border border-border/60 bg-background/60 px-3 text-sm text-foreground outline-none transition-colors focus:border-neon"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="h-10 rounded-lg border border-border/60 bg-background/60 px-3 text-sm text-foreground outline-none transition-colors focus:border-neon"
                    placeholder="10-digit mobile number"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  City Pin Code
                </label>
                <input
                  type="text"
                  className="h-10 rounded-lg border border-border/60 bg-background/60 px-3 text-sm text-foreground outline-none transition-colors focus:border-neon"
                  placeholder="e.g. 411038"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  I am a
                </p>
                <div className="grid gap-2 sm:grid-cols-3">
                  {[
                    "Business Owner",
                    "Customer",
                    "Self Service Agent",
                  ].map((role) => (
                    <label
                      key={role}
                      className="flex cursor-pointer items-center justify-center rounded-full border border-border/60 bg-background/40 px-3 py-2 text-xs font-medium text-muted-foreground transition-all hover:border-neon/60 hover:text-neon"
                    >
                      <input
                        type="radio"
                        name="role"
                        value={role}
                        className="sr-only"
                      />
                      {role}
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-neon px-6 py-3 text-sm font-bold uppercase tracking-wide text-background transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(0,255,132,0.45)]"
              >
                Partner With Us
                <ArrowRight size={16} />
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
