const fs = require('fs');

const svgIcons = {
  mic: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>`,
  micLg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>`,
  arrowRight: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
  chevronLeft: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>`,
  chevronRight: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,
  pause: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>`,
  square: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><rect x="4" y="4" width="16" height="16" rx="2"/></svg>`,
  play: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="6 3 20 12 6 21 6 3"/></svg>`,
  check: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
  checkLg: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00F0FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
  more: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>`,
  search: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  waveform: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 10v4"/><path d="M6 6v12"/><path d="M10 3v18"/><path d="M14 8v8"/><path d="M18 5v14"/><path d="M22 10v4"/></svg>`,
  graduationCap: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>`,
  home: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  folder: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 8 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>`,
  user: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>`,
  sliders: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="4" y1="21" y2="14"/><line x1="4" x2="4" y1="10" y2="3"/><line x1="12" x2="12" y1="21" y2="12"/><line x1="12" x2="12" y1="8" y2="3"/><line x1="20" x2="20" y1="21" y2="16"/><line x1="20" x2="20" y1="12" y2="3"/><line x1="1" x2="7" y1="14" y2="14"/><line x1="9" x2="15" y1="8" y2="8"/><line x1="17" x2="23" y1="16" y2="16"/></svg>`,
  music: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`,
  volume2: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`,
  volumeX: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="22" x2="16" y1="9" y2="15"/><line x1="16" x2="22" y1="9" y2="15"/></svg>`,
  wind: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/></svg>`,
  crown: `<svg width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" stroke-width="1"><polygon points="2 4 5 20 19 20 22 4 15 10 12 2 9 10 2 4"/></svg>`,
  target: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  wifi: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h.01"/><path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M5 12.859a10 10 0 0 1 14 0"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/></svg>`,
  battery: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="10" x="2" y="7" rx="2" ry="2"/><line x1="22" x2="22" y1="11" y2="13"/></svg>`
};

function renderStatusBar() {
  return `
    <div class="status-bar">
      <span class="sb-time">9:41</span>
      <div class="sb-island"></div>
      <div class="sb-icons">
        ${svgIcons.wifi}
        ${svgIcons.battery}
      </div>
    </div>
  `;
}

function renderBottomBar(activeTab = 'home') {
  return `
    <div class="dock-bar">
      <div class="dock-item ${activeTab === 'home' ? 'active' : ''}">
        ${svgIcons.home}
        <span>Home</span>
      </div>
      <div class="dock-item ${activeTab === 'sessions' ? 'active' : ''}">
        ${svgIcons.folder}
        <span>Sessions</span>
      </div>
      <div class="dock-mic-wrap">
        <div class="dock-mic ${activeTab === 'record' ? 'pulse' : ''}">
          ${svgIcons.mic}
        </div>
      </div>
      <div class="dock-item ${activeTab === 'coaching' ? 'active' : ''}">
        ${svgIcons.graduationCap}
        <span>Coaching</span>
      </div>
      <div class="dock-item ${activeTab === 'profile' ? 'active' : ''}">
        ${svgIcons.user}
        <span>Profile</span>
      </div>
    </div>
  `;
}

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Wav-Aid — 10 Core iOS Screens (Figma Auto-Layout Ready)</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
:root {
  --bg: #0B0C10;
  --card: #16181F;
  --card2: #1B1E27;
  --brd: #2A2D3A;
  --brd2: #3A3E4C;
  --tx: #F5F6F8;
  --tx2: #9CA1AD;
  --tx3: #626774;
  --red: #FF3B30;
  --purple: #8A2BE2;
  --cyan: #00F0FF;
  --gold: #FFD700;
}
* { margin:0; padding:0; box-sizing:border-box; }
body {
  background: #050507;
  color: var(--tx);
  font-family: 'Inter', -apple-system, sans-serif;
  padding: 60px;
}
.header-intro {
  margin-bottom: 50px;
  max-width: 1200px;
}
.header-intro h1 {
  font-size: 36px;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #fff;
}
.header-intro p {
  color: var(--tx2);
  font-size: 16px;
  margin-top: 8px;
}
.artboard-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
}
.screen-column {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.screen-tag {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 700;
  color: #C084FC;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.screen-tag span {
  color: var(--tx3);
  font-weight: 500;
}
.phone-frame {
  width: 390px;
  height: 844px;
  background: var(--bg);
  border: 1px solid var(--brd);
  border-radius: 48px;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06) inset;
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
.sb-time { font-size: 14px; font-weight: 600; color: #fff; }
.sb-island { width: 110px; height: 26px; background: #000; border-radius: 13px; margin: 0 auto; }
.sb-icons { display: flex; align-items: center; gap: 6px; color: #fff; }

.screen-body {
  flex: 1;
  padding: 12px 20px 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.dock-bar {
  height: 76px;
  background: rgba(22, 24, 31, 0.95);
  border-top: 1px solid var(--brd);
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 12px 10px;
  flex: none;
}
.dock-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: var(--tx3);
  font-size: 10px;
  font-weight: 500;
}
.dock-item.active { color: #fff; }
.dock-mic-wrap {
  position: relative;
  top: -12px;
}
.dock-mic {
  width: 48px;
  height: 48px;
  background: #E53935;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  box-shadow: 0 6px 16px rgba(229, 57, 53, 0.4);
}

/* Screen 1 */
.onb-hero {
  flex: 1;
  background: radial-gradient(circle at 50% 30%, rgba(138,43,226,0.2), transparent 70%),
              linear-gradient(180deg, #10121A 0%, #0B0C10 100%);
  border-radius: 28px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid var(--brd);
  position: relative;
}
.onb-top { display: flex; justify-content: space-between; align-items: center; }
.onb-brand { font-size: 18px; font-weight: 800; letter-spacing: 0.05em; }
.onb-skip { font-size: 13px; color: var(--tx2); }
.onb-mid {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 30px;
}
.onb-orb-art {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: radial-gradient(circle at 40% 40%, rgba(0,240,255,0.4), rgba(138,43,226,0.3) 60%, transparent 80%);
  border: 1px solid rgba(255,255,255,0.2);
  box-shadow: 0 0 40px rgba(138,43,226,0.4), inset 0 0 30px rgba(0,240,255,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}
.onb-mid h1 { font-size: 28px; font-weight: 800; line-height: 1.2; margin-bottom: 12px; }
.onb-mid p { font-size: 13.5px; color: var(--tx2); line-height: 1.5; }
.onb-dots { display: flex; gap: 6px; justify-content: center; margin: 20px 0 12px; }
.onb-dot { width: 6px; height: 6px; border-radius: 3px; background: rgba(255,255,255,0.2); }
.onb-dot.active { width: 18px; background: #fff; }
.btn-primary {
  width: 100%;
  height: 52px;
  background: #fff;
  color: #0B0C10;
  border-radius: 26px;
  font-size: 15px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  cursor: pointer;
}
.btn-purple {
  width: 100%;
  height: 52px;
  background: linear-gradient(135deg, #8A2BE2, #6B17B8);
  color: #fff;
  border-radius: 26px;
  font-size: 15px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(138,43,226,0.35);
}
.btn-outline {
  width: 100%;
  height: 50px;
  background: var(--card);
  color: #fff;
  border: 1px solid var(--brd2);
  border-radius: 25px;
  font-size: 14.5px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
}

/* Nav header */
.nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
  flex: none;
}
.nav-title { font-size: 16px; font-weight: 700; }
.nav-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--card);
  border: 1px solid var(--brd);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--tx);
}

/* Screen 2: Roles */
.role-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin: 20px 0;
}
.role-card {
  background: var(--card);
  border: 1px solid var(--brd);
  border-radius: 20px;
  padding: 20px 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
}
.role-card.selected {
  border-color: #8A2BE2;
  background: rgba(138,43,226,0.12);
}
.role-ic {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255,255,255,0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
.role-card.selected .role-ic { background: #8A2BE2; }
.role-title { font-size: 14px; font-weight: 700; }
.role-sub { font-size: 11px; color: var(--tx2); line-height: 1.3; }

/* Screen 3: Home */
.home-greeting {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}
.home-greeting h2 { font-size: 22px; font-weight: 800; }
.home-avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: linear-gradient(135deg, #8A2BE2, #00F0FF);
  padding: 2px;
}
.home-avatar img { width: 100%; height: 100%; border-radius: 50%; }
.vinyl-hero {
  background: var(--card);
  border: 1px solid var(--brd);
  border-radius: 20px;
  padding: 18px;
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 18px;
}
.vinyl-disc {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: repeating-radial-gradient(circle at 50% 50%, #05060A 0, #10131B 2px, #05060A 4px);
  border: 1px solid rgba(255,255,255,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  box-shadow: 0 8px 16px rgba(0,0,0,0.6);
}
.vinyl-core { width: 24px; height: 24px; border-radius: 50%; background: #8A2BE2; }
.v-info h3 { font-size: 15px; font-weight: 700; }
.v-info p { font-size: 12px; color: var(--tx2); margin: 3px 0 6px; }
.v-tag { display: inline-flex; font-size: 10.5px; color: #00F0FF; background: rgba(0,240,255,0.1); padding: 2px 8px; border-radius: 6px; font-weight: 600; }

.quick-actions {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin-bottom: 20px;
}
.qa-card {
  background: var(--card);
  border: 1px solid var(--brd);
  border-radius: 16px;
  padding: 14px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-size: 11.5px;
  font-weight: 600;
  color: var(--tx2);
}
.qa-card .qa-ic {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.qa-card:nth-child(1) .qa-ic { background: rgba(255,59,48,0.15); color: #FF3B30; }
.qa-card:nth-child(2) .qa-ic { background: rgba(138,43,226,0.15); color: #C084FC; }
.qa-card:nth-child(3) .qa-ic { background: rgba(0,240,255,0.15); color: #00F0FF; }

.section-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.section-head h4 { font-size: 15px; font-weight: 700; }
.section-head a { font-size: 12px; color: #C084FC; text-decoration: none; font-weight: 600; }

.session-row {
  background: var(--card);
  border: 1px solid var(--brd);
  border-radius: 16px;
  padding: 12px 14px;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
}
.sr-info { flex: 1; }
.sr-info b { font-size: 13.5px; display: block; }
.sr-info span { font-size: 11px; color: var(--tx3); }
.sr-score {
  font-size: 13px;
  font-weight: 700;
  color: #00F0FF;
  background: rgba(0,240,255,0.08);
  padding: 4px 8px;
  border-radius: 8px;
}

/* Screen 4: Active Recording */
.rec-timer-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255,255,255,0.06);
  padding: 6px 14px;
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.1);
  margin: 0 auto 10px;
}
.rec-timer-badge b { font-size: 17px; font-weight: 700; }
.rec-bars { display: flex; align-items: center; gap: 2px; }
.rec-bars i { width: 2.5px; height: 12px; background: #FF3B30; border-radius: 1px; }
.rec-bars i:nth-child(2) { height: 18px; }
.rec-bars i:nth-child(3) { height: 8px; }
.rec-bars i:nth-child(4) { height: 14px; }

.rec-orb-stage {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}
.circular-ai-orb {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at 50% 50%, rgba(138,43,226,0.3) 0%, rgba(0,240,255,0.18) 50%, transparent 72%);
  box-shadow: 0 0 50px rgba(138,43,226,0.35), inset 0 0 40px rgba(0,240,255,0.25);
  border: 1px solid rgba(255,255,255,0.25);
}
.circular-ai-orb::before {
  content: '';
  position: absolute;
  inset: 15px;
  border-radius: 50%;
  border: 1px dashed rgba(255,255,255,0.4);
}
.circular-ai-orb::after {
  content: '';
  position: absolute;
  inset: 35px;
  border-radius: 50%;
  border: 1.5px solid rgba(0,240,255,0.6);
}
.orb-label-center {
  position: relative;
  z-index: 5;
  text-align: center;
}
.orb-label-center b { display: block; font-size: 15px; font-weight: 800; color: #fff; letter-spacing: 0.05em; }
.orb-label-center span { font-size: 11px; color: #C084FC; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; }

.rec-subtitle {
  font-size: 12px;
  color: var(--tx2);
  margin-top: 14px;
  font-weight: 500;
}
.rec-controls-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  margin: 20px 0 10px;
}
.r-btn-circle {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: var(--card);
  border: 1px solid var(--brd2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
.r-btn-mic-main {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: #E53935;
  box-shadow: 0 0 25px rgba(229, 57, 53, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

/* Screen 5: Saved Take */
.saved-hero-card {
  background: var(--card);
  border: 1px solid var(--brd);
  border-radius: 24px;
  padding: 28px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}
.success-badge-circle {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(0,240,255,0.12);
  border: 1px solid rgba(0,240,255,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}
.waveform-preview {
  width: 100%;
  height: 48px;
  background: #0B0C10;
  border-radius: 12px;
  margin: 16px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 0 16px;
}
.waveform-preview i { width: 3px; height: 16px; background: #8A2BE2; border-radius: 2px; }
.waveform-preview i:nth-child(2n) { height: 28px; background: #00F0FF; }
.waveform-preview i:nth-child(3n) { height: 38px; }

/* Screen 6: Checklist */
.checklist-item {
  background: var(--card);
  border: 1px solid var(--brd);
  border-radius: 16px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.cli-left { display: flex; align-items: center; gap: 12px; font-size: 13.5px; font-weight: 600; }
.cli-check {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(0,240,255,0.15);
  color: #00F0FF;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cli-val { font-size: 12.5px; color: #00F0FF; font-weight: 700; }

/* Screen 8: Compare */
.take-comp-card {
  background: var(--card);
  border: 1px solid var(--brd);
  border-radius: 18px;
  padding: 14px 16px;
  margin-bottom: 12px;
}
.take-comp-card.best {
  border-color: #FFD700;
  background: rgba(255,215,0,0.04);
}
.tcc-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
.tcc-title { font-size: 13.5px; font-weight: 700; display: flex; align-items: center; gap: 6px; }
.tcc-score { font-size: 13px; font-weight: 700; color: #fff; }
.take-comp-card.best .tcc-score { color: #FFD700; }

/* Screen 9: Scorecard */
.score-hero-circle {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border: 6px solid #8A2BE2;
  border-top-color: #00F0FF;
  margin: 10px auto 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 30px rgba(138,43,226,0.3);
}
.score-hero-circle h2 { font-size: 38px; font-weight: 800; color: #fff; line-height: 1; }
.score-hero-circle span { font-size: 11px; color: var(--tx2); text-transform: uppercase; margin-top: 4px; }
.metric-slider-row {
  margin-bottom: 12px;
}
.ms-head { display: flex; justify-content: space-between; font-size: 12.5px; font-weight: 600; margin-bottom: 6px; }
.ms-bar {
  width: 100%;
  height: 8px;
  background: var(--card2);
  border-radius: 4px;
  overflow: hidden;
}
.ms-fill {
  height: 100%;
  border-radius: 4px;
  background: linear-gradient(90deg, #8A2BE2, #00F0FF);
}

/* Screen 10: Practice Drill */
.drill-visual {
  background: var(--card);
  border: 1px solid var(--brd);
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 16px 0;
}
.drill-cycle-badge {
  font-size: 11px;
  color: #00F0FF;
  background: rgba(0,240,255,0.1);
  padding: 4px 12px;
  border-radius: 12px;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin-bottom: 14px;
}
.drill-diagram {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: radial-gradient(circle at 50% 50%, rgba(0,240,255,0.2), transparent 70%);
  border: 2px dashed rgba(0,240,255,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00F0FF;
  margin-bottom: 16px;
}
</style>
</head>
<body>

<div class="header-intro">
  <h1>Wav-Aid iOS App — 10 Native Artboards</h1>
  <p>Developer-ready Figma Auto-Layout export with editable text, vector SVGs, and complete dark studio design tokens.</p>
</div>

<div class="artboard-grid">

  <!-- 01 · Splash & Onboarding -->
  <div class="screen-column">
    <div class="screen-tag">01 · Splash & Onboarding <span>(Screen 1)</span></div>
    <div class="phone-frame">
      ${renderStatusBar()}
      <div class="screen-body" style="padding-bottom: 24px;">
        <div class="onb-hero">
          <div class="onb-top">
            <span class="onb-brand">Wav-Aid</span>
            <span class="onb-skip">Skip</span>
          </div>
          <div class="onb-mid">
            <div class="onb-orb-art">
              ${svgIcons.micLg}
            </div>
            <h1>Your AI<br>Vocal Coach</h1>
            <p>Record. Analyze. Improve. A better you, one take at a time.</p>
            <div class="onb-dots">
              <div class="onb-dot active"></div>
              <div class="onb-dot"></div>
              <div class="onb-dot"></div>
              <div class="onb-dot"></div>
            </div>
          </div>
          <button class="btn-primary">
            Get Started ${svgIcons.arrowRight}
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- 02 · Role Selection -->
  <div class="screen-column">
    <div class="screen-tag">02 · Role Selection <span>(Screen 2)</span></div>
    <div class="phone-frame">
      ${renderStatusBar()}
      <div class="screen-body">
        <div class="nav-header">
          <div class="nav-btn">${svgIcons.chevronLeft}</div>
          <span class="nav-title">Profile Calibration</span>
          <div style="width:36px;"></div>
        </div>
        <h2 style="font-size: 22px; font-weight: 800; margin-bottom: 6px;">Who are you?</h2>
        <p style="font-size: 13px; color: var(--tx2); margin-bottom: 14px;">Select your vocal focus to customize the AI feedback model:</p>
        
        <div class="role-grid">
          <div class="role-card selected">
            <div class="role-ic">${svgIcons.mic}</div>
            <div class="role-title">Singer</div>
            <div class="role-sub">Pitch accuracy, vibrato & dynamics</div>
          </div>
          <div class="role-card">
            <div class="role-ic">${svgIcons.volume2}</div>
            <div class="role-title">Voice Actor</div>
            <div class="role-sub">Tone, clarity & dramatic articulation</div>
          </div>
          <div class="role-card">
            <div class="role-ic">${svgIcons.target}</div>
            <div class="role-title">Speaker</div>
            <div class="role-sub">Pacing, breath support & projection</div>
          </div>
          <div class="role-card">
            <div class="role-ic">${svgIcons.music}</div>
            <div class="role-title">Musician</div>
            <div class="role-sub">Rhythm, tempo & melodic pitch</div>
          </div>
        </div>

        <div style="margin-top: auto;">
          <button class="btn-purple">Continue ${svgIcons.arrowRight}</button>
        </div>
      </div>
      ${renderBottomBar('profile')}
    </div>
  </div>

  <!-- 03 · Home Dashboard -->
  <div class="screen-column">
    <div class="screen-tag">03 · Home Dashboard <span>(Screen 3)</span></div>
    <div class="phone-frame">
      ${renderStatusBar()}
      <div class="screen-body">
        <div class="home-greeting">
          <div>
            <span style="font-size: 12.5px; color: var(--tx2);">Good morning,</span>
            <h2>Alex 👋</h2>
          </div>
          <div class="home-avatar">
            <img src="https://picsum.photos/seed/wavaid-alex/96/96.jpg" alt="Alex">
          </div>
        </div>

        <div class="vinyl-hero">
          <div class="vinyl-disc">
            <div class="vinyl-core"></div>
          </div>
          <div class="v-info">
            <h3>Pop Ballad Session</h3>
            <p>3 takes recorded · 91 Best Score</p>
            <span class="v-tag">TODAY'S PICK</span>
          </div>
        </div>

        <div class="quick-actions">
          <div class="qa-card">
            <div class="qa-ic">${svgIcons.mic}</div>
            <span>Record</span>
          </div>
          <div class="qa-card">
            <div class="qa-ic">${svgIcons.waveform}</div>
            <span>Analysis</span>
          </div>
          <div class="qa-card">
            <div class="qa-ic">${svgIcons.graduationCap}</div>
            <span>Coaching</span>
          </div>
        </div>

        <div class="section-head">
          <h4>Recent Takes</h4>
          <a href="#">See All</a>
        </div>

        <div class="session-row">
          <div class="sr-info">
            <b>Pop Ballad Take 3</b>
            <span>Today · 2m 45s</span>
          </div>
          <div class="sr-score">91 pts</div>
        </div>
        <div class="session-row">
          <div class="sr-info">
            <b>Vocal Warmup 05</b>
            <span>Yesterday · 1m 12s</span>
          </div>
          <div class="sr-score">84 pts</div>
        </div>
      </div>
      ${renderBottomBar('home')}
    </div>
  </div>

  <!-- 04 · Active Recording (Kadonis Replica) -->
  <div class="screen-column">
    <div class="screen-tag">04 · Active Recording <span>(Screen 4)</span></div>
    <div class="phone-frame">
      ${renderStatusBar()}
      <div class="screen-body" style="text-align: center;">
        <div class="nav-header" style="margin-bottom: 8px;">
          <div class="nav-btn">${svgIcons.volumeX}</div>
          <div class="rec-timer-badge">
            <b>0:28</b>
            <div class="rec-bars"><i></i><i></i><i></i><i></i></div>
          </div>
          <div class="nav-btn">${svgIcons.more}</div>
        </div>

        <h2 style="font-size: 20px; font-weight: 800; margin: 4px 0 16px;">Soulful Riffs</h2>

        <div class="rec-orb-stage">
          <div class="circular-ai-orb">
            <div class="orb-label-center">
              <b>AI Voice</b>
              <span>Visualization</span>
            </div>
          </div>
          <div class="rec-subtitle">Voice level: Optimal · Pitch: A3</div>
        </div>

        <div class="rec-controls-row">
          <div class="r-btn-circle">${svgIcons.pause}</div>
          <div class="r-btn-mic-main">${svgIcons.micLg}</div>
          <div class="r-btn-circle">${svgIcons.square}</div>
        </div>
      </div>
      ${renderBottomBar('record')}
    </div>
  </div>

  <!-- 05 · Take Saved & Instant Review -->
  <div class="screen-column">
    <div class="screen-tag">05 · Take Saved <span>(Screen 5)</span></div>
    <div class="phone-frame">
      ${renderStatusBar()}
      <div class="screen-body">
        <div class="nav-header">
          <div class="nav-btn">${svgIcons.chevronLeft}</div>
          <span class="nav-title">Session Review</span>
          <div style="width:36px;"></div>
        </div>

        <div class="saved-hero-card">
          <div class="success-badge-circle">
            ${svgIcons.checkLg}
          </div>
          <h2 style="font-size: 24px; font-weight: 800; margin-bottom: 4px;">Take 3 Saved!</h2>
          <p style="font-size: 13px; color: var(--tx2);">Nice work, Alex! High vocal stability detected.</p>

          <div class="waveform-preview">
            <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
          </div>
          <span style="font-size: 11.5px; color: var(--tx3);">0:28 · 48kHz WAV · Studio Mode</span>
        </div>

        <div style="display: flex; flex-direction: column; gap: 12px; margin-top: auto;">
          <button class="btn-purple">Review & Analyze Now ${svgIcons.arrowRight}</button>
          <button class="btn-outline">Record Another Take</button>
        </div>
      </div>
      ${renderBottomBar('record')}
    </div>
  </div>

  <!-- 06 · AI Analysis Checklist -->
  <div class="screen-column">
    <div class="screen-tag">06 · Analysis Checklist <span>(Screen 6)</span></div>
    <div class="phone-frame">
      ${renderStatusBar()}
      <div class="screen-body">
        <div class="nav-header">
          <div class="nav-btn">${svgIcons.chevronLeft}</div>
          <span class="nav-title">Diagnostics</span>
          <div style="width:36px;"></div>
        </div>

        <div style="background: var(--card); border: 1px solid var(--brd); border-radius: 16px; padding: 16px; margin-bottom: 16px;">
          <div style="display: flex; justify-content: space-between; font-size: 13.5px; font-weight: 700; margin-bottom: 8px;">
            <span>Analyzing Take 3</span>
            <span style="color: #00F0FF;">100% Ready</span>
          </div>
          <div style="width: 100%; height: 6px; background: var(--card2); border-radius: 3px; overflow: hidden;">
            <div style="width: 100%; height: 100%; background: linear-gradient(90deg, #8A2BE2, #00F0FF);"></div>
          </div>
        </div>

        <div class="checklist-item">
          <div class="cli-left"><div class="cli-check">${svgIcons.check}</div>Pitch Accuracy</div>
          <div class="cli-val">94% Stable</div>
        </div>
        <div class="checklist-item">
          <div class="cli-left"><div class="cli-check">${svgIcons.check}</div>Dynamic Range</div>
          <div class="cli-val">89% Balanced</div>
        </div>
        <div class="checklist-item">
          <div class="cli-left"><div class="cli-check">${svgIcons.check}</div>Vibrato Consistency</div>
          <div class="cli-val">92% Natural</div>
        </div>
        <div class="checklist-item">
          <div class="cli-left"><div class="cli-check">${svgIcons.check}</div>Resonance & Tone</div>
          <div class="cli-val">90% Rich</div>
        </div>
        <div class="checklist-item">
          <div class="cli-left"><div class="cli-check">${svgIcons.check}</div>Breath Support</div>
          <div class="cli-val">88% Solid</div>
        </div>

        <div style="margin-top: auto;">
          <button class="btn-purple">View Full Scorecard ${svgIcons.arrowRight}</button>
        </div>
      </div>
      ${renderBottomBar('sessions')}
    </div>
  </div>

  <!-- 07 · Sessions Library -->
  <div class="screen-column">
    <div class="screen-tag">07 · Sessions Library <span>(Screen 7)</span></div>
    <div class="phone-frame">
      ${renderStatusBar()}
      <div class="screen-body">
        <div class="nav-header">
          <h2 style="font-size: 20px; font-weight: 800;">Sessions Library</h2>
          <div class="nav-btn">${svgIcons.sliders}</div>
        </div>

        <div style="background: var(--card); border: 1px solid var(--brd); border-radius: 14px; padding: 10px 14px; display: flex; align-items: center; gap: 10px; margin-bottom: 16px; color: var(--tx3);">
          ${svgIcons.search}
          <span style="font-size: 13px;">Search recordings & takes...</span>
        </div>

        <div class="session-row">
          <div class="vinyl-disc" style="width: 44px; height: 44px;">
            <div class="vinyl-core" style="width: 14px; height: 14px;"></div>
          </div>
          <div class="sr-info">
            <b>Pop Ballad Take 3</b>
            <span>3 takes · 2m 45s</span>
          </div>
          <div class="sr-score">91</div>
        </div>

        <div class="session-row">
          <div class="vinyl-disc" style="width: 44px; height: 44px;">
            <div class="vinyl-core" style="width: 14px; height: 14px; background: #FF3B30;"></div>
          </div>
          <div class="sr-info">
            <b>Warm-up 05</b>
            <span>1 take · 1m 12s</span>
          </div>
          <div class="sr-score">84</div>
        </div>

        <div class="session-row">
          <div class="vinyl-disc" style="width: 44px; height: 44px;">
            <div class="vinyl-core" style="width: 14px; height: 14px; background: #00F0FF;"></div>
          </div>
          <div class="sr-info">
            <b>R&B Riff Session</b>
            <span>4 takes · 3m 20s</span>
          </div>
          <div class="sr-score">89</div>
        </div>

        <div class="session-row">
          <div class="vinyl-disc" style="width: 44px; height: 44px;">
            <div class="vinyl-core" style="width: 14px; height: 14px; background: #FFD700;"></div>
          </div>
          <div class="sr-info">
            <b>Acoustic Harmony Demo</b>
            <span>2 takes · 2m 04s</span>
          </div>
          <div class="sr-score">86</div>
        </div>
      </div>
      ${renderBottomBar('sessions')}
    </div>
  </div>

  <!-- 08 · Multi-Take Comparison -->
  <div class="screen-column">
    <div class="screen-tag">08 · Multi-Take Comparison <span>(Screen 8)</span></div>
    <div class="phone-frame">
      ${renderStatusBar()}
      <div class="screen-body">
        <div class="nav-header">
          <div class="nav-btn">${svgIcons.chevronLeft}</div>
          <span class="nav-title">Comparison</span>
          <div style="width:36px;"></div>
        </div>

        <h3 style="font-size: 17px; font-weight: 800; margin-bottom: 4px;">Session: Pop Ballad</h3>
        <p style="font-size: 12px; color: var(--tx3); margin-bottom: 14px;">Select best take for export or AI mastering:</p>

        <div class="take-comp-card">
          <div class="tcc-head">
            <div class="tcc-title">Take 1 (Standard)</div>
            <div class="tcc-score">76 pts</div>
          </div>
          <div class="waveform-preview" style="height: 32px; margin: 4px 0;">
            <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
          </div>
        </div>

        <div class="take-comp-card">
          <div class="tcc-head">
            <div class="tcc-title">Take 2 (Enhanced)</div>
            <div class="tcc-score">83 pts</div>
          </div>
          <div class="waveform-preview" style="height: 32px; margin: 4px 0;">
            <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
          </div>
        </div>

        <div class="take-comp-card best">
          <div class="tcc-head">
            <div class="tcc-title">${svgIcons.crown} Take 3 (Mastered)</div>
            <div class="tcc-score">91 pts</div>
          </div>
          <div class="waveform-preview" style="height: 32px; margin: 4px 0;">
            <i style="background:#FFD700"></i><i style="background:#FFD700"></i><i style="background:#FFD700"></i><i style="background:#FFD700"></i><i style="background:#FFD700"></i><i style="background:#FFD700"></i><i style="background:#FFD700"></i><i style="background:#FFD700"></i>
          </div>
        </div>

        <div style="margin-top: auto;">
          <button class="btn-purple">Export Take 3 (WAV) ${svgIcons.arrowRight}</button>
        </div>
      </div>
      ${renderBottomBar('sessions')}
    </div>
  </div>

  <!-- 09 · AI Vocal Coaching Scorecard -->
  <div class="screen-column">
    <div class="screen-tag">09 · Vocal Scorecard <span>(Screen 9)</span></div>
    <div class="phone-frame">
      ${renderStatusBar()}
      <div class="screen-body">
        <div class="nav-header">
          <div class="nav-btn">${svgIcons.chevronLeft}</div>
          <span class="nav-title">Vocal Coaching Score</span>
          <div style="width:36px;"></div>
        </div>

        <div class="score-hero-circle">
          <h2>91</h2>
          <span>Overall / 100</span>
        </div>

        <div style="background: var(--card); border: 1px solid var(--brd); border-radius: 18px; padding: 14px 16px; margin-bottom: 12px;">
          <div class="metric-slider-row">
            <div class="ms-head"><span>Pitch Accuracy</span><span>94%</span></div>
            <div class="ms-bar"><div class="ms-fill" style="width: 94%;"></div></div>
          </div>
          <div class="metric-slider-row">
            <div class="ms-head"><span>Dynamic Range</span><span>89%</span></div>
            <div class="ms-bar"><div class="ms-fill" style="width: 89%;"></div></div>
          </div>
          <div class="metric-slider-row">
            <div class="ms-head"><span>Resonance</span><span>90%</span></div>
            <div class="ms-bar"><div class="ms-fill" style="width: 90%;"></div></div>
          </div>
          <div class="metric-slider-row" style="margin-bottom: 0;">
            <div class="ms-head"><span>Vibrato Quality</span><span>92%</span></div>
            <div class="ms-bar"><div class="ms-fill" style="width: 92%;"></div></div>
          </div>
        </div>

        <div style="background: rgba(138,43,226,0.1); border: 1px solid rgba(138,43,226,0.3); border-radius: 14px; padding: 12px 14px; font-size: 12.5px; color: #E8EAF0; line-height: 1.4;">
          <b>💡 AI Focus:</b> Maintain consistent diaphragm airflow when transitioning from mid chest into head resonance.
        </div>
      </div>
      ${renderBottomBar('coaching')}
    </div>
  </div>

  <!-- 10 · Practice Drill & Diaphragm Guide -->
  <div class="screen-column">
    <div class="screen-tag">10 · Practice Drill <span>(Screen 10)</span></div>
    <div class="phone-frame">
      ${renderStatusBar()}
      <div class="screen-body">
        <div class="nav-header">
          <div class="nav-btn">${svgIcons.chevronLeft}</div>
          <span class="nav-title">Smart Routine</span>
          <div style="width:36px;"></div>
        </div>

        <h3 style="font-size: 18px; font-weight: 800; margin-bottom: 4px;">Breathing & Diaphragm</h3>
        <p style="font-size: 12px; color: var(--tx3);">Visual pacing to build breath stamina:</p>

        <div class="drill-visual">
          <div class="drill-cycle-badge">CYCLE 2 / 4 · INHALE 4s · HOLD 4s</div>
          <div class="drill-diagram">
            ${svgIcons.wind}
          </div>
          <div style="font-size: 24px; font-weight: 800; color: #fff; margin-bottom: 2px;">88%</div>
          <span style="font-size: 11.5px; color: var(--tx2);">Breath Stability</span>
        </div>

        <div style="margin-top: auto; display: flex; flex-direction: column; gap: 10px;">
          <button class="btn-purple">Start Smart Drill</button>
          <button class="btn-outline">Log Session & Finish</button>
        </div>
      </div>
      ${renderBottomBar('coaching')}
    </div>
  </div>

</div>

</body>
</html>
`;

fs.writeFileSync('website/figma-screens.html', html, 'utf8');
console.log('Successfully created website/figma-screens.html! File size:', html.length);
