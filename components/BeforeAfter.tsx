"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CompareSlider from "@/components/CompareSlider";
import { Reveal, Label } from "@/components/ui";
import { transformations } from "@/lib/site";

// `--reveal` is how far from the left edge the "before" slice reaches.
// It retreats leftward as you scroll, so the finished room takes over.
const START = 88;
const END = 12;

export default function BeforeAfter() {
  const feature = transformations[0];
  const more = transformations.slice(1);

  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      stage.style.setProperty("--reveal", "50%");
      return;
    }

    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      const obj = { v: START };
      gsap.to(obj, {
        v: END,
        ease: "none",
        onUpdate: () => stage.style.setProperty("--reveal", `${obj.v}%`),
        scrollTrigger: {
          trigger: trackRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    }, trackRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="transformations"
      data-nav="dark"
      className="relative bg-black-warm"
    >
      {/* scroll track — the sticky child holds while --reveal scrubs */}
      <div ref={trackRef} className="relative h-[118vh]">
        <div className="sticky top-0 flex h-screen flex-col">
          <div className="flex items-end justify-between px-6 pb-5 pt-20 md:px-10 md:pt-24">
            <div>
              <Label className="text-cream/50">Before &amp; After</Label>
              <h2 className="mt-3 font-serif text-[clamp(1.75rem,3.4vw,2.9rem)] font-light text-cream">
                {feature.project}
              </h2>
            </div>
            <p className="hidden text-right text-[11px] uppercase leading-5 tracking-label text-cream/50 sm:block">
              {feature.kind}
              <br />
              {feature.location}
            </p>
          </div>

          <div
            ref={stageRef}
            className="relative mx-6 mb-10 flex-1 overflow-hidden md:mx-10"
            style={{ ["--reveal" as string]: `${START}%` }}
          >
            <Image
              src={`${feature.after}.avif`}
              alt={feature.afterAlt}
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ clipPath: "inset(0 calc(100% - var(--reveal)) 0 0)" }}
            >
              <Image
                src={`${feature.before}.avif`}
                alt={feature.beforeAlt}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            <span className="absolute bottom-4 left-4 z-30 text-[10px] uppercase tracking-label text-cream/80">
              Before
            </span>
            <span className="absolute bottom-4 right-4 z-30 text-[10px] uppercase tracking-label text-cream/80">
              After
            </span>

            <div
              className="absolute inset-y-0 z-30 w-px -translate-x-1/2 bg-cream/85"
              style={{ left: "var(--reveal)" }}
            >
              <span className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cream/70 bg-black-warm/30 text-[9px] tracking-[0.15em] text-cream/90 backdrop-blur-sm">
                ↔
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* extra pairs — drag to compare */}
      {more.length > 0 && (
        <div className="px-6 pb-20 pt-4 md:px-10 md:pb-24">
          <Reveal className="mx-auto max-w-shell">
            <p className="text-[12px] text-cream/45">
              Drag to compare — more transformations
            </p>
            <div className="mt-8 grid gap-x-8 gap-y-12 sm:grid-cols-2">
              {more.map((t) => (
                <CompareSlider key={t.slug} data={t} />
              ))}
            </div>
          </Reveal>
        </div>
      )}
    </section>
  );
}
