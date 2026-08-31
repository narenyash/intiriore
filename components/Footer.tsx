import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer data-nav="dark" className="border-t border-cream/10 bg-black-warm px-6 py-16 md:px-10">
      <div className="mx-auto max-w-shell">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-serif text-2xl tracking-label text-cream">
              {siteConfig.wordmark}
            </p>
            <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-cream/45">
              {siteConfig.tagline}
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[11px] uppercase tracking-label text-cream/60 transition-colors hover:text-cream"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/10 pt-8 text-[11px] uppercase tracking-label text-cream/35 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {siteConfig.name} Studio
          </span>
          <span className="flex gap-6">
            <a href={`mailto:${siteConfig.email}`} className="hover:text-cream/70">
              {siteConfig.email}
            </a>
            <span className="text-cream/50">{siteConfig.instagram}</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
