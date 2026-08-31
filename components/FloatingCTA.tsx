"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function FloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("#top");
    const contact = document.querySelector("#contact");
    let heroVisible = true;
    let contactVisible = false;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.target === hero) heroVisible = e.isIntersecting;
          if (e.target === contact) contactVisible = e.isIntersecting;
        }
        setShow(!heroVisible && !contactVisible);
      },
      { threshold: 0.06 },
    );

    if (hero) io.observe(hero);
    if (contact) io.observe(contact);
    return () => io.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-3 bg-ink px-6 py-3.5 text-[11px] uppercase tracking-label text-cream shadow-lg shadow-ink/20 transition-colors hover:bg-oak-deep md:bottom-8 md:right-8"
        >
          Book a consultation
          <span aria-hidden>→</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
