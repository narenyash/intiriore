import { Reveal, Label } from "@/components/ui";
import { stats, pressLogos } from "@/lib/site";

export default function Stats() {
  return (
    <section data-nav="dark" className="bg-bark px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-shell">
        <div className="grid gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <p className="font-serif text-[clamp(3rem,7vw,5rem)] font-light leading-none text-cream">
                {s.value}
              </p>
              <Label className="mt-4 text-cream/50">{s.label}</Label>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={0.1}
          className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-cream/15 pt-8"
        >
          <Label className="text-cream/35">As seen in</Label>
          {pressLogos.map((p) => (
            <span key={p} className="font-serif text-lg italic text-cream/55">
              {p}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
