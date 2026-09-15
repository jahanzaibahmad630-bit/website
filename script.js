// ==========================================================================
// Jahanzaib Ahmad — Full-Stack Web Developer Interactive Engine
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
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
    "I'm a Full-Stack Web Developer.",
    "I fix production crashes in < 2h.",
    "I build resilient web scrapers.",
    "I engineer scalable backend APIs.",
    "I ship 90+ PageSpeed web apps."
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 85;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      charIndex--;
      element.textContent = currentPhrase.substring(0, charIndex);
      typingSpeed = 40;
    } else {
      charIndex++;
      element.textContent = currentPhrase.substring(0, charIndex);
      typingSpeed = 80;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      typingSpeed = 2200; // Pause when complete
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 400; // Pause before typing next phrase
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

// 2. PROJECT COST & SCOPE ESTIMATOR
const PRICING_CONFIG = {
  bug: {
    basePrice: 50,
    name: 'Emergency Bug Remediation',
    time: '1–2 Hours',
    rushTime: 'Under 45 Mins'
  },
  scraper: {
    basePrice: 85,
    name: 'Web Scraper & Data Pipeline',
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
    name: '90+ High-Performance Web Application',
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

    // Scope scaling
    if (selectedTask === 'landing') {
      base += (scopeVal - 1) * 80;
    } else if (selectedTask === 'scraper') {
      base += (scopeVal - 1) * 30;
    } else if (selectedTask === 'api') {
      base += (scopeVal - 1) * 40;
    } else if (selectedTask === 'bug') {
      base += (scopeVal - 1) * 25;
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
      const tierLabels = ['1 (Basic)', '2 (Standard)', '3 (Complex)', '4 (Enterprise)'];
      sliderValDisplay.textContent = tierLabels[scopeVal - 1] || scopeVal;
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
Estimated Milestone: ${price}
Contact: jahanzaibahmad630@gmail.com
GitHub: https://github.com/jahanzaibahmad630-bit
----------------------------------------
Please confirm project commencement under escrow protection.`;

      navigator.clipboard.writeText(briefText).then(() => {
        const originalHtml = copyBtn.innerHTML;
        copyBtn.innerHTML = `<i data-lucide="check" class="w-4 h-4 text-emerald-400"></i><span class="text-emerald-400">Copied to Clipboard!</span>`;
        if (window.lucide) window.lucide.createIcons();
        setTimeout(() => {
          copyBtn.innerHTML = originalHtml;
          if (window.lucide) window.lucide.createIcons();
        }, 3000);
      }).catch(err => {
        console.error('Failed to copy brief: ', err);
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
      desc: "Live surgical triage for mission-critical production incidents, broken checkout funnels, Next.js hydration failures, and high-concurrency database lockouts.",
      deliverables: [
        "Root-cause diagnostic provided within 20 minutes of code access",
        "Clean, surgical hotfix commit tested on isolated staging",
        "Zero-regression testing across desktop and mobile Safari/Chrome",
        "100% Escrow milestone release upon verified production delivery"
      ]
    },
    scraper: {
      title: "Web Scraping & Resilient Data Pipelines",
      desc: "Industrial extraction infrastructure designed to pull high-volume datasets without getting rate-limited, blocked, or challenged by anti-bot systems.",
      deliverables: [
        "Headless browser cluster orchestration (Playwright / Puppeteer)",
        "Fingerprint cloaking, TLS spoofing, and dynamic residential proxy rotation",
        "Automated schema validation and export to PostgreSQL, BigQuery, or CSV",
        "Cron job automation with failure recovery alerts"
      ]
    },
    api: {
      title: "Custom API & Webhook Architecture Integrations",
      desc: "Event-driven backends, webhook receivers, and third-party SaaS synchronizations built for zero message drop and idempotent execution.",
      deliverables: [
        "Stripe, PayPal, Shopify, and CRM bidirectional synchronizers",
        "HMAC signature validation and replay-attack security guards",
        "Redis-backed asynchronous queueing for sudden traffic spikes",
        "Full unit & integration test suites with mocked API edge cases"
      ]
    },
    landing: {
      title: "90+ High-Performance Web Applications",
      desc: "Speed-first web development engineered for sub-second LCP, zero layout shifts, WCAG AA accessibility, and maximum user conversion.",
      deliverables: [
        "90+ Google PageSpeed mobile and desktop compliance guarantee",
        "Pixel-perfect responsive layout translation from Figma designs",
        "Semantic HTML5, WCAG 2.1 AA accessibility, and schema markup",
        "Optimized asset loading with edge caching and modern WebP formats"
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
        <li class="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
          <i data-lucide="check-circle-2" class="w-4 h-4 text-[#A261FF] shrink-0 mt-0.5"></i>
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
