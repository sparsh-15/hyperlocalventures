export default function CareersPage() {
  return (
    <main className="flex-grow flex items-center justify-center min-h-[60vh]">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center px-6 py-24 md:py-32">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-neon/20 bg-neon/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-neon">
          Careers
        </p>
        <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Join the <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-neon to-accent animate-gradient-x">ZoPin</span> Team
        </h1>
        <div className="mt-8 max-w-xl text-center space-y-4">
          <p className="inline-flex items-center justify-center rounded-full border border-neon/30 bg-neon/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-neon">
            Coming Soon
          </p>
          <p className="text-base text-muted-foreground md:text-lg">
            We&apos;re building the intelligence layer for local commerce. Our careers
            page will soon list opportunities across product, engineering, operations, and growth.
          </p>
          <p className="text-xs text-muted-foreground/80">
            For early interest, reach us at{" "}
            <a
              href="mailto:support@zopin.in"
              className="font-semibold text-neon hover:underline"
            >
              support@zopin.in
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
