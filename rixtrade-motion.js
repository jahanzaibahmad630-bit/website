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
    'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap';
  document.head.appendChild(fontLink);

  const style = document.createElement('style');
  style.textContent = `
    :root {
      --font-display: 'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif;
      --font-ui: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-quant: 'JetBrains Mono', 'IBM Plex Mono', monospace;
    }

    body.font-mode-quant {
      --font-display: 'Space Grotesk', 'Plus Jakarta Sans', sans-serif;
      --font-ui: 'Inter', sans-serif;
      --font-quant: 'IBM Plex Mono', 'JetBrains Mono', monospace;
    }

    body {
      font-family: var(--font-ui) !important;
      font-feature-settings: "cv02" 1, "cv03" 1, "cv04" 1, "cv11" 1, "ss01" 1;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      transition: background-color 0.25s ease, color 0.25s ease;
      animation: rixPageFadeIn 0.32s cubic-bezier(0.16, 1, 0.3, 1) both;
    }

    /* TradingView Euclid Circular B Proportions: Tight -0.035em tracking & 1.06 line-height */
    h1, .font-display-lg, .text-display-lg {
      font-family: var(--font-display) !important;
      letter-spacing: -0.036em !important;
      line-height: 1.06 !important;
    }
    h2, h3, h4,
    .font-headline-lg, .text-headline-lg,
    .font-headline-md, .text-headline-md,
    .font-headline-sm, .text-headline-sm {
      font-family: var(--font-display) !important;
      letter-spacing: -0.026em !important;
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

    /* Universal Hero-Matched Obsidian Glass Command Header (All 6 Pages) */
    header {
      background-color: rgba(7, 13, 25, 0.96) !important;
      border-bottom: 1px solid rgba(16, 185, 129, 0.28) !important;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.38) !important;
    }
    header span,
    header a:not(.bg-amber-500):not(.bg-emerald-600):not(.bg-primary) {
      color: #E2E8F0 !important;
    }
    header a:hover:not(.bg-amber-500):not(.bg-emerald-600):not(.bg-primary) {
      color: #FBBF24 !important;
    }
    header a.border-b-2 {
      color: #34D399 !important;
      border-bottom-color: #10B981 !important;
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

    /* ==========================================================================
       INSTITUTIONAL MOTION GRAPHICS ENGINE (ALL 6 PAGES)
       ========================================================================== */
    /* 1. Top Viewport Laser Scroll Progress Bar */
    #rixScrollLaserBar {
      position: fixed;
      top: 0;
      left: 0;
      height: 3px;
      width: 0%;
      z-index: 100000;
      background: linear-gradient(90deg, #089981 0%, #10b981 55%, #f59e0b 100%);
      box-shadow: 0 0 14px rgba(16, 185, 129, 0.85), 0 0 28px rgba(245, 158, 11, 0.55);
      transition: width 0.08s linear;
      pointer-events: none;
    }
    #rixScrollLaserBar::after {
      content: '';
      position: absolute;
      right: -4px;
      top: -2.5px;
      width: 8px;
      height: 8px;
      border-radius: 9999px;
      background: #fbbf24;
      box-shadow: 0 0 12px 3px rgba(251, 191, 36, 0.95);
    }

    /* 2. Animated Conic-Gradient Laser Border Beam on Featured Cards */
    @keyframes rixBorderSpin {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    .rix-laser-card {
      position: relative;
      overflow: hidden;
    }
    .rix-laser-card::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      padding: 1.5px;
      background: linear-gradient(120deg, rgba(16,185,129,0.75), rgba(245,158,11,0.65), transparent 60%);
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      pointer-events: none;
      opacity: 0.65;
      animation: rixPulseGlow 3.2s ease-in-out infinite alternate;
    }
    @keyframes rixPulseGlow {
      0%   { opacity: 0.32; filter: hue-rotate(0deg); }
      100% { opacity: 0.88; filter: hue-rotate(18deg); }
    }

    /* 3. 3D Magnetic Tilt & Specular Glare */
    .rix-tilt-card {
      transform-style: preserve-3d;
      will-change: transform;
    }

    /* 4. Live Ticking Green / Red Flash Animations */
    .rix-tick-down {
      animation: rixFlashRed 0.7s ease-out;
      font-variant-numeric: tabular-nums;
    }
    @keyframes rixFlashRed {
      0%   { background-color: rgba(242, 54, 69, 0.28); border-radius: 4px; }
      100% { background-color: transparent; }
    }

    /* 5. Live Equalizer Bars for Telemetry HUD */
    @keyframes rixEqBar {
      0%, 100% { transform: scaleY(0.35); }
      50%      { transform: scaleY(1); }
    }
    .rix-eq-bar {
      width: 2.5px;
      height: 12px;
      background: #10b981;
      border-radius: 2px;
      transform-origin: bottom;
      animation: rixEqBar 0.85s ease-in-out infinite;
    }
    .rix-eq-bar:nth-child(2) { animation-delay: 0.18s; background: #34d399; }
    .rix-eq-bar:nth-child(3) { animation-delay: 0.36s; background: #fbbf24; }
    .rix-eq-bar:nth-child(4) { animation-delay: 0.52s; background: #10b981; }

    /* 6. Bottom-Left Live Institutional Order-Flow HUD Pill */
    #rixLiveExecutionHud {
      position: fixed;
      bottom: 16px;
      left: 16px;
      z-index: 9990;
      display: flex;
      align-items: center;
      gap: 10px;
      background: rgba(7, 13, 25, 0.92);
      border: 1px solid rgba(16, 185, 129, 0.42);
      box-shadow: 0 14px 34px rgba(0, 0, 0, 0.55), 0 0 20px rgba(16, 185, 129, 0.14);
      backdrop-filter: blur(14px);
      padding: 8px 14px;
      border-radius: 9999px;
      color: #f8fafc;
      font-family: var(--font-mono);
      font-size: 11px;
      cursor: pointer;
      transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease;
      max-width: calc(100vw - 32px);
    }
    #rixLiveExecutionHud:hover {
      transform: translateY(-2px) scale(1.015);
      border-color: #fbbf24;
    }
    @media (max-width: 768px) {
      #rixLiveExecutionHud { display: none; }
    }
  `;
  document.head.appendChild(style);

  document.addEventListener('DOMContentLoaded', () => {
    const savedFontMode = localStorage.getItem('rixFontMode') || 'jakarta';
    if (savedFontMode === 'quant') {
      document.body.classList.add('font-mode-quant');
    }

    // 1. Inject Bloomberg / TradingView Live OPRA Options Flow Ticker Tape right below <header>
    const headerEl = document.querySelector('header');
    if (headerEl && !document.getElementById('rixLiveTickerBar')) {
      const tickerBar = document.createElement('div');
      tickerBar.id = 'rixLiveTickerBar';
      tickerBar.className = 'rix-ticker-wrap';
      const tapeItems = `
        <div class="rix-ticker-item"><span class="rix-ticker-sym">SPY 585C 0DTE</span> <span>$2.45</span> <span class="rix-ticker-up">+18.4%</span></div>
        <div class="rix-ticker-item"><span class="rix-ticker-sym">QQQ 480P 0DTE</span> <span>$1.92</span> <span class="rix-ticker-down">-6.2%</span></div>
        <div class="rix-ticker-item"><span class="rix-ticker-sym">NVDA 125C</span> <span>$4.85</span> <span class="rix-ticker-up">+31.0%</span></div>
        <div class="rix-ticker-item"><span class="rix-ticker-sym">SPX 5850C</span> <span>$14.20</span> <span class="rix-ticker-up">+42.5%</span></div>
        <div class="rix-ticker-item"><span class="rix-ticker-sym">TSLA 255C</span> <span>$3.60</span> <span class="rix-ticker-up">+14.2%</span></div>
        <div class="rix-ticker-item"><span class="rix-ticker-sym">AAPL 230C</span> <span>$1.74</span> <span class="rix-ticker-up">+11.5%</span></div>
        <div class="rix-ticker-item"><span class="rix-ticker-sym">IWM 220P</span> <span>$1.18</span> <span class="rix-ticker-down">-4.8%</span></div>
        <div class="rix-ticker-item"><span class="rix-ticker-sym">META 590C</span> <span>$6.40</span> <span class="rix-ticker-up">+22.1%</span></div>
        <div class="rix-ticker-item"><span class="rix-ticker-sym">EQUINIX NY4</span> <span class="rix-ticker-up">0.08ms DMA</span></div>
      `;
      tickerBar.innerHTML = `
        <div class="rix-ticker-badge">
          <span style="width:6px;height:6px;border-radius:50%;background:#089981;display:inline-block;"></span>
          LIVE OPRA FLOW
        </div>
        <div class="rix-ticker-track">${tapeItems}${tapeItems}</div>
      `;
      headerEl.insertAdjacentElement('afterend', tickerBar);
    }

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

    // 3. Global Light / Dark Mode Switcher
    function syncAllThemeButtons() {
      const isDark = document.documentElement.classList.contains('rix-dark-mode');
      document.querySelectorAll('.rix-global-theme-btn').forEach((btn) => {
        btn.innerHTML = isDark
          ? `<span class="material-symbols-outlined text-[16px] text-amber-400">light_mode</span><span>Light</span>`
          : `<span class="material-symbols-outlined text-[16px] text-[#089981]">dark_mode</span><span>Dark</span>`;
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

    window.showRixPromoToast = function () {
      showRixToast(
        '⚡ PROMO CODE "OF" COPIED!',
        '60% Instant Discount ($59/mo vs $149/mo) copied to clipboard for your $100K Founding 50 Evaluation.',
        '60% OFF ACTIVE',
        false
      );
    };

    // Inject 3-Zone Hero-Matched Top Command Promo Ribbon on pages that don't have it yet
    const mainHeader = document.querySelector('header');
    if (mainHeader && !document.getElementById('rixTopPromoRibbon')) {
      const promoRibbon = document.createElement('div');
      promoRibbon.id = 'rixTopPromoRibbon';
      promoRibbon.className =
        'bg-[#050B14] border-b border-emerald-500/25 py-2 px-4 lg:px-10 relative z-50 overflow-hidden';
      promoRibbon.innerHTML = `
        <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(circle at 50% 50%, rgba(245,158,11,0.12) 0%, rgba(16,185,129,0.08) 45%, transparent 100%);"></div>
        <div class="max-w-[1440px] mx-auto relative z-10 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div class="hidden xl:flex items-center gap-3">
            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/90 border border-emerald-500/35 text-emerald-400 font-mono text-[11px] font-semibold">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              OPRA L2 DIRECT • NY4 0.08ms
            </span>
            <div class="flex items-center gap-2 bg-slate-900/80 border border-amber-500/30 px-2.5 py-1 rounded-md">
              <span class="text-[11px] font-mono text-slate-300">FOUNDING 50 SLOTS:</span>
              <span class="text-[11px] font-mono font-bold text-amber-400">7 / 50 LEFT</span>
              <div class="w-16 h-1.5 rounded-full bg-slate-800 overflow-hidden">
                <div class="h-full w-[86%] bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full"></div>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-center gap-2.5 mx-auto xl:mx-0 flex-wrap">
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 font-extrabold tracking-wide text-[11px] uppercase">
              <span>⚡</span>
              <span>60% OFF ALL ACCOUNTS</span>
            </span>
            <span class="text-slate-400 hidden sm:inline">•</span>
            <button onclick="navigator.clipboard?.writeText('OF'); if(window.showRixPromoToast) window.showRixPromoToast();" class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-slate-900 hover:bg-slate-800 border border-amber-400/50 text-white font-mono text-[11px] cursor-pointer transition-all group" title="Click to copy promo code OF">
              <span class="text-slate-300">Use code:</span>
              <span class="font-extrabold text-amber-400 group-hover:text-amber-300">OF</span>
              <span class="material-symbols-outlined text-[13px] text-amber-400">content_copy</span>
            </button>
            <span class="text-slate-400 hidden md:inline">•</span>
            <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-slate-900/90 border border-slate-700/80 text-slate-200 font-mono text-[11px]">
              <span class="text-amber-400 font-semibold">ENDS IN:</span>
              <span id="rixPromoCountdown" class="text-white font-bold tracking-wider">02D : 09H : 36M : 18S</span>
            </div>
          </div>
          <div class="hidden xl:flex items-center gap-3">
            <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-700/80 text-[11px] font-mono text-slate-300">
              <span class="material-symbols-outlined text-[14px] text-emerald-400">payments</span>
              <span>24H PAYOUTS:</span>
              <span class="text-emerald-400 font-bold">$48,920 USDC</span>
            </div>
            <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/35 text-emerald-300 font-mono text-[11px] font-bold">
              <span class="material-symbols-outlined text-[13px]">shield</span>
              80% SPLIT
            </span>
          </div>
        </div>
      `;
      mainHeader.parentNode.insertBefore(promoRibbon, mainHeader);
    }

    // Live 1-Second Countdown Timer for #rixPromoCountdown across all 6 pages
    let remainingSecs = 2 * 86400 + 9 * 3600 + 36 * 60 + 18;
    setInterval(() => {
      remainingSecs = Math.max(0, remainingSecs - 1);
      const d = String(Math.floor(remainingSecs / 86400)).padStart(2, '0');
      const h = String(Math.floor((remainingSecs % 86400) / 3600)).padStart(2, '0');
      const m = String(Math.floor((remainingSecs % 3600) / 60)).padStart(2, '0');
      const s = String(remainingSecs % 60).padStart(2, '0');
      const el = document.getElementById('rixPromoCountdown');
      if (el) el.textContent = `${d}D : ${h}H : ${m}M : ${s}S`;
    }, 1000);

    const headerActionCluster = document.querySelector('header > div > div:last-child');
    if (headerActionCluster) {
      const navThemeBtn = document.createElement('button');
      navThemeBtn.type = 'button';
      navThemeBtn.className =
        'rix-global-theme-btn inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-emerald-500/35 bg-slate-900/90 hover:bg-slate-800 text-emerald-300 text-xs font-mono font-bold transition-all cursor-pointer whitespace-nowrap shadow-xs';
      navThemeBtn.title = 'Switch Whole Website Between Light & Dark Mode';
      navThemeBtn.addEventListener('click', window.toggleGlobalTheme);
      headerActionCluster.insertBefore(navThemeBtn, headerActionCluster.firstChild);
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

    // =========================================================================
    // 8. LAYER 1: TOP VIEWPORT LASER SCROLL PROGRESS BAR
    // =========================================================================
    const scrollLaser = document.createElement('div');
    scrollLaser.id = 'rixScrollLaserBar';
    document.body.appendChild(scrollLaser);

    const updateScrollLaser = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = Math.max(
        1,
        document.documentElement.scrollHeight - document.documentElement.clientHeight
      );
      const pct = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
      scrollLaser.style.width = `${pct}%`;
    };
    window.addEventListener('scroll', updateScrollLaser, { passive: true });
    updateScrollLaser();

    // =========================================================================
    // 9. LAYER 2: 60FPS HTML5 CANVAS FIBER-OPTIC PARTICLE NETWORK IN ALL 6 HEROS
    // =========================================================================
    const heroSelectors = [
      '#founding-50-hero',
      '#rules-hd-hero',
      '#metrics-hd-hero',
      '#rixtrade-server-hero',
      '#faq-hd-hero',
      '#affiliates-hd-hero'
    ];
    const heroLabels = [
      'SPY 585C ↑ $2.46',
      'FIX 4.4 • 0.08ms',
      'EOD FLOOR $94,000',
      'NVDA 135C • IV 38.4%',
      'Δ +0.54 • Γ +0.08',
      'OPRA L2 DIRECT',
      'QQQ 500C ↑ $3.15',
      'NY4 EQUINIX SYNC'
    ];

    heroSelectors.forEach((sel) => {
      const heroEl = document.querySelector(sel);
      if (!heroEl) return;

      const canvas = document.createElement('canvas');
      canvas.className = 'pointer-events-none';
      canvas.style.cssText =
        'position:absolute;inset:0;width:100%;height:100%;z-index:2;pointer-events:none;opacity:0.88;';
      heroEl.insertBefore(canvas, heroEl.firstChild.nextSibling);

      const ctx = canvas.getContext('2d');
      let width = 0;
      let height = 0;
      let mouseX = -9999;
      let mouseY = -9999;

      const resizeCanvas = () => {
        const rect = heroEl.getBoundingClientRect();
        width = Math.max(300, Math.floor(rect.width));
        height = Math.max(220, Math.floor(rect.height));
        canvas.width = width;
        canvas.height = height;
      };
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      heroEl.addEventListener('mousemove', (e) => {
        const rect = heroEl.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
      });
      heroEl.addEventListener('mouseleave', () => {
        mouseX = -9999;
        mouseY = -9999;
      });

      const nodeCount = 26;
      const nodes = Array.from({ length: nodeCount }, (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.65,
        vy: (Math.random() - 0.5) * 0.55 - 0.15,
        r: i % 5 === 0 ? 2.6 : 1.6,
        gold: i % 4 === 0,
        label: i % 5 === 0 ? heroLabels[i % heroLabels.length] : null
      }));

      const renderHeroMotion = () => {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          n.x += n.vx;
          n.y += n.vy;

          if (n.x < 0) n.x = width;
          if (n.x > width) n.x = 0;
          if (n.y < 0) n.y = height;
          if (n.y > height) n.y = 0;

          // Connect nearby nodes with fiber-optic lines
          for (let j = i + 1; j < nodes.length; j++) {
            const m = nodes[j];
            const dx = n.x - m.x;
            const dy = n.y - m.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 145) {
              const alpha = (1 - dist / 145) * 0.28;
              ctx.strokeStyle = n.gold
                ? `rgba(245, 158, 11, ${alpha})`
                : `rgba(16, 185, 129, ${alpha})`;
              ctx.lineWidth = 0.9;
              ctx.beginPath();
              ctx.moveTo(n.x, n.y);
              ctx.lineTo(m.x, m.y);
              ctx.stroke();
            }
          }

          // Interactive cursor gravity & laser tether
          const mdx = n.x - mouseX;
          const mdy = n.y - mouseY;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mDist < 190) {
            const mAlpha = (1 - mDist / 190) * 0.55;
            ctx.strokeStyle = `rgba(251, 191, 36, ${mAlpha})`;
            ctx.lineWidth = 1.15;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(mouseX, mouseY);
            ctx.stroke();
          }

          // Draw glowing node core
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
          ctx.fillStyle = n.gold ? '#fbbf24' : '#10b981';
          ctx.shadowBlur = 10;
          ctx.shadowColor = n.gold ? '#f59e0b' : '#10b981';
          ctx.fill();
          ctx.shadowBlur = 0;

          // Draw floating micro-telemetry tag on selected nodes
          if (n.label) {
            ctx.font = '600 9.5px "JetBrains Mono", monospace';
            ctx.fillStyle = n.gold
              ? 'rgba(251, 191, 36, 0.78)'
              : 'rgba(52, 211, 153, 0.76)';
            ctx.fillText(n.label, n.x + 6, n.y - 4);
          }
        }
        requestAnimationFrame(renderHeroMotion);
      };
      requestAnimationFrame(renderHeroMotion);

      // Add Animated SVG Fiber-Optic Data Stream Ribbon at Bottom of Hero
      const svgDivider = document.createElement('div');
      svgDivider.className = 'pointer-events-none';
      svgDivider.style.cssText =
        'position:absolute;bottom:0;left:0;right:0;height:28px;z-index:5;overflow:hidden;pointer-events:none;';
      svgDivider.innerHTML = `
        <svg viewBox="0 0 1440 28" fill="none" preserveAspectRatio="none" style="width:100%;height:100%;">
          <path id="rixWavePath_${sel.replace('#', '')}" d="M0 18 Q 360 4, 720 18 T 1440 16" stroke="rgba(16,185,129,0.42)" stroke-width="1.5" fill="none"/>
          <path d="M0 22 Q 360 28, 720 14 T 1440 22" stroke="rgba(245,158,11,0.28)" stroke-width="1" stroke-dasharray="6 6" fill="none"/>
          <circle r="3.5" fill="#10b981">
            <animateMotion dur="5.5s" repeatCount="indefinite" path="M0 18 Q 360 4, 720 18 T 1440 16" />
          </circle>
          <circle r="3" fill="#fbbf24">
            <animateMotion dur="7.2s" begin="1.5s" repeatCount="indefinite" path="M0 18 Q 360 4, 720 18 T 1440 16" />
          </circle>
        </svg>
      `;
      heroEl.appendChild(svgDivider);
    });

    // =========================================================================
    // 10. LAYER 3: 3D MAGNETIC CARD TILT + LASER BORDER BEAMS ACROSS ALL PAGES
    // =========================================================================
    const interactiveCards = document.querySelectorAll(
      'main section .rounded-xl, main section .rounded-2xl:not([id$="-hero"]), article.faq-item'
    );
    interactiveCards.forEach((card, idx) => {
      if (card.closest('table')) return;
      if (idx % 3 === 0) {
        card.classList.add('rix-laser-card');
      }
      card.classList.add('rix-tilt-card');
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        if (rect.width > 950) return; // Skip full-width containers so they stay rock-steady
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotY = ((x / rect.width - 0.5) * 4.2).toFixed(2);
        const rotX = ((0.5 - y / rect.height) * 4.2).toFixed(2);
        card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-3px)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });

    // =========================================================================
    // 11. LAYER 4: SCROLL-TRIGGERED NUMBER ODOMETER + LIVE TABLE MICRO-TICKS
    // =========================================================================
    const odometerCandidates = document.querySelectorAll(
      '.font-data-tabular, .font-mono, h2, h3, .text-headline-md, .text-headline-lg'
    );
    const odoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          odoObserver.unobserve(el);
          if (el.children.length > 0 || el.dataset.rixAnimated) return;

          const raw = el.textContent.trim();
          // Match clean currency/percent/metric tokens like "$100,000", "$94,000.00", "80%", "38,400+"
          const match = raw.match(/^(\$?)(\d{1,3}(?:,\d{3})+|\d+(?:\.\d+)?)(%|ms|\+|K)?$/);
          if (!match) return;

          el.dataset.rixAnimated = '1';
          const prefix = match[1] || '';
          const numStr = match[2].replace(/,/g, '');
          const suffix = match[3] || '';
          const targetVal = parseFloat(numStr);
          if (isNaN(targetVal) || targetVal === 0) return;

          const hasDecimals = numStr.includes('.');
          const decimals = hasDecimals ? numStr.split('.')[1].length : 0;
          const hasCommas = match[2].includes(',');
          const duration = 1150;
          const startTime = performance.now();

          const stepOdo = (now) => {
            const progress = Math.min(1, (now - startTime) / duration);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = targetVal * eased;
            let formatted = current.toFixed(decimals);
            if (hasCommas) {
              const parts = formatted.split('.');
              parts[0] = parseInt(parts[0], 10).toLocaleString('en-US');
              formatted = parts.join('.');
            }
            el.textContent = `${prefix}${formatted}${suffix}`;
            if (progress < 1) {
              requestAnimationFrame(stepOdo);
            } else {
              el.textContent = raw;
            }
          };
          requestAnimationFrame(stepOdo);
        });
      },
      { threshold: 0.25 }
    );
    odometerCandidates.forEach((el) => odoObserver.observe(el));

    // Periodic Live Option Chain & Table Cell Micro-Ticks (Every 1.8s)
    setInterval(() => {
      const cells = document.querySelectorAll('td.font-mono, td.font-data-tabular, .font-data-tabular');
      if (!cells.length) return;
      const pick = cells[Math.floor(Math.random() * cells.length)];
      if (!pick || pick.children.length > 0) return;
      const txt = pick.textContent.trim();
      const priceMatch = txt.match(/^\$(\d+\.\d{2})$/);
      if (priceMatch) {
        const oldPrice = parseFloat(priceMatch[1]);
        const delta = (Math.random() > 0.45 ? 0.02 : -0.02);
        const newPrice = Math.max(0.05, oldPrice + delta).toFixed(2);
        pick.textContent = `$${newPrice}`;
        pick.classList.remove('rix-tick-up', 'rix-tick-down');
        void pick.offsetWidth;
        pick.classList.add(delta > 0 ? 'rix-tick-up' : 'rix-tick-down');
      }
    }, 1850);

    // =========================================================================
    // 12. LAYER 5: LIVE OPRA ORDER-FLOW & PAYOUT PULSE HUD (BOTTOM-LEFT)
    // =========================================================================
    const liveFeedEvents = [
      { tag: 'DMA FILL • 0.08ms', text: 'BUY +10 SPY 585C @ $2.45 via Equinix NY4', color: '#10b981' },
      { tag: 'PAYOUT SETTLED', text: '$4,820.00 USDC → Trader #OF-104891 (80% Split)', color: '#fbbf24' },
      { tag: 'EOD SHIELD VERIFIED', text: 'Account #OF-104928 Floor Locked at $94,000.00', color: '#34d399' },
      { tag: 'OPRA SWEEP • 1.9ms', text: 'BUY +15 NVDA 135C @ $3.40 • IV 38.4%', color: '#10b981' },
      { tag: 'PARTNER COMMISSION', text: '+$372.50 Recurring Credit → Tier 3 Affiliate', color: '#fbbf24' }
    ];
    let feedIndex = 0;

    const hudEl = document.createElement('div');
    hudEl.id = 'rixLiveExecutionHud';
    hudEl.title = 'Click to simulate an instant Direct-Market-Access (DMA) Option Fill';
    const renderHudEvent = (evt) => {
      hudEl.innerHTML = `
        <div style="display:flex;align-items:flex-end;gap:2px;height:13px;">
          <span class="rix-eq-bar"></span>
          <span class="rix-eq-bar"></span>
          <span class="rix-eq-bar"></span>
          <span class="rix-eq-bar"></span>
        </div>
        <span style="padding:2px 6px;border-radius:4px;background:rgba(16,185,129,0.16);border:1px solid rgba(16,185,129,0.35);color:${evt.color};font-weight:700;font-size:10px;letter-spacing:0.04em;">
          ${evt.tag}
        </span>
        <span style="color:#e2e8f0;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:290px;">
          ${evt.text}
        </span>
      `;
    };
    renderHudEvent(liveFeedEvents[0]);
    hudEl.addEventListener('click', () => {
      feedIndex = (feedIndex + 1) % liveFeedEvents.length;
      const evt = liveFeedEvents[feedIndex];
      renderHudEvent(evt);
      showRixToast(
        `⚡ ${evt.tag}`,
        `${evt.text} — Synchronized across RixTrade WebTrader & OPRA L2 Telemetry Engine.`,
        'LIVE STREAM',
        false
      );
    });
    document.body.appendChild(hudEl);

    setInterval(() => {
      feedIndex = (feedIndex + 1) % liveFeedEvents.length;
      renderHudEvent(liveFeedEvents[feedIndex]);
    }, 5200);
  });
})();
