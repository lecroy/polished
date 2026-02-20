export default function Home() {
  const applyUrl = "mailto:hello@getpolished.com";

  return (
    <div className="min-h-screen">

      {/* Nav */}
      <nav className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
        <span
          className="text-lg font-semibold tracking-tight"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Polished
        </span>
        <a
          href={applyUrl}
          className="text-sm font-medium bg-[#1A1A18] text-[#F9F7F3] px-4 py-2 rounded-full hover:bg-[#3a3a36] transition-colors"
        >
          Apply
        </a>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-[#8a8a80] uppercase tracking-widest mb-6">
            AI-built · Human-designed
          </p>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl leading-[1.08] mb-8 text-[#1A1A18]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Your idea.
            <br />
            <em>
              Built,{" "}
              <span className="text-shimmer">polished</span>
              , and shipped.
            </em>
          </h1>
          <p className="text-xl text-[#4a4a44] leading-relaxed max-w-xl mb-10">
            A product designer with 20 years of experience and AI that actually
            builds. One flat rate. A clean handoff. Yours to own.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href={applyUrl}
              className="inline-block bg-[#1A1A18] text-[#F9F7F3] px-8 py-4 rounded-full text-base font-medium hover:bg-[#3a3a36] transition-colors"
            >
              Apply for a project →
            </a>
            <p className="text-sm text-[#8a8a80]">$4,500 flat · 2–3 weeks · limited spots</p>
          </div>
        </div>
      </section>

      {/* The math */}
      <section className="border-t border-[#E5E2DB]">
        <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E2DB]">
          <div className="py-8 sm:py-0 sm:px-8 first:pl-0 last:pr-0">
            <p className="text-3xl font-semibold mb-2 line-through text-[#c0bdb6]">$20k–$50k</p>
            <p className="text-sm text-[#8a8a80]">What an agency charges for this</p>
          </div>
          <div className="py-8 sm:py-0 sm:px-8">
            <p className="text-3xl font-semibold mb-2 line-through text-[#c0bdb6]">3–6 months</p>
            <p className="text-sm text-[#8a8a80]">What a freelancer takes to deliver</p>
          </div>
          <div className="py-8 sm:py-0 sm:px-8">
            <p className="text-3xl font-semibold mb-2 text-[#1A1A18]">2–3 weeks</p>
            <p className="text-sm text-[#8a8a80]">What we take, at $4,500 flat</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-[#E5E2DB] bg-[#F3F0EB]">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <p className="text-sm font-medium text-[#8a8a80] uppercase tracking-widest mb-12">
            How it works
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {[
              {
                num: "01",
                title: "Apply",
                body: "Tell us about your idea. We'll review it and let you know if it's a good fit — usually within a day.",
              },
              {
                num: "02",
                title: "Discovery",
                body: "A 30-minute call to align on scope, goals, and what success looks like. We define exactly what gets built.",
              },
              {
                num: "03",
                title: "Design & build",
                body: "We design and build your product. You'll see progress along the way and get a round of revisions.",
              },
              {
                num: "04",
                title: "Handoff",
                body: "You get the repo, a UX walkthrough video, and full ownership. Your accounts, your code, your product.",
              },
            ].map((step) => (
              <div key={step.num}>
                <p className="text-xs font-medium text-[#b0ada6] mb-3">{step.num}</p>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-[#6a6a62] leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="border-t border-[#E5E2DB]">
        <div className="max-w-5xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Included */}
          <div>
            <p className="text-sm font-medium text-[#8a8a80] uppercase tracking-widest mb-8">
              What's included
            </p>
            <ul className="space-y-4">
              {[
                "Working web app with up to 5 core screens",
                "User auth (login / signup)",
                "Payments via Stripe — your account",
                "Database and backend",
                "Deployed to Vercel — your account",
                "GitHub repo transferred to you",
                "UX walkthrough video",
                "One round of revisions",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 text-[#1A1A18] text-base leading-none">✓</span>
                  <span className="text-[#4a4a44] leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not included */}
          <div>
            <p className="text-sm font-medium text-[#8a8a80] uppercase tracking-widest mb-8">
              What's not included
            </p>
            <ul className="space-y-4">
              {[
                "Mobile apps (iOS or Android)",
                "Complex third-party integrations",
                "Ongoing maintenance or support",
                "Marketing, SEO, or copywriting",
                "More than 5 core screens or features",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 text-[#c0bdb6] text-base leading-none">—</span>
                  <span className="text-[#8a8a80] leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 p-5 rounded-2xl border border-[#E5E2DB] bg-[#F3F0EB]">
              <p className="text-sm text-[#6a6a62] leading-relaxed">
                <strong className="text-[#1A1A18]">Tech stack:</strong> Next.js,
                Supabase, Vercel, Stripe — proven, maintainable, and well-documented.
                Any developer can pick it up after handoff.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="border-t border-[#E5E2DB] bg-[#1A1A18] text-[#F9F7F3]">
        <div className="max-w-5xl mx-auto px-6 py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div>
            <p className="text-sm font-medium text-[#8a8a80] uppercase tracking-widest mb-4">
              Pricing
            </p>
            <p
              className="text-6xl sm:text-7xl mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              $4,500
            </p>
            <p className="text-[#a0a098] max-w-sm leading-relaxed">
              Flat rate. No hourly surprises, no scope creep games. 50% upfront
              to start, 50% on delivery. Spots are limited — we take on a small
              number of projects at a time.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a
              href={applyUrl}
              className="inline-block bg-[#F9F7F3] text-[#1A1A18] px-8 py-4 rounded-full text-base font-medium hover:bg-white transition-colors"
            >
              Apply for a project →
            </a>
          </div>
        </div>
      </section>

      {/* Who's behind it */}
      <section className="border-t border-[#E5E2DB]">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <p className="text-sm font-medium text-[#8a8a80] uppercase tracking-widest mb-8">
            Who's behind it
          </p>
          <div className="max-w-2xl">
            <p
              className="text-3xl sm:text-4xl leading-snug mb-6 text-[#1A1A18]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Product design expertise, actually applied.
            </p>
            <p className="text-[#4a4a44] leading-relaxed mb-4">
              Most AI-built apps look like AI built them. This one won't. Polished is led by a
              product designer with 20 years of experience — someone who's shipped real products
              at scale and knows the difference between something that works and something
              people actually want to use.
            </p>
            <p className="text-[#4a4a44] leading-relaxed">
              AI does the building. Human judgment shapes everything else.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-[#E5E2DB] bg-[#F3F0EB]">
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <h2
            className="text-4xl sm:text-5xl mb-6 text-[#1A1A18]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Ready to build?
          </h2>
          <p className="text-[#6a6a62] mb-10 max-w-md mx-auto">
            Tell us about your idea. We'll let you know if it's a good fit and
            what we can build together.
          </p>
          <a
            href={applyUrl}
            className="inline-block bg-[#1A1A18] text-[#F9F7F3] px-10 py-4 rounded-full text-base font-medium hover:bg-[#3a3a36] transition-colors"
          >
            Apply for a project →
          </a>
          <p className="text-sm text-[#b0ada6] mt-5">
            $4,500 flat · 2–3 weeks · limited spots
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E5E2DB]">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <span className="text-sm font-semibold">Polished</span>
          <span className="text-sm text-[#8a8a80]">
            © {new Date().getFullYear()} · hello@getpolished.com
          </span>
        </div>
      </footer>

    </div>
  );
}
