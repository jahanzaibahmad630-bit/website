// ==========================================================================
// Jahanzaib Ahmad — Portfolio AI Assistant Engine
// Trained on Jahanzaib Ahmad's Full-Stack Engineering Knowledge Base
// ==========================================================================

(function() {
  const KNOWLEDGE_BASE = [
    {
      keywords: ['who', 'about', 'jahanzaib', 'background', 'bio', 'developer', 'experience', 'years'],
      reply: "I'm **Jahanzaib Ahmad**, a Senior Full-Stack Web Developer and on-demand engineering partner with **4+ years of hands-on experience**. I specialize in **emergency production bug fixes (< 2h turnaround)**, **anti-detect web scrapers**, **scalable APIs**, and **90+ PageSpeed web apps**.",
      suggestions: ["What are your rates?", "How fast can you fix a bug?", "What stacks do you use?"]
    },
    {
      keywords: ['bug', 'emergency', 'crash', 'fix', 'hotfix', 'broken', 'error', 'urgent', 'speed', 'fast', 'turnaround', 'sla', 'response'],
      reply: "⚡ **Emergency Bug Remediation (< 2h Turnaround)**:\nI provide rapid live triage for production crashes, Next.js hydration failures, checkout flow dropoffs, and database lockouts.\n• **SLA**: Initial diagnostic within 15–20 minutes.\n• **Turnaround**: 1–2 hours for critical fixes.\n• **Guarantee**: 100% Escrow milestone release upon verified resolution.",
      suggestions: ["What do you charge for a bug fix?", "Can we talk on WhatsApp?", "What stacks do you support?"]
    },
    {
      keywords: ['price', 'pricing', 'cost', 'rate', 'rates', 'fee', 'charge', 'how much', 'quote', 'budget', 'estimate'],
      reply: "💰 **Transparent Milestone Pricing**:\n• **Emergency Bug Fix**: From **$50** (< 2h turnaround)\n• **Web Scraper & Data Pipeline**: From **$85** (2–4h turnaround)\n• **API & Webhook Architecture**: From **$120** (Same day)\n• **90+ High-Performance Web App**: From **$250** (24–48h)\n\nYou can also use the interactive **[Estimator](#estimator)** on this page to calculate your project cost!",
      suggestions: ["How does escrow work?", "Can we chat on WhatsApp?", "What is your turnaround?"]
    },
    {
      keywords: ['whatsapp', 'phone', 'call', 'number', 'mobile', 'chat', 'direct'],
      reply: "📱 **Direct WhatsApp Business Contact**:\nYou can reach me directly on WhatsApp at **+92 318 7635856**.\n\n👉 [Click here to Open WhatsApp](https://wa.me/923187635856?text=Hi%20Jahanzaib,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.) for an instant response!",
      suggestions: ["What is your email?", "Can you fix an urgent bug?", "What are your services?"]
    },
    {
      keywords: ['email', 'mail', 'contact', 'hire', 'reach', 'message'],
      reply: "📬 **How to Contact & Hire Me**:\n• **WhatsApp Business**: [+92 318 7635856](https://wa.me/923187635856)\n• **Email**: [jahanzaibahmad630@gmail.com](mailto:jahanzaibahmad630@gmail.com)\n• **GitHub**: [@jahanzaibahmad630-bit](https://github.com/jahanzaibahmad630-bit)\n• **Upwork**: Escrow-protected contracts available.\n\nStandard reply time is under 15 minutes during active hours!",
      suggestions: ["What is your WhatsApp number?", "What are your rates?", "What is your tech stack?"]
    },
    {
      keywords: ['scrape', 'scraper', 'scraping', 'data', 'crawling', 'crawler', 'cloudflare', 'datadome', 'playwright', 'puppeteer', 'beautifulsoup', 'extraction'],
      reply: "🕷️ **Web Scraping & Data Pipelines**:\nI engineer industrial extraction clusters capable of extracting 100k+ records daily:\n• Anti-bot evasion: Cloudflare, Datadome, PerimiterX, and reCAPTCHA bypass.\n• Headless browser clusters: Playwright, Puppeteer, Python BeautifulSoup.\n• Dynamic proxy rotation & TLS fingerprint spoofing.\n• Direct export to PostgreSQL, BigQuery, Supabase, or clean CSV/JSON.",
      suggestions: ["How much for a scraper?", "What stacks do you use?", "Can we chat on WhatsApp?"]
    },
    {
      keywords: ['api', 'webhook', 'stripe', 'paypal', 'shopify', 'backend', 'integration', 'payment'],
      reply: "🔌 **API & Webhook Architecture**:\n• Payment systems: Stripe (Checkout, Elements, Webhooks), PayPal, Escrow APIs.\n• E-Commerce: Shopify API, WooCommerce real-time inventory sync engines.\n• Event-driven architecture: Idempotent webhook listeners, Redis pub/sub queueing, zero message loss.\n• Backend frameworks: Node.js/Express, Python (FastAPI/Flask), PostgreSQL.",
      suggestions: ["What are your rates for an API?", "View Featured Projects", "Contact on WhatsApp"]
    },
    {
      keywords: ['stack', 'tech', 'skills', 'technologies', 'react', 'next', 'python', 'node', 'typescript', 'tailwind', 'database'],
      reply: "🛠️ **Technical Stack & Architecture**:\n• **Frontend**: React, Next.js, TypeScript, Tailwind CSS, Vue.js, Semantic HTML5.\n• **Backend**: Node.js, Express, Python (FastAPI, Flask), RESTful APIs, GraphQL.\n• **Data & Automation**: Playwright, BeautifulSoup, PostgreSQL, Redis, BigQuery, Supabase.\n• **DevOps & Tools**: Docker, Git, CI/CD GitHub Actions, Linux.",
      suggestions: ["How fast can you fix a bug?", "What are your rates?", "Can we talk on WhatsApp?"]
    },
    {
      keywords: ['project', 'portfolio', 'work', 'case study', 'shopify sync', 'case studies'],
      reply: "🚀 **Recent Production Case Studies**:\n1. **Shopify & WooCommerce Real-Time Sync Engine**: Reconciled 50,000+ SKUs with sub-second latency and Redis pub/sub queues.\n2. **Anti-Detect Distributed Web Scraper Cluster**: 100k+ daily pages extracted with automated proxy cycling and BigQuery export.\n\nCheck out the **[Projects Section](#projects)** for full architectural details!",
      suggestions: ["What are your rates?", "Can you fix an emergency bug?", "Contact on WhatsApp"]
    },
    {
      keywords: ['escrow', 'guarantee', 'safe', 'payment', 'upwork', 'trust', 'security'],
      reply: "🛡️ **100% Escrow Milestone Protection**:\nAll client projects can be managed through **Upwork Escrow** or structured milestone agreements. Funds are held safely until you verify the code works on your side. Zero financial risk.",
      suggestions: ["What are your rates?", "Can we chat on WhatsApp?", "What is your email?"]
    },
    {
      keywords: ['hello', 'hi', 'hey', 'greetings', 'morning', 'afternoon'],
      reply: "Hello! 👋 I'm Jahanzaib's AI Technical Assistant. Ask me anything about Jahanzaib's full-stack services, rates, emergency bug fixes, or tech stack!",
      suggestions: ["⚡ How fast can you fix a bug?", "💰 What are your rates?", "📱 What is your WhatsApp?", "🛠️ What tech stacks do you use?"]
    }
  ];

  function getBotResponse(input) {
    const cleanInput = input.toLowerCase().trim();
    if (!cleanInput) return null;

    let bestMatch = null;
    let highestScore = 0;

    KNOWLEDGE_BASE.forEach(entry => {
      let score = 0;
      entry.keywords.forEach(kw => {
        if (cleanInput.includes(kw)) {
          score += (kw.length > 4 ? 2 : 1);
        }
      });

      if (score > highestScore) {
        highestScore = score;
        bestMatch = entry;
      }
    });

    if (bestMatch && highestScore > 0) {
      return bestMatch;
    }

    return {
      reply: "I'd be happy to help with that! While I'm Jahanzaib's AI assistant, for custom architectural requirements or urgent bug triage, you can connect directly with Jahanzaib:\n\n• 📱 **WhatsApp**: [+92 318 7635856](https://wa.me/923187635856?text=Hi%20Jahanzaib,%20I%20have%20a%20project%20inquiry.)\n• ✉️ **Email**: [jahanzaibahmad630@gmail.com](mailto:jahanzaibahmad630@gmail.com)",
      suggestions: ["⚡ Emergency Bug Remediation", "💰 What are your rates?", "🛠️ Technical Stack", "📱 Open WhatsApp"]
    };
  }

  function formatMarkdown(text) {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-[#A261FF] underline hover:text-white">$1</a>')
      .replace(/\n/g, '<br />');
  }

  window.initPortfolioChatbot = function() {
    const launcherBtn = document.getElementById('ai-chat-launcher');
    const chatModal = document.getElementById('ai-chat-modal');
    const closeBtn = document.getElementById('ai-chat-close');
    const resetBtn = document.getElementById('ai-chat-reset');
    const messagesContainer = document.getElementById('ai-chat-messages');
    const chatForm = document.getElementById('ai-chat-form');
    const chatInput = document.getElementById('ai-chat-input');
    const suggestionsContainer = document.getElementById('ai-chat-suggestions');

    if (!launcherBtn || !chatModal || !messagesContainer || !chatForm || !chatInput) return;

    let isTyping = false;

    function openChat() {
      chatModal.classList.remove('hidden');
      chatModal.classList.add('flex');
      launcherBtn.classList.add('hidden');
      chatInput.focus();
      scrollToBottom();
    }

    function closeChat() {
      chatModal.classList.add('hidden');
      chatModal.classList.remove('flex');
      launcherBtn.classList.remove('hidden');
    }

    function scrollToBottom() {
      setTimeout(() => {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }, 50);
    }

    function appendMessage(sender, text, isBot = false) {
      const msgDiv = document.createElement('div');
      msgDiv.className = isBot 
        ? 'flex items-start gap-2.5 max-w-[88%] text-left' 
        : 'flex items-start gap-2.5 max-w-[85%] ml-auto justify-end text-right';

      const bubbleClass = isBot
        ? 'p-3.5 rounded-2xl rounded-tl-none bg-[#24123d] border border-purple-800/40 text-xs sm:text-sm text-slate-100 leading-relaxed shadow-lg'
        : 'p-3.5 rounded-2xl rounded-tr-none bg-gradient-to-r from-[#7127BA] to-[#9757D3] text-xs sm:text-sm text-white font-medium shadow-lg';

      const avatarHtml = isBot
        ? `<div class="w-7 h-7 rounded-lg bg-gradient-to-br from-[#7127BA] to-[#9757D3] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-md"><i data-lucide="bot" class="w-4 h-4"></i></div>`
        : '';

      msgDiv.innerHTML = isBot
        ? `${avatarHtml}<div class="${bubbleClass}">${formatMarkdown(text)}</div>`
        : `<div class="${bubbleClass}">${text}</div>`;

      messagesContainer.appendChild(msgDiv);
      scrollToBottom();

      if (window.lucide) window.lucide.createIcons();
    }

    function updateSuggestions(suggestions) {
      if (!suggestionsContainer) return;
      suggestionsContainer.innerHTML = '';
      if (!suggestions || suggestions.length === 0) return;

      suggestions.forEach(item => {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'px-3 py-1.5 rounded-full bg-purple-950/80 border border-purple-700/50 hover:border-[#A261FF] text-[11px] text-purple-200 hover:text-white transition-all shrink-0 whitespace-nowrap shadow-sm';
        chip.textContent = item;
        chip.addEventListener('click', () => {
          handleUserSubmit(item);
        });
        suggestionsContainer.appendChild(chip);
      });
      scrollToBottom();
    }

    function handleUserSubmit(userText) {
      if (!userText || isTyping) return;
      appendMessage('User', userText, false);
      chatInput.value = '';

      isTyping = true;
      const typingIndicator = document.createElement('div');
      typingIndicator.id = 'ai-typing-indicator';
      typingIndicator.className = 'flex items-center gap-2 max-w-[85%] text-xs text-purple-300/80';
      typingIndicator.innerHTML = `
        <div class="w-7 h-7 rounded-lg bg-[#24123d] border border-purple-800/40 flex items-center justify-center shrink-0">
          <i data-lucide="bot" class="w-4 h-4 text-[#A261FF]"></i>
        </div>
        <div class="p-3 rounded-2xl rounded-tl-none bg-[#24123d] border border-purple-800/40 flex items-center gap-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-[#A261FF] animate-bounce"></span>
          <span class="w-1.5 h-1.5 rounded-full bg-[#A261FF] animate-bounce [animation-delay:0.2s]"></span>
          <span class="w-1.5 h-1.5 rounded-full bg-[#A261FF] animate-bounce [animation-delay:0.4s]"></span>
        </div>
      `;
      messagesContainer.appendChild(typingIndicator);
      scrollToBottom();
      if (window.lucide) window.lucide.createIcons();

      setTimeout(() => {
        const indicator = document.getElementById('ai-typing-indicator');
        if (indicator) indicator.remove();
        isTyping = false;

        const responseObj = getBotResponse(userText);
        appendMessage('AI', responseObj.reply, true);
        updateSuggestions(responseObj.suggestions);
      }, 450);
    }

    launcherBtn.addEventListener('click', openChat);
    closeBtn.addEventListener('click', closeChat);

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        messagesContainer.innerHTML = '';
        appendMessage('AI', "Hi! I'm Jahanzaib's AI Technical Assistant. Ask me anything about Jahanzaib's full-stack services, rates, emergency bug fixes, or tech stack!", true);
        updateSuggestions(["⚡ How fast can you fix a bug?", "💰 What are your rates?", "📱 What is your WhatsApp?", "🛠️ What tech stacks do you use?"]);
      });
    }

    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = chatInput.value.trim();
      if (val) {
        handleUserSubmit(val);
      }
    });

    // Initial suggestions
    updateSuggestions(["⚡ How fast can you fix a bug?", "💰 What are your rates?", "📱 What is your WhatsApp?", "🛠️ What tech stacks do you use?"]);
  };

  document.addEventListener('DOMContentLoaded', () => {
    if (window.initPortfolioChatbot) {
      window.initPortfolioChatbot();
    }
  });
})();
