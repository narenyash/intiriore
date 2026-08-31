"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Reveal, Label } from "@/components/ui";
import { ugcVideos, type UgcVideo } from "@/lib/site";

/** accepts a full URL or a bare 11-char id */
function youtubeId(input: string): string | null {
  if (!input) return null;
  const m = input.match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([\w-]{11})/);
  return m ? m[1] : /^[\w-]{11}$/.test(input) ? input : null;
}

function VideoCard({ handle, caption, poster, youtube, src }: UgcVideo) {
  const [active, setActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const yt = youtubeId(youtube ?? "");
  const playable = Boolean(yt || src);

  return (
    <figure className="group relative overflow-hidden bg-ink">
      <div className="relative aspect-video">
        {active && yt ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${yt}?autoplay=1&rel=0&modestbranding=1`}
            title={caption}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : active && src ? (
          <video
            ref={videoRef}
            src={src}
            poster={`${poster}.jpg`}
            autoPlay
            playsInline
            controls
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <>
            {/* on-brand still as the base; YouTube's own thumbnail layered on top */}
            <Image
              src={`${poster}.avif`}
              alt={caption}
              fill
              sizes="(max-width: 768px) 100vw, 46vw"
              className="object-cover"
            />
            {yt && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={`https://i.ytimg.com/vi/${yt}/maxresdefault.jpg`}
                alt=""
                loading="lazy"
                onError={(e) => {
                  const img = e.currentTarget;
                  if (!img.dataset.fallback) {
                    img.dataset.fallback = "1";
                    img.src = `https://i.ytimg.com/vi/${yt}/mqdefault.jpg`;
                  } else {
                    img.style.display = "none";
                  }
                }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-ink/20 transition-colors duration-500 group-hover:from-ink/70" />

            <button
              type="button"
              onClick={() => playable && setActive(true)}
              aria-label={playable ? `Play ${caption}` : caption}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-cream/70 bg-ink/25 backdrop-blur-sm transition-transform duration-500 ease-quiet group-hover:scale-110">
                <span className="ml-1 border-y-[9px] border-l-[14px] border-y-transparent border-l-cream" />
              </span>
            </button>

            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
              <div>
                <Label className="text-cream/60">{handle}</Label>
                <p className="mt-1 font-serif text-lg font-light text-cream">
                  {caption}
                </p>
              </div>
              <span className="shrink-0 text-[10px] uppercase tracking-label text-cream/45">
                Watch
              </span>
            </figcaption>
          </>
        )}
      </div>
    </figure>
  );
}

export default function UGCVideos() {
  return (
    <section
      id="stories"
      data-nav="dark"
      className="bg-black-warm px-6 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-shell">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <Label className="text-cream/45">Film</Label>
            <h2 className="mt-4 font-serif text-[clamp(1.9rem,4vw,3.2rem)] font-light leading-[1.08] text-cream">
              Walk through a finished project.
            </h2>
          </div>
          <p className="max-w-xs text-pretty text-sm leading-relaxed text-cream/55">
            Walkthroughs and first mornings, shared by the people who live there.
            Tag <span className="text-cream/80">@ambe.studio</span> and we&rsquo;ll
            add yours.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2">
          {ugcVideos.map((v) => (
            <Reveal key={v.handle} delay={0.04}>
              <VideoCard {...v} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
