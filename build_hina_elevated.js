const fs = require('fs');

const svg = {
  heart: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D187B0" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
  user: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>`,
  settings: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,
  chevronLeft: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>`,
  chevronRight: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,
  qr: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#78598C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/><path d="M12 21v-1"/></svg>`,
  train: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="3" rx="2"/><path d="M4 11h16"/><path d="M12 3v8"/><path d="m8 19-2 3"/><path d="m18 22-2-3"/><circle cx="8" cy="15" r="1"/><circle cx="16" cy="15" r="1"/></svg>`,
  car: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 11.2 2 11.6 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>`,
  search: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#78598C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  lock: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#654578" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  mapPin: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B85D88" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  star: `<svg width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  check: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
  share: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>`,
  helpCircle: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>`,
  alertCircle: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E03535" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>`,
  wifi: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#381E48" stroke-width="2"><path d="M12 20h.01"/><path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M5 12.859a10 10 0 0 1 14 0"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/></svg>`,
  battery: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#381E48" stroke-width="2"><rect width="16" height="10" x="2" y="7" rx="2" ry="2"/><line x1="22" x2="22" y1="11" y2="13"/></svg>`
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
<title>HINA — 10 High-Fidelity Screens (Amy's Official Design Elevated with Auto-Layout)</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Comfortaa:wght@600;700&display=swap" rel="stylesheet">
<style>
:root {
  --bg-gradient: linear-gradient(180deg, #FBF8FD 0%, #F5EEF8 100%);
  --phone-bg: #F8F2FA;
  --plum: #381E48;
  --plum-dark: #2A1437;
  --plum-light: #512E67;
  --lavender: #EFE4F4;
  --lavender-card: #FAF4FD;
  --lavender-border: #E8D9EE;
  --pink-accent: #D187B0;
  --text-dark: #2C183A;
  --text-muted: #796587;
  --emerald: #10B981;
  --amber: #F59E0B;
  --red-sos: #D32F2F;
}
* { margin:0; padding:0; box-sizing:border-box; }
body {
  background: #EFE8F3;
  color: var(--text-dark);
  font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
  padding: 40px;
  min-height: 100vh;
}
.header-hero {
  max-width: 1300px;
  margin-bottom: 28px;
}
.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 20px;
  background: rgba(56, 30, 72, 0.08);
  border: 1px solid var(--lavender-border);
  color: var(--plum);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  margin-bottom: 12px;
}
.header-hero h1 {
  font-size: 34px;
  font-weight: 800;
  color: var(--plum-dark);
  letter-spacing: -0.02em;
}
.header-hero p {
  font-size: 14.5px;
  color: var(--text-muted);
  margin-top: 8px;
  max-width: 800px;
  line-height: 1.5;
}

/* View Switcher */
.view-switch-bar {
  display: inline-flex;
  background: #FFFFFF;
  padding: 4px;
  border-radius: 30px;
  border: 1.5px solid var(--lavender-border);
  box-shadow: 0 4px 12px rgba(56, 30, 72, 0.06);
  margin-top: 18px;
  gap: 4px;
}
.view-btn {
  padding: 9px 20px;
  border-radius: 24px;
  border: none;
  font-family: inherit;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  color: var(--text-muted);
  background: transparent;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}
.view-btn.active {
  background: var(--plum);
  color: #FFFFFF;
  box-shadow: 0 2px 10px rgba(56, 30, 72, 0.22);
}

/* Prototype Simulator Mode */
body.mode-prototype {
  display: flex;
  flex-direction: column;
  align-items: center;
}
body.mode-prototype .header-hero {
  text-align: center;
}
body.mode-prototype .view-switch-bar {
  margin: 18px auto 0;
}
body.mode-prototype .artboard-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 100%;
}
body.mode-prototype .screen-column {
  display: none;
}
body.mode-prototype .screen-column.active {
  display: flex;
  animation: popIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
@keyframes popIn {
  from { opacity: 0; transform: scale(0.97) translateY(8px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}

.prototype-floating-nav {
  display: none;
}
body.mode-prototype .prototype-floating-nav {
  display: flex;
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(44, 24, 58, 0.94);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  padding: 8px 18px;
  border-radius: 40px;
  color: white;
  align-items: center;
  gap: 16px;
  box-shadow: 0 12px 32px rgba(44, 24, 58, 0.4);
  z-index: 1000;
  border: 1px solid rgba(255,255,255,0.15);
}
.proto-nav-btn {
  background: rgba(255, 255, 255, 0.16);
  border: none;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.15s;
  display: flex;
  align-items: center;
  gap: 6px;
}
.proto-nav-btn:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.28);
}
.proto-nav-btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.proto-step-info {
  font-size: 13px;
  font-weight: 700;
  white-space: nowrap;
  letter-spacing: 0.02em;
}

.artboard-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 36px;
}
.screen-column {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.col-label {
  display: flex;
  justify-content: space-between;
  width: 390px;
  font-size: 12px;
  font-weight: 700;
  color: var(--plum);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.phone-frame {
  width: 390px;
  height: 844px;
  background: var(--bg-gradient);
  border: 1px solid var(--lavender-border);
  border-radius: 48px;
  box-shadow: 0 20px 40px -10px rgba(56, 30, 72, 0.12), 0 0 0 1px rgba(255,255,255,0.7) inset;
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
  z-index: 10;
}
.sb-time { font-size: 14px; font-weight: 700; color: var(--plum-dark); }
.sb-island { width: 100px; height: 24px; background: rgba(56,30,72,0.12); border-radius: 12px; margin: 0 auto; }
.sb-icons { display: flex; align-items: center; gap: 6px; }

.screen-body {
  flex: 1;
  padding: 10px 22px 24px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
}

/* Nav Bar */
.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
  flex: none;
}
.brand-title {
  font-family: 'Comfortaa', 'Plus Jakarta Sans', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: var(--plum-dark);
  display: flex;
  align-items: center;
  gap: 4px;
}
.brand-title span { color: var(--pink-accent); font-size: 20px; }
.nav-btn {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #FFFFFF;
  border: 1px solid var(--lavender-border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--plum);
  box-shadow: 0 2px 6px rgba(56, 30, 72, 0.04);
}

/* Common UI */
.page-title {
  font-size: 21px;
  font-weight: 800;
  color: var(--plum-dark);
  letter-spacing: -0.01em;
  margin-bottom: 6px;
  line-height: 1.25;
}
.page-sub {
  font-size: 12.5px;
  color: var(--text-muted);
  line-height: 1.45;
  margin-bottom: 16px;
}

/* Buttons */
.btn-plum {
  width: 100%;
  height: 52px;
  background: var(--plum);
  color: #FFFFFF;
  border-radius: 26px;
  font-size: 14.5px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  box-shadow: 0 8px 18px rgba(56, 30, 72, 0.22);
  cursor: pointer;
}
.btn-lavender {
  width: 100%;
  height: 50px;
  background: #FFFFFF;
  color: var(--plum);
  border: 1.5px solid var(--lavender-border);
  border-radius: 25px;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  box-shadow: 0 3px 8px rgba(56, 30, 72, 0.03);
}
.btn-nav-row {
  display: flex;
  gap: 10px;
  margin-top: auto;
}
.btn-nav-row .btn-back {
  width: 80px;
  height: 50px;
  background: #FFFFFF;
  border: 1px solid var(--lavender-border);
  border-radius: 25px;
  color: var(--plum);
  font-size: 13.5px;
  font-weight: 700;
}
.btn-nav-row .btn-continue {
  flex: 1;
}

/* Cards */
.white-card {
  background: #FFFFFF;
  border: 1px solid var(--lavender-border);
  border-radius: 20px;
  padding: 16px;
  box-shadow: 0 4px 14px rgba(56, 30, 72, 0.04);
}
.safety-note {
  background: rgba(255,255,255,0.7);
  border: 1px solid var(--lavender-border);
  border-radius: 16px;
  padding: 12px 14px;
  text-align: center;
  margin-top: auto;
}
.safety-note b { display: block; font-size: 11.5px; color: var(--plum-dark); margin-bottom: 2px; }
.safety-note p { font-size: 10.5px; color: var(--text-muted); line-height: 1.35; }

/* Screen 1: Home */
.event-card-home {
  background: #FFFFFF;
  border: 1px solid var(--lavender-border);
  border-radius: 20px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 10px 0 20px;
  box-shadow: 0 4px 12px rgba(56, 30, 72, 0.04);
}
.ech-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: var(--lavender);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--plum);
  flex: none;
}
.ech-tx b { font-size: 14.5px; color: var(--plum-dark); display: block; }
.ech-tx span { font-size: 11px; color: var(--text-muted); }

/* Screen 2: QR Scanner */
.qr-viewfinder {
  flex: 1;
  background: #FFFFFF;
  border: 2px dashed #C8B2D4;
  border-radius: 24px;
  margin: 10px 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
}
.qr-viewfinder p { font-size: 12px; color: var(--text-muted); margin-top: 14px; max-width: 220px; }

/* Screen 3: Travel Mode */
.travel-mode-card {
  background: #FFFFFF;
  border: 1.5px solid var(--lavender-border);
  border-radius: 18px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 10px;
}
.travel-mode-card.active {
  border-color: var(--plum);
  background: #FAF4FD;
}
.tmc-ic {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: var(--lavender);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--plum);
  flex: none;
}
.travel-mode-card.active .tmc-ic {
  background: var(--plum);
  color: #FFFFFF;
}
.tmc-tx b { font-size: 14px; color: var(--plum-dark); display: block; }
.tmc-tx span { font-size: 11px; color: var(--text-muted); }

/* Screen 4: Headed Search */
.search-input-box {
  background: #FFFFFF;
  border: 1.5px solid var(--lavender-border);
  border-radius: 16px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(56, 30, 72, 0.03);
}
.search-input-box span { font-size: 13.5px; color: var(--text-muted); }

.privacy-badge-card {
  background: #FFFFFF;
  border: 1px solid var(--lavender-border);
  border-radius: 20px;
  padding: 24px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
}
.pbc-icon {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: var(--lavender);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--plum);
  margin-bottom: 12px;
}
.pbc-title { font-size: 14.5px; font-weight: 800; color: var(--plum-dark); margin-bottom: 6px; }
.pbc-sub { font-size: 12px; color: var(--text-muted); line-height: 1.45; }

/* Screen 5: Matches List */
.match-route-card {
  background: var(--plum);
  border-radius: 18px;
  padding: 16px;
  color: #FFFFFF;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 14px;
  box-shadow: 0 4px 14px rgba(56, 30, 72, 0.15);
}
.mrc-ic {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background: rgba(255,255,255,0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
}
.mrc-info { flex: 1; }
.mrc-info b { font-size: 14.5px; display: block; margin-bottom: 2px; }
.mrc-info span { font-size: 11px; opacity: 0.8; }
.mrc-btn {
  font-size: 11.5px;
  font-weight: 700;
  color: #FFFFFF;
  background: rgba(255,255,255,0.18);
  padding: 6px 12px;
  border-radius: 12px;
}

/* Screen 6: Members */
.member-row {
  background: #FFFFFF;
  border: 1px solid var(--lavender-border);
  border-radius: 18px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 10px;
}
.member-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid var(--lavender);
  object-fit: cover;
}
.member-info { flex: 1; }
.member-info b { font-size: 14px; color: var(--plum-dark); display: block; }
.member-info .m-meta { display: flex; align-items: center; gap: 4px; font-size: 11px; color: var(--text-muted); margin-top: 2px; }
.member-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  font-weight: 700;
  color: var(--emerald);
  background: rgba(16, 185, 129, 0.1);
  padding: 2px 7px;
  border-radius: 6px;
  margin-top: 4px;
}

/* Screen 7: HINA Point */
.point-map-card {
  background: #FFFFFF;
  border: 1px solid var(--lavender-border);
  border-radius: 20px;
  padding: 16px;
  text-align: center;
  margin: 10px 0;
}
.pmc-diagram {
  width: 100%;
  height: 140px;
  background: #F8F3FA;
  border-radius: 14px;
  border: 1px solid var(--lavender-border);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 14px;
}
.pmc-beacon {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #FFFFFF;
  border: 2px solid var(--pink-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(209, 135, 176, 0.3);
}

/* Screen 8: Confirmation Code */
.code-display-card {
  background: var(--plum);
  border-radius: 20px;
  padding: 24px 16px;
  color: #FFFFFF;
  text-align: center;
  margin: 10px 0 16px;
  box-shadow: 0 6px 18px rgba(56, 30, 72, 0.18);
}
.cdc-label { font-size: 11px; letter-spacing: 0.08em; opacity: 0.8; text-transform: uppercase; margin-bottom: 6px; }
.cdc-digits { font-size: 22px; font-weight: 800; letter-spacing: 0.12em; }

.code-input-box {
  background: #FFFFFF;
  border: 1.5px solid var(--lavender-border);
  border-radius: 16px;
  padding: 14px;
  text-align: center;
  font-size: 16px;
  letter-spacing: 0.2em;
  color: var(--plum);
  font-weight: 700;
  margin-bottom: 12px;
}

/* Screen 9: Matched Route */
.route-map-preview {
  width: 100%;
  height: 200px;
  background: #FFFFFF;
  border: 1px solid var(--lavender-border);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  margin: 10px 0 16px;
  position: relative;
}

/* Screen 10: Safety Tools Active */
.active-walk-banner {
  background: #FFFFFF;
  border: 1px solid var(--lavender-border);
  border-radius: 16px;
  padding: 12px 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
  font-size: 12.5px;
  font-weight: 700;
  color: var(--plum-dark);
}
.safety-tools-drawer {
  background: #FFFFFF;
  border: 1px solid var(--lavender-border);
  border-radius: 22px;
  padding: 16px;
  margin-top: auto;
  box-shadow: 0 6px 20px rgba(56, 30, 72, 0.06);
}
.std-header { font-size: 11.5px; font-weight: 800; color: var(--plum); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 12px; }
.std-btn-row {
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
}
.std-btn {
  flex: 1;
  height: 44px;
  border-radius: 12px;
  background: #FAF4FD;
  border: 1px solid var(--lavender-border);
  color: var(--plum-dark);
  font-size: 11.5px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}
.std-btn.emergency {
  background: #FFF1F1;
  border-color: #FED7D7;
  color: #D32F2F;
}
</style>
</head>
<body>

<div class="header-hero">
  <div class="badge">AMY'S OFFICIAL HINA USER FLOW · ELEVATED WITH NATIVE FIGMA AUTO-LAYOUT</div>
  <h1>HINA — 10 High-Fidelity App Screens</h1>
  <p>Reconstructed directly from Amy’s wireframe flow with her authentic soft lavender palette, deep plum contrast buttons, and warm comforting micro-copy — now formatted in responsive 8pt Auto-Layout frames ready for Figma.</p>
  <div class="view-switch-bar">
    <button id="btnCanvasView" class="view-btn active" onclick="setViewMode('canvas')">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg> All 10 Artboards (Canvas)
    </button>
    <button id="btnPrototypeView" class="view-btn" onclick="setViewMode('prototype')">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><line x1="12" x2="12.01" y1="18" y2="18"/></svg> Interactive Prototype
    </button>
  </div>
</div>

<div class="artboard-grid">

  <!-- 01 · Home -->
  <div class="screen-column">
    <div class="col-label"><span>01 · Home</span><span>Screen 1</span></div>
    <div class="phone-frame">
      ${renderStatusBar("01:14")}
      <div class="screen-body">
        <header class="nav-bar">
          <div class="nav-btn">${svg.user}</div>
          <div class="brand-title">Hina <span>♡</span></div>
          <div class="nav-btn">${svg.settings}</div>
        </header>

        <div style="margin: 12px 0 16px; text-align: left;">
          <h2 style="font-size: 24px; font-weight: 800; color: var(--plum-dark); line-height: 1.2;">Hi, lets get you<br>home safely. ♡</h2>
        </div>

        <div class="event-card-home">
          <div class="ech-icon">${svg.heart}</div>
          <div class="ech-tx">
            <b>Campus Sommerfest</b>
            <span>Tonight · 22:30pm - 03:00am</span>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px;">
          <button class="btn-plum">Find a match ${svg.chevronRight}</button>
          <button class="btn-lavender">How it works</button>
          <button class="btn-lavender">Get verified</button>
        </div>

        <div class="safety-note">
          <b>Your safety comes first.</b>
          <p>Your location and route stay private until you choose to share them.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- 02 · QR Code -->
  <div class="screen-column">
    <div class="col-label"><span>02 · QR Scan</span><span>Screen 2</span></div>
    <div class="phone-frame">
      ${renderStatusBar("01:15")}
      <div class="screen-body">
        <header class="nav-bar">
          <div class="nav-btn">${svg.chevronLeft}</div>
          <div class="brand-title">Hina</div>
          <div style="width:38px;"></div>
        </header>

        <h2 class="page-title">Please scan the<br>event QR-code</h2>
        <p class="page-sub">QR-Codes are provided by the host. If you can't find it, ask the event or venue security.</p>

        <div class="qr-viewfinder">
          ${svg.qr}
          <p>Align camera with the official Hina poster at the venue</p>
        </div>

        <div style="text-align: center; margin-bottom: 14px;">
          <span style="font-size: 11.5px; color: var(--text-muted); font-weight: 600;">Don't have a camera? Enter event code</span>
        </div>

        <button class="btn-lavender">Back</button>
      </div>
    </div>
  </div>

  <!-- 03 · Travel Mode -->
  <div class="screen-column">
    <div class="col-label"><span>03 · Travel Mode</span><span>Screen 3</span></div>
    <div class="phone-frame">
      ${renderStatusBar("01:16")}
      <div class="screen-body">
        <header class="nav-bar">
          <div class="nav-btn">${svg.chevronLeft}</div>
          <div class="brand-title">Hina</div>
          <div style="width:38px;"></div>
        </header>

        <h2 class="page-title">How would you<br>like to travel?</h2>
        <p class="page-sub">Select your mobility mode for tonight's journey:</p>

        <div class="travel-mode-card">
          <div class="tmc-ic">${svg.car}</div>
          <div class="tmc-tx">
            <b>Driver</b>
            <span>I want to provide a ride</span>
          </div>
        </div>

        <div class="travel-mode-card">
          <div class="tmc-ic">${svg.car}</div>
          <div class="tmc-tx">
            <b>Passenger</b>
            <span>I want to get a ride</span>
          </div>
        </div>

        <div class="travel-mode-card active">
          <div class="tmc-ic">${svg.train}</div>
          <div class="tmc-tx">
            <b>ÖPNV-group</b>
            <span>I want to take public transport</span>
          </div>
        </div>

        <div style="margin: 12px 0;">
          <span style="font-size: 11px; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">Select time:</span>
          <div style="background: #FFFFFF; border: 1px solid var(--lavender-border); border-radius: 14px; padding: 10px 14px; font-size: 12.5px; font-weight: 600; color: var(--plum); margin-top: 6px;">
            I want to leave around... 15 mins - 30 mins
          </div>
        </div>

        <div class="btn-nav-row">
          <button class="btn-back">Back</button>
          <button class="btn-plum btn-continue">Continue ${svg.chevronRight}</button>
        </div>
      </div>
    </div>
  </div>

  <!-- 04 · Destination Privacy -->
  <div class="screen-column">
    <div class="col-label"><span>04 · Destination</span><span>Screen 4</span></div>
    <div class="phone-frame">
      ${renderStatusBar("01:17")}
      <div class="screen-body">
        <header class="nav-bar">
          <div class="nav-btn">${svg.chevronLeft}</div>
          <div class="brand-title">Hina</div>
          <div style="width:38px;"></div>
        </header>

        <h2 class="page-title">Where are<br>you headed?</h2>

        <div class="search-input-box">
          ${svg.search}
          <span>Search for Address / Station</span>
        </div>

        <div class="privacy-badge-card">
          <div class="pbc-icon">${svg.lock}</div>
          <div class="pbc-title">Your privacy is protected</div>
          <div class="pbc-sub">We use route data to find matches. Your exact address stays completely private until you choose to share it.</div>
        </div>

        <div class="btn-nav-row">
          <button class="btn-back">Back</button>
          <button class="btn-plum btn-continue">Continue ${svg.chevronRight}</button>
        </div>
      </div>
    </div>
  </div>

  <!-- 05 · Matches List -->
  <div class="screen-column">
    <div class="col-label"><span>05 · Matches</span><span>Screen 5</span></div>
    <div class="phone-frame">
      ${renderStatusBar("01:18")}
      <div class="screen-body">
        <header class="nav-bar">
          <div class="nav-btn">${svg.chevronLeft}</div>
          <div class="brand-title">Hina</div>
          <div style="width:38px;"></div>
        </header>

        <h2 class="page-title">Your matches<br>sorted by fit</h2>
        <p class="page-sub">Groups traveling your direction – same-day ticket overlap:</p>

        <div class="match-route-card">
          <div class="mrc-ic">${svg.train}</div>
          <div class="mrc-info">
            <b>STR X / RE9</b>
            <span>Group of 3 · Departs 01:30</span>
          </div>
          <span class="mrc-btn">View</span>
        </div>

        <div class="match-route-card" style="background: #4A2B60;">
          <div class="mrc-ic">${svg.train}</div>
          <div class="mrc-info">
            <b>STR 3 / RE8</b>
            <span>Group of 2 · Departs 01:35</span>
          </div>
          <span class="mrc-btn">View</span>
        </div>

        <div class="match-route-card" style="background: #5E3977;">
          <div class="mrc-ic">${svg.train}</div>
          <div class="mrc-info">
            <b>STR 1 / RE6</b>
            <span>Group of 3 · Departs 01:45</span>
          </div>
          <span class="mrc-btn">View</span>
        </div>

        <div class="btn-nav-row">
          <button class="btn-back">Back</button>
          <button class="btn-plum btn-continue">Continue ${svg.chevronRight}</button>
        </div>
      </div>
    </div>
  </div>

  <!-- 06 · Members -->
  <div class="screen-column">
    <div class="col-label"><span>06 · Members</span><span>Screen 6</span></div>
    <div class="phone-frame">
      ${renderStatusBar("01:20")}
      <div class="screen-body">
        <header class="nav-bar">
          <div class="nav-btn">${svg.chevronLeft}</div>
          <div class="brand-title">Hina</div>
          <div style="width:38px;"></div>
        </header>

        <h2 class="page-title">Members</h2>
        <span style="font-size: 11px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 12px; display: block;">SHARED GROUP: RE9</span>

        <div class="member-row">
          <img class="member-avatar" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&fit=crop" alt="Amy">
          <div class="member-info">
            <b>Amy, 22</b>
            <div class="m-meta">${svg.star} 5.0 (12 walks)</div>
            <div class="member-badge">${svg.check} Verified profile</div>
          </div>
        </div>

        <div class="member-row">
          <img class="member-avatar" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&fit=crop" alt="Senta">
          <div class="member-info">
            <b>Senta, 23</b>
            <div class="m-meta">${svg.star} 4.9 (8 walks)</div>
            <div class="member-badge">${svg.check} Verified profile</div>
          </div>
        </div>

        <div style="text-align: center; margin: 12px 0;">
          <span style="font-size: 11.5px; color: var(--text-muted); font-weight: 600;">What does verified mean?</span>
        </div>

        <div class="btn-nav-row">
          <button class="btn-back">Back</button>
          <button class="btn-plum btn-continue">Continue ${svg.chevronRight}</button>
        </div>
      </div>
    </div>
  </div>

  <!-- 07 · Meet at Hina-point -->
  <div class="screen-column">
    <div class="col-label"><span>07 · Hina-Point</span><span>Screen 7</span></div>
    <div class="phone-frame">
      ${renderStatusBar("01:24")}
      <div class="screen-body">
        <header class="nav-bar">
          <div class="nav-btn">${svg.chevronLeft}</div>
          <div class="brand-title">Hina</div>
          <div style="width:38px;"></div>
        </header>

        <h2 class="page-title">Meet at<br>Hina-point</h2>

        <div class="point-map-card">
          <div class="pmc-diagram">
            <div class="pmc-beacon">${svg.mapPin}</div>
            <span style="font-size: 11.5px; font-weight: 800; color: var(--plum); margin-top: 6px;">Hina-Point</span>
          </div>
          <p style="font-size: 12px; color: var(--text-muted); line-height: 1.45;">
            Meet at the Hina-point. There should be a sign! If you can't find it, ask a staff or bar crew member.
          </p>
        </div>

        <button class="btn-lavender" style="margin-bottom: 12px;">Open in Maps ${svg.chevronRight}</button>

        <div class="btn-nav-row">
          <button class="btn-back">Back</button>
          <button class="btn-plum btn-continue">Join Group ${svg.chevronRight}</button>
        </div>
      </div>
    </div>
  </div>

  <!-- 08 · Confirmation Code -->
  <div class="screen-column">
    <div class="col-label"><span>08 · Confirm</span><span>Screen 8</span></div>
    <div class="phone-frame">
      ${renderStatusBar("01:28")}
      <div class="screen-body">
        <header class="nav-bar">
          <div class="nav-btn">${svg.chevronLeft}</div>
          <div class="brand-title">Hina</div>
          <div style="width:38px;"></div>
        </header>

        <h2 class="page-title">Please confirm<br>each other!</h2>
        <p class="page-sub">Compare codes face-to-face before heading out:</p>

        <div class="code-display-card">
          <div class="cdc-label">Your Code</div>
          <div class="cdc-digits">2421 3423 4661</div>
        </div>

        <div style="text-align: center; margin-bottom: 6px;">
          <span style="font-size: 11px; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">Enter match's code:</span>
        </div>
        <div class="code-input-box">
          — — — — — —
        </div>

        <div class="btn-nav-row">
          <button class="btn-back">Back</button>
          <button class="btn-plum btn-continue">Synchronise ${svg.chevronRight}</button>
        </div>
      </div>
    </div>
  </div>

  <!-- 09 · Route to Destination -->
  <div class="screen-column">
    <div class="col-label"><span>09 · Route</span><span>Screen 9</span></div>
    <div class="phone-frame">
      ${renderStatusBar("01:30")}
      <div class="screen-body">
        <header class="nav-bar">
          <div class="nav-btn">${svg.chevronLeft}</div>
          <div class="brand-title">Hina</div>
          <div style="width:38px;"></div>
        </header>

        <h2 class="page-title">You're matched!<br>Route to your destination</h2>

        <div class="route-map-preview">
          <div style="color: var(--pink-accent); margin-bottom: 8px;">${svg.mapPin}</div>
          <b style="font-size: 14px; color: var(--plum-dark);">Shared Transit Route Unlocked</b>
          <span style="font-size: 11.5px; color: var(--text-muted); margin-top: 4px;">RE9 Line · 6 shared stops together</span>
        </div>

        <div class="white-card" style="margin-bottom: 12px; text-align: center;">
          <span style="font-size: 11.5px; color: var(--text-muted);">🔒 We use route data to find matches. Your exact address stays private.</span>
        </div>

        <div class="btn-nav-row">
          <button class="btn-back">Back</button>
          <button class="btn-plum btn-continue">Start trip ${svg.chevronRight}</button>
        </div>
      </div>
    </div>
  </div>

  <!-- 10 · Active Journey & Safety Tools -->
  <div class="screen-column">
    <div class="col-label"><span>10 · Safety Tools</span><span>Screen 10</span></div>
    <div class="phone-frame">
      ${renderStatusBar("01:34")}
      <div class="screen-body">
        <header class="nav-bar">
          <div class="brand-title">Hina <span>♡</span></div>
          <div class="nav-btn">${svg.settings}</div>
        </header>

        <h2 class="page-title" style="font-size: 19px;">On our way,<br>stay safe together</h2>

        <div class="active-walk-banner">
          <div style="color: var(--emerald);">${svg.check}</div>
          <span>Arriving at Cologne Train Station in 12 minutes</span>
        </div>

        <div class="route-map-preview" style="height: 150px;">
          <span style="font-size: 12px; color: var(--text-muted);">● Live companion tracking active</span>
        </div>

        <div class="safety-tools-drawer">
          <div class="std-header">Safety Tools</div>
          <div class="std-btn-row">
            <button class="std-btn">${svg.share} Share trip</button>
            <button class="std-btn">${svg.helpCircle} I need help</button>
          </div>
          <div class="std-btn-row">
            <button class="std-btn emergency">${svg.alertCircle} Emergency</button>
            <button class="std-btn" style="background:#FFFFFF;">End trip</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>

<!-- Floating Navigation for Prototype Simulator -->
<div class="prototype-floating-nav" id="protoNav">
  <button class="proto-nav-btn" id="btnPrev" onclick="prevScreen()">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m15 18-6-6 6-6"/></svg> Prev
  </button>
  <span class="proto-step-info" id="protoStepInfo">Screen 1 of 10</span>
  <button class="proto-nav-btn" id="btnNext" onclick="nextScreen()">
    Next <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></svg>
  </button>
</div>

<script>
  let currentScreen = 0;
  const columns = document.querySelectorAll('.screen-column');

  function setViewMode(mode) {
    const isProto = mode === 'prototype';
    document.body.classList.toggle('mode-prototype', isProto);
    document.getElementById('btnPrototypeView').classList.toggle('active', isProto);
    document.getElementById('btnCanvasView').classList.toggle('active', !isProto);

    if (isProto) {
      showScreen(currentScreen);
    } else {
      columns.forEach(col => col.classList.remove('active'));
    }
  }

  function showScreen(idx) {
    currentScreen = Math.max(0, Math.min(columns.length - 1, idx));
    columns.forEach((col, i) => {
      col.classList.toggle('active', i === currentScreen);
    });
    
    const labelSpan = columns[currentScreen].querySelector('.col-label span:first-child');
    const title = labelSpan ? labelSpan.textContent : 'Screen ' + (currentScreen + 1);
    document.getElementById('protoStepInfo').textContent = title + ' (' + (currentScreen + 1) + '/10)';

    document.getElementById('btnPrev').disabled = (currentScreen === 0);
    document.getElementById('btnNext').disabled = (currentScreen === columns.length - 1);
  }

  function nextScreen() {
    if (currentScreen < columns.length - 1) {
      showScreen(currentScreen + 1);
    }
  }

  function prevScreen() {
    if (currentScreen > 0) {
      showScreen(currentScreen - 1);
    }
  }

  // Interactive step advancement on in-app action buttons
  columns.forEach((col, idx) => {
    // Next triggers
    const forwardTargets = col.querySelectorAll('.btn-plum, .btn-continue, .match-card, .btn-scan, .ech-cta');
    forwardTargets.forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (document.body.classList.contains('mode-prototype')) {
          e.preventDefault();
          nextScreen();
        }
      });
    });

    // Back triggers
    const backTargets = col.querySelectorAll('.btn-back, .nav-btn:first-child');
    backTargets.forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (document.body.classList.contains('mode-prototype')) {
          e.preventDefault();
          prevScreen();
        }
      });
    });
  });

  // Check URL query param for default prototype mode
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('mode') === 'prototype' || window.innerWidth < 800) {
    setViewMode('prototype');
  }
</script>
</body>
</html>
`;

fs.writeFileSync('website/hina-elevated.html', html, 'utf8');
console.log('Successfully created website/hina-elevated.html! File size:', html.length);
