"use client"

import { useState } from "react"
import { ScrollReveal } from "./scroll-reveal"
import { ArrowRight, Mail, MapPin, CheckCircle } from "lucide-react"
import { addContactSubmission } from "@/lib/firbase"

const INQUIRY_TYPES = ["Partnership", "Investor Relations", "Media", "Careers", "General Enquiry"]

function validateForm(data: { name: string; email: string; inquiryType: string; message: string }) {
  if (!data.name.trim() || data.name.trim().length < 2) return "Name must be at least 2 characters"
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) return "Please enter a valid email address"
  if (!data.inquiryType) return "Please select an inquiry type"
  if (!data.message.trim() || data.message.trim().length < 10) return "Message must be at least 10 characters"
  return null
}

export function CTASection() {
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
        addContactSubmission({ name: name.trim(), phone: "", pincode: "", type: inquiryType, email: email.trim(), company: company.trim(), message: message.trim() }),
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
    <section id="contact" className="section-shell relative overflow-hidden py-14 md:py-20 lg:py-44">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(76,29,149,0.08) 0%, transparent 60%)" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-neon/20 bg-neon/5 px-4 py-1.5 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-neon" />
            <span className="text-xs font-semibold uppercase tracking-widest text-neon">Contact</span>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Get in Touch with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-neon to-accent neon-text-glow">
              Hyperlocalventures
            </span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Whether you&apos;re a partner, investor, or just curious — we&apos;d love to hear from you.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 text-left md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          <ScrollReveal delay={0.3}>
            <div className="motion-panel rounded-2xl border border-border/60 bg-surface/80 p-6 backdrop-blur-sm">
              <h3 className="text-base font-semibold text-foreground">Contact Us</h3>
              <p className="mt-2 text-sm text-muted-foreground">Reach out directly or use the form.</p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neon/10 text-neon">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Email</p>
                    <a href="mailto:support@hyperlocalventures.in" className="text-sm text-foreground hover:text-neon transition-colors">
                      support@hyperlocalventures.in
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neon/10 text-neon">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Location</p>
                    <p className="text-sm text-foreground">Pune, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.35}>
            {submitSuccess ? (
              <div className="motion-panel rounded-2xl border border-neon/40 bg-neon/10 p-8 backdrop-blur-sm text-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-neon/20 text-neon">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Message sent!</h3>
                  <p className="text-sm text-muted-foreground">Our team will get back to you shortly.</p>
                  <button type="button" onClick={() => setSubmitSuccess(false)} className="mt-2 text-sm font-medium text-neon hover:underline">
                    Send another
                  </button>
                </div>
              </div>
            ) : (
              <form className="motion-panel rounded-2xl border border-border/60 bg-surface/80 p-6 backdrop-blur-sm space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Name *</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="h-10 rounded-lg border border-border/60 bg-background/60 px-3 text-sm text-foreground outline-none transition-colors focus:border-neon" placeholder="Your full name" required disabled={isSubmitting} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Email *</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="h-10 rounded-lg border border-border/60 bg-background/60 px-3 text-sm text-foreground outline-none transition-colors focus:border-neon" placeholder="you@company.com" required disabled={isSubmitting} />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Company / Organisation</label>
                  <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} className="h-10 rounded-lg border border-border/60 bg-background/60 px-3 text-sm text-foreground outline-none transition-colors focus:border-neon" placeholder="Optional" disabled={isSubmitting} />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Inquiry Type *</p>
                  <div className="flex flex-wrap gap-2">
                    {INQUIRY_TYPES.map((type) => (
                      <label key={type} className={`flex cursor-pointer items-center rounded-full border px-3 py-1.5 text-xs font-medium transition-all hover:border-neon/60 hover:text-neon ${inquiryType === type ? "border-neon bg-neon/10 text-neon" : "border-border/60 bg-background/40 text-muted-foreground"}`}>
                        <input type="radio" name="inquiryType" value={type} checked={inquiryType === type} onChange={() => setInquiryType(type)} className="sr-only" disabled={isSubmitting} />
                        {type}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Message *</label>
                  <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className="rounded-lg border border-border/60 bg-background/60 px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-neon resize-none" placeholder="Tell us how we can help..." required disabled={isSubmitting} />
                </div>
                {submitError && <p className="text-sm text-red-500">{submitError}</p>}
                <button type="submit" disabled={isSubmitting} className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-neon px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100">
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
