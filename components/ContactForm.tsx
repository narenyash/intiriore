"use client";

import { useState } from "react";
import { Reveal, Label } from "@/components/ui";
import { siteConfig, projectTypes, budgetBands } from "@/lib/site";

const fieldClass =
  "w-full border-b border-cream/25 bg-transparent py-3 text-sm text-cream placeholder:text-cream/35 outline-none transition-colors focus:border-cream";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (data.get("company")) return; // honeypot
    // No backend yet — capture intent and confirm. Wire to a form service later.
    setSent(true);
  }

  return (
    <section
      id="contact"
      data-nav="dark"
      className="bg-black-warm px-6 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto grid max-w-shell gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <Reveal>
          <Label className="text-cream/45">Contact</Label>
          <h2 className="mt-5 font-serif text-[clamp(2.25rem,5vw,4rem)] font-light leading-[1.05] text-cream">
            Book a design consultation.
          </h2>
          <p className="mt-6 max-w-md text-pretty text-sm leading-relaxed text-cream/60">
            A free 45-minute conversation, on-site or over video. We&rsquo;ll talk
            through the space, the timeline and a realistic budget, and tell you
            honestly whether we&rsquo;re the right studio for it.
          </p>

          <dl className="mt-12 space-y-6 border-t border-cream/15 pt-10 text-sm">
            <div>
              <dt className="text-[10px] uppercase tracking-label text-cream/40">
                Email
              </dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-cream/85 underline-offset-4 hover:underline"
                >
                  {siteConfig.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-label text-cream/40">
                Studio
              </dt>
              <dd className="mt-1 text-cream/85">{siteConfig.phone}</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-label text-cream/40">
                Working in
              </dt>
              <dd className="mt-1 text-cream/85">{siteConfig.serviceArea}</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.1}>
          {sent ? (
            <div className="flex h-full min-h-[320px] flex-col items-start justify-center border border-cream/15 p-10">
              <Label className="text-oak">Received</Label>
              <p className="mt-4 max-w-sm font-serif text-2xl font-light text-cream">
                Thank you — we&rsquo;ll be in touch within two business days.
              </p>
              <p className="mt-4 text-sm text-cream/55">
                If it&rsquo;s urgent, email {siteConfig.email} directly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-8">
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden
                className="hidden"
              />

              <div className="grid gap-8 sm:grid-cols-2">
                <label className="block">
                  <Label className="text-cream/45">Name</Label>
                  <input name="name" required className={fieldClass} placeholder="Your name" />
                </label>
                <label className="block">
                  <Label className="text-cream/45">Phone</Label>
                  <input
                    name="phone"
                    type="tel"
                    className={fieldClass}
                    placeholder="Optional"
                  />
                </label>
              </div>

              <label className="block">
                <Label className="text-cream/45">Email</Label>
                <input
                  name="email"
                  type="email"
                  required
                  className={fieldClass}
                  placeholder="you@example.com"
                />
              </label>

              <div className="grid gap-8 sm:grid-cols-2">
                <label className="block">
                  <Label className="text-cream/45">Project type</Label>
                  <select name="projectType" required defaultValue="" className={`${fieldClass} appearance-none`}>
                    <option value="" disabled>
                      Select…
                    </option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t} className="bg-black-warm">
                        {t}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <Label className="text-cream/45">Budget range</Label>
                  <select name="budget" required defaultValue="" className={`${fieldClass} appearance-none`}>
                    <option value="" disabled>
                      Select…
                    </option>
                    {budgetBands.map((b) => (
                      <option key={b} value={b} className="bg-black-warm">
                        {b}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="block">
                <Label className="text-cream/45">Location</Label>
                <input
                  name="location"
                  className={fieldClass}
                  placeholder="City / neighbourhood"
                />
              </label>

              <label className="block">
                <Label className="text-cream/45">Tell us about the space</Label>
                <textarea
                  name="message"
                  rows={3}
                  className={`${fieldClass} resize-none`}
                  placeholder="Rooms involved, timeline, what's prompting the project…"
                />
              </label>

              <button
                type="submit"
                className="group mt-2 inline-flex items-center gap-4 self-start border border-cream/40 px-8 py-4 text-[11px] uppercase tracking-label text-cream transition-colors duration-500 hover:bg-cream hover:text-ink"
              >
                Book a design consultation
                <span className="transition-transform duration-500 ease-quiet group-hover:translate-x-1">
                  →
                </span>
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
