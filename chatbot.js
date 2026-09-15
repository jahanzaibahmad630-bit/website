// ==========================================================================
// Jahanzaib Ahmad — Autonomous AI Technical Agent (Agent-JA v2.5)
// Real-time Reasoning, Tool Execution, Autonomous Navigation & Diagnosis
// ==========================================================================

(function() {
  const KNOWLEDGE_BASE = [
    {
      keywords: ['who', 'about', 'jahanzaib', 'background', 'bio', 'developer', 'experience', 'years'],
      thought: "Analyzing developer identity and credentials query...",
      action: "query_database('developer_profile')",
      reply: "I am **Jahanzaib Ahmad**, a Senior Full-Stack Software Engineer and on-demand technical partner with **4+ years of hands-on experience**.\n\n• **Specialization**: Rapid emergency hotfixes (< 2h turnaround), anti-detect web scrapers, high-throughput APIs, and 90+ PageSpeed web apps.\n• **Reliability**: 100% Escrow milestone protected, zero risk to clients.\n• **Status**: Currently accepting new client contracts & emergency tasks.",
      suggestions: ["⚡ Emergency Bug Remediation", "💰 Calculate Project Cost", "🛠️ Technical Stack", "📱 Open WhatsApp"],
      actions: [
        { label: "📱 Chat on WhatsApp", url: "https://wa.me/923187635856?text=Hi%20Jahanzaib,%20I%20would%20like%20to%20discuss%20a%20full-stack%20project.", primary: true },
        { label: "🚀 View Case Studies", scrollTo: "#projects" }
      ]
    },
    {
      keywords: ['issue', 'my issue', 'problem', 'not working', 'fails', 'failing', 'help me fix', 'my website', 'my app', 'incident'],
      thought: "Activating automated incident intake protocol. Requesting error logs, environment specs, and repository access...",
      action: "request_incident_intake_data()",
      reply: "🚨 **Automated Incident Intake Protocol (< 2h SLA)**:\n\nTo diagnose and patch your issue immediately, please provide the following 4 items:\n\n1. **Error Logs / Screenshots**: Exact error message, console errors, or server stack trace.\n2. **Tech Stack & Hosting**: Framework (e.g. Next.js, Node.js, Python) and deployment environment (Vercel, AWS, VPS).\n3. **Codebase Access**: GitHub repo invite (add `@jahanzaibahmad630-bit`) or temporary staging/SSH credentials.\n4. **Reproduction Steps**: The exact user actions that trigger the failure.\n\n*Click below to dispatch this structured intake report directly to my WhatsApp:*",
      suggestions: ["📱 Send Issue Details on WhatsApp", "What do you charge for fixes?", "How does escrow work?"],
      actions: [
        { label: "📋 Send Issue & Access on WhatsApp", url: "https://wa.me/923187635856?text=🚨%20PRODUCTION%20ISSUE%20REPORT:%0A%0A1.%20Issue%20Description:%20%0A2.%20Error%20Logs/Screenshots:%20%0A3.%20Tech%20Stack:%20%0A4.%20Repo%20or%20Access%20Link:%20", primary: true },
        { label: "💰 View Pricing Matrix", scrollTo: "#estimator" }
      ]
    },
    {
      keywords: ['bug', 'crash', 'hotfix', 'emergency', 'broken', 'error', 'urgent', 'fix', 'hydration', '500', 'cors', 'triage'],
      thought: "Detecting production incident triage request. Checking SLA & hotfix availability...",
      action: "execute_triage_engine('emergency_bug_fix')",
      reply: "⚡ **Emergency Production Bug Remediation (< 2h SLA)**:\nI perform immediate live triage on mission-critical software blockers:\n\n• **Next.js & React**: Hydration mismatches, state race conditions, bundle bloat.\n• **Backend & DB**: Unhandled exceptions, deadlocks, connection pool exhaustion, 502/504 errors.\n• **E-Commerce**: Broken checkout funnels, payment gateway drops, inventory desync.\n\n**SLA Protocol**: Diagnosis in < 20 mins • Surgical patch in 1–2 hours • Staging verified • 100% escrow release upon delivery.",
      suggestions: ["What do you charge for a bug fix?", "📱 Open WhatsApp for Urgent Fix", "Can you fix Next.js hydration?"],
      actions: [
        { label: "⚡ Dispatch Hotfix to WhatsApp", url: "https://wa.me/923187635856?text=EMERGENCY%20BUG%20HOTFIX:%20I%20have%20an%20urgent%20production%20issue.", primary: true },
        { label: "💰 View Pricing Tiers", scrollTo: "#estimator" }
      ]
    },
    {
      keywords: ['hydration', 'nextjs', 'next.js', 'react error'],
      thought: "Analyzing React / Next.js hydration error diagnosis request...",
      action: "run_diagnostic_triage('nextjs_hydration_mismatch')",
      reply: "🛠️ **Diagnostic: Next.js Hydration Mismatch**:\n• **Root Cause**: Server-rendered HTML differs from the first client-side DOM render (often caused by `typeof window`, random values, unmounted local storage, or invalid HTML nesting like `<p>` inside `<p>`).\n• **Resolution Protocol**: Implement client mounting gates with `useEffect` / `useState(false)`, dynamic imports with `{ ssr: false }`, or audit DOM node hierarchy.\n• **Turnaround**: Typically diagnosed and patched in **under 45 minutes**.",
      suggestions: ["⚡ Fix my Next.js bug now", "What is your hourly rate?", "Can we talk on WhatsApp?"],
      actions: [
        { label: "📱 WhatsApp Jahanzaib", url: "https://wa.me/923187635856?text=Next.js%20Hydration%20Bug:%20Need%20help%20fixing%20a%20client/server%20mismatch.", primary: true }
      ]
    },
    {
      keywords: ['price', 'pricing', 'cost', 'rate', 'rates', 'fee', 'charge', 'how much', 'quote', 'budget', 'estimate'],
      thought: "Accessing transparent pricing matrix and milestone estimator...",
      action: "fetch_pricing_matrix()",
      reply: "💰 **Transparent Milestone Pricing Matrix**:\n\n• **Emergency Bug Remediation**: From **$50** (Turnaround: < 2 hours)\n• **Web Scraper & Data Pipeline**: From **$85** (Turnaround: 2–4 hours)\n• **Custom API & Webhook System**: From **$120** (Turnaround: Same Day)\n• **90+ High-Performance Web App**: From **$250** (Turnaround: 24–48 hours)\n\n*All payments are securely held in Upwork Escrow until verified production deployment.*",
      suggestions: ["Calculate my project in Estimator", "How does escrow work?", "Contact on WhatsApp"],
      actions: [
        { label: "🧮 Launch Interactive Estimator", scrollTo: "#estimator", primary: true },
        { label: "📱 WhatsApp for Custom Quote", url: "https://wa.me/923187635856?text=Hi%20Jahanzaib,%20I%20would%20like%20a%20quote%20for%20a%20project." }
      ]
    },
    {
      keywords: ['whatsapp', 'phone', 'call', 'number', 'mobile', 'chat', 'direct'],
      thought: "Routing visitor to direct WhatsApp Business channel...",
      action: "open_gateway('whatsapp_business')",
      reply: "📱 **Direct WhatsApp Business Contact**:\nYou can reach Jahanzaib Ahmad directly on WhatsApp at **+92 318 7635856**.\n\n• **Status**: Online & responsive (< 15 mins SLA during active hours)\n• **Use Cases**: Emergency bug hotfixes, architecture reviews, quick quotes.",
      suggestions: ["What is your email?", "Can you fix an urgent bug?", "View Case Studies"],
      actions: [
        { label: "📱 Open WhatsApp Conversation", url: "https://wa.me/923187635856?text=Hi%20Jahanzaib,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.", primary: true }
      ]
    },
    {
      keywords: ['email', 'mail', 'contact', 'hire', 'reach', 'message'],
      thought: "Retrieving official contact gateways and contract protocols...",
      action: "query_contact_endpoints()",
      reply: "📬 **Verified Contact Channels**:\n\n• **WhatsApp Business**: [+92 318 7635856](https://wa.me/923187635856) *(Fastest response)*\n• **Direct Email**: [jahanzaibahmad630@gmail.com](mailto:jahanzaibahmad630@gmail.com)\n• **GitHub**: [@jahanzaibahmad630-bit](https://github.com/jahanzaibahmad630-bit)\n• **Upwork**: Contract escrow protected.",
      suggestions: ["📱 Chat on WhatsApp", "💰 View Pricing Tiers", "🚀 View Projects"],
      actions: [
        { label: "📱 Open WhatsApp", url: "https://wa.me/923187635856?text=Hi%20Jahanzaib,%20I%20have%20a%20project%20inquiry.", primary: true },
        { label: "✉️ Send Email", url: "mailto:jahanzaibahmad630@gmail.com" }
      ]
    },
    {
      keywords: ['scrape', 'scraper', 'scraping', 'data', 'crawling', 'crawler', 'cloudflare', 'datadome', 'playwright', 'puppeteer', 'beautifulsoup', 'extraction'],
      thought: "Analyzing web scraping and anti-bot evasion capabilities...",
      action: "inspect_toolchain('web_scraping_cluster')",
      reply: "🕷️ **Industrial Web Scraping & Data Extraction**:\nI engineer automated extraction infrastructure designed to handle complex anti-bot protection:\n\n• **Anti-Bot Defeat**: Cloudflare Turnstile, Datadome, PerimeterX, reCAPTCHA v3.\n• **Toolchain**: Playwright, Puppeteer, Python BeautifulSoup, dynamic residential proxy pools, TLS fingerprint cloaking.\n• **Output Pipelines**: Automated schema validation into PostgreSQL, BigQuery, Supabase, or clean JSON/CSV.",
      suggestions: ["How much for a scraper?", "Can you scrape Cloudflare?", "View Scraper Project"],
      actions: [
        { label: "🚀 View Scraper Case Study", scrollTo: "#projects", primary: true },
        { label: "📱 Request Scraper on WhatsApp", url: "https://wa.me/923187635856?text=Web%20Scraper%20Inquiry:%20I%20need%20data%20extraction%20for%20my%20business." }
      ]
    },
    {
      keywords: ['api', 'webhook', 'stripe', 'paypal', 'shopify', 'backend', 'integration', 'payment'],
      thought: "Inspecting API, webhook, and payment integration architecture...",
      action: "query_service('api_webhook_architecture')",
      reply: "🔌 **Custom API & Webhook Systems**:\n• **Payment Gateways**: Stripe (Checkout, Elements, Subscription, Custom Webhook handlers), PayPal SDK.\n• **E-Commerce Sync**: Shopify API, WooCommerce real-time SKU and inventory sync engine.\n• **Reliability**: HMAC signature verification, idempotent execution, Redis pub/sub queueing to prevent duplicate transactions and message drops under high traffic.",
      suggestions: ["View Shopify Sync Project", "What are your API rates?", "Chat on WhatsApp"],
      actions: [
        { label: "🚀 View Shopify Sync Case Study", scrollTo: "#projects", primary: true },
        { label: "📱 Discuss API on WhatsApp", url: "https://wa.me/923187635856?text=API%20Integration:%20I%20need%20custom%20webhook/payment%20development." }
      ]
    },
    {
      keywords: ['stack', 'tech', 'skills', 'technologies', 'react', 'next', 'python', 'node', 'typescript', 'tailwind', 'database', 'docker'],
      thought: "Querying technical stack and framework competencies...",
      action: "load_technology_matrix()",
      reply: "🛠️ **Production Technology Stack**:\n\n• **Frontend**: React, Next.js, TypeScript, Tailwind CSS, Vue.js, Semantic HTML5/CSS3.\n• **Backend**: Node.js, Express, Python (FastAPI, Flask), RESTful APIs, GraphQL.\n• **Data & Automation**: Playwright, BeautifulSoup, PostgreSQL, Redis, BigQuery, Supabase.\n• **DevOps & Cloud**: Docker, Git, GitHub Actions CI/CD, Linux edge instances.",
      suggestions: ["🚀 View Projects", "⚡ Emergency Bug Remediation", "💰 Estimate Cost"],
      actions: [
        { label: "🪐 View Skills Constellation", scrollTo: "#skills", primary: true },
        { label: "📱 Inquire on WhatsApp", url: "https://wa.me/923187635856?text=Tech%20Stack%20Inquiry:%20Do%20you%20have%20experience%20with..." }
      ]
    },
    {
      keywords: ['project', 'portfolio', 'work', 'case study', 'shopify sync', 'case studies'],
      thought: "Locating production case studies and live architecture...",
      action: "navigate_and_highlight('#projects')",
      reply: "🚀 **Featured Production Projects**:\n\n1. **Shopify & WooCommerce Real-Time Sync Engine**: Reconciles inventory across 50,000+ active SKUs with sub-second latency and Redis queueing.\n2. **Anti-Detect Distributed Web Scraper Cluster**: 100k+ daily pages extracted with automated proxy cycling and BigQuery export.\n\n*I can navigate you directly to the Projects section right now!*",
      suggestions: ["Show me the projects", "What are your rates?", "Chat on WhatsApp"],
      actions: [
        { label: "🚀 Navigate to Projects Section", scrollTo: "#projects", primary: true },
        { label: "📱 Ask Jahanzaib on WhatsApp", url: "https://wa.me/923187635856?text=I%20would%20like%20to%20learn%20more%20about%20your%20projects." }
      ]
    },
    {
      keywords: ['escrow', 'guarantee', 'safe', 'payment', 'upwork', 'trust', 'security'],
      thought: "Retrieving escrow terms and client protection policies...",
      action: "check_client_guarantees()",
      reply: "🛡️ **100% Escrow Milestone Protection**:\nAll projects are contracted through **Upwork Escrow** or formal escrow milestones:\n• Funds are only deposited into escrow.\n• Zero payment is released until you verify working code in staging/production.\n• Full money-back commitment if an agreed bug cannot be remediated.",
      suggestions: ["⚡ Emergency Bug Remediation", "💰 View Pricing Tiers", "📱 Chat on WhatsApp"],
      actions: [
        { label: "📱 Discuss Escrow on WhatsApp", url: "https://wa.me/923187635856?text=Escrow%20Question:%20How%20do%20we%20set%20up%20milestone%20protection?", primary: true }
      ]
    },
    {
      keywords: ['hello', 'hi', 'hey', 'greetings', 'morning', 'afternoon'],
      thought: "Initializing session. Ready for autonomous technical queries...",
      action: "handshake_visitor()",
      reply: "Hello! 👋 I am **Agent JA**, Jahanzaib Ahmad's Autonomous Technical Partner.\n\nI can **diagnose errors**, **calculate project estimates**, **navigate the portfolio**, or **connect you directly with Jahanzaib on WhatsApp**.",
      suggestions: ["⚡ How fast can you fix a bug?", "💰 What are your rates?", "🛠️ What tech stacks do you use?", "📱 Open WhatsApp"],
      actions: [
        { label: "📱 Chat on WhatsApp", url: "https://wa.me/923187635856?text=Hi%20Jahanzaib,%20I%20am%20exploring%20your%20portfolio.", primary: true },
        { label: "🧮 Project Estimator", scrollTo: "#estimator" }
      ]
    }
  ];

  function getAgentResponse(input) {
    const cleanInput = input.toLowerCase().trim();
    if (!cleanInput) return null;

    let bestMatch = null;
    let highestScore = 0;

    KNOWLEDGE_BASE.forEach(entry => {
      let score = 0;
      entry.keywords.forEach(kw => {
        if (cleanInput.includes(kw)) {
          score += (kw.length > 4 ? 3 : 1);
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
      thought: "No exact rule matched. Generating technical consultation fallback with direct WhatsApp link...",
      action: "route_to_human_partner('whatsapp_business')",
      reply: "I understand your query! For specific architectural designs, custom repository audits, or immediate emergency hotfixes, connect directly with Jahanzaib:\n\n• 📱 **WhatsApp**: [+92 318 7635856](https://wa.me/923187635856?text=Hi%20Jahanzaib,%20I%20have%20a%20technical%20inquiry.)\n• ✉️ **Email**: [jahanzaibahmad630@gmail.com](mailto:jahanzaibahmad630@gmail.com)",
      suggestions: ["⚡ Emergency Bug Remediation", "💰 What are your rates?", "🛠️ Technical Stack", "📱 Open WhatsApp"],
      actions: [
        { label: "📱 Chat Directly on WhatsApp", url: "https://wa.me/923187635856?text=Hi%20Jahanzaib,%20I%20have%20a%20technical%20inquiry.", primary: true },
        { label: "🧮 Estimate Project Cost", scrollTo: "#estimator" }
      ]
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

    let isThinking = false;

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

    function appendMessage(sender, text, isBot = false, data = null) {
      const msgDiv = document.createElement('div');
      msgDiv.className = isBot 
        ? 'flex items-start gap-2.5 max-w-[92%] text-left animate-[fadeIn_0.3s_ease]' 
        : 'flex items-start gap-2.5 max-w-[85%] ml-auto justify-end text-right';

      const bubbleClass = isBot
        ? 'p-3.5 rounded-2xl rounded-tl-none bg-[#24123d] border border-purple-800/40 text-xs sm:text-sm text-slate-100 leading-relaxed shadow-lg'
        : 'p-3.5 rounded-2xl rounded-tr-none bg-gradient-to-r from-[#7127BA] to-[#9757D3] text-xs sm:text-sm text-white font-medium shadow-lg';

      const avatarHtml = isBot
        ? `<div class="w-7 h-7 rounded-lg bg-gradient-to-br from-[#7127BA] to-[#9757D3] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-md"><i data-lucide="bot" class="w-4 h-4"></i></div>`
        : '';

      let actionsHtml = '';
      if (isBot && data && data.actions && data.actions.length > 0) {
        actionsHtml = `<div class="flex flex-wrap gap-2 mt-3 pt-3 border-t border-purple-800/40">`;
        data.actions.forEach(act => {
          if (act.url) {
            const btnStyle = act.primary 
              ? 'bg-gradient-to-r from-[#7127BA] to-[#9757D3] text-white hover:opacity-90' 
              : 'bg-purple-950/80 border border-purple-700/50 text-purple-200 hover:text-white';
            actionsHtml += `<a href="${act.url}" target="_blank" rel="noopener noreferrer" class="agent-card-button ${btnStyle}">${act.label} &rarr;</a>`;
          } else if (act.scrollTo) {
            actionsHtml += `<button type="button" onclick="document.querySelector('${act.scrollTo}')?.scrollIntoView({behavior:'smooth'});" class="agent-card-button bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/30">${act.label} &darr;</button>`;
          }
        });
        actionsHtml += `</div>`;
      }

      msgDiv.innerHTML = isBot
        ? `${avatarHtml}<div class="${bubbleClass}">${formatMarkdown(text)}${actionsHtml}</div>`
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
      if (!userText || isThinking) return;
      appendMessage('User', userText, false);
      chatInput.value = '';

      // Check if user specifically requests navigation
      const lower = userText.toLowerCase();
      if (lower.includes('show project') || lower.includes('view project') || lower.includes('go to project')) {
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
      } else if (lower.includes('estimator') || lower.includes('calculator') || lower.includes('quote')) {
        document.querySelector('#estimator')?.scrollIntoView({ behavior: 'smooth' });
      } else if (lower.includes('experience') || lower.includes('service')) {
        document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
      }

      isThinking = true;
      const responseObj = getAgentResponse(userText);

      // Agent Thought & Execution Trace Card
      const thoughtDiv = document.createElement('div');
      thoughtDiv.id = 'agent-active-trace';
      thoughtDiv.className = 'flex items-start gap-2.5 max-w-[92%]';
      thoughtDiv.innerHTML = `
        <div class="w-7 h-7 rounded-lg bg-[#24123d] border border-purple-800/40 flex items-center justify-center shrink-0">
          <i data-lucide="cpu" class="w-4 h-4 text-[#A261FF] animate-spin"></i>
        </div>
        <div class="flex-1">
          <div class="agent-thought-card">
            <div class="flex items-center gap-1.5 text-[10px] text-purple-200 font-mono">
              <span class="w-1.5 h-1.5 rounded-full bg-[#A261FF] animate-ping"></span>
              <span>Thinking: ${responseObj.thought}</span>
            </div>
          </div>
          <div class="agent-action-badge">
            <i data-lucide="terminal" class="w-3 h-3 text-emerald-400"></i>
            <span>Action: ${responseObj.action}</span>
          </div>
        </div>
      `;
      messagesContainer.appendChild(thoughtDiv);
      scrollToBottom();
      if (window.lucide) window.lucide.createIcons();

      // Simulated realistic agent computation delay
      setTimeout(() => {
        const trace = document.getElementById('agent-active-trace');
        if (trace) trace.remove();
        isThinking = false;

        appendMessage('AI', responseObj.reply, true, responseObj);
        updateSuggestions(responseObj.suggestions);
      }, 500);
    }

    launcherBtn.addEventListener('click', openChat);
    closeBtn.addEventListener('click', closeChat);

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        messagesContainer.innerHTML = '';
        appendMessage('AI', "Hello! 👋 I am **Agent JA**, Jahanzaib Ahmad's Autonomous Technical Partner.\n\nI can **diagnose errors**, **calculate project estimates**, **navigate the portfolio**, or **connect you directly with Jahanzaib on WhatsApp**.", true);
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
