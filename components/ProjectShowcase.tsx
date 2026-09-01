"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal, Label } from "@/components/ui";
import { featuredProjects } from "@/lib/site";

export default function ProjectShowcase() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.utils.toArray<HTMLElement>("[data-img]").forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -6, scale: 1.12 },
          {
            yPercent: 6,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: img.closest("[data-panel]"),
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} id="work" data-nav="dark" className="bg-black-warm">
      <Reveal className="px-6 pt-16 md:px-10 md:pt-20">
        <div className="mx-auto max-w-shell">
          <Label className="text-cream/45">Selected work</Label>
          <h2 className="mt-4 max-w-xl font-serif text-[clamp(1.9rem,4vw,3.2rem)] font-light leading-[1.08] text-cream">
            A house is a sequence of rooms, and a room is a held breath.
          </h2>
        </div>
      </Reveal>

      {featuredProjects.map((p, i) => (
        <section
          key={p.slug}
          data-panel
          className="relative mt-6 flex h-[70vh] items-end overflow-hidden md:mt-8"
        >
          <div data-img className="absolute inset-[-12%] will-change-transform">
            <Image
              src={`${p.image}.avif`}
              alt={p.title}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black-warm/85 via-black-warm/10 to-black-warm/25" />

          <div className="relative z-10 w-full px-6 pb-14 md:px-10 md:pb-20">
            <div className="mx-auto flex max-w-shell flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <Reveal>
                <Label className="text-cream/50">
                  {`Project ${String(i + 1).padStart(2, "0")} / ${String(
                    featuredProjects.length,
                  ).padStart(2, "0")}`}
                </Label>
                <h3 className="mt-3 font-serif text-[clamp(2.25rem,5vw,4rem)] font-light leading-none text-cream">
                  {p.title}
                </h3>
                <p className="mt-5 max-w-md text-pretty text-sm leading-relaxed text-cream/70">
                  {p.blurb}
                </p>
              </Reveal>

              <Reveal delay={0.1} className="shrink-0">
                <dl className="grid grid-cols-2 gap-x-10 gap-y-4 border-t border-cream/20 pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0">
                  {[
                    ["Area", `${p.sqft.toLocaleString()} sq ft`],
                    ["Location", p.location],
                    ["Scope", p.type],
                    ["Year", String(p.year)],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <dt className="text-[10px] uppercase tracking-label text-cream/40">
                        {k}
                      </dt>
                      <dd className="mt-1 text-[13px] leading-snug text-cream/85">
                        {v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
