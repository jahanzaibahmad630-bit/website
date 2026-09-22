const fs = require('fs');
const content = fs.readFileSync('website/wav-aid.html', 'utf8');
const lines = content.split('\n');
const screens = [];
lines.forEach((l, i) => {
  if (l.includes('id="scr-')) {
    screens.push({ line: i + 1, text: l.trim().slice(0, 60) });
  }
});
console.log('Screens found:', JSON.stringify(screens, null, 2));
