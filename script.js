// Initialize Lucide Icons & Components
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
  initTerminalSimulator();
  initDiffTabs();
  initCalculator();
  initFaqAccordion();
  initCopyActions();
});

// 1. TERMINAL SIMULATOR ENGINE
function initTerminalSimulator() {
  const rerunBtn = document.getElementById('terminal-rerun-btn');
  const terminalBody = document.getElementById('terminal-body');

  if (!rerunBtn || !terminalBody) return;

  const simulationSteps = [
    { text: '$ jahanzaib-cli inspect --target "production.checkout"', class: 'text-slate-500', delay: 100 },
    { text: '[CRITICAL] iOS Safari modal scroll-lock blocking checkout', class: 'text-rose-400 flex items-center gap-2', icon: 'alert-triangle', delay: 400 },
    { text: '$ jahanzaib-cli patch --stack "CSS/JS"', class: 'text-slate-400', delay: 800 },
    { text: '• Stacking context overflow resolved\n• Attached momentum touch handler\n• Verified zero regression across Safari/Chrome', class: 'text-slate-300 pl-3 border-l border-white/10', delay: 1200 },
    { text: '$ jahanzaib-cli run-tests --ci', class: 'text-slate-400', delay: 1700 },
    { text: 'ALL 18 SUITES PASSED (64ms) • STATUS: READY TO MERGE', class: 'text-emerald-400 font-semibold flex items-center gap-2', icon: 'check-circle-2', delay: 2200 }
  ];

  function runSimulation() {
    terminalBody.innerHTML = '';
    rerunBtn.disabled = true;
    rerunBtn.classList.add('opacity-50', 'cursor-not-allowed');

    simulationSteps.forEach(step => {
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

        terminalBody.appendChild(div);
        if (window.lucide) window.lucide.createIcons();
      }, step.delay);
    });

    setTimeout(() => {
      rerunBtn.disabled = false;
      rerunBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    }, 2500);
  }

  rerunBtn.addEventListener('click', runSimulation);
}

// 2. CODE DIFF TABS
function initDiffTabs() {
  const tabs = document.querySelectorAll('.diff-tab-btn');
  const contents = document.querySelectorAll('.diff-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-target');

      // Update button styles
      tabs.forEach(t => {
        t.classList.remove('active', 'bg-obsidian-surface2', 'border-emerald-500/40', 'text-emerald-400');
        t.classList.add('bg-obsidian-surface1', 'border-white/10', 'text-slate-400');
      });
      tab.classList.add('active', 'bg-obsidian-surface2', 'border-emerald-500/40', 'text-emerald-400');
      tab.classList.remove('bg-obsidian-surface1', 'border-white/10', 'text-slate-400');

      // Show targeted content
      contents.forEach(content => {
        if (content.id === targetId) {
          content.classList.remove('hidden');
          content.classList.add('block');
        } else {
          content.classList.add('hidden');
          content.classList.remove('block');
        }
      });
    });
  });
}

// 3. PRICING & TURNAROUND CALCULATOR
const PRICING_CONFIG = {
  bug: {
    basePrice: 45,
    name: 'Emergency Bug Fix',
    time: '1–2 Hours',
    rushTime: 'Under 45 Mins'
  },
  scraper: {
    basePrice: 75,
    name: 'Web Scraping / Data Pipeline',
    time: '2–4 Hours',
    rushTime: 'Under 90 Mins'
  },
  api: {
    basePrice: 110,
    name: 'API & Webhook Integration',
    time: 'Same Day (4–6 Hours)',
    rushTime: 'Under 2 Hours'
  },
  landing: {
    basePrice: 220,
    name: 'Modern High-Speed Landing Page',
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

      const briefText = `Hi Jahanzaib, I have a project inquiry from your portfolio:
- Task: ${taskData.name}
- Priority: ${isRush ? 'EMERGENCY RUSH' : 'Standard'}
- Estimated Budget: ~$${finalPrice}
- Expected Turnaround: ${finalTime}

Here are the details of the issue / scope:
[Paste error log, website URL, or task description here]`;

      copyToClipboard(briefText, 'Inquiry Brief Copied!', 'Paste it into your message on Upwork, Reddit, or Email.');
    });
  }
}

// 4. FAQ ACCORDION
function initFaqAccordion() {
  const faqCards = document.querySelectorAll('.faq-card');

  faqCards.forEach(card => {
    card.addEventListener('click', () => {
      const answer = card.querySelector('.faq-answer');
      const icon = card.querySelector('svg');

      if (!answer) return;

      const isOpen = !answer.classList.contains('hidden');

      // Close all others
      document.querySelectorAll('.faq-answer').forEach(el => el.classList.add('hidden'));
      document.querySelectorAll('.faq-card svg').forEach(el => el.style.transform = 'rotate(0deg)');

      if (!isOpen) {
        answer.classList.remove('hidden');
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });
}

// 5. CLIPBOARD & TOAST UTILITIES
function initCopyActions() {
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const emailText = 'jahanzaibahmad630@gmail.com';

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      copyToClipboard(emailText, 'Email Copied!', emailText);
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
