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

    /* ==========================================================================
       CLEAN INSTITUTIONAL MOTION GRAPHICS ENGINE v5.0 (Apple / Linear / trading.com)
       ========================================================================== */
    @keyframes rxHeroFloat {
      0%, 100% { transform: translate3d(0, 0px, 0); }
      50%      { transform: translate3d(0, -10px, 0); }
    }
    @keyframes rxAuraPulse {
      0%, 100% { opacity: 0.45; transform: scale(1); }
      50%      { opacity: 0.82; transform: scale(1.08); }
    }
    @keyframes rxBarShimmer {
      0%   { transform: translateX(-100%); }
      100% { transform: translateX(220%); }
    }
    @keyframes rxBtnSweep {
      0%   { left: -75%; }
      35%  { left: 125%; }
      100% { left: 125%; }
    }

    .rx-hero-levitate {
      animation: rxHeroFloat 6.5s ease-in-out infinite;
      will-change: transform;
      transition: filter 0.4s ease;
    }
    .rx-hero-levitate:hover {
      filter: drop-shadow(0 30px 60px rgba(0, 168, 118, 0.24));
    }

    /* Primary CTA Shimmer Sweep */
    a.bg-\\[\\#00A876\\],
    button.bg-emerald-600,
    a.bg-emerald-600 {
      position: relative;
      overflow: hidden;
      transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
                  box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1),
                  background-color 0.2s ease !important;
    }
    a.bg-\\[\\#00A876\\]::after,
    button.bg-emerald-600::after,
    a.bg-emerald-600::after {
      content: "";
      position: absolute;
      top: -50%;
      left: -75%;
      width: 45%;
      height: 200%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.28),
        transparent
      );
      transform: rotate(24deg);
      animation: rxBtnSweep 4.8s cubic-bezier(0.16, 1, 0.3, 1) infinite;
      pointer-events: none;
    }
    a.bg-\\[\\#00A876\\]:hover,
    button.bg-emerald-600:hover,
    a.bg-emerald-600:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 28px -6px rgba(0, 168, 118, 0.48) !important;
    }

    /* Progress Bar Shimmer Overlay */
    .rx-bar-animated {
      position: relative;
      overflow: hidden;
      transition: width 1.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
    }
    .rx-bar-animated::after {
      content: "";
      position: absolute;
      inset: 0;
      width: 50%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.38),
        transparent
      );
      animation: rxBarShimmer 2.8s ease-in-out infinite;
      pointer-events: none;
    }

    /* Staggered Scroll-Reveal (Blur-to-Crisp Spring Physics) */
    .rix-reveal {
      opacity: 0;
      transform: translate3d(0, 24px, 0) scale(0.985);
      filter: blur(3px);
      transition: opacity 0.72s cubic-bezier(0.16, 1, 0.3, 1),
                  transform 0.72s cubic-bezier(0.16, 1, 0.3, 1),
                  filter 0.72s cubic-bezier(0.16, 1, 0.3, 1);
      will-change: opacity, transform, filter;
    }
    .rix-reveal.rix-visible {
      opacity: 1;
      transform: translate3d(0, 0, 0) scale(1);
      filter: blur(0px);
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
    // 1. Universal trading.com Pure Black (#000000) Navbar + Strip All Monospace Badge Clutter Across All 6 Pages
    const currentFile = (window.location.pathname.split('/').pop() || 'options-funding.html').toLowerCase();
    const headerEl = document.querySelector('header');
    if (headerEl) {
      const nextEl = headerEl.nextElementSibling;
      if (nextEl && nextEl.tagName === 'DIV' && nextEl.textContent.includes('EQUINIX')) {
        nextEl.remove();
      }
      const navLinks = [
        { href: 'options-funding.html', label: 'Founding 50', isGold: true },
        { href: 'rules.html', label: 'Rules' },
        { href: 'faq.html', label: 'FAQ' },
        { href: 'affiliates.html', label: 'Affiliates' },
        { href: 'contact.html', label: 'Contact' }
      ];
      headerEl.className = 'sticky top-0 z-50 bg-[#000000] border-none';
      headerEl.innerHTML = `
        <div class="w-full max-w-[1320px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <a href="options-funding.html" class="flex items-center gap-2 text-white text-[21px] font-extrabold tracking-[-0.03em] focus:outline-none">
            <span style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:8px;background:rgba(245,158,11,0.14);border:1px solid rgba(245,158,11,0.35);color:#F59E0B;">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </span>
            <span>Options</span><span class="text-[#F59E0B]">Funding</span>
          </a>
          <div class="flex items-center gap-7">
            <nav class="hidden lg:flex items-center gap-7 text-[13.5px] font-semibold">
              ${navLinks
                .map(
                  (l) =>
                    `<a href="${l.href}" class="${
                      currentFile === l.href
                        ? (l.isGold ? 'text-[#F59E0B] font-bold' : 'text-white font-bold')
                        : (l.isGold ? 'text-[#F59E0B]/90 hover:text-[#F59E0B]' : 'text-[#D1D5DB] hover:text-white')
                    } transition-colors whitespace-nowrap">${l.label}</a>`
                )
                .join('')}
            </nav>
            <div class="flex items-center gap-4">
              <a href="#signin" class="hidden sm:inline-block text-[#D1D5DB] hover:text-white font-semibold text-[13.5px] transition-colors whitespace-nowrap">
                Sign in
              </a>
              <a href="rules.html" class="px-5 py-2.5 rounded-[6px] bg-[#00A876] hover:bg-[#009266] text-white font-bold text-[12.5px] tracking-[0.02em] transition-colors whitespace-nowrap inline-flex items-center gap-1.5">
                <span>Get Funded</span>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </a>
            </div>
          </div>
        </div>
      `;
    }

    // Remove all boxy monospace pill badges
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

    // Remove any leftover floating bottom-right control dock
    document.querySelectorAll('.fixed.bottom-4.right-4').forEach((el) => el.remove());

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

    // 3. Universal Material-Symbols-to-Inline-SVG Vector Engine
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

    // 4. Global Light / Dark Mode Switcher in Header
    function syncAllThemeButtons() {
      const isDark = document.documentElement.classList.contains('rix-dark-mode');
      const sunSvg = `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#fbbf24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/></svg>`;
      const moonSvg = `<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#00A876" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
      document.querySelectorAll('.rix-global-theme-btn').forEach((btn) => {
        btn.innerHTML = isDark
          ? `${sunSvg}<span>Light</span>`
          : `${moonSvg}<span>Dark</span>`;
      });
    }

    window.toggleGlobalTheme = function () {
      const htmlEl = document.documentElement;
      htmlEl.classList.toggle('rix-dark-mode');
      const isDark = htmlEl.classList.contains('rix-dark-mode');
      localStorage.setItem('rixGlobalTheme', isDark ? 'dark' : 'light');
      syncAllThemeButtons();
    };

    window.toggleVideoTheme = window.toggleGlobalTheme;

    const headerActionCluster = document.querySelector('header > div > div:last-child > div:last-child');
    if (headerActionCluster) {
      const navThemeBtn = document.createElement('button');
      navThemeBtn.type = 'button';
      navThemeBtn.className =
        'rix-global-theme-btn inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-[4px] border border-white/15 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold transition-all cursor-pointer whitespace-nowrap';
      navThemeBtn.title = 'Switch Between Light & Dark Mode';
      navThemeBtn.addEventListener('click', window.toggleGlobalTheme);
      headerActionCluster.appendChild(navThemeBtn);
    }
    syncAllThemeButtons();

    // 5. HERO CLEAN AMBIENT SVG VECTOR MOTION GRAPHICS + LEVITATING DEVICE SHOWCASE
    const heroSection = document.querySelector('main > section:first-of-type');
    if (heroSection) {
      heroSection.style.position = 'relative';
      heroSection.style.overflow = 'hidden';

      // Inject clean animated SVG liquidity waves & traveling light particles behind the hero
      const motionBg = document.createElement('div');
      motionBg.setAttribute('aria-hidden', 'true');
      motionBg.style.cssText = 'position:absolute;inset:0;pointer-events:none;z-index:1;overflow:hidden;';
      motionBg.innerHTML = `
        <div style="position:absolute;right:8%;top:15%;width:520px;height:520px;border-radius:9999px;background:radial-gradient(circle, rgba(0,168,118,0.16) 0%, rgba(0,168,118,0.03) 50%, transparent 72%);filter:blur(36px);animation:rxAuraPulse 7s ease-in-out infinite;"></div>
        <svg viewBox="0 0 1440 560" fill="none" preserveAspectRatio="none" style="position:absolute;inset:0;width:100%;height:100%;opacity:0.42;">
          <defs>
            <linearGradient id="rxWaveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#00A876" stop-opacity="0"/>
              <stop offset="45%" stop-color="#00A876" stop-opacity="0.48"/>
              <stop offset="85%" stop-color="#38BDF8" stop-opacity="0.32"/>
              <stop offset="100%" stop-color="#00A876" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="rxWaveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#38BDF8" stop-opacity="0"/>
              <stop offset="50%" stop-color="#00A876" stop-opacity="0.24"/>
              <stop offset="100%" stop-color="#00A876" stop-opacity="0"/>
            </linearGradient>
            <filter id="rxGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="blur"/>
              <feMerge>
                <feMergeNode in="blur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <path id="rxCurveA" d="M-80,430 C280,340 520,490 880,310 C1150,175 1310,230 1520,130" stroke="url(#rxWaveGrad1)" stroke-width="1.6" stroke-dasharray="6 6"/>
          <path id="rxCurveB" d="M-80,490 C340,420 640,260 980,360 C1220,430 1360,250 1520,210" stroke="url(#rxWaveGrad2)" stroke-width="1.2"/>
          <circle r="3.5" fill="#00E699" filter="url(#rxGlow)">
            <animateMotion dur="9s" repeatCount="indefinite" path="M-80,430 C280,340 520,490 880,310 C1150,175 1310,230 1520,130"/>
          </circle>
          <circle r="2.5" fill="#38BDF8" filter="url(#rxGlow)">
            <animateMotion dur="12.5s" begin="2s" repeatCount="indefinite" path="M-80,490 C340,420 640,260 980,360 C1220,430 1360,250 1520,210"/>
          </circle>
        </svg>
      `;
      heroSection.insertBefore(motionBg, heroSection.firstChild);

      // Ensure hero inner grid sits above the motion graphic canvas
      const heroContainer = heroSection.querySelector('.max-w-\\[1320px\\], .max-w-\\[1440px\\]');
      if (heroContainer) {
        heroContainer.style.position = 'relative';
        heroContainer.style.zIndex = '2';
      }

      // Apply smooth floating levitation + subtle mouse parallax to the Hero Device image
      const heroImg = heroSection.querySelector('img');
      if (heroImg) {
        heroImg.classList.add('rx-hero-levitate');
        heroSection.addEventListener('mousemove', (e) => {
          const rect = heroSection.getBoundingClientRect();
          const relX = (e.clientX - rect.left) / rect.width - 0.5;
          const relY = (e.clientY - rect.top) / rect.height - 0.5;
          heroImg.style.transform = `translate3d(${(relX * -14).toFixed(1)}px, ${(relY * -10).toFixed(1)}px, 0)`;
        });
        heroSection.addEventListener('mouseleave', () => {
          heroImg.style.transform = '';
        });
      }
    }

    // 6. Staggered Scroll-Reveal + 3D Perspective Tilt + Radial Cursor Spotlight
    const revealTargets = document.querySelectorAll(
      'main section:not(:first-of-type) h2, main section > div > div.bg-white, main section .rounded-2xl, main section .rounded-xl, main section table, article.faq-item'
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
      { threshold: 0.08, rootMargin: '0px 0px -28px 0px' }
    );

    revealTargets.forEach((el, idx) => {
      if (el.closest('main > section:first-of-type')) return;
      el.classList.add('rix-reveal');
      el.style.transitionDelay = `${(idx % 4) * 55}ms`;

      if (el.tagName !== 'H2' && el.tagName !== 'TABLE') {
        el.classList.add('rix-spotlight-card');
        el.addEventListener('mousemove', (e) => {
          const rect = el.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          el.style.setProperty('--mouse-x', `${x}px`);
          el.style.setProperty('--mouse-y', `${y}px`);

          // Gentle 3D tilt (max 2.2 degrees for ultra-clean institutional feel)
          const rotY = (((x / rect.width) - 0.5) * 3.5).toFixed(2);
          const rotX = (((0.5 - (y / rect.height)) * 3.5)).toFixed(2);
          el.style.transform = `perspective(1000px) translateY(-4px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
        });
        el.addEventListener('mouseleave', () => {
          el.style.transform = '';
        });
      }
      observer.observe(el);
    });

    // 7. Animated Progress Bar Fill & Shimmer on Scroll
    const progressBars = document.querySelectorAll('main div[style*="width:"], main div[style*="width :"]');
    const barObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bar = entry.target;
            const targetWidth = bar.getAttribute('data-target-width');
            if (targetWidth) {
              requestAnimationFrame(() => {
                bar.style.width = targetWidth;
              });
            }
            barObserver.unobserve(bar);
          }
        });
      },
      { threshold: 0.2 }
    );

    progressBars.forEach((bar) => {
      const match = (bar.getAttribute('style') || '').match(/width:\s*(\d+(?:\.\d+)?%)/i);
      if (match && match[1]) {
        bar.setAttribute('data-target-width', match[1]);
        bar.style.width = '0%';
        bar.classList.add('rx-bar-animated');
        barObserver.observe(bar);
      }
    });

    // 8. Smooth Odometer Number Counter on Scroll for Key Metrics
    const metricCandidates = document.querySelectorAll(
      'main h3, main .text-3xl, main .text-4xl, main .text-2xl, main .font-black, main .font-extrabold'
    );
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          counterObserver.unobserve(el);
          if (el.children.length > 0) return;

          const raw = el.textContent.trim();
          const m = raw.match(/^(\$?)(\d{1,3}(?:,\d{3})+|\d+(?:\.\d+)?)(%|ms|k|x)?$/i);
          if (!m) return;

          const prefix = m[1] || '';
          const numStr = m[2].replace(/,/g, '');
          const suffix = m[3] || '';
          const targetVal = parseFloat(numStr);
          if (isNaN(targetVal) || targetVal === 0) return;

          const hasCommas = m[2].includes(',');
          const decimals = (numStr.split('.')[1] || '').length;
          const duration = 1050;
          const startTime = performance.now();

          function step(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = targetVal * eased;
            let formatted = decimals > 0 ? current.toFixed(decimals) : Math.round(current).toString();
            if (hasCommas) {
              formatted = Number(formatted).toLocaleString('en-US');
            }
            el.textContent = `${prefix}${formatted}${suffix}`;
            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              el.textContent = raw;
            }
          }
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.35 }
    );

    metricCandidates.forEach((el) => {
      if (!el.closest('header') && !el.closest('main > section:first-of-type')) {
        counterObserver.observe(el);
      }
    });

    // 9. Animate SVG Equity Curve Path on Account Metrics Page
    document.querySelectorAll('svg polyline').forEach((poly) => {
      poly.classList.add('rix-draw-path');
    });
  });
})();
