export default function ApplyLoanPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center px-6 py-24 md:py-32">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-neon/20 bg-neon/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-neon">
          Apply Loan
        </p>
        <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Smart Capital for{" "}
          <span className="text-neon neon-text-glow">Local Businesses</span>
        </h1>
        <div className="mt-8 max-w-xl text-center space-y-4">
          <p className="inline-flex items-center justify-center rounded-full border border-neon/30 bg-neon/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-neon">
            Coming Soon
          </p>
          <p className="text-base text-muted-foreground md:text-lg">
            We&apos;re building seamless, data-backed loan experiences for shopkeepers
            on MyOffers. Soon you&apos;ll be able to explore working capital options tailored
            to your store&apos;s performance.
          </p>
          <p className="text-xs text-muted-foreground/80">
            Want to know when this launches? Drop us a line at{" "}
            <a
              href="mailto:hyperlocalventurespvtltd@outlook.com"
              className="font-semibold text-neon hover:underline"
            >
              hyperlocalventurespvtltd@outlook.com
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}

