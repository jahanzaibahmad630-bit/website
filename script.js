// Jahanzaib.dev — Client-Side Interaction Engine
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
  initCalculator();
  initFaqAccordion();
  initCopyActions();
});

// 1. DYNAMIC TURNAROUND & COST ESTIMATOR
const PRICING_CONFIG = {
  bug: {
    basePrice: 45,
    name: 'Emergency Bug Fix',
    time: '1–2 Hours',
    rushTime: 'Under 45 Mins'
  },
  scraper: {
    basePrice: 75,
    name: 'Web Scraper & Lead Extraction',
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
    name: '90+ High-Performance Landing Page',
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

      const briefText = `Hi Jahanzaib, I have an inquiry via your portfolio:
- Task: ${taskData.name}
- Priority: ${isRush ? 'EMERGENCY RUSH' : 'Standard'}
- Target Investment: ~$${finalPrice}
- Expected SLA: ${finalTime}

Details of my issue / scope:
[Paste error log, website URL, or project requirements here]`;

      copyToClipboard(briefText, 'Inquiry Brief Copied!', 'Paste it directly into Upwork or Email to get started.');
    });
  }
}

// 2. ACCESSIBLE FAQ ACCORDION (WCAG 2.1 AA)
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

// 3. CLIPBOARD & TOAST SYSTEM
function initCopyActions() {
  const emailText = 'jahanzaibahmad630@gmail.com';
  const copyBtn = document.getElementById('copy-email-btn');
  const copyHeaderBtn = document.getElementById('copy-email-header-btn');

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

  if (copyHeaderBtn) {
    copyHeaderBtn.addEventListener('click', () => {
      copyToClipboard(emailText, 'Email Address Copied!', emailText);
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
