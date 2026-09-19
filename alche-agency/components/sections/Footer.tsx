"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="relative py-20 tech-grid">
      <div className="mx-auto max-w-[1400px] px-5">
        <div className="hairline p-8 bg-[var(--bg)]/60 backdrop-blur">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
            <div>
              <div className="big-title text-[18px] tracking-[0.22em]">ALCHE</div>
              <div className="mt-2 mono text-[11px] text-[var(--muted)]">
                BLUEPRINT / NAV / SOCIAL
              </div>

              <div className="mt-6 text-[12px] text-[var(--muted)] max-w-[44ch]">
                Built for realtime interaction: shader backdrops, scroll-coupled scene motion,
                and a minimal brutalist information hierarchy.
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-[12px]">
              <div>
                <div className="mono text-[11px] text-[var(--muted)]">NAV</div>
                <div className="mt-3 space-y-2">
                  <a href="#news" data-cursor="hover" className="block hover:opacity-80">News</a>
                  <a href="#works" data-cursor="hover" className="block hover:opacity-80">Works</a>
                  <a href="#about" data-cursor="hover" className="block hover:opacity-80">About</a>
                </div>
              </div>
              <div>
                <div className="mono text-[11px] text-[var(--muted)]">SOCIAL</div>
                <div className="mt-3 space-y-2">
                  <a href="#" data-cursor="hover" className="block hover:opacity-80">X</a>
                  <a href="#" data-cursor="hover" className="block hover:opacity-80">Instagram</a>
                  <a href="#" data-cursor="hover" className="block hover:opacity-80">GitHub</a>
                </div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="mono text-[11px] text-[var(--muted)]">STAMP</div>
                <div className="mt-3 mono text-[11px] text-[var(--muted)]">
                  {new Date().toISOString()}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 h-px w-full bg-[var(--line)]" />

          <div className="mt-10 flex items-end justify-between">
            <div className="mono text-[11px] text-[var(--muted)]">
              © {year} ALCHE — ALL SYSTEMS NOMINAL
            </div>
            <div className="big-title text-[56px] leading-none opacity-20 select-none">
              A
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
