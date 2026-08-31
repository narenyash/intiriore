"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Navbar() {
  // "dark" = sitting over a dark section -> light (cream) nav
  // "light" = sitting over a light section -> ink nav + solid bar
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-nav]"),
    );
    if (!sections.length) return;

    // a thin band pinned to the very top of the viewport; whichever section
    // currently crosses it decides the nav colour.
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setTheme(
              entry.target.getAttribute("data-nav") === "light"
                ? "light"
                : "dark",
            );
          }
        }
      },
      { rootMargin: "-1px 0px -99% 0px", threshold: 0 },
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const light = theme === "light";

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: EASE, delay: 0.2 }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        light ? "bg-cream/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-shell items-center justify-between px-6 py-5 transition-colors duration-500 md:px-10 ${
          light ? "text-ink" : "text-cream"
        }`}
      >
        <a
          href="#top"
          className="font-serif text-lg tracking-label"
          aria-label={`${siteConfig.name} — home`}
        >
          {siteConfig.wordmark}
        </a>

        <ul className="hidden gap-10 text-[11px] uppercase tracking-label md:flex">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="group relative inline-block py-1">
                {item.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-current transition-transform duration-500 ease-quiet group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-[11px] uppercase tracking-label md:hidden"
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="overflow-hidden bg-cream text-ink md:hidden"
          >
            <ul className="flex flex-col px-6 pb-8 pt-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-ink/10 py-4 font-serif text-2xl"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
