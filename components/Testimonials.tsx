import { Reveal, Label } from "@/components/ui";
import { testimonials } from "@/lib/site";

export default function Testimonials() {
  return (
    <section
      data-nav="light"
      className="bg-linen px-6 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-shell">
        <Reveal>
          <Label className="text-ink/45">Clients</Label>
          <h2 className="mt-5 max-w-2xl font-serif text-[clamp(2rem,4.4vw,3.6rem)] font-light leading-[1.08] text-ink">
            The rooms are quiet. The clients are not.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-x-10 gap-y-12 md:mt-16 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={(i % 2) * 0.08}
              className="flex flex-col border-t border-ink/15 pt-8"
            >
              <blockquote className="font-serif text-[clamp(1.25rem,2.2vw,1.6rem)] font-light leading-snug text-ink/85">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <span className="h-px w-6 bg-oak" />
                <p className="text-[13px] text-ink/60">
                  <span className="text-ink/80">{t.name}</span> — {t.role},{" "}
                  {t.location}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
