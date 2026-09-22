const https = require('https');
const fs = require('fs');
const path = require('path');

// Load API key from root .env
try {
  const envPath = path.resolve(__dirname, '../.env');
  if (fs.existsSync(envPath)) {
    fs.readFileSync(envPath, 'utf8').split('\n').forEach(line => {
      const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
      if (match && !process.env[match[1]]) {
        process.env[match[1]] = match[2].trim().replace(/^['"]|['"]$/g, '');
      }
    });
  }
} catch (e) {}

const API_KEY = process.env.OPENROUTER_API_KEY || process.env.GLM_API_KEY || '';
const MODEL = 'z-ai/glm-5.2';

const HINA_SYSTEM_PROMPT = `You are a Principal Human-Centered Design Director at Apple and Pentagram, specialized in empathetic, calming, and emotionally reassuring digital product design for women's safety.

You synthesize complete, breathtaking, production-ready, interactive single-file HTML5 mobile app prototypes.

CRITICAL AESTHETIC DIRECTIVES (STRICTLY ENFORCED):
1. NOT A GAMING OR CYBERSECURITY INTERFACE:
   - Absolutely NO heavy OLED black backgrounds, NO neon glow, NO cyberpunk borders, NO military HUDs, NO high-contrast dark mode.
2. EMOTIONAL TONE & AESTHETIC:
   - Human, calm, feminine, approachable, peaceful, and visually quiet.
   - Inspired by Apple Health, Headspace, Flo, and Scandinavian editorial design (Kinfolk).
3. COLOR PALETTE & SURFACES:
   - Background: Soft warm porcelain / cream white (#FAF9F6) or gentle cashmere (#F5F3EF).
   - Card Surfaces: Pure crisp white (#FFFFFF) with gentle curved radii (20px to 28px), soft organic diffuse shadows (box-shadow: 0 10px 30px rgba(0,0,0,0.03)), and subtle borders (#EFECE6).
   - Accents (Restrained & Muted): Soft blush coral (#FB7185) used selectively for key primary buttons, gentle soft lavender (#DDD6FE) for secondary chips, and calm sage mint (#A7F3D0) for verification badges.
   - Typography: Clean, elegant sans-serif (Inter or Plus Jakarta Sans) with generous line-height, gentle weights (400, 500, 600), and relaxed hierarchy.
4. WHITESPACE & QUIET HIERARCHY:
   - Vast breathing room, clear spacing, never cramped or cluttered. One dominant primary action per screen.
5. COMPLETE STANDALONE SINGLE-FILE HTML:
   - Must be a self-contained, working interactive prototype with an iPhone 16 frame, stage rail/tab controls to switch between the 6 core screens, and smooth transitions.
   - All 6 screens matching the academic research:
     1. Event Activation (Scan QR code at venue)
     2. Mobility Mode & Time Window (78% Public Transit focus, U2 Subway line)
     3. Privacy-First Match Card (Laura, Verified Student, exact home address hidden - GDPR Art. 25)
     4. HINA Point & Mutual PIN (In-venue safe meeting point near Coat Check with 4-digit code 8-4-1-9, plus discreet Cancel Match button)
     5. Live Shared Walk (Calm daytime/evening low-contrast map + 3-tier safety bar: Help, Report, SOS)
     6. Home Safe Check-In (Reassuring celebration + automatic safety countdown timer).
6. FORMAT: Output ONLY the complete code inside \`\`\`html ... \`\`\`. Zero conversational preamble or postscript.`;

async function runGLM(prompt, outputFile = 'website/hina-glm.html') {
  console.log(`\n======================================================`);
  console.log(`🌸 [GLM-5.2 HINA SYNTHESIS ENGINE] Initiating generation...`);
  console.log(`🤖 Model: ${MODEL}`);
  console.log(`📝 Output: ${outputFile}`);
  console.log(`======================================================\n`);

  if (!API_KEY) {
    throw new Error('No OPENROUTER_API_KEY found in .env!');
  }

  const payload = JSON.stringify({
    model: MODEL,
    messages: [
      { role: 'system', content: HINA_SYSTEM_PROMPT },
      { role: 'user', content: prompt }
    ],
    max_tokens: 16000,
    temperature: 0.6
  });

  const options = {
    hostname: 'openrouter.ai',
    path: '/api/v1/chat/completions',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': 'https://hina-design.local',
      'X-Title': 'HINA Design Studio'
    }
  };

  const startTime = Date.now();

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => {
        body += chunk;
        process.stdout.write('🌸');
      });

      res.on('end', () => {
        const dur = ((Date.now() - startTime) / 1000).toFixed(1);
        console.log(`\n\n✅ Stream finished in ${dur}s (HTTP ${res.statusCode})`);

        if (res.statusCode !== 200) {
          console.error(`❌ API Error:`, body);
          return reject(new Error(`API returned HTTP ${res.statusCode}`));
        }

        try {
          const json = JSON.parse(body);
          const raw = json.choices?.[0]?.message?.content || '';
          let html = raw;

          const fenceMatch = raw.match(/```html([\s\S]*?)```/i);
          if (fenceMatch) {
            html = fenceMatch[1].trim();
          } else {
            const doc = raw.indexOf('<!DOCTYPE html>');
            const end = raw.indexOf('</html>');
            if (doc !== -1 && end !== -1) {
              html = raw.substring(doc, end + 7).trim();
            }
          }

          console.log(`📦 Synthesized HTML Size: ${html.length} bytes`);
          const target = path.isAbsolute(outputFile) ? outputFile : path.join(__dirname, '..', outputFile);
          fs.writeFileSync(target, html, 'utf8');
          console.log(`💾 Successfully saved to: ${target}`);
          resolve({ html, target, dur });
        } catch (err) {
          console.error(`❌ Parse Error:`, err);
          reject(err);
        }
      });
    });

    req.on('error', err => {
      console.error(`❌ Network error:`, err);
      reject(err);
    });

    req.write(payload);
    req.end();
  });
}

// Execute
const prompt = `Synthesize the complete, interactive HINA mobile application prototype in Scandinavian soft minimalism.
Follow Amy's exact design requirements:
- Theme: Calm, feminine, human, approachable, visually quiet, gentle, and emotionally reassuring.
- Palette: Soft warm porcelain background (#FAF9F6), pure white cards with soft diffuse shadows and gentle curved borders, restrained muted blush coral (#FB7185) for the primary friendly action button, soft lavender (#DDD6FE) for category chips, and soft mint (#A7F3D0) for verified attendee badges.
- Screens to include in an interactive device simulator (390px x 844px) with bottom tab bar or navigation stage:
  1. Event Check-In: Friendly camera frame scanning official venue QR at Tempelhof Sound Festival 2026.
  2. Travel Mode & Time: Public transit group (U2 Line), departure chips, address privacy badge (GDPR Art. 25).
  3. Match Profile: Laura, 23 (Ticket Verified, Student ID, 4.9 rating, shared 6 stops on U2 subway).
  4. HINA Meeting Point: Safe in-venue meeting point near Coat Check / Exit B with friendly 4-digit PIN (8-4-1-9) to compare face-to-face, plus discreet "Feel uncomfortable? Cancel match" link.
  5. Live Walk Together: Gentle, light/warm street map showing walk to Alexanderplatz U-Bahn, with 3-tier floating safety bar (Help, Report, 1-Tap SOS).
  6. Home Safe Check-In: Reassuring safe arrival confirmation with safety countdown timer (12:45) and "✓ I'm Home Safe!" button.
Make the code fully interactive with JavaScript so clicking buttons transitions smoothly between screens!`;

runGLM(prompt, 'website/hina-glm.html')
  .then(() => console.log('\n🎉 [GLM-5.2] HINA Generation Complete!'))
  .catch(err => console.error('Generation failed:', err));
