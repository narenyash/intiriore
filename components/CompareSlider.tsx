"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import type { Transformation } from "@/lib/site";

/**
 * Auto-sweeps the divider on a slow loop; pauses on hover/drag so you can
 * inspect, then eases back into the loop a moment after you let go.
 * Position is written to a CSS var so it never re-renders React.
 */
export default function CompareSlider({ data }: { data: Transformation }) {
  const ref = useRef<HTMLDivElement>(null);
  const pos = useRef(50);
  const held = useRef(false);
  const resume = useRef<ReturnType<typeof setTimeout>>();

  const apply = (v: number) => {
    pos.current = Math.max(0, Math.min(100, v));
    ref.current?.style.setProperty("--pos", `${pos.current}%`);
  };

  const fromX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    apply(((clientX - r.left) / r.width) * 100);
  }, []);

  const hold = () => {
    held.current = true;
    clearTimeout(resume.current);
  };
  const letGo = () => {
    clearTimeout(resume.current);
    resume.current = setTimeout(() => {
      held.current = false;
    }, 1400);
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    apply(50);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let visible = true;
    const io = new IntersectionObserver(
      ([e]) => {
        visible = e.isIntersecting;
      },
      { threshold: 0.15 },
    );
    io.observe(el);

    let raf = 0;
    let t0: number | null = null;
    const loop = (t: number) => {
      if (t0 === null) t0 = t;
      if (!held.current && visible) {
        const secs = (t - t0) / 1000;
        const s = (Math.sin((secs / 9) * Math.PI * 2) + 1) / 2; // 0..1, ~9s loop
        const target = 15 + s * 70; // sweep between 15% and 85%
        apply(pos.current + (target - pos.current) * 0.11);
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      clearTimeout(resume.current);
    };
  }, []);

  return (
    <figure>
      <div
        ref={ref}
        style={{ ["--pos" as string]: "50%" }}
        className="relative aspect-[4/3] cursor-ew-resize touch-none select-none overflow-hidden bg-ink"
        onPointerEnter={hold}
        onPointerLeave={letGo}
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId);
          hold();
          fromX(e.clientX);
        }}
        onPointerMove={(e) => {
          if (e.buttons === 1) {
            hold();
            fromX(e.clientX);
          }
        }}
        onPointerUp={letGo}
      >
        <Image
          src={`${data.after}.avif`}
          alt={data.afterAlt}
          fill
          sizes="(max-width: 768px) 100vw, 45vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ clipPath: "inset(0 calc(100% - var(--pos)) 0 0)" }}
        >
          <Image
            src={`${data.before}.avif`}
            alt={data.beforeAlt}
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover"
          />
        </div>

        <span className="absolute bottom-3 left-3 z-20 text-[10px] uppercase tracking-label text-cream/80">
          Before
        </span>
        <span className="absolute bottom-3 right-3 z-20 text-[10px] uppercase tracking-label text-cream/80">
          After
        </span>

        <div
          className="absolute inset-y-0 z-20 w-px -translate-x-1/2 bg-cream/85"
          style={{ left: "var(--pos)" }}
        >
          <span className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cream/70 bg-ink/30 text-[9px] text-cream/90 backdrop-blur-sm">
            ↔
          </span>
        </div>
      </div>

      <figcaption className="mt-4 flex items-baseline justify-between gap-4">
        <span className="font-serif text-lg font-light text-cream">
          {data.project}
        </span>
        <span className="text-[11px] uppercase tracking-label text-cream/45">
          {data.kind}
        </span>
      </figcaption>
    </figure>
  );
}
