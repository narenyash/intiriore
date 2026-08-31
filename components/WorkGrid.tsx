import Image from "next/image";
import { Reveal, Label } from "@/components/ui";
import { workGrid } from "@/lib/site";

export default function WorkGrid() {
  return (
    <section data-nav="light" className="bg-plaster px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-shell">
        <Reveal className="flex items-end justify-between gap-6">
          <div>
            <Label className="text-ink/45">More rooms</Label>
            <h2 className="mt-3 font-serif text-[clamp(1.6rem,3.2vw,2.5rem)] font-light text-ink">
              Recent work, in brief.
            </h2>
          </div>
          <a
            href="#contact"
            className="hidden shrink-0 border-b border-ink/30 pb-1 text-[11px] uppercase tracking-label text-ink/70 transition-colors hover:border-ink hover:text-ink sm:block"
          >
            Start a project
          </a>
        </Reveal>

        <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {workGrid.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.06} className="group">
              <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                <Image
                  src={`${p.image}.avif`}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 30vw"
                  className="object-cover transition-transform duration-[1200ms] ease-quiet group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-3">
                <h3 className="font-serif text-lg font-light text-ink">
                  {p.title}
                </h3>
                <Label className="shrink-0 text-ink/40">{p.year}</Label>
              </div>
              <p className="mt-1 text-[12px] text-ink/55">
                {p.type} · {p.location}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
