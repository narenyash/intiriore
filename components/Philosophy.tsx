import Image from "next/image";
import { Reveal, Label } from "@/components/ui";

export default function Philosophy() {
  return (
    <section id="studio" data-nav="dark" className="relative bg-black-warm">
      <div className="relative h-[42vh] min-h-[300px] overflow-hidden">
        <Image
          src="/photos/entryway.avif"
          alt="A plaster entry hall with a black steel pivot door opening onto dry golden hills at dusk"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black-warm/35" />
      </div>

      <div className="mx-auto max-w-shell px-6 py-14 md:px-10 md:py-20">
        <Reveal className="max-w-3xl">
          <Label className="text-cream/45">The studio</Label>
          <p className="mt-8 font-serif text-[clamp(1.6rem,3.4vw,2.6rem)] font-light leading-[1.35] text-cream/90">
            We believe a room should feel like it was arrived at slowly. That warm
            oak and lime-washed plaster age better than anything shipped overnight.
            That the best-designed spaces are the ones you stop noticing, because
            they simply fit.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-x-12 gap-y-8 border-t border-cream/15 pt-10 md:grid-cols-3">
          {[
            [
              "Founded",
              "AMBE was started in 2013 by a designer and a maker who kept finishing each other's drawings.",
            ],
            [
              "How we're different",
              "One studio, start to finish. We hold the architecture, the palette and the last vase as one decision.",
            ],
            [
              "Where we work",
              "Based in San Francisco, at home in Sonoma and Napa, with completed work in London and Kyoto.",
            ],
          ].map(([k, v]) => (
            <Reveal key={k} className="">
              <Label className="text-cream/40">{k}</Label>
              <p className="mt-4 text-pretty text-sm leading-relaxed text-cream/65">
                {v}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
