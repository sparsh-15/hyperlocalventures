"use client"

import { useState } from "react"
import { ScrollReveal } from "./scroll-reveal"
import { ArrowRight, Phone, Mail, CheckCircle } from "lucide-react"
import { addContactSubmission } from "@/lib/firbase"

const ROLE_OPTIONS = [
  "Business Owner",
  "Customer",
  "Self Service Agent",
]

// Validation helpers
const PHONE_REGEX = /^[6-9]\d{9}$/  // Indian mobile: starts with 6-9, 10 digits

function validateForm(data: { name: string; phone: string; pincode: string; type: string }) {
  const errors: string[] = []
  const trimmedName = data.name.trim()
  if (!trimmedName) {
    errors.push("Name is required")
  } else if (trimmedName.length < 2) {
    errors.push("Name must be at least 2 characters")
  }
  const digitsOnly = data.phone.replace(/\D/g, "")
  if (!digitsOnly) {
    errors.push("Phone number is required")
  } else if (digitsOnly.length !== 10) {
    errors.push("Phone number must be exactly 10 digits")
  } else if (!PHONE_REGEX.test(digitsOnly)) {
    errors.push("Phone number must start with 6, 7, 8, or 9 (Indian mobile)")
  }
  if (!/^\d{6}$/.test(data.pincode.trim())) {
    errors.push("Pincode must be exactly 6 digits")
  }
  if (!data.type) {
    errors.push("Please select one option for 'I am a'")
  }
  return errors
}

export function CTASection() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [pincode, setPincode] = useState("")
  const [type, setType] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitError("")
    setFieldErrors({})

    const digitsOnly = phone.replace(/\D/g, "")
    const validationErrors = validateForm({
      name,
      phone: digitsOnly || phone,
      pincode: pincode.trim(),
      type,
    })

    if (validationErrors.length > 0) {
      setSubmitError(validationErrors[0])
      if (validationErrors[0].includes("Name")) setFieldErrors((p) => ({ ...p, name: validationErrors[0] }))
      else if (validationErrors[0].includes("Phone")) setFieldErrors((p) => ({ ...p, phone: validationErrors[0] }))
      else if (validationErrors[0].includes("Pincode")) setFieldErrors((p) => ({ ...p, pincode: validationErrors[0] }))
      else if (validationErrors[0].includes("I am a")) setFieldErrors((p) => ({ ...p, type: validationErrors[0] }))
      return
    }

    setIsSubmitting(true)
    setSubmitError("")
    try {
      const SUBMIT_TIMEOUT_MS = 15000
      const submitPromise = addContactSubmission({
        name: name.trim(),
        phone: phone.replace(/\D/g, ""),
        pincode: pincode.trim(),
        type,
      })
      const timeoutPromise = new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error("timeout")), SUBMIT_TIMEOUT_MS)
      )
      await Promise.race([submitPromise, timeoutPromise])

      setSubmitSuccess(true)
      setName("")
      setPhone("")
      setPincode("")
      setType("")
    } catch (err: unknown) {
      const errStr = String(err).toLowerCase()
      const code = (err as { code?: string })?.code
      const isPermission = errStr.includes("permission") || code === "permission-denied"
      const isTimeout = (err instanceof Error && err.message === "timeout") || errStr.includes("timeout")

      if (isTimeout) {
        setSubmitError("Submission timed out. Please check your connection and try again.")
      } else if (isPermission) {
        setSubmitError("Unable to save. See FIREBASE_SETUP.md to fix Firestore rules.")
      } else {
        setSubmitError("Failed to submit. Please try again.")
      }
      console.error("Contact form error:", err)
    } finally {
      setIsSubmitting(false)
    }
  }
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
                      href="mailto:support@hyperlocalventures.com"
                      className="text-sm text-foreground hover:text-neon transition-colors break-all"
                    >
                     support@hyperlocalventures.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact form */}
          <ScrollReveal delay={0.35}>
            {submitSuccess ? (
              <div className="motion-panel rounded-2xl border border-neon/40 bg-neon/10 p-8 backdrop-blur-sm text-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-neon/20 text-neon">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Form submitted successfully!
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Thank you for reaching out. Our team will get in touch soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-2 text-sm font-medium text-neon hover:underline"
                  >
                    Submit another
                  </button>
                </div>
              </div>
            ) : (
              <form
                id="contact-form"
                className="motion-panel rounded-2xl border border-border/60 bg-surface/80 p-6 backdrop-blur-sm space-y-4"
                onSubmit={handleSubmit}
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`h-10 rounded-lg border px-3 text-sm text-foreground outline-none transition-colors focus:border-neon bg-background/60 ${
                        fieldErrors.name ? "border-red-500" : "border-border/60"
                      }`}
                      placeholder="Your full name"
                      required
                      disabled={isSubmitting}
                      minLength={2}
                      maxLength={100}
                    />
                    {fieldErrors.name && <p className="text-xs text-red-500">{fieldErrors.name}</p>}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => {
                        const v = e.target.value.replace(/\D/g, "").slice(0, 10)
                        setPhone(v)
                      }}
                      className={`h-10 rounded-lg border px-3 text-sm text-foreground outline-none transition-colors focus:border-neon bg-background/60 ${
                        fieldErrors.phone ? "border-red-500" : "border-border/60"
                      }`}
                      placeholder="10-digit mobile"
                      required
                      disabled={isSubmitting}
                      inputMode="numeric"
                      maxLength={10}
                    />
                    {fieldErrors.phone && <p className="text-xs text-red-500">{fieldErrors.phone}</p>}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    City Pin Code
                  </label>
                  <input
                    type="text"
                    value={pincode}
                    onChange={(e) => {
                      const v = e.target.value.replace(/\D/g, "").slice(0, 6)
                      setPincode(v)
                    }}
                    className={`h-10 rounded-lg border px-3 text-sm text-foreground outline-none transition-colors focus:border-neon bg-background/60 ${
                      fieldErrors.pincode ? "border-red-500" : "border-border/60"
                    }`}
                    placeholder="6-digit pincode (e.g. 411038)"
                    required
                    disabled={isSubmitting}
                    inputMode="numeric"
                    maxLength={6}
                  />
                  {fieldErrors.pincode && <p className="text-xs text-red-500">{fieldErrors.pincode}</p>}
                </div>

                <div className="flex flex-col gap-2">
                  <p className={`text-xs font-medium uppercase tracking-widest ${fieldErrors.type ? "text-red-500" : "text-muted-foreground"}`}>
                    I am a <span className="text-red-500">*</span>
                  </p>
                  {fieldErrors.type && <p className="text-xs text-red-500">{fieldErrors.type}</p>}
                  <div className="grid gap-2 sm:grid-cols-3">
                    {ROLE_OPTIONS.map((role) => (
                      <label
                        key={role}
                        className={`flex cursor-pointer items-center justify-center rounded-full border px-3 py-2 text-xs font-medium transition-all hover:border-neon/60 hover:text-neon ${
                          type === role
                            ? "border-neon bg-neon/10 text-neon"
                            : "border-border/60 bg-background/40 text-muted-foreground"
                        }`}
                      >
                        <input
                          type="radio"
                          name="role"
                          value={role}
                          checked={type === role}
                          onChange={() => setType(role)}
                          className="sr-only"
                          disabled={isSubmitting}
                        />
                        {role}
                      </label>
                    ))}
                  </div>
                </div>

                {submitError && (
                  <p className="text-sm text-red-500">{submitError}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-neon px-6 py-3 text-sm font-bold uppercase tracking-wide text-background transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(0,255,132,0.45)] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? "Submitting..." : "Partner With Us"}
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
