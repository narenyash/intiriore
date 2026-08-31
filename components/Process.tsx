"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Reveal, Label } from "@/components/ui";
import { processSteps } from "@/lib/site";

export default function Process() {
  const railRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 0.72", "end 0.55"],
  });
  const fill = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <section
      id="process"
      data-nav="light"
      className="relative bg-cream px-6 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-shell">
        <Reveal className="max-w-2xl">
          <Label className="text-ink/45">How we work</Label>
          <h2 className="mt-5 font-serif text-[clamp(2rem,4.4vw,3.6rem)] font-light leading-[1.08] text-ink">
            One direction, carried the whole way.
          </h2>
          <p className="mt-6 text-pretty text-sm leading-relaxed text-ink/60">
            A single studio from the first walk-through to the last cushion. No
            handoffs, no design-by-committee, no surprises on the invoice.
          </p>
        </Reveal>

        <ol ref={railRef} className="relative mt-16 md:mt-24">
          {/* rail */}
          <span
            aria-hidden
            className="absolute left-[6px] top-4 bottom-16 w-px bg-ink/15"
          />
          <motion.span
            aria-hidden
            style={{ scaleY: fill }}
            className="absolute left-[6px] top-4 bottom-16 w-px origin-top bg-gradient-to-b from-oak to-oak-deep"
          />

          {processSteps.map((step, i) => (
            <li
              key={step.no}
              className="relative grid gap-x-12 gap-y-2 border-t border-ink/10 py-10 pl-10 first:border-t-0 md:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)] md:py-14 md:pl-16"
            >
              {/* node */}
              <motion.span
                aria-hidden
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "0px 0px -20% 0px" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className="absolute left-0 top-[calc(2.5rem+2px)] flex h-[13px] w-[13px] items-center justify-center rounded-full border border-ink/25 bg-cream md:top-[calc(3.5rem+2px)]"
              >
                <span className="h-[5px] w-[5px] rounded-full bg-oak" />
              </motion.span>

              <Reveal delay={i * 0.04}>
                <p className="font-serif text-[clamp(2.75rem,6vw,4.5rem)] font-light leading-none text-ink/15">
                  {step.no}
                </p>
                <Label className="mt-4 text-oak-deep">{step.when}</Label>
                <h3 className="mt-2 font-serif text-[clamp(1.35rem,2.2vw,1.75rem)] font-light text-ink">
                  {step.title}
                </h3>
              </Reveal>

              <Reveal delay={i * 0.04 + 0.06}>
                <p className="max-w-xl text-pretty text-sm leading-relaxed text-ink/60 md:pt-3">
                  {step.copy}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-ink/12 pt-10">
          <p className="font-serif text-[clamp(1.15rem,2vw,1.5rem)] font-light text-ink">
            Every project starts with a free 45-minute consultation.
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 border-b border-ink/40 pb-1 text-[11px] uppercase tracking-label text-ink transition-colors hover:border-ink"
          >
            Book yours
            <span className="transition-transform duration-500 ease-quiet group-hover:translate-x-1">
              →
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
