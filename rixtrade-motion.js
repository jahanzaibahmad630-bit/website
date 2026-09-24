/**
 * RixTrade Pro v4.2 — Institutional Motion Graphics, Trading Typography & Telemetry Engine
 * Enhances all 6 pages (Founding 50, Rules, Account Metrics, RixTrade Platform, FAQ, Affiliates)
 */
(function () {
  // 0. Load Top Trading Website Google Fonts (Plus Jakarta Sans, Space Grotesk, JetBrains Mono, IBM Plex Mono)
  const fontLink = document.createElement('link');
  fontLink.rel = 'stylesheet';
  fontLink.href =
    'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap';
  document.head.appendChild(fontLink);

  // 1. Inject High-Performance GPU CSS Animations & Institutional 3-Tier Trading Typography
  const style = document.createElement('style');
  style.textContent = `
    /* ==========================================================================
       3-TIER INSTITUTIONAL TRADING TYPOGRAPHY SYSTEM
       - Display / Headlines: Plus Jakarta Sans (or Space Grotesk in Quant mode)
       - UI / Body: Inter with OpenType Financial Alternates (cv02, cv03, cv04, cv11)
       - Option Chains / Prices / Greeks / Metrics: JetBrains Mono (tabular-nums + slashed-zero)
       ========================================================================== */
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
      animation: rixPageFadeIn 0.38s cubic-bezier(0.16, 1, 0.3, 1) both;
    }

    /* Tier 1: Executive Geometric Display Font for Headlines & Titles */
    h1, h2, h3, h4,
    .font-display-lg, .text-display-lg,
    .font-headline-lg, .text-headline-lg,
    .font-headline-md, .text-headline-md,
    .font-headline-sm, .text-headline-sm {
      font-family: var(--font-display) !important;
      letter-spacing: -0.025em !important;
    }

    /* Tier 3: True Quantitative Monospace for Option Strikes, Greeks, Prices & Telemetry */
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

    @keyframes rixPageFadeIn {
      from { opacity: 0.4; transform: translateY(4px); }
      to   { opacity: 1;   transform: translateY(0); }
    }

    /* Scroll-Reveal Stagger Animation (60fps GPU composited) */
    .rix-reveal {
      opacity: 0;
      transform: translateY(22px) scale(0.99);
      transition: opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1),
                  transform 0.65s cubic-bezier(0.16, 1, 0.3, 1),
                  box-shadow 0.25s ease,
                  border-color 0.25s ease;
      will-change: opacity, transform;
    }
    .rix-reveal.rix-visible {
      opacity: 1;
      transform: translateY(0) scale(1);
    }

    /* Subtle 3D Hover Lift on Cards */
    .rix-card-lift {
      transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1),
                  box-shadow 0.28s cubic-bezier(0.16, 1, 0.3, 1),
                  border-color 0.28s ease !important;
    }
    .rix-card-lift:hover {
      transform: translateY(-4px) !important;
      box-shadow: 0 16px 32px -10px rgba(5, 150, 105, 0.14), 0 4px 12px -2px rgba(15, 23, 42, 0.06) !important;
    }

    /* Live Tick Flash (Green / Amber) with Tabular Numbers */
    .rix-tick-up {
      animation: rixFlashGreen 0.7s ease-out;
      font-variant-numeric: tabular-nums;
    }
    @keyframes rixFlashGreen {
      0%   { background-color: rgba(16, 185, 129, 0.28); border-radius: 4px; }
      100% { background-color: transparent; }
    }

    /* Self-Drawing SVG Equity Curve Path */
    .rix-draw-path {
      stroke-dasharray: 1400;
      stroke-dashoffset: 1400;
      animation: rixDrawSvg 2.1s cubic-bezier(0.16, 1, 0.3, 1) 0.25s forwards;
    }
    @keyframes rixDrawSvg {
      to { stroke-dashoffset: 0; }
    }

    /* DMA Execution Toast Notification */
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
      background: rgba(15, 23, 42, 0.96);
      backdrop-filter: blur(12px);
      color: #ffffff;
      border-radius: 12px;
      padding: 14px 16px;
      box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.45);
      border-left: 4px solid #10b981;
      font-family: var(--font-ui);
      animation: rixToastIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
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
    // Restore saved font mode across pages if user toggled it
    const savedFontMode = localStorage.getItem('rixFontMode') || 'jakarta';
    if (savedFontMode === 'quant') {
      document.body.classList.add('font-mode-quant');
    }

    // Create Toast Container
    const toastContainer = document.createElement('div');
    toastContainer.id = 'rixToastContainer';
    document.body.appendChild(toastContainer);

    function showRixToast(title, subtitle, meta, isGuard = false) {
      const toast = document.createElement('div');
      toast.className = 'rix-toast' + (isGuard ? ' rix-toast-guard' : '');
      const badgeColor = isGuard ? '#fbbf24' : '#34d399';
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

    // Add Font Switcher button to bottom-right control bar (or create bar if on subpages)
    let bottomBar = document.querySelector('.fixed.bottom-4.right-4');
    if (!bottomBar) {
      bottomBar = document.createElement('div');
      bottomBar.className =
        'fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg rounded-xl p-1.5';
      document.body.appendChild(bottomBar);
    }
    const fontBtn = document.createElement('button');
    fontBtn.className =
      'inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-2.5 py-1.5 rounded-lg transition-colors';
    const updateFontLabel = () => {
      const isQuant = document.body.classList.contains('font-mode-quant');
      fontBtn.innerHTML = `<span class="material-symbols-outlined text-[15px] text-amber-600">font_download</span><span>${
        isQuant ? 'Font: Space Grotesk + Plex Mono' : 'Font: Jakarta Sans + JetBrains'
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

    // 2. Scroll-Triggered Stagger Reveal via IntersectionObserver
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
      if (el.closest('#founding-50-hero')) return;
      el.classList.add('rix-reveal', 'rix-card-lift');
      el.style.transitionDelay = `${(idx % 4) * 65}ms`;
      observer.observe(el);
    });

    // 3. Animate SVG Equity Curve Path on Account Metrics Page
    const svgPolylines = document.querySelectorAll('svg polyline');
    svgPolylines.forEach((poly) => {
      poly.classList.add('rix-draw-path');
    });

    // 4. Live Simulated OPRA Telemetry Micro-Ticks (Every 2.4 seconds)
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

    // 5. Interactive 1-Click Buy & Contract Lot Selector
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
