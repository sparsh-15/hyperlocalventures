"use client"

import { useState } from "react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ArrowRight, Mail, MapPin, CheckCircle } from "lucide-react"
import Image from "next/image"
import { addContactSubmission } from "@/lib/firbase"

const INQUIRY_TYPES = [
  { value: "Partnership", description: "Explore commercial or product partnerships" },
  { value: "Investor Relations", description: "Investment and funding discussions" },
  { value: "Media", description: "Press, interviews, and media requests" },
  { value: "Careers", description: "Joining the team" },
  { value: "General Enquiries", description: "Anything else" },
]

function validateForm(data: { name: string; email: string; inquiryType: string; message: string }) {
  if (!data.name.trim() || data.name.trim().length < 2) return "Name must be at least 2 characters"
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) return "Please enter a valid email address"
  if (!data.inquiryType) return "Please select an inquiry type"
  if (!data.message.trim() || data.message.trim().length < 10) return "Message must be at least 10 characters"
  return null
}

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [inquiryType, setInquiryType] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitError("")
    const error = validateForm({ name, email, inquiryType, message })
    if (error) { setSubmitError(error); return }
    setIsSubmitting(true)
    try {
      await Promise.race([
        addContactSubmission({ name: name.trim(), email: email.trim(), company: company.trim(), type: inquiryType, phone: "", pincode: "", message: message.trim() }),
        new Promise<never>((_, reject) => setTimeout(() => reject(new Error("timeout")), 15000)),
      ])
      setSubmitSuccess(true)
      setName(""); setEmail(""); setCompany(""); setInquiryType(""); setMessage("")
    } catch (err: unknown) {
      setSubmitError(String(err).toLowerCase().includes("timeout") ? "Submission timed out. Please try again." : "Failed to submit. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden pt-24">
      <div className="relative z-10">

        {/* Header */}
        <section className="section-shell relative overflow-hidden py-14 md:py-20">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at top, rgba(76,29,149,0.06) 0%, transparent 60%)" }} aria-hidden="true" />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <ScrollReveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon/20 bg-neon/5 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-neon" />
                <span className="text-xs font-semibold uppercase tracking-widest text-neon">Contact Us</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Let&apos;s{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-neon">Connect</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Whether you&apos;re a potential partner, investor, journalist, or just curious about what we&apos;re building — we&apos;d love to hear from you.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <div className="relative mx-auto w-full max-w-7xl px-6" aria-hidden="true">
          <div className="h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent" />
        </div>

        {/* Inquiry type cards + form */}
        <section className="section-shell relative overflow-hidden py-14 md:py-20">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(76,29,149,0.05) 0%, transparent 60%)" }} aria-hidden="true" />
          <div className="relative mx-auto max-w-6xl px-6">

            {/* Inquiry type cards */}
            <ScrollReveal>
              <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {INQUIRY_TYPES.map((type) => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => setInquiryType(type.value)}
                    className={`motion-panel group relative overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300 ${inquiryType === type.value ? "border-neon bg-neon/10" : "border-border/50 bg-surface/80 hover:border-neon/40"}`}
                  >
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" style={{ background: "radial-gradient(circle at top left, rgba(76,29,149,0.06) 0%, transparent 60%)" }} aria-hidden="true" />
                    <div className="relative">
                      <p className={`text-sm font-bold ${inquiryType === type.value ? "text-neon" : "text-foreground"}`}>{type.value}</p>
                      <p className="mt-1 text-xs text-muted-foreground leading-snug">{type.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </ScrollReveal>

            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]">
              {/* Contact info */}
              <ScrollReveal delay={0.1}>
                <div className="space-y-6">
                  <div className="motion-panel rounded-2xl border border-border/50 bg-surface/80 p-6 backdrop-blur-sm">
                    <h2 className="text-lg font-bold text-foreground mb-4">Reach Us Directly</h2>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neon/10 text-neon">
                          <Mail size={16} />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">General</p>
                          <a href="mailto:support@hyperlocalventure.in" className="text-sm text-foreground hover:text-neon transition-colors">support@hyperlocalventure.in</a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neon/10 text-neon">
                          <Mail size={16} />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Careers</p>
                          <a href="mailto:careers@hyperlocalventures.com" className="text-sm text-foreground hover:text-neon transition-colors">careers@hyperlocalventures.com</a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neon/10 text-neon">
                          <MapPin size={16} />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Location</p>
                          <p className="text-sm text-foreground">Pune, Maharashtra, India</p>
                          <p className="text-xs text-muted-foreground mt-0.5">Mumbai operations launching soon</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="motion-panel rounded-2xl border border-border/50 bg-surface/80 p-6 backdrop-blur-sm">
                    <h3 className="text-sm font-bold text-foreground mb-3">Our Venture</h3>
                    <a href="https://zopin.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <Image src="/images/logo.svg" alt="Zopin" width={28} height={28} style={{ height: "28px", width: "28px", objectFit: "contain", mixBlendMode: "multiply" }} />
                      <div>
                        <p className="font-semibold text-foreground">Zopin</p>
                        <p className="text-xs text-muted-foreground">zopin.in ↗</p>
                      </div>
                    </a>
                    <div className="mt-4 flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neon/10 text-neon">
                        <Mail size={16} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Zopin Support</p>
                        <a href="mailto:support@hyperlocalventure.in" className="text-sm text-foreground hover:text-neon transition-colors">support@hyperlocalventure.in</a>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Form */}
              <ScrollReveal delay={0.2}>
                {submitSuccess ? (
                  <div className="motion-panel rounded-2xl border border-neon/40 bg-neon/10 p-10 backdrop-blur-sm text-center">
                    <div className="flex flex-col items-center gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neon/20 text-neon">
                        <CheckCircle size={36} />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">Message Sent!</h3>
                      <p className="text-base text-muted-foreground max-w-sm">Thank you for reaching out. Our team will get back to you shortly.</p>
                      <button type="button" onClick={() => setSubmitSuccess(false)} className="mt-2 text-sm font-medium text-neon hover:underline">Send another message</button>
                    </div>
                  </div>
                ) : (
                  <form className="motion-panel rounded-2xl border border-border/60 bg-surface/80 p-8 backdrop-blur-sm space-y-5" onSubmit={handleSubmit}>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Name *</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="h-11 rounded-lg border border-border/60 bg-background/60 px-3 text-sm text-foreground outline-none transition-colors focus:border-neon" placeholder="Your full name" required disabled={isSubmitting} />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Email *</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="h-11 rounded-lg border border-border/60 bg-background/60 px-3 text-sm text-foreground outline-none transition-colors focus:border-neon" placeholder="you@company.com" required disabled={isSubmitting} />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Company / Organisation</label>
                      <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} className="h-11 rounded-lg border border-border/60 bg-background/60 px-3 text-sm text-foreground outline-none transition-colors focus:border-neon" placeholder="Optional" disabled={isSubmitting} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                        Inquiry Type * {inquiryType && <span className="ml-1 normal-case text-neon">({inquiryType})</span>}
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {INQUIRY_TYPES.map((type) => (
                          <label key={type.value} className={`flex cursor-pointer items-center rounded-full border px-3 py-1.5 text-xs font-medium transition-all hover:border-neon/60 hover:text-neon ${inquiryType === type.value ? "border-neon bg-neon/10 text-neon" : "border-border/60 bg-background/40 text-muted-foreground"}`}>
                            <input type="radio" name="inquiryType" value={type.value} checked={inquiryType === type.value} onChange={() => setInquiryType(type.value)} className="sr-only" disabled={isSubmitting} />
                            {type.value}
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Message *</label>
                      <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={5} className="rounded-lg border border-border/60 bg-background/60 px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-neon resize-none" placeholder="Tell us how we can help, or what you'd like to discuss..." required disabled={isSubmitting} />
                    </div>
                    {submitError && <p className="text-sm text-red-500">{submitError}</p>}
                    <button type="submit" disabled={isSubmitting} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-neon px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100">
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <ArrowRight size={16} />
                    </button>
                  </form>
                )}
              </ScrollReveal>
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}
