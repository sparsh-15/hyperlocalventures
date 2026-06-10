import { ScrollReveal } from "@/components/scroll-reveal"

export default function PrivacyPolicyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden pt-24">
      <div className="relative z-10">
        <section className="section-shell relative overflow-hidden py-14 md:py-20">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at top, rgba(76,29,149,0.04) 0%, transparent 60%)" }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-3xl px-6">
            <ScrollReveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon/20 bg-neon/5 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-neon" />
                <span className="text-xs font-semibold uppercase tracking-widest text-neon">Legal</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Privacy Policy</h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-4 text-sm text-muted-foreground">Last updated: June 2026</p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-12 space-y-10 text-muted-foreground">
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-3">1. Introduction</h2>
                  <p className="leading-relaxed">
                    Hyperlocal Ventures Private Limited (&ldquo;Hyperlocalventures&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;)
                    is committed to protecting your personal information. This Privacy Policy explains how we
                    collect, use, disclose, and safeguard information when you visit our website or use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-3">2. Information We Collect</h2>
                  <p className="leading-relaxed">
                    We may collect information you provide directly to us, such as when you fill out a contact
                    form, subscribe to communications, or interact with our services. This may include your name,
                    email address, company name, and any message content you submit.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-3">3. How We Use Your Information</h2>
                  <p className="leading-relaxed">
                    We use the information we collect to respond to your inquiries, provide and improve our
                    services, communicate with you about our products and ventures, and comply with legal obligations.
                    We do not sell your personal information to third parties.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-3">4. Data Storage</h2>
                  <p className="leading-relaxed">
                    Information submitted through our contact forms is stored securely using Google Firebase
                    Firestore, hosted in accordance with applicable data protection standards. We retain data only
                    as long as necessary for the purposes stated in this policy.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-3">5. Cookies and Analytics</h2>
                  <p className="leading-relaxed">
                    We use basic analytics tools to understand how visitors interact with our website. These tools
                    may use cookies or similar tracking technologies. You can opt out of analytics tracking through
                    your browser settings.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-3">6. Your Rights</h2>
                  <p className="leading-relaxed">
                    You have the right to access, correct, or request deletion of your personal data. To exercise
                    these rights, please contact us at{" "}
                    <a href="mailto:support@hyperlocalventures.in" className="text-neon hover:underline">
                      support@hyperlocalventures.in
                    </a>.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-3">7. Contact</h2>
                  <p className="leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us at:<br />
                    <strong className="text-foreground">Hyperlocal Ventures Private Limited</strong><br />
                    Pune, Maharashtra, India<br />
                    <a href="mailto:support@hyperlocalventures.in" className="text-neon hover:underline">
                      support@hyperlocalventures.in
                    </a>
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </main>
  )
}
