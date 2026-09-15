// Jahanzaib.dev — Studio Production Engine
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
  initConsoleSimulator();
  initCalculator();
  initFaqAccordion();
  initCopyActions();
});

// 1. CONSOLE SIMULATOR
function initConsoleSimulator() {
  const rerunBtn = document.getElementById('console-rerun-btn');
  const stream = document.getElementById('console-stream');

  if (!rerunBtn || !stream) return;

  const logs = [
    { text: '> ANALYZING PRODUCTION CRASH ON TARGET: checkout.bundle.js', class: 'text-studio-muted', delay: 100 },
    { text: 'EXCEPTION DETECTED: Modal viewport height overflow blocking touch event', class: 'text-rose-400 flex items-center gap-2', icon: 'alert-circle', delay: 400 },
    { text: '> INITIATING PATCH SEQUENCE...', class: 'text-studio-muted', delay: 800 },
    { text: '+ Resolved CSS stacking context conflict\n+ Added native -webkit-overflow-scrolling momentum listener\n+ Verified 0% regression on mobile Safari & Chrome', class: 'text-white pl-4 border-l border-white/20', delay: 1200 },
    { text: 'SUCCESS: 18/18 TEST SUITES GREEN (42ms) • READY FOR ESCROW RELEASE', class: 'text-studio-accent font-semibold flex items-center gap-2 pt-2', icon: 'check-circle-2', delay: 1800 }
  ];

  function runSimulation() {
    stream.innerHTML = '';
    rerunBtn.disabled = true;
    rerunBtn.classList.add('opacity-50', 'cursor-not-allowed');

    logs.forEach(step => {
      setTimeout(() => {
        const div = document.createElement('div');
        div.className = step.class;

        if (step.icon) {
          const icon = document.createElement('i');
          icon.setAttribute('data-lucide', step.icon);
          icon.className = 'w-3.5 h-3.5';
          div.appendChild(icon);
        }

        const span = document.createElement('span');
        span.innerText = step.text;
        div.appendChild(span);

        stream.appendChild(div);
        if (window.lucide) window.lucide.createIcons();
      }, step.delay);
    });

    setTimeout(() => {
      rerunBtn.disabled = false;
      rerunBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    }, 2200);
  }

  rerunBtn.addEventListener('click', runSimulation);
}

// 2. STUDIO PROJECT ESTIMATOR
const PRICING_CONFIG = {
  bug: {
    basePrice: 45,
    name: 'Emergency Bug Remediation',
    time: '1–2 Hours',
    rushTime: 'Under 45 Mins'
  },
  scraper: {
    basePrice: 75,
    name: 'Web Scraper & Lead Extraction Pipeline',
    time: '2–4 Hours',
    rushTime: 'Under 90 Mins'
  },
  api: {
    basePrice: 110,
    name: 'API & Webhook Architecture Integration',
    time: 'Same Day (4–6 Hours)',
    rushTime: 'Under 2 Hours'
  },
  landing: {
    basePrice: 220,
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

    const taskData = PRICING_CONFIG[selectedTask] || PRICING_CONFIG.bug;
    const isRush = selectedUrgency === 'urgent';

    const finalPrice = isRush ? taskData.basePrice + 25 : taskData.basePrice;
    const finalTime = isRush ? taskData.rushTime : taskData.time;

    priceDisplay.textContent = `$${finalPrice}`;
    timeDisplay.textContent = `| Turnaround: ${finalTime}`;
  }

  form.addEventListener('change', updateEstimate);
  updateEstimate();

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const selectedTask = form.elements['task_type'] ? form.elements['task_type'].value : 'bug';
      const selectedUrgency = form.elements['urgency'] ? form.elements['urgency'].value : 'standard';
      const taskData = PRICING_CONFIG[selectedTask] || PRICING_CONFIG.bug;
      const isRush = selectedUrgency === 'urgent';
      const finalPrice = isRush ? taskData.basePrice + 25 : taskData.basePrice;
      const finalTime = isRush ? taskData.rushTime : taskData.time;

      const briefText = `Hi Jahanzaib, I have a project inquiry from your studio portfolio:
- Scope: ${taskData.name}
- Priority: ${isRush ? 'EMERGENCY RUSH' : 'Standard Delivery'}
- Target Investment: ~$${finalPrice}
- Guaranteed SLA: ${finalTime}

Details of my task / error log:
[Paste error log, website URL, or task description here]`;

      copyToClipboard(briefText, 'Production Brief Copied!', 'Paste directly into Upwork or Email to begin.');
    });
  }
}

// 3. ACCESSIBLE ACCORDION
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    function toggleAccordion() {
      const answer = item.querySelector('.faq-answer');
      const icon = item.querySelector('.faq-icon');
      if (!answer) return;

      const isExpanded = item.getAttribute('aria-expanded') === 'true';

      // Close all others
      faqItems.forEach(other => {
        if (other !== item) {
          other.setAttribute('aria-expanded', 'false');
          const otherAns = other.querySelector('.faq-answer');
          const otherIcon = other.querySelector('.faq-icon');
          if (otherAns) otherAns.classList.add('hidden');
          if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
        }
      });

      // Toggle current
      if (isExpanded) {
        item.setAttribute('aria-expanded', 'false');
        answer.classList.add('hidden');
        if (icon) icon.style.transform = 'rotate(0deg)';
      } else {
        item.setAttribute('aria-expanded', 'true');
        answer.classList.remove('hidden');
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    }

    item.addEventListener('click', toggleAccordion);
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleAccordion();
      }
    });
  });
}

// 4. CLIPBOARD SYSTEM
function initCopyActions() {
  const emailText = 'jahanzaibahmad630@gmail.com';
  const copyBtn = document.getElementById('copy-email-btn');

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      copyToClipboard(emailText, 'Email Address Copied!', emailText);
      const textLabel = document.getElementById('copy-email-text');
      if (textLabel) {
        const original = textLabel.innerHTML;
        textLabel.innerHTML = '✓ Copied to Clipboard!';
        setTimeout(() => {
          textLabel.innerHTML = original;
        }, 2500);
      }
    });
  }
}

function copyToClipboard(text, title, message) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(title, message);
  }).catch(() => {
    prompt('Copy to clipboard:', text);
  });
}

function showToast(title, message) {
  const toast = document.getElementById('toast');
  const toastTitle = document.getElementById('toast-title');
  const toastMsg = document.getElementById('toast-msg');

  if (!toast) return;

  if (toastTitle) toastTitle.textContent = title;
  if (toastMsg) toastMsg.textContent = message;

  toast.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
  toast.classList.add('opacity-100', 'translate-y-0');

  setTimeout(() => {
    toast.classList.remove('opacity-100', 'translate-y-0');
    toast.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
  }, 3500);
}
