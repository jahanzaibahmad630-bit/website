/**
 * RixTrade Pro v4.2 — Institutional Motion Graphics & Interactive Telemetry Engine
 * Enhances all 6 pages (Founding 50, Rules, Account Metrics, RixTrade Platform, FAQ, Affiliates)
 * without altering the core Stitch layout.
 */
(function () {
  // 1. Inject High-Performance GPU CSS Animations & Micro-Interaction Styles
  const style = document.createElement('style');
  style.textContent = `
    /* Page entrance smooth fade */
    body {
      animation: rixPageFadeIn 0.38s cubic-bezier(0.16, 1, 0.3, 1) both;
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

    /* Live Tick Flash (Green / Red / Gold) with Tabular Numbers so text never jitters */
    .rix-tick-up {
      animation: rixFlashGreen 0.7s ease-out;
      font-variant-numeric: tabular-nums;
    }
    .rix-tick-amber {
      animation: rixFlashAmber 0.7s ease-out;
      font-variant-numeric: tabular-nums;
    }
    @keyframes rixFlashGreen {
      0%   { background-color: rgba(16, 185, 129, 0.28); border-radius: 4px; }
      100% { background-color: transparent; }
    }
    @keyframes rixFlashAmber {
      0%   { background-color: rgba(245, 158, 11, 0.28); border-radius: 4px; }
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

    /* Animated Progress Bar Fill */
    .rix-bar-fill {
      transition: width 1.1s cubic-bezier(0.16, 1, 0.3, 1) !important;
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
      font-family: 'Inter', sans-serif;
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
          <span style="font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:${badgeColor};font-family:monospace;">
            ${title}
          </span>
          <span style="font-size:10px;font-family:monospace;color:#94a3b8;background:rgba(255,255,255,0.08);padding:2px 6px;border-radius:4px;">
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
      // Do not hide elements inside the top Hero section so Hero renders instantaneously
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

    // 4. Live Simulated OPRA Telemetry Micro-Ticks (Every 2.2 seconds)
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

      // Update Hero HUD quote if present
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

    // 5. Interactive 1-Click Buy & Contract Lot Selector (Founding 50 & RixTrade Platform)
    let activeLots = 10;
    const optionPrice = 2.45; // $245 per contract

    // Wire up all 1-Click Buy / Submit Order buttons for live interview demo
    document.querySelectorAll('button').forEach((btn) => {
      const txt = btn.textContent.trim();

      // Contract quantity quick buttons (e.g., 1, 5, 10, 20)
      if (['1', '5', '10', '20'].includes(txt) && btn.closest('section')) {
        btn.addEventListener('click', () => {
          activeLots = parseInt(txt, 10);
          const totalCost = (activeLots * optionPrice * 100).toLocaleString('en-US');
          // Update sibling buttons styling
          const parent = btn.parentElement;
          if (parent) {
            parent.querySelectorAll('button').forEach((b) => {
              b.className = 'py-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-800 font-mono text-xs font-bold border border-slate-200 transition-colors';
            });
            btn.className = 'py-2 rounded-lg bg-amber-500 text-slate-950 font-mono text-xs font-extrabold shadow-xs transition-colors';
          }
          // Update Confirm CTA text
          document.querySelectorAll('button').forEach((cta) => {
            if (cta.textContent.includes('Confirm 1-Click Buy Call')) {
              cta.innerHTML = `<span class="material-symbols-outlined text-[20px]">bolt</span> Confirm 1-Click Buy Call (${activeLots} Lots • $${totalCost})`;
            }
          });
          showRixToast(
            'LOT SIZING UPDATED',
            `Selected ${activeLots} SPY 585 Call Contracts ($${totalCost} Margin Impact — ${Math.round((activeLots / 20) * 100)}% of 20 Max Limit)`,
            'GUARDRAIL OK',
            false
          );
        });
      }

      // 1-Click Execution Buttons
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
            `Executed BUY +${activeLots} SPY 585 CALL @ $${optionPrice.toFixed(2)} ($${totalCost}) via Equinix NY4 Direct Bridge.`,
            'OPRA L2 FILL',
            false
          );
        });
      }

      // Plus (+) / Minus (-) buttons on RixTrade Platform order entry
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
