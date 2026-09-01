import Image from "next/image";
import { Reveal, Label } from "@/components/ui";
import { services } from "@/lib/site";

export default function Services() {
  return (
    <section
      id="services"
      data-nav="light"
      className="bg-cream px-6 py-14 md:px-10 md:py-20"
    >
      <div className="mx-auto max-w-shell">
        <Reveal className="max-w-2xl">
          <Label className="text-ink/45">What we do</Label>
          <h2 className="mt-5 font-serif text-[clamp(2rem,4.4vw,3.6rem)] font-light leading-[1.08] text-ink">
            Four ways to work with the studio.
          </h2>
          <p className="mt-6 text-pretty text-sm leading-relaxed text-ink/60">
            Every engagement starts with the same free consultation. Where it goes
            from there is up to how much of the house you want us to hold.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-x-10 gap-y-10 md:mt-14 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 0.08} className="group">
              <div className="relative aspect-[16/10] overflow-hidden bg-sand">
                <Image
                  src={`${s.image}.avif`}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover transition-transform duration-[1200ms] ease-quiet group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="font-serif text-xl font-light text-ink">
                  {s.title}
                </h3>
                <Label className="shrink-0 text-ink/40">{`0${i + 1}`}</Label>
              </div>
              <Label className="mt-2 text-oak-deep">{s.tag}</Label>
              <p className="mt-3 max-w-md text-pretty text-[13px] leading-relaxed text-ink/60">
                {s.copy}
              </p>
              <p className="mt-3 text-[12px] leading-snug text-ink/45">
                {s.points.join("  ·  ")}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
