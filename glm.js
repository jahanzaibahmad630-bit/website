/**
 * ============================================================================
 * GLM-5.2 WEB SYNTHESIS BRIDGE — ANTIGRAVITY AGENTIC PIPELINE
 * ============================================================================
 * Powers direct website generation using the Z.ai GLM-5.2 model via OpenRouter.
 * 
 * Usage:
 *   node glm.js "Describe your website idea here" [output_filename.html]
 * 
 * Example:
 *   node glm.js "Luxury electric hypercar brand with 3D wireframe chassis and telemetry HUD" hypercar.html
 */

const https = require('https');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

// Auto-load .env
try {
  const envPaths = [path.resolve(__dirname, '../.env'), path.resolve(__dirname, '.env')];
  for (const ep of envPaths) {
    if (fs.existsSync(ep)) {
      fs.readFileSync(ep, 'utf8').split('\n').forEach(line => {
        const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
        if (match && !process.env[match[1]]) {
          process.env[match[1]] = match[2].trim().replace(/^['"]|['"]$/g, '');
        }
      });
    }
  }
} catch (e) {}

const API_KEY = process.env.OPENROUTER_API_KEY || process.env.GLM_API_KEY || '';
const DEFAULT_MODEL = 'z-ai/glm-5.2:free';

const SYSTEM_PROMPT = `You are an elite Creative Technologist, Principal WebGL Engineer, and Master Digital Artisan.
You synthesize breathtaking, award-winning, production-ready, standalone single-file HTML5 websites that push the limits of modern browser design.

CRITICAL IMPLEMENTATION RULES:
1. DELIVER COMPLETE CODE: Output a single, fully functional HTML5 document starting with <!DOCTYPE html> and ending with </html>. Never use placeholders, stubs, or comments like "// Add remaining code here".
2. ARCHITECTURE & LIBS:
   - Use Tailwind CSS via CDN: <script src="https://cdn.tailwindcss.com"></script>
   - Use Google Fonts for dramatic, editorial typography (e.g. Syne, Space Grotesk, IBM Plex Mono, Cormorant Garamond, Shippori Mincho).
   - Use Three.js via ES Module importmap OR UMD bundle (<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>) for interactive 3D elements.
   - Use GSAP + ScrollTrigger (<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script> and <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>).
   - Use Lenis (<script src="https://unpkg.com/lenis@1.1.13/dist/lenis.min.js"></script>) for fluid inertia scrolling.
3. VISUAL STYLE & CRAFT:
   - Deep brutalist, cyberpunk, or ultra-luxury aesthetics (deep OLED black, titanium gray, stark bone white, iridescent neon or gold accents).
   - Rich procedural visual effects: Custom GLSL shaders (chromatic aberration, fluid noise, Fresnel glows) or high-performance 2D procedural canvas animations.
   - Micro-details: Crosshair coordinates, grid overlays, custom magnetic cursor, telemetry badges, hover tilts.
4. WEB AUDIO (Optional but recommended when fitting):
   - Integrated synthetic soundscape or harmonic drone chords via native Web Audio API with a volume/sound toggle.
5. STANDALONE ZERO BUILD: Must render directly when opened in any modern browser or sandboxed iframe with zero external build step.
6. FORMAT: Output only the code block inside \`\`\`html ... \`\`\`. No conversational preamble or postscript.`;

async function synthesizeWebsite(prompt, outputFile = null, model = DEFAULT_MODEL) {
  console.log(`\n======================================================`);
  console.log(`🚀 [GLM-5.2 SYNTHESIS ENGINE] Initiating generation...`);
  console.log(`🤖 Model: ${model}`);
  console.log(`📝 Prompt: "${prompt}"`);
  console.log(`======================================================\n`);

  const payload = JSON.stringify({
    model: model,
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      { role: 'user', content: `Synthesize a complete, visually sublime, interactive single-file website based on this specification:\n\n${prompt}` }
    ],
    max_tokens: 16000,
    temperature: 0.7
  });

  const options = {
    hostname: 'openrouter.ai',
    path: '/api/v1/chat/completions',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': 'https://takumi-studio.local',
      'X-Title': 'GLM Web Studio'
    }
  };

  const startTime = Date.now();

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let responseBody = '';

      res.on('data', (chunk) => {
        responseBody += chunk;
        process.stdout.write('⚡');
      });

      res.on('end', () => {
        const duration = ((Date.now() - startTime) / 1000).toFixed(1);
        console.log(`\n\n✅ Stream completed in ${duration}s (HTTP ${res.statusCode})`);

        if (res.statusCode !== 200) {
          console.error(`❌ OpenRouter API Error (HTTP ${res.statusCode}):`, responseBody);
          return reject(new Error(`API responded with HTTP ${res.statusCode}`));
        }

        try {
          const json = JSON.parse(responseBody);
          const choice = json.choices?.[0];
          let rawContent = choice?.message?.content || '';

          if (!rawContent) {
            console.warn('⚠️ No direct message content found. Checking reasoning or alternative fields...');
            rawContent = choice?.message?.reasoning || responseBody;
          }

          // Extract HTML from code fences if present
          let htmlContent = rawContent;
          const htmlFenceMatch = rawContent.match(/```html([\s\S]*?)```/i);
          if (htmlFenceMatch) {
            htmlContent = htmlFenceMatch[1].trim();
          } else {
            const docTypeIndex = rawContent.indexOf('<!DOCTYPE html>');
            const htmlCloseIndex = rawContent.indexOf('</html>');
            if (docTypeIndex !== -1 && htmlCloseIndex !== -1) {
              htmlContent = rawContent.substring(docTypeIndex, htmlCloseIndex + 7).trim();
            }
          }

          console.log(`📦 Synthesized HTML Size: ${htmlContent.length} bytes`);

          // Quick syntax audit
          const scriptRegex = /<script\b[^>]*>([\s\S]*?)<\/script>/gi;
          let sMatch;
          let scriptCount = 0;
          let hasSyntaxError = false;

          while ((sMatch = scriptRegex.exec(htmlContent)) !== null) {
            const scriptBody = sMatch[1].trim();
            const tagOpen = sMatch[0];
            if (scriptBody && !tagOpen.includes('src=') && !tagOpen.includes('type="importmap"') && !tagOpen.includes('type="application/json"')) {
              scriptCount++;
              try {
                if (tagOpen.includes('type="module"')) {
                  new vm.SourceTextModule(scriptBody, { initializeImportMeta() {} });
                } else {
                  new vm.Script(scriptBody);
                }
              } catch (err) {
                console.warn(`⚠️ Script #${scriptCount} syntax warning:`, err.message);
                hasSyntaxError = true;
              }
            }
          }

          if (!hasSyntaxError) {
            console.log(`✨ All ${scriptCount} embedded scripts passed AST syntax audit!`);
          }

          if (outputFile) {
            const targetPath = path.isAbsolute(outputFile) ? outputFile : path.join(__dirname, outputFile);
            fs.writeFileSync(targetPath, htmlContent, 'utf8');
            console.log(`💾 Saved to file: ${targetPath}`);
          }

          resolve({
            html: htmlContent,
            duration: duration,
            tokens: json.usage
          });
        } catch (e) {
          console.error('❌ Failed to parse response:', e);
          reject(e);
        }
      });
    });

    req.on('error', (e) => {
      console.error('❌ Network Request Failed:', e.message);
      reject(e);
    });

    req.write(payload);
    req.end();
  });
}

// CLI Execution Support
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.log(`
Usage:
  node glm.js "<prompt>" [output_filename.html] [model]

Examples:
  node glm.js "Luxury Swiss Tourbillon watch with interactive 3D gear train and gold dial" tourbillon.html
  node glm.js "Brutalist Tokyo creative agency with fluid chromatic shaders and coordinate grid" agency.html
    `);
    process.exit(0);
  }

  const prompt = args[0];
  const output = args[1] || 'generated_site.html';
  const model = args[2] || DEFAULT_MODEL;

  synthesizeWebsite(prompt, output, model)
    .then((result) => {
      console.log(`\n🎉 Success! Website generated: ${output} (${result.duration}s)\n`);
      process.exit(0);
    })
    .catch((err) => {
      console.error('\n💥 Synthesis failed:', err.message);
      process.exit(1);
    });
}

module.exports = { synthesizeWebsite };
