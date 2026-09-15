// ==========================================================================
// Jahanzaib Ahmad — Figma Cosmic Purple Portfolio Interactive Engine
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  initTypewriter();
  initCalculator();
  initExperienceModals();
  initMobileMenu();
  initSmoothScroll();
});

// 1. TYPEWRITER EFFECT
function initTypewriter() {
  const element = document.getElementById('typewriter-text');
  if (!element) return;

  const phrases = [
    "I'm a Software Engineer.",
    "I'm a Full-Stack Problem Solver.",
    "I'm an On-Demand Tech Partner.",
    "I ship production code in hours."
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 90;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      charIndex--;
      element.textContent = currentPhrase.substring(0, charIndex);
      typingSpeed = 45;
    } else {
      charIndex++;
      element.textContent = currentPhrase.substring(0, charIndex);
      typingSpeed = 85;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      typingSpeed = 2200; // Pause at end of phrase
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 400; // Pause before typing next
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

// 2. INTERACTIVE ESTIMATOR
const PRICING_CONFIG = {
  bug: {
    basePrice: 50,
    name: 'Emergency Bug Remediation',
    time: '1–2 Hours',
    rushTime: 'Under 45 Mins'
  },
  scraper: {
    basePrice: 85,
    name: 'Web Scraper & Lead Extraction Pipeline',
    time: '2–4 Hours',
    rushTime: 'Under 90 Mins'
  },
  api: {
    basePrice: 120,
    name: 'API & Webhook Architecture Integration',
    time: 'Same Day (4–6 Hours)',
    rushTime: 'Under 2 Hours'
  },
  landing: {
    basePrice: 250,
    name: '90+ High-Performance Landing Page Architecture',
    time: '24–48 Hours',
    rushTime: 'Under 12 Hours'
  }
};

function initCalculator() {
  const form = document.getElementById('quote-form');
  const priceDisplay = document.getElementById('est-price');
  const timeDisplay = document.getElementById('est-time');
  const copyBtn = document.getElementById('copy-brief-btn');

  if (!form || !priceDisplay || !timeDisplay) return;

  function updateEstimate() {
    const selectedTask = form.elements['task_type'] ? form.elements['task_type'].value : 'bug';
    const selectedUrgency = form.elements['urgency'] ? form.elements['urgency'].value : 'standard';
    const scopeVal = parseInt(form.elements['scope_slider'] ? form.elements['scope_slider'].value : 1, 10);

    const config = PRICING_CONFIG[selectedTask] || PRICING_CONFIG.bug;
    let base = config.basePrice;

    // Scope multiplier
    if (selectedTask === 'landing') {
      base = base + (scopeVal - 1) * 80;
    } else if (selectedTask === 'scraper') {
      base = base + (scopeVal - 1) * 25;
    } else if (selectedTask === 'api') {
      base = base + (scopeVal - 1) * 35;
    } else if (selectedTask === 'bug') {
      base = base + (scopeVal - 1) * 30;
    }

    // Addons
    const addons = form.querySelectorAll('input[name="addons"]:checked');
    addons.forEach(cb => {
      base += parseInt(cb.value, 10);
    });

    // Urgency
    let timeline = config.time;
    if (selectedUrgency === 'urgent') {
      base = Math.round(base * 1.35);
      timeline = config.rushTime;
    }

    priceDisplay.textContent = `$${base}`;
    timeDisplay.textContent = timeline;

    const sliderValDisplay = document.getElementById('slider-val-display');
    if (sliderValDisplay) {
      sliderValDisplay.textContent = scopeVal;
    }
  }

  form.addEventListener('input', updateEstimate);
  form.addEventListener('change', updateEstimate);
  updateEstimate();

  if (copyBtn) {
    copyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const selectedTask = form.elements['task_type'] ? form.elements['task_type'].value : 'bug';
      const config = PRICING_CONFIG[selectedTask] || PRICING_CONFIG.bug;
      const urgency = form.elements['urgency'] ? form.elements['urgency'].value : 'standard';
      const price = priceDisplay.textContent;
      const time = timeDisplay.textContent;

      const briefText = `PROJECT SCOPE BRIEF FOR JAHANZAIB AHMAD
----------------------------------------
Service: ${config.name}
Urgency Level: ${urgency.toUpperCase()}
Estimated Turnaround: ${time}
Estimated Cost: ${price}
Contact: jahanzaibahmad630@gmail.com
GitHub: https://github.com/jahanzaibahmad630-bit
----------------------------------------
Please confirm availability for immediate kickoff under escrow protection.`;

      navigator.clipboard.writeText(briefText).then(() => {
        const originalHtml = copyBtn.innerHTML;
        copyBtn.innerHTML = `<i data-lucide="check" class="w-4 h-4 text-emerald-400"></i><span class="text-emerald-400">Brief Copied to Clipboard!</span>`;
        if (window.lucide) window.lucide.createIcons();
        setTimeout(() => {
          copyBtn.innerHTML = originalHtml;
          if (window.lucide) window.lucide.createIcons();
        }, 3000);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    });
  }
}

// 3. EXPERIENCE DETAIL MODAL
function initExperienceModals() {
  const modal = document.getElementById('experience-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-description');
  const modalDeliverables = document.getElementById('modal-deliverables');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modal || !modalTitle || !modalDesc || !closeBtn) return;

  const experienceData = {
    bug: {
      title: "Emergency Bug Remediation (< 2 Hours)",
      desc: "Instant live triage for mission-critical crashes, broken checkout workflows, Next.js / React hydration mismatches, and database lockouts.",
      deliverables: [
        "Root-cause diagnostic within 30 minutes of repository access",
        "Clean, surgical hotfix commit verified in isolated staging",
        "Zero regression testing across responsive viewport matrix",
        "100% Escrow release guarantee only upon verified production resolution"
      ]
    },
    scraper: {
      title: "Web Scraping & Resilient Data Pipelines",
      desc: "Industrial extraction infrastructure designed to reliably pull high-volume datasets without getting rate-limited, blocked, or challenged by Cloudflare / Datadome.",
      deliverables: [
        "Headless browser cluster orchestration (Playwright / Puppeteer)",
        "Fingerprint cloaking, TLS spoofing, and dynamic residential proxy rotation",
        "Automated schema validation and export to PostgreSQL / BigQuery / CSV",
        "Idempotent cron runners with automatic failure alerts"
      ]
    },
    api: {
      title: "Custom API & Webhook Architecture Integrations",
      desc: "Robust event-driven backends, webhook receivers, and third-party SaaS integrations built for zero message loss and seamless reconciliation.",
      deliverables: [
        "Stripe, PayPal, Shopify, HubSpot, and CRM bidirectional synchronizers",
        "HMAC signature validation and replay-attack security guards",
        "Redis-backed asynchronous queueing for high-throughput traffic spikes",
        "Full unit test suites with mocked API failure recovery"
      ]
    },
    landing: {
      title: "90+ High-Performance Landing Page Architecture",
      desc: "Speed-first, highly persuasive landing page design and code engineered for sub-second LCP, zero layout shift (CLS), and maximum conversion rate.",
      deliverables: [
        "90+ Google PageSpeed mobile and desktop compliance guarantee",
        "Flawless responsive layouts adapted from Figma designs",
        "Semantic HTML5, WCAG 2.1 AA accessibility, and rich JSON-LD schema",
        "Sub-second asset loading with edge caching and modern WebP formats"
      ]
    }
  };

  document.querySelectorAll('[data-experience-key]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const key = btn.getAttribute('data-experience-key');
      const data = experienceData[key];
      if (!data) return;

      modalTitle.textContent = data.title;
      modalDesc.textContent = data.desc;
      modalDeliverables.innerHTML = data.deliverables.map(item => `
        <li class="flex items-start gap-2 text-sm text-slate-200">
          <i data-lucide="check-circle-2" class="w-4 h-4 text-purple-400 shrink-0 mt-0.5"></i>
          <span>${item}</span>
        </li>
      `).join('');

      modal.classList.remove('hidden');
      modal.classList.add('flex');
      if (window.lucide) window.lucide.createIcons();
    });
  });

  function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

// 4. MOBILE NAVIGATION
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');

  if (!menuBtn || !menu) return;

  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });
}

// 5. SMOOTH SCROLL
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
}
