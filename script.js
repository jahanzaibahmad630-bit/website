// Initialize Lucide Icons
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
  initCalculator();
  initFaqAccordion();
  initCopyActions();
});

// PRICING DATA CONFIGURATION
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

// CALCULATOR LOGIC
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

  // Bind change listeners
  form.addEventListener('change', updateEstimate);
  updateEstimate();

  // Handle Copy Inquiry Brief
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
- Target Budget: ~$${finalPrice}
- Expected Turnaround: ${finalTime}

Here are the details of the issue / scope:
[Paste error log, website URL, or task description here]`;

      copyToClipboard(briefText, 'Inquiry Brief Copied!', 'Paste it into your message on Upwork, Reddit, or Email.');
    });
  }
}

// FAQ ACCORDION
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

// COPY CLIPBOARD UTILITIES
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

// TOAST NOTIFICATIONS
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
