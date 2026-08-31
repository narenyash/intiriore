"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1] as const;
const LINES = ["Interiors composed", "like still lifes."];

export default function Hero() {
  const trackRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const cueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set(photoRef.current, { autoAlpha: 1, scale: 1 });
        return;
      }

      gsap.registerPlugin(ScrollTrigger);

      // Reveal happens across the first viewport of scroll; the rest of the
      // 220vh track just holds the photo full-bleed (via CSS sticky).
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: trackRef.current,
          start: "top top",
          end: () => "+=" + window.innerHeight * 0.6,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      // black -> photo
      tl.fromTo(
        photoRef.current,
        { autoAlpha: 0, scale: 1.08 },
        { autoAlpha: 1, scale: 1, duration: 1 },
        0,
      )
        // tagline lifts away over the first ~40% of the reveal
        .to(
          taglineRef.current,
          { autoAlpha: 0, yPercent: -45, duration: 0.4 },
          0,
        )
        // scroll cue drops the moment you move
        .to(cueRef.current, { autoAlpha: 0, duration: 0.08 }, 0.02);
    }, trackRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={trackRef}
      id="top"
      data-nav="dark"
      className="relative h-[175vh] bg-black-warm"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black-warm">
        {/* Layer 1 — the reveal photo */}
        <div ref={photoRef} className="absolute inset-0 h-full w-full opacity-0">
          <Image
            src="/photos/exterior-dusk.avif"
            alt="A board-formed concrete and oak house glowing from within at dusk, framed by oak trees and dry grass"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black-warm/35 via-black-warm/5 to-black-warm/45" />
        </div>

        {/* Layer 2 — tagline */}
        <motion.div
          ref={taglineRef}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.16, delayChildren: 0.35 },
            },
          }}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center text-cream"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 1.2 } },
            }}
            className="mb-6 text-[11px] uppercase tracking-label text-cream/60"
          >
            {siteConfig.name} — Interior Design Studio
          </motion.p>

          <h1 className="text-balance font-serif text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[1.05]">
            {LINES.map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  className="block"
                  variants={{
                    hidden: { y: "110%" },
                    visible: {
                      y: "0%",
                      transition: { duration: 1, ease: EASE },
                    },
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>
        </motion.div>

        {/* Layer 3 — scroll cue */}
        <motion.div
          ref={cueRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-cream"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-[10px] uppercase tracking-label text-cream/70">
              Enter
            </span>
            <span className="relative block h-12 w-px overflow-hidden bg-cream/20">
              <motion.span
                className="absolute inset-x-0 top-0 block h-1/2 bg-cream"
                animate={{ y: ["-110%", "220%"] }}
                transition={{
                  duration: 1.9,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              />
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
