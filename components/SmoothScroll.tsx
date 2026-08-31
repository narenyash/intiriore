"use client";

import { useEffect, useState } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Wires Lenis into GSAP's single RAF loop so ScrollTrigger never desyncs.
 * Rendered as a child of <ReactLenis> so useLenis() can read the instance.
 */
function GsapLenisBridge() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    gsap.registerPlugin(ScrollTrigger);

    const onScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onScroll);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.refresh();

    return () => {
      lenis.off("scroll", onScroll);
      gsap.ticker.remove(raf);
    };
  }, [lenis]);

  return null;
}

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <ReactLenis
      root
      options={{
        autoRaf: false,
        // lerp 1 == effectively no smoothing for reduced-motion users
        lerp: reduced ? 1 : 0.1,
        smoothWheel: !reduced,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
        anchors: { offset: -64 },
      }}
    >
      <GsapLenisBridge />
      {children}
    </ReactLenis>
  );
}
