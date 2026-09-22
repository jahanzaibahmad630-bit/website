const fs = require('fs');

const svg = {
  shield: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  shieldCheck: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
  qr: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/><path d="M12 21v-1"/></svg>`,
  mapPin: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  train: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="3" rx="2"/><path d="M4 11h16"/><path d="M12 3v8"/><path d="m8 19-2 3"/><path d="m18 22-2-3"/><circle cx="8" cy="15" r="1"/><circle cx="16" cy="15" r="1"/></svg>`,
  car: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 11.2 2 11.6 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>`,
  users: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  clock: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  check: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
  checkLg: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
  arrowRight: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
  chevronLeft: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>`,
  lock: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  alertTriangle: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>`,
  info: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`,
  siren: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18v-6a5 5 0 1 1 10 0v6"/><path d="M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z"/><path d="M21 12h1"/><path d="M18.5 4.5 19 4"/><path d="M2 12h1"/><path d="M12 2v1"/><path d="m4.9 4.9.7.7"/><path d="M12 7a5 5 0 0 1 5 5"/></svg>`,
  x: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  navigation: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>`,
  wifi: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h.01"/><path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M5 12.859a10 10 0 0 1 14 0"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/></svg>`,
  battery: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="16" height="10" x="2" y="7" rx="2" ry="2"/><line x1="22" x2="22" y1="11" y2="13"/></svg>`
};

function renderStatusBar(time = "01:24") {
  return `
    <div class="status-bar">
      <span class="sb-time">${time}</span>
      <div class="sb-island"></div>
      <div class="sb-icons">
        ${svg.wifi}
        ${svg.battery}
      </div>
    </div>
  `;
}

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>HINA — Event-Based Matching for Shared Journeys Home (Figma Design System)</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
:root {
  --bg: #090C12;
  --card: #121824;
  --card-elevated: #1A2233;
  --border: #232D42;
  --border-focus: #3D4C6E;
  --text: #F8FAFC;
  --text-sec: #94A3B8;
  --text-muted: #64748B;
  --coral: #FF6464;
  --coral-glow: rgba(255, 100, 100, 0.25);
  --purple: #9061F9;
  --purple-soft: rgba(144, 97, 249, 0.15);
  --emerald: #10B981;
  --emerald-soft: rgba(16, 185, 129, 0.15);
  --amber: #F59E0B;
}
* { margin:0; padding:0; box-sizing:border-box; }
body {
  background: #04060A;
  color: var(--text);
  font-family: 'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif;
  padding: 60px 40px;
}
.header-hero {
  max-width: 1400px;
  margin-bottom: 50px;
}
.header-hero .badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 20px;
  background: var(--purple-soft);
  border: 1px solid rgba(144, 97, 249, 0.35);
  color: #C084FC;
  font-size: 12.5px;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin-bottom: 14px;
}
.header-hero h1 {
  font-size: 38px;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #fff;
  line-height: 1.15;
}
.header-hero p {
  color: var(--text-sec);
  font-size: 16px;
  margin-top: 10px;
  max-width: 900px;
  line-height: 1.5;
}
.stats-banner {
  display: flex;
  gap: 20px;
  margin-top: 24px;
  flex-wrap: wrap;
}
.stat-item {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 12px 18px;
}
.stat-item b { font-size: 18px; color: #fff; display: block; }
.stat-item span { font-size: 11.5px; color: var(--text-sec); }

.artboards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
}
.screen-column {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.col-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 390px;
}
.col-step {
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: var(--coral);
  text-transform: uppercase;
}
.col-title {
  font-size: 14px;
  font-weight: 700;
  color: #fff;
}
.phone-frame {
  width: 390px;
  height: 844px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 48px;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.05) inset;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  flex: none;
}
.status-bar {
  height: 44px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: none;
  z-index: 20;
}
.sb-time { font-size: 14px; font-weight: 600; color: #fff; font-variant-numeric: tabular-nums; }
.sb-island { width: 105px; height: 26px; background: #000; border-radius: 13px; margin: 0 auto; }
.sb-icons { display: flex; align-items: center; gap: 6px; color: #fff; }

.screen-body {
  flex: 1;
  padding: 10px 20px 24px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
}

/* Nav header */
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  flex: none;
}
.app-brand {
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 0.06em;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 8px;
}
.app-brand i { color: var(--coral); font-style: normal; }
.btn-icon {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: var(--card);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
.privacy-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 600;
  color: #C084FC;
  background: rgba(144, 97, 249, 0.12);
  padding: 4px 10px;
  border-radius: 12px;
  border: 1px solid rgba(144, 97, 249, 0.25);
}

/* Buttons */
.btn-coral {
  width: 100%;
  height: 52px;
  background: linear-gradient(135deg, #FF6464, #E03535);
  border-radius: 26px;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  box-shadow: 0 8px 20px rgba(255, 100, 100, 0.35);
  cursor: pointer;
}
.btn-soft {
  width: 100%;
  height: 50px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 25px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
}
.btn-cancel-link {
  color: var(--text-sec);
  font-size: 12.5px;
  font-weight: 600;
  text-align: center;
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
}

/* Screen 1: Event QR Scanner */
.scanner-viewport {
  flex: 1;
  background: radial-gradient(circle at 50% 40%, rgba(255,100,100,0.12), transparent 70%), #101520;
  border-radius: 28px;
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 24px 20px;
  position: relative;
  overflow: hidden;
}
.qr-target-box {
  width: 180px;
  height: 180px;
  border: 2px dashed rgba(255, 100, 100, 0.6);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 0 35px rgba(255,100,100,0.15);
  margin-top: 20px;
}
.qr-target-box::before {
  content: '';
  position: absolute;
  inset: -6px;
  border: 2px solid var(--coral);
  border-radius: 28px;
  clip-path: polygon(0 0, 30px 0, 30px 30px, 0 30px, 0 100%, 30px 100%, 30px calc(100% - 30px), 100% calc(100% - 30px), 100% 100%, calc(100% - 30px) 100%, 100% 0, calc(100% - 30px) 0, calc(100% - 30px) 30px, 0 30px);
}
.scan-hint {
  font-size: 12.5px;
  color: var(--text-sec);
  text-align: center;
  max-width: 220px;
  margin-top: 14px;
}
.venue-unlock-card {
  width: 100%;
  background: rgba(18, 24, 36, 0.9);
  border: 1px solid var(--border-focus);
  border-radius: 18px;
  padding: 14px 16px;
  backdrop-filter: blur(10px);
}
.vuc-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px; }
.vuc-top b { font-size: 14px; color: #fff; }
.vuc-badge { font-size: 10.5px; color: var(--emerald); background: var(--emerald-soft); padding: 3px 8px; border-radius: 6px; font-weight: 700; }
.vuc-sub { font-size: 11.5px; color: var(--text-sec); display: flex; gap: 8px; }

/* Screen 2: Mode & Time */
.mode-card {
  background: var(--card);
  border: 1.5px solid var(--border);
  border-radius: 18px;
  padding: 16px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
}
.mode-card.selected {
  border-color: var(--coral);
  background: rgba(255,100,100,0.06);
}
.mode-ic {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background: rgba(255,255,255,0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  flex: none;
}
.mode-card.selected .mode-ic {
  background: var(--coral);
}
.mode-tx { flex: 1; }
.mode-tx b { font-size: 14.5px; display: block; margin-bottom: 2px; }
.mode-tx span { font-size: 11.5px; color: var(--text-sec); line-height: 1.3; display: block; }
.mode-rec-tag {
  font-size: 9.5px;
  font-weight: 700;
  color: var(--emerald);
  background: var(--emerald-soft);
  padding: 2px 6px;
  border-radius: 4px;
  display: inline-block;
  margin-top: 4px;
}

.time-chips-row {
  display: flex;
  gap: 8px;
  margin: 12px 0 18px;
}
.time-chip {
  flex: 1;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 10px 6px;
  text-align: center;
  font-size: 11.5px;
  font-weight: 600;
  color: var(--text-sec);
}
.time-chip.active {
  border-color: var(--purple);
  background: var(--purple-soft);
  color: #fff;
  font-weight: 700;
}

.transit-input-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
}
.tic-info { flex: 1; }
.tic-info label { font-size: 10.5px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.06em; font-weight: 700; display: block; }
.tic-info b { font-size: 13.5px; color: #fff; }

/* Screen 3: Match Selection */
.match-card {
  background: var(--card);
  border: 1.5px solid var(--border);
  border-radius: 20px;
  padding: 18px;
  margin-bottom: 14px;
}
.match-card.featured {
  border-color: var(--purple);
  background: radial-gradient(circle at 100% 0%, rgba(144,97,249,0.1), transparent 60%), var(--card);
}
.mc-header { display: flex; gap: 12px; align-items: center; margin-bottom: 12px; }
.mc-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--coral), var(--purple));
  padding: 2px;
}
.mc-avatar img { width: 100%; height: 100%; border-radius: 50%; }
.mc-name-wrap { flex: 1; }
.mc-name-wrap b { font-size: 15px; font-weight: 700; display: flex; align-items: center; gap: 6px; }
.mc-badges { display: flex; gap: 6px; margin-top: 4px; flex-wrap: wrap; }
.mc-badge {
  font-size: 10px;
  font-weight: 600;
  padding: 2px 7px;
  border-radius: 6px;
  background: rgba(255,255,255,0.06);
  color: var(--text-sec);
}
.mc-badge.verified { background: var(--emerald-soft); color: var(--emerald); }

.mc-route-box {
  background: rgba(0,0,0,0.3);
  border-radius: 12px;
  padding: 10px 12px;
  margin: 10px 0;
  border: 1px solid var(--border);
}
.mrb-row { display: flex; align-items: center; gap: 8px; font-size: 12px; color: #E2E8F0; }
.mrb-sub { font-size: 11px; color: var(--text-muted); margin-top: 4px; }

/* Screen 4: HINA Meeting Point */
.point-hero-stage {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 20px;
  text-align: center;
  margin-bottom: 16px;
  position: relative;
}
.point-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 700;
  color: #fff;
  background: var(--coral);
  padding: 4px 12px;
  border-radius: 20px;
  margin-bottom: 14px;
}
.venue-map-sketch {
  width: 100%;
  height: 120px;
  background: #090D14;
  border-radius: 16px;
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  margin-bottom: 14px;
}
.hina-beacon {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--coral-glow);
  border: 2px solid var(--coral);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  box-shadow: 0 0 20px var(--coral);
}
.point-desc b { font-size: 14.5px; display: block; margin-bottom: 3px; }
.point-desc p { font-size: 12px; color: var(--text-sec); }

.pin-box-card {
  background: var(--card-elevated);
  border: 1.5px solid var(--border-focus);
  border-radius: 20px;
  padding: 16px;
  text-align: center;
  margin-bottom: 16px;
}
.pin-label { font-size: 11.5px; font-weight: 700; color: #C084FC; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 10px; }
.pin-digits-row {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 10px;
}
.pin-digit {
  width: 52px;
  height: 60px;
  border-radius: 14px;
  background: #090C12;
  border: 1.5px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  font-weight: 800;
  color: #fff;
}
.pin-footnote { font-size: 11px; color: var(--text-sec); line-height: 1.35; }

/* Screen 5: Live Walk & Safety Bar */
.live-map-stage {
  flex: 1;
  background: radial-gradient(circle at 50% 60%, rgba(144,97,249,0.15), transparent 70%), #0D121C;
  border-radius: 28px;
  border: 1px solid var(--border);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  margin-bottom: 16px;
}
.map-route-visual {
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(circle at 30% 70%, rgba(255,100,100,0.2) 0, transparent 40px),
    radial-gradient(circle at 70% 30%, rgba(16,185,129,0.25) 0, transparent 40px);
  pointer-events: none;
}
.walk-status-banner {
  background: rgba(18, 24, 36, 0.92);
  border: 1px solid var(--border-focus);
  border-radius: 16px;
  padding: 12px 14px;
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 5;
}
.walk-status-banner b { font-size: 13.5px; display: block; }
.walk-status-banner span { font-size: 11px; color: var(--emerald); font-weight: 600; }

.safety-floating-bar {
  background: rgba(18, 24, 36, 0.95);
  border: 1px solid var(--border-focus);
  border-radius: 20px;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  z-index: 5;
  box-shadow: 0 10px 25px rgba(0,0,0,0.6);
}
.sfb-btn {
  flex: 1;
  height: 42px;
  border-radius: 12px;
  background: var(--card-elevated);
  border: 1px solid var(--border);
  color: #fff;
  font-size: 11.5px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}
.sfb-btn.sos {
  flex: 1.4;
  background: #E03535;
  border-color: #EF4444;
  font-weight: 800;
  color: #fff;
  box-shadow: 0 0 15px rgba(239, 68, 68, 0.5);
}

/* Screen 6: Home Safe */
.safe-hero-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 28px;
  padding: 30px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto 0;
}
.safe-ring {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--emerald-soft);
  border: 2px solid var(--emerald);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  box-shadow: 0 0 35px rgba(16, 185, 129, 0.35);
}
.safe-hero-card h2 { font-size: 24px; font-weight: 800; margin-bottom: 6px; }
.safe-hero-card p { font-size: 13px; color: var(--text-sec); line-height: 1.5; max-width: 280px; }

.timer-countdown-box {
  background: rgba(0,0,0,0.3);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 12px 18px;
  margin: 18px 0;
  display: flex;
  align-items: center;
  gap: 12px;
}
.tcb-time { font-size: 18px; font-weight: 800; color: var(--amber); font-variant-numeric: tabular-nums; }
.tcb-text { font-size: 11px; color: var(--text-sec); text-align: left; }
</style>
</head>
<body>

<div class="header-hero">
  <div class="badge">ACADEMIC MASTER’S CASE STUDY · ISO 9241-210 & GDPR ART. 25</div>
  <h1>HINA — Event-Based Matching for Shared Journeys Home</h1>
  <p>A human-centered safety architecture for women travelling home after evening events. Designed around verified event check-in, privacy-first route compatibility, in-venue safe meeting points, and multi-tier safety controls.</p>
  
  <div class="stats-banner">
    <div class="stat-item">
      <b>92.9% Trust Rating</b>
      <span>Official HINA Safe Meeting Point</span>
    </div>
    <div class="stat-item">
      <b>78.6% Mobility Share</b>
      <span>Public Transit Group Matching</span>
    </div>
    <div class="stat-item">
      <b>97.6% (4.95/5.0)</b>
      <span>Emergency & SOS Safety Priority</span>
    </div>
    <div class="stat-item">
      <b>73.8% Privacy Shield</b>
      <span>Initial Address Masking (GDPR Art. 25)</span>
    </div>
  </div>
</div>

<div class="artboards-container">

  <!-- Screen 01 -->
  <div class="screen-column">
    <div class="col-header">
      <span class="col-step">Step 01</span>
      <span class="col-title">Event Activation (QR)</span>
    </div>
    <div class="phone-frame">
      ${renderStatusBar("01:14")}
      <div class="screen-body">
        <header class="app-header">
          <div class="app-brand">HINA<i>.</i></div>
          <div class="privacy-pill">${svg.lock} Event Verified Only</div>
        </header>

        <div class="scanner-viewport">
          <div style="text-align: center;">
            <span style="font-size: 12px; font-weight: 700; color: var(--coral); letter-spacing: 0.08em; text-transform: uppercase;">SCAN VENUE POSTER</span>
            <div class="scan-hint">Align the official HINA QR code located at venue entrance or coat check</div>
          </div>

          <div class="qr-target-box">
            ${svg.qr}
          </div>

          <div class="venue-unlock-card">
            <div class="vuc-top">
              <b>Tempelhof Sound Fest '26</b>
              <span class="vuc-badge">Active Event ✓</span>
            </div>
            <div class="vuc-sub">
              <span>Berlin Arena</span> · <span>2,400+ Verified Women</span>
            </div>
          </div>
        </div>

        <div style="margin-top: 14px;">
          <button class="btn-coral">Unlock Event Matching ${svg.arrowRight}</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Screen 02 -->
  <div class="screen-column">
    <div class="col-header">
      <span class="col-step">Step 02</span>
      <span class="col-title">Mode & Time Window</span>
    </div>
    <div class="phone-frame">
      ${renderStatusBar("01:16")}
      <div class="screen-body">
        <header class="app-header">
          <div class="btn-icon">${svg.chevronLeft}</div>
          <span style="font-size: 14px; font-weight: 700;">Journey Home Setup</span>
          <div style="width:38px;"></div>
        </header>

        <span style="font-size: 11.5px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 8px;">Select Travel Mode</span>

        <div class="mode-card selected">
          <div class="mode-ic">${svg.train}</div>
          <div class="mode-tx">
            <b>Public Transit Group</b>
            <span>U-Bahn, S-Bahn, Tram or Night Bus</span>
            <span class="mode-rec-tag">PREFERRED BY 78.6% OF SURVEY</span>
          </div>
        </div>

        <div class="mode-card">
          <div class="mode-ic">${svg.car}</div>
          <div class="mode-tx">
            <b>Passenger (Car)</b>
            <span>Share ride with verified attendee driver</span>
          </div>
        </div>

        <span style="font-size: 11.5px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.06em; margin: 10px 0 4px;">Planned Departure Window</span>

        <div class="time-chips-row">
          <div class="time-chip active">In 15m · 01:30</div>
          <div class="time-chip">In 30m · 01:45</div>
          <div class="time-chip">In 45m · 02:00</div>
        </div>

        <span style="font-size: 11.5px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 6px;">Direction / Route Line</span>

        <div class="transit-input-card">
          <div style="color: var(--purple);">${svg.train}</div>
          <div class="tic-info">
            <label>Subway / Metro Line</label>
            <b>U-Bahn Line U2 (Direction Pankow)</b>
          </div>
        </div>

        <div style="margin-top: auto;">
          <div style="text-align: center; margin-bottom: 8px;">
            <span style="font-size: 11px; color: var(--text-muted);">${svg.lock} Exact street address remains concealed (GDPR Art. 25)</span>
          </div>
          <button class="btn-coral">Find Companions (4 Active) ${svg.arrowRight}</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Screen 03 -->
  <div class="screen-column">
    <div class="col-header">
      <span class="col-step">Step 03</span>
      <span class="col-title">Privacy-First Match</span>
    </div>
    <div class="phone-frame">
      ${renderStatusBar("01:18")}
      <div class="screen-body">
        <header class="app-header">
          <div class="btn-icon">${svg.chevronLeft}</div>
          <span style="font-size: 14px; font-weight: 700;">Matching Companions</span>
          <div class="privacy-pill">${svg.shieldCheck} 4 Found</div>
        </header>

        <div class="match-card featured">
          <div class="mc-header">
            <div class="mc-avatar">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&fit=crop" alt="Laura">
            </div>
            <div class="mc-name-wrap">
              <b>Laura, 23 <span style="color:var(--emerald)">${svg.check}</span></b>
              <div class="mc-badges">
                <span class="mc-badge verified">Ticket Verified ✓</span>
                <span class="mc-badge">Student ID ✓</span>
                <span class="mc-badge">★ 4.9 (14 walks)</span>
              </div>
            </div>
          </div>

          <div class="mc-route-box">
            <div class="mrb-row">
              <span style="color:var(--purple)">${svg.train}</span>
              <b>Shared U2 Line (6 Stops)</b>
            </div>
            <div class="mrb-sub">Alexanderplatz → Eberswalder Str. · Leaving 01:30 AM</div>
          </div>

          <div style="font-size: 11px; color: var(--text-sec); margin-bottom: 12px; line-height: 1.35;">
            🔒 <i>Exact home destination is hidden. Only shared transit line is visible until in-person meeting.</i>
          </div>

          <div style="display: flex; gap: 8px;">
            <button class="btn-coral" style="height: 44px; font-size: 13.5px;">Match with Laura</button>
            <button class="btn-soft" style="height: 44px; width: 44px; padding: 0; flex: none;">${svg.x}</button>
          </div>
        </div>

        <!-- Second card -->
        <div class="match-card">
          <div class="mc-header">
            <div class="mc-avatar" style="background: var(--border);">
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&fit=crop" alt="Elena">
            </div>
            <div class="mc-name-wrap">
              <b>Elena & Mia (Group of 2)</b>
              <div class="mc-badges">
                <span class="mc-badge verified">2 Verified Attendee</span>
                <span class="mc-badge">★ 5.0</span>
              </div>
            </div>
          </div>
          <div class="mrb-row" style="font-size: 11.5px; color: var(--text-sec);">
            <span>${svg.train}</span> U2 Line toward Prenzlauer Berg · 01:35 AM
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Screen 04 -->
  <div class="screen-column">
    <div class="col-header">
      <span class="col-step">Step 04</span>
      <span class="col-title">HINA Point & Confirmation</span>
    </div>
    <div class="phone-frame">
      ${renderStatusBar("01:25")}
      <div class="screen-body">
        <header class="app-header">
          <span class="privacy-pill">${svg.shieldCheck} Match Confirmed</span>
          <span style="font-size: 12.5px; color: var(--text-sec);">Meet in 5m</span>
        </header>

        <div class="point-hero-stage">
          <div class="point-badge">${svg.mapPin} IN-VENUE SAFE MEETING POINT</div>
          <div class="venue-map-sketch">
            <div class="hina-beacon">${svg.shield}</div>
            <span style="font-size: 10px; color: #fff; font-weight: 700; margin-top: 6px; letter-spacing: 0.05em;">HINA POINT #1</span>
          </div>
          <div class="point-desc">
            <b>Main Foyer · Near Coat Check & Exit B</b>
            <p>Illuminated pink safe zone staffed by venue awareness team</p>
          </div>
        </div>

        <div class="pin-box-card">
          <div class="pin-label">Mutual Verification PIN</div>
          <div class="pin-digits-row">
            <div class="pin-digit">8</div>
            <div class="pin-digit">4</div>
            <div class="pin-digit">1</div>
            <div class="pin-digit">9</div>
          </div>
          <div class="pin-footnote">
            Compare this 4-digit code face-to-face with Laura at the HINA Point before departing.
          </div>
        </div>

        <div style="margin-top: auto; display: flex; flex-direction: column; gap: 6px;">
          <button class="btn-coral">Codes Matched — Start Journey ${svg.arrowRight}</button>
          <button class="btn-cancel-link">Feel uncomfortable? Cancel match & notify staff</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Screen 05 -->
  <div class="screen-column">
    <div class="col-header">
      <span class="col-step">Step 05</span>
      <span class="col-title">Shared Journey & Safety Bar</span>
    </div>
    <div class="phone-frame">
      ${renderStatusBar("01:34")}
      <div class="screen-body">
        <header class="app-header">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--emerald); display: inline-block;"></span>
            <span style="font-size: 14px; font-weight: 700;">Journey Active · With Laura</span>
          </div>
          <div class="privacy-pill">${svg.lock} Live Shared</div>
        </header>

        <div class="live-map-stage">
          <div class="map-route-visual"></div>

          <div class="walk-status-banner">
            <div style="color: var(--coral);">${svg.navigation}</div>
            <div>
              <b>6 min walk to Alexanderplatz U-Bahn</b>
              <span>Well-lit main avenue · 420m remaining</span>
            </div>
          </div>

          <div style="z-index: 5; text-align: center; margin: auto 0;">
            <div style="display: inline-flex; align-items: center; gap: 6px; background: rgba(0,0,0,0.6); padding: 6px 14px; border-radius: 20px; font-size: 11px; border: 1px solid var(--border);">
              <span style="color: var(--emerald);">●</span> Live location tracked with trusted emergency contact (Elena)
            </div>
          </div>

          <div class="safety-floating-bar">
            <button class="sfb-btn">${svg.info} Help</button>
            <button class="sfb-btn">${svg.alertTriangle} Report</button>
            <button class="sfb-btn sos">${svg.siren} 1-TAP SOS</button>
          </div>
        </div>

        <button class="btn-soft" style="border-color: var(--emerald);">
          ${svg.check} Approaching Metro Station
        </button>
      </div>
    </div>
  </div>

  <!-- Screen 06 -->
  <div class="screen-column">
    <div class="col-header">
      <span class="col-step">Step 06</span>
      <span class="col-title">"Home Safe" Check-In</span>
    </div>
    <div class="phone-frame">
      ${renderStatusBar("02:05")}
      <div class="screen-body">
        <header class="app-header">
          <span class="app-brand">HINA<i>.</i></span>
          <span class="privacy-pill">${svg.shieldCheck} Safe Arrival</span>
        </header>

        <div class="safe-hero-card">
          <div class="safe-ring">
            ${svg.checkLg}
          </div>
          <h2>Did you arrive safely?</h2>
          <p>Confirm your safe arrival to reassure your companion and close the trip loop.</p>

          <div class="timer-countdown-box">
            <div class="tcb-time">12:45</div>
            <div class="tcb-text">
              <b>Safety Auto-Timer:</b><br>
              If unconfirmed, trusted contacts will receive a welfare ping.
            </div>
          </div>

          <div style="font-size: 12px; color: var(--emerald); font-weight: 600; display: flex; align-items: center; gap: 6px; margin-bottom: 12px;">
            <span>${svg.check}</span> Laura checked in: "Home safe!" 4 mins ago
          </div>
        </div>

        <div style="margin-top: auto; display: flex; flex-direction: column; gap: 10px;">
          <button class="btn-coral" style="background: linear-gradient(135deg, #10B981, #059669); box-shadow: 0 8px 20px rgba(16, 185, 129, 0.35);">
            ✓ I'm Home Safe!
          </button>
          <button class="btn-soft">Rate Experience & Thank Laura</button>
        </div>
      </div>
    </div>
  </div>

</div>

</body>
</html>
`;

fs.writeFileSync('website/hina-screens.html', html, 'utf8');
console.log('Successfully created website/hina-screens.html! File size:', html.length);
