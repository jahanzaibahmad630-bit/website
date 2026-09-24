/**
 * RixTrade Pro v4.2 — Institutional FinTech Design System, Live OPRA Ticker Tape,
 * Linear-Style Cursor Border Spotlight, Global Light/Dark Theme & Telemetry Engine
 */
(function () {
  const savedTheme = localStorage.getItem('rixGlobalTheme') || 'light';
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('rix-dark-mode');
  }

  const fontLink = document.createElement('link');
  fontLink.rel = 'stylesheet';
  fontLink.href =
    'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap';
  document.head.appendChild(fontLink);

  const style = document.createElement('style');
  style.textContent = `
    :root {
      --font-display: 'Poppins', -apple-system, sans-serif;
      --font-ui: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-quant: 'Poppins', sans-serif;
    }

    body.font-mode-quant {
      --font-display: 'Poppins', sans-serif;
      --font-ui: 'Poppins', sans-serif;
      --font-quant: 'JetBrains Mono', monospace;
    }

    /* Strictly protect Material Symbols Outlined icons so ligatures NEVER turn into raw text overlapping headings */
    .material-symbols-outlined,
    span.material-symbols-outlined {
      font-family: 'Material Symbols Outlined' !important;
      font-weight: normal !important;
      font-style: normal !important;
      line-height: 1 !important;
      letter-spacing: normal !important;
      text-transform: none !important;
      display: inline-flex !important;
      align-items: center;
      justify-content: center;
      white-space: nowrap !important;
      word-wrap: normal !important;
      direction: ltr !important;
      -webkit-font-feature-settings: 'liga' !important;
      font-feature-settings: 'liga' !important;
      -webkit-font-smoothing: antialiased;
      overflow: hidden;
      max-width: 1.4em;
      user-select: none;
    }

    body,
    p:not(.material-symbols-outlined),
    a:not(.material-symbols-outlined),
    button:not(.material-symbols-outlined),
    input,
    select,
    li,
    label,
    div:not(.material-symbols-outlined),
    span:not(.material-symbols-outlined) {
      font-family: var(--font-ui) !important;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    h1, .font-display-lg, .text-display-lg {
      font-family: var(--font-display) !important;
      letter-spacing: -0.03em !important;
      line-height: 1.08 !important;
    }
    h2, h3, h4,
    .font-headline-lg, .text-headline-lg,
    .font-headline-md, .text-headline-md,
    .font-headline-sm, .text-headline-sm {
      font-family: var(--font-display) !important;
      letter-spacing: -0.024em !important;
    }

    .font-mono,
    .font-data-tabular,
    .text-data-tabular,
    .text-mono-metric,
    .font-label-caps,
    .text-label-caps,
    code,
    table tbody td:nth-child(1),
    table tbody td:nth-child(4),
    table tbody td:nth-child(5),
    table tbody td:nth-child(6),
    table tbody td:nth-child(8) {
      font-family: var(--font-quant) !important;
      font-variant-numeric: tabular-nums slashed-zero !important;
      font-feature-settings: "tnum" 1, "zero" 1 !important;
    }

    /* ==========================================================================
       LIVE OPRA OPTIONS FLOW TICKER TAPE (Bloomberg / TradingView Spec)
       ========================================================================== */
    .rix-ticker-wrap {
      width: 100%;
      overflow: hidden;
      background: #0B0E14;
      border-bottom: 1px solid #1E222D;
      height: 30px;
      display: flex;
      align-items: center;
      font-family: var(--font-quant);
      font-size: 11px;
      user-select: none;
      position: relative;
      z-index: 39;
    }
    .rix-ticker-badge {
      background: #131722;
      color: #089981;
      padding: 0 12px;
      height: 100%;
      display: flex;
      align-items: center;
      gap: 6px;
      font-weight: 700;
      font-size: 10px;
      letter-spacing: 0.06em;
      border-right: 1px solid #2A2E39;
      flex-shrink: 0;
      z-index: 2;
    }
    .rix-ticker-track {
      display: flex;
      align-items: center;
      white-space: nowrap;
      animation: rixMarquee 38s linear infinite;
    }
    .rix-ticker-wrap:hover .rix-ticker-track {
      animation-play-state: paused;
    }
    @keyframes rixMarquee {
      0%   { transform: translate3d(0, 0, 0); }
      100% { transform: translate3d(-50%, 0, 0); }
    }
    .rix-ticker-item {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 0 18px;
      border-right: 1px solid rgba(255,255,255,0.06);
      color: #D1D4DC;
    }
    .rix-ticker-sym {
      font-weight: 700;
      color: #FFFFFF;
    }
    .rix-ticker-up {
      color: #089981;
      font-weight: 600;
    }
    .rix-ticker-down {
      color: #F23645;
      font-weight: 600;
    }

    /* ==========================================================================
       LINEAR / STRIPE CURSOR-TRACKING RADIAL SPOTLIGHT ON CARDS
       ========================================================================== */
    .rix-spotlight-card {
      position: relative;
      overflow: hidden;
      transition: transform 0.26s cubic-bezier(0.16, 1, 0.3, 1),
                  box-shadow 0.26s cubic-bezier(0.16, 1, 0.3, 1),
                  border-color 0.26s ease !important;
    }
    .rix-spotlight-card::before {
      content: "";
      position: absolute;
      inset: 0;
      background: radial-gradient(
        340px circle at var(--mouse-x, -500px) var(--mouse-y, -500px),
        rgba(8, 153, 129, 0.09),
        transparent 60%
      );
      pointer-events: none;
      z-index: 0;
      transition: opacity 0.3s ease;
    }
    html.rix-dark-mode .rix-spotlight-card::before {
      background: radial-gradient(
        340px circle at var(--mouse-x, -500px) var(--mouse-y, -500px),
        rgba(8, 153, 129, 0.16),
        transparent 60%
      );
    }
    .rix-spotlight-card:hover {
      transform: translateY(-3px) !important;
      border-color: rgba(8, 153, 129, 0.45) !important;
      box-shadow: 0 18px 36px -12px rgba(8, 153, 129, 0.14),
                  0 4px 12px -2px rgba(15, 23, 42, 0.06),
                  inset 0 1px 0 0 rgba(255, 255, 255, 0.15) !important;
    }

    /* ==========================================================================
       GLOBAL INSTITUTIONAL DARK MODE ENGINE (html.rix-dark-mode)
       ========================================================================== */
    html.rix-dark-mode body,
    html.rix-dark-mode main,
    html.rix-dark-mode .bg-surface-base,
    html.rix-dark-mode .bg-\\[\\#ffffff\\],
    html.rix-dark-mode .bg-\\[\\#f8fafc\\] {
      background-color: #060B14 !important;
      color: #F1F5F9 !important;
    }

    /* trading.com Pure Black (#000000) Header Across All 6 Pages */
    header {
      background-color: #000000 !important;
      border-bottom: none !important;
      box-shadow: none !important;
    }
    header span,
    header a:not(.bg-\\[\\#00A876\\]):not(.bg-emerald-600):not(.bg-primary) {
      color: #FFFFFF !important;
    }
    header nav a {
      color: #D1D5DB !important;
    }
    header nav a:hover,
    header nav a.border-b-2 {
      color: #FFFFFF !important;
      border-bottom-color: #00A876 !important;
    }

    html.rix-dark-mode section.bg-white,
    html.rix-dark-mode section.bg-slate-50,
    html.rix-dark-mode section.bg-surface-subtle,
    html.rix-dark-mode .bg-surface-subtle,
    html.rix-dark-mode footer,
    html.rix-dark-mode footer.bg-white,
    html.rix-dark-mode footer.bg-\\[\\#f8fafc\\] {
      background-color: #0B0E14 !important;
      border-color: #1E222D !important;
    }

    html.rix-dark-mode main .bg-white,
    html.rix-dark-mode footer .bg-white,
    html.rix-dark-mode .faq-item,
    html.rix-dark-mode .bg-surface-card,
    html.rix-dark-mode .bg-surface-container,
    html.rix-dark-mode .bg-surface-container-low {
      background-color: #131722 !important;
      border-color: #2A2E39 !important;
      color: #F1F5F9 !important;
      box-shadow: 0 10px 28px -6px rgba(0, 0, 0, 0.55), inset 0 1px 0 0 rgba(255,255,255,0.04) !important;
    }

    html.rix-dark-mode .bg-slate-50,
    html.rix-dark-mode .bg-slate-50\\/50,
    html.rix-dark-mode .bg-slate-50\\/70,
    html.rix-dark-mode .bg-slate-50\\/75,
    html.rix-dark-mode .bg-slate-100,
    html.rix-dark-mode .bg-slate-100\\/90,
    html.rix-dark-mode .bg-surface-panel,
    html.rix-dark-mode select,
    html.rix-dark-mode input[type="text"],
    html.rix-dark-mode input[type="number"] {
      background-color: #1E222D !important;
      border-color: #2A2E39 !important;
      color: #F8FAFC !important;
    }

    html.rix-dark-mode .bg-emerald-50,
    html.rix-dark-mode .bg-emerald-50\\/40,
    html.rix-dark-mode .bg-emerald-50\\/60,
    html.rix-dark-mode .bg-emerald-100 {
      background-color: rgba(8, 153, 129, 0.15) !important;
      border-color: rgba(8, 153, 129, 0.38) !important;
      color: #089981 !important;
    }
    html.rix-dark-mode .bg-amber-50,
    html.rix-dark-mode .bg-amber-100\\/70 {
      background-color: rgba(245, 158, 11, 0.14) !important;
      border-color: rgba(245, 158, 11, 0.35) !important;
      color: #FBBF24 !important;
    }
    html.rix-dark-mode .bg-rose-50,
    html.rix-dark-mode .bg-red-50,
    html.rix-dark-mode .bg-rose-100 {
      background-color: rgba(242, 54, 69, 0.14) !important;
      border-color: rgba(242, 54, 69, 0.35) !important;
      color: #F23645 !important;
    }
    html.rix-dark-mode .bg-teal-50 {
      background-color: rgba(20, 184, 166, 0.14) !important;
      border-color: rgba(20, 184, 166, 0.35) !important;
      color: #2DD4BF !important;
    }

    html.rix-dark-mode .bg-gradient-to-r:not(#rules-hd-hero *):not(#metrics-hd-hero *):not(#faq-hd-hero *):not(#affiliates-hd-hero *):not(#founding-50-hero *):not(#rixtrade-server-hero *),
    html.rix-dark-mode .bg-gradient-to-b:not(#rules-hd-hero *):not(#metrics-hd-hero *):not(#faq-hd-hero *):not(#affiliates-hd-hero *):not(#founding-50-hero *):not(#rixtrade-server-hero *) {
      background-image: linear-gradient(135deg, #131722 0%, #0D1F1D 50%, #131722 100%) !important;
      border-color: rgba(8, 153, 129, 0.35) !important;
    }
    html.rix-dark-mode .bg-clip-text {
      background-image: linear-gradient(90deg, #FBBF24 0%, #F59E0B 45%, #089981 100%) !important;
      -webkit-background-clip: text !important;
      background-clip: text !important;
      color: transparent !important;
    }

    html.rix-dark-mode .text-slate-900,
    html.rix-dark-mode .text-slate-800,
    html.rix-dark-mode .text-text-primary,
    html.rix-dark-mode h1,
    html.rix-dark-mode h2,
    html.rix-dark-mode h3,
    html.rix-dark-mode h4 {
      color: #F8FAFC !important;
    }
    html.rix-dark-mode .text-slate-700,
    html.rix-dark-mode .text-slate-600,
    html.rix-dark-mode .text-text-secondary {
      color: #94A3B8 !important;
    }
    html.rix-dark-mode .text-slate-500,
    html.rix-dark-mode .text-slate-400,
    html.rix-dark-mode .text-text-muted {
      color: #64748B !important;
    }
    html.rix-dark-mode .text-emerald-700,
    html.rix-dark-mode .text-emerald-800,
    html.rix-dark-mode .text-emerald-900,
    html.rix-dark-mode .text-primary {
      color: #089981 !important;
    }
    html.rix-dark-mode .text-amber-700,
    html.rix-dark-mode .text-amber-800,
    html.rix-dark-mode .text-amber-900,
    html.rix-dark-mode .text-amber-950 {
      color: #FBBF24 !important;
    }

    html.rix-dark-mode .border-slate-200,
    html.rix-dark-mode .border-slate-300,
    html.rix-dark-mode .border-slate-100,
    html.rix-dark-mode .border-surface-border,
    html.rix-dark-mode .border-surface-border-subtle,
    html.rix-dark-mode tr,
    html.rix-dark-mode td,
    html.rix-dark-mode th {
      border-color: #2A2E39 !important;
    }
    html.rix-dark-mode tbody tr:hover {
      background-color: rgba(42, 46, 57, 0.5) !important;
    }

    /* Sleek translucent bottom-right studio control dock (fades discreetly until hovered) */
    .fixed.bottom-4.right-4 {
      opacity: 0.42;
      transition: opacity 0.25s ease, transform 0.25s ease;
    }
    .fixed.bottom-4.right-4:hover {
      opacity: 1;
    }

    @keyframes rixPageFadeIn {
      from { opacity: 0.4; transform: translateY(4px); }
      to   { opacity: 1;   transform: translateY(0); }
    }

    .rix-reveal {
      opacity: 0;
      transform: translateY(20px) scale(0.99);
      transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                  transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
      will-change: opacity, transform;
    }
    .rix-reveal.rix-visible {
      opacity: 1;
      transform: translateY(0) scale(1);
    }

    .rix-tick-up {
      animation: rixFlashGreen 0.7s ease-out;
      font-variant-numeric: tabular-nums;
    }
    @keyframes rixFlashGreen {
      0%   { background-color: rgba(8, 153, 129, 0.28); border-radius: 4px; }
      100% { background-color: transparent; }
    }

    .rix-draw-path {
      stroke-dasharray: 1400;
      stroke-dashoffset: 1400;
      animation: rixDrawSvg 2.1s cubic-bezier(0.16, 1, 0.3, 1) 0.25s forwards;
    }
    @keyframes rixDrawSvg {
      to { stroke-dashoffset: 0; }
    }

    #rixToastContainer {
      position: fixed;
      top: 84px;
      right: 20px;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 10px;
      pointer-events: none;
    }
    .rix-toast {
      pointer-events: auto;
      min-width: 320px;
      max-width: 420px;
      background: rgba(19, 23, 34, 0.97);
      backdrop-filter: blur(12px);
      color: #ffffff;
      border-radius: 10px;
      padding: 14px 16px;
      box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.6);
      border: 1px solid #2A2E39;
      border-left: 4px solid #089981;
      font-family: var(--font-ui);
      animation: rixToastIn 0.32s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    .rix-toast.rix-toast-guard {
      border-left-color: #f59e0b;
    }
    @keyframes rixToastIn {
      from { opacity: 0; transform: translateX(30px) scale(0.95); }
      to   { opacity: 1; transform: translateX(0) scale(1); }
    }
  `;
  document.head.appendChild(style);

  document.addEventListener('DOMContentLoaded', () => {
    const savedFontMode = localStorage.getItem('rixFontMode') || 'jakarta';
    if (savedFontMode === 'quant') {
      document.body.classList.add('font-mode-quant');
    }

    // 1. Universal trading.com Pure Black (#000000) Navbar + Strip All Monospace Badge Clutter Across All 6 Pages
    const currentFile = (window.location.pathname.split('/').pop() || 'options-funding.html').toLowerCase();
    const headerEl = document.querySelector('header');
    if (headerEl) {
      // Remove any sub-header ticker strip right after header (e.g., on rixtrade-platform.html)
      const nextEl = headerEl.nextElementSibling;
      if (nextEl && nextEl.tagName === 'DIV' && nextEl.textContent.includes('EQUINIX')) {
        nextEl.remove();
      }
      const navLinks = [
        { href: 'options-funding.html', label: 'Founding 50' },
        { href: 'rules.html', label: 'Rules' },
        { href: 'account-metrics.html', label: 'Account Metrics' },
        { href: 'rixtrade-platform.html', label: 'RixTrade Platform' },
        { href: 'faq.html', label: 'FAQ' },
        { href: 'affiliates.html', label: 'Affiliates' }
      ];
      headerEl.className = 'sticky top-0 z-50 bg-[#000000] border-none';
      headerEl.innerHTML = `
        <div class="w-full max-w-[1320px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <a href="options-funding.html" class="flex items-center gap-0.5 text-white text-[22px] font-extrabold tracking-[-0.03em] focus:outline-none">
            <span>optionsfunding</span><span class="text-[#00A876]">.co</span>
          </a>
          <div class="flex items-center gap-7">
            <nav class="hidden lg:flex items-center gap-7 text-[13.5px] font-semibold">
              ${navLinks
                .map(
                  (l) =>
                    `<a href="${l.href}" class="${
                      currentFile === l.href
                        ? 'text-white font-bold'
                        : 'text-[#D1D5DB] hover:text-white'
                    } transition-colors whitespace-nowrap">${l.label}</a>`
                )
                .join('')}
            </nav>
            <div class="flex items-center gap-5">
              <a href="options-funding.html#get-funded" class="px-5 py-2.5 rounded-[4px] bg-[#00A876] hover:bg-[#009266] text-white font-bold text-[12px] uppercase tracking-[0.04em] transition-colors whitespace-nowrap">
                GET FUNDED
              </a>
              <a href="#signin" class="hidden sm:inline-block text-white hover:text-[#00A876] font-semibold text-[13.5px] transition-colors whitespace-nowrap">
                Log In
              </a>
            </div>
          </div>
        </div>
      `;
    }

    // Remove all boxy monospace pill badges (e.g. "FOUNDING 50 EVALUATION MATRIX", "EOD SHIELD...", "//", etc.)
    document.querySelectorAll('main div.inline-flex, main span.inline-flex').forEach((badge) => {
      const txt = badge.textContent.trim();
      if (
        txt.includes('//') ||
        txt.includes('MATRIX') ||
        txt.includes('SNAPSHOT') ||
        txt.includes('ENGINE') ||
        txt.includes('PROTOCOL') ||
        txt.includes('TELEMETRY') ||
        badge.classList.contains('font-mono') ||
        badge.querySelector('.animate-ping, .animate-pulse')
      ) {
        badge.remove();
      }
    });

    // 2. Toast Container
    const toastContainer = document.createElement('div');
    toastContainer.id = 'rixToastContainer';
    document.body.appendChild(toastContainer);

    function showRixToast(title, subtitle, meta, isGuard = false) {
      const toast = document.createElement('div');
      toast.className = 'rix-toast' + (isGuard ? ' rix-toast-guard' : '');
      const badgeColor = isGuard ? '#fbbf24' : '#089981';
      toast.innerHTML = `
        <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:4px;">
          <span style="font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:${badgeColor};font-family:var(--font-quant);">
            ${title}
          </span>
          <span style="font-size:10px;font-family:var(--font-quant);color:#94a3b8;background:rgba(255,255,255,0.08);padding:2px 6px;border-radius:4px;">
            ${meta}
          </span>
        </div>
        <div style="font-size:13px;font-weight:600;color:#f8fafc;line-height:1.4;">
          ${subtitle}
        </div>
      `;
      toastContainer.appendChild(toast);
      setTimeout(() => {
        toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(20px)';
        setTimeout(() => toast.remove(), 300);
      }, 4200);
    }

    // Universal Material-Symbols-to-Inline-SVG Vector Engine (100% Immune to Font-Load or CSS Issues)
    const SVG_ICON_MAP = {
      shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
      verified_user: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
      gpp_good: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
      security: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
      diamond: '<path d="M6 3h12l4 6-10 12L2 9z"/><path d="M2 9h20"/>',
      account_balance_wallet: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M16 12h.01"/>',
      account_balance: '<path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"/>',
      trending_up: '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
      paid: '<circle cx="12" cy="12" r="10"/><path d="M15 9.354a4 4 0 1 0 0 5.292M12 6v12"/>',
      payments: '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2"/>',
      currency_exchange: '<circle cx="12" cy="12" r="10"/><path d="M15 9.354a4 4 0 1 0 0 5.292M12 6v12"/>',
      conversion_path: '<polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/>',
      check_circle: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
      check: '<polyline points="20 6 9 17 4 12"/>',
      verified: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
      military_tech: '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>',
      lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
      lock_open: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>',
      bolt: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
      speed: '<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>',
      search: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
      sync: '<path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/>',
      arrow_forward: '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
      expand_more: '<polyline points="6 9 12 15 18 9"/>',
      keyboard_arrow_down: '<polyline points="6 9 12 15 18 9"/>',
      add: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
      remove: '<line x1="5" y1="12" x2="19" y2="12"/>',
      candlestick_chart: '<path d="M9 5v4"/><rect width="4" height="6" x="7" y="9" rx="1"/><path d="M9 15v2"/><path d="M17 3v2"/><rect width="4" height="8" x="15" y="5" rx="1"/><path d="M17 13v3"/>',
      query_stats: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
      analytics: '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',
      schedule: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
      water_loss: '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>',
      contract: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>',
      handshake: '<path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/>',
      default: '<circle cx="12" cy="12" r="8"/><path d="m9 12 2 2 4-4"/>'
    };

    function convertAllMaterialIconsToSvg() {
      document.querySelectorAll('.material-symbols-outlined').forEach((el) => {
        if (el.querySelector('svg')) return;
        const rawName = (el.getAttribute('data-icon') || el.textContent || '').trim().toLowerCase();
        const svgPath = SVG_ICON_MAP[rawName] || SVG_ICON_MAP.default;
        el.setAttribute('data-icon', rawName);
        el.innerHTML = `<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;flex-shrink:0;">${svgPath}</svg>`;
      });
    }
    convertAllMaterialIconsToSvg();

    // 3. Global Light / Dark Mode Switcher (Using Pure Inline SVG Icons)
    function syncAllThemeButtons() {
      const isDark = document.documentElement.classList.contains('rix-dark-mode');
      const sunSvg = `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#fbbf24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/></svg>`;
      const moonSvg = `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#00A876" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
      document.querySelectorAll('.rix-global-theme-btn').forEach((btn) => {
        btn.innerHTML = isDark
          ? `${sunSvg}<span>Light</span>`
          : `${moonSvg}<span>Dark</span>`;
      });
      const legacyLabel = document.getElementById('videoThemeLabel');
      if (legacyLabel) {
        legacyLabel.textContent = isDark ? 'Light Mode' : 'Dark Mode';
      }
    }

    window.toggleGlobalTheme = function () {
      const htmlEl = document.documentElement;
      htmlEl.classList.toggle('rix-dark-mode');
      const isDark = htmlEl.classList.contains('rix-dark-mode');
      localStorage.setItem('rixGlobalTheme', isDark ? 'dark' : 'light');
      syncAllThemeButtons();
      showRixToast(
        isDark ? '🌙 TRADINGVIEW OBSIDIAN DARK MODE' : '☀️ CRISP LIGHT INSTITUTIONAL MODE',
        isDark
          ? 'Switched entire 6-page suite to TradingView Obsidian (#0B0E14 / #131722) terminal palette.'
          : 'Switched entire 6-page suite to Crisp Light institutional palette.',
        isDark ? 'DARK THEME' : 'LIGHT THEME',
        false
      );
    };

    window.toggleVideoTheme = window.toggleGlobalTheme;

    const headerActionCluster = document.querySelector('header > div > div:last-child > div:last-child');
    if (headerActionCluster) {
      const navThemeBtn = document.createElement('button');
      navThemeBtn.type = 'button';
      navThemeBtn.className =
        'rix-global-theme-btn inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-[4px] border border-white/15 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold transition-all cursor-pointer whitespace-nowrap';
      navThemeBtn.title = 'Switch Whole Website Between Light & Dark Mode';
      navThemeBtn.addEventListener('click', window.toggleGlobalTheme);
      headerActionCluster.appendChild(navThemeBtn);
    }

    let bottomBar = document.querySelector('.fixed.bottom-4.right-4');
    if (!bottomBar) {
      bottomBar = document.createElement('div');
      bottomBar.className =
        'fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg rounded-xl p-1.5';
      document.body.appendChild(bottomBar);

      const bottomThemeBtn = document.createElement('button');
      bottomThemeBtn.type = 'button';
      bottomThemeBtn.className =
        'rix-global-theme-btn inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-sky-900 bg-sky-50 hover:bg-sky-100 border border-sky-200 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer';
      bottomThemeBtn.addEventListener('click', window.toggleGlobalTheme);
      bottomBar.appendChild(bottomThemeBtn);
    }

    const fontBtn = document.createElement('button');
    fontBtn.className =
      'inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer';
    const updateFontLabel = () => {
      const isQuant = document.body.classList.contains('font-mode-quant');
      fontBtn.innerHTML = `<span class="material-symbols-outlined text-[15px] text-amber-600">font_download</span><span>${
        isQuant ? 'Font: Space Grotesk + Plex' : 'Font: Euclid/Jakarta + JetBrains'
      }</span>`;
    };
    updateFontLabel();
    fontBtn.addEventListener('click', () => {
      document.body.classList.toggle('font-mode-quant');
      const isQuant = document.body.classList.contains('font-mode-quant');
      localStorage.setItem('rixFontMode', isQuant ? 'quant' : 'jakarta');
      updateFontLabel();
      showRixToast(
        'TYPOGRAPHY ENGINE SWITCHED',
        isQuant
          ? 'Active Stack: Space Grotesk (Headlines) + Inter (UI) + IBM Plex Mono (Option Chains & Greeks)'
          : 'Active Stack: Plus Jakarta Sans (Headlines) + Inter (UI) + JetBrains Mono (Option Chains & Greeks)',
        '3-TIER FONT',
        false
      );
    });
    bottomBar.appendChild(fontBtn);

    syncAllThemeButtons();

    // 4. Linear / Stripe Radial Cursor Spotlight + Scroll Reveal
    const revealTargets = document.querySelectorAll(
      'main section > div > div.bg-white, main section .rounded-xl, main section table, article.faq-item'
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('rix-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    revealTargets.forEach((el, idx) => {
      if (
        el.closest('#founding-50-hero') ||
        el.closest('#rixtrade-server-hero') ||
        el.closest('#rules-hd-hero') ||
        el.closest('#metrics-hd-hero') ||
        el.closest('#faq-hd-hero') ||
        el.closest('#affiliates-hd-hero')
      ) return;
      el.classList.add('rix-reveal', 'rix-spotlight-card');
      el.style.transitionDelay = `${(idx % 4) * 55}ms`;
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        el.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        el.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      });
      observer.observe(el);
    });

    // 5. Animate SVG Equity Curve Path on Account Metrics Page
    document.querySelectorAll('svg polyline').forEach((poly) => {
      poly.classList.add('rix-draw-path');
    });

    // 6. Live Simulated OPRA Telemetry Micro-Ticks
    const spyPrices = [
      { ask: '2.45', bid: '2.43', iv: '14.8%', delta: '0.54', latency: '0.08ms' },
      { ask: '2.47', bid: '2.45', iv: '14.9%', delta: '0.55', latency: '0.07ms' },
      { ask: '2.44', bid: '2.42', iv: '14.7%', delta: '0.53', latency: '0.08ms' },
      { ask: '2.48', bid: '2.46', iv: '15.0%', delta: '0.56', latency: '0.06ms' }
    ];
    let tickIdx = 0;

    setInterval(() => {
      tickIdx = (tickIdx + 1) % spyPrices.length;
      const t = spyPrices[tickIdx];
      document.querySelectorAll('span').forEach((sp) => {
        if (sp.textContent.includes('Ask: $2.4') && sp.textContent.includes('IV: 14.')) {
          sp.textContent = `Ask: $${t.ask} | Bid: $${t.bid} | IV: ${t.iv}`;
          sp.classList.remove('rix-tick-up');
          void sp.offsetWidth;
          sp.classList.add('rix-tick-up');
        }
        if (sp.textContent.includes('Latency: 0.0')) {
          sp.textContent = `Latency: ${t.latency} direct via Equinix NY4`;
        }
      });
    }, 2400);

    // 7. Interactive 1-Click Buy & Contract Lot Selector
    let activeLots = 10;
    const optionPrice = 2.45;

    document.querySelectorAll('button').forEach((btn) => {
      const txt = btn.textContent.trim();

      if (['1', '5', '10', '20'].includes(txt) && btn.closest('section')) {
        btn.addEventListener('click', () => {
          activeLots = parseInt(txt, 10);
          const totalCost = (activeLots * optionPrice * 100).toLocaleString('en-US');
          const parent = btn.parentElement;
          if (parent) {
            parent.querySelectorAll('button').forEach((b) => {
              b.className =
                'py-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-800 font-mono text-xs font-bold border border-slate-200 transition-colors';
            });
            btn.className =
              'py-2 rounded-lg bg-amber-500 text-slate-950 font-mono text-xs font-extrabold shadow-xs transition-colors';
          }
          document.querySelectorAll('button').forEach((cta) => {
            if (cta.textContent.includes('Confirm 1-Click Buy Call')) {
              cta.innerHTML = `<span class="material-symbols-outlined text-[20px]">bolt</span> Confirm 1-Click Buy Call (${activeLots} Lots • $${totalCost})`;
            }
          });
          showRixToast(
            'LOT SIZING UPDATED',
            `Selected ${activeLots} SPY 585 Call Contracts ($${totalCost} Margin Impact — ${Math.round(
              (activeLots / 20) * 100
            )}% of 20 Max Limit)`,
            'GUARDRAIL OK',
            false
          );
        });
      }

      if (
        txt.includes('1-CLICK BUY') ||
        txt.includes('Confirm 1-Click Buy Call') ||
        txt.includes('Submit Order')
      ) {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const totalCost = (activeLots * optionPrice * 100).toLocaleString('en-US');
          showRixToast(
            '⚡ DMA ORDER FILLED • 0.08ms',
            `Executed BUY +${activeLots} SPY 585 CALL @ $${optionPrice.toFixed(
              2
            )} ($${totalCost}) via Equinix NY4 Direct Bridge.`,
            'OPRA L2 FILL',
            false
          );
        });
      }

      if (txt === '+' || txt === '-') {
        btn.addEventListener('click', () => {
          const container = btn.closest('div')?.parentElement;
          const input = container ? container.querySelector('input[type="number"]') : null;
          if (input) {
            let val = parseInt(input.value || '4', 10);
            if (txt === '+') {
              if (val >= 20) {
                showRixToast(
                  '🛡️ SOFT SAFEGUARD TRIGGERED',
                  'Order capped at 20 SPY contracts (Max Contract Limit). Excess quantity rejected automatically — Zero account breach!',
                  'RULE SHIELD',
                  true
                );
                return;
              }
              val += 1;
            } else {
              val = Math.max(1, val - 1);
            }
            input.value = val;
            activeLots = val;
          }
        });
      }
    });
  });
})();
