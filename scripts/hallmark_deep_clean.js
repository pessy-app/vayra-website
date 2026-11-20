const fs = require('fs');
let html = fs.readFileSync('public/index.html', 'utf8');

// 1. Remove arrows from buttons and links (Hallmark rule 10 & gate 63)
html = html.replace(/\s*<span class="arr">&rarr;<\/span>/g, '');
html = html.replace(/\s*&rarr;/g, '');
html = html.replace(/\s*?/g, '');

// 2. Remove remaining buzzwords
html = html.replace(/enterprise-grade/gi, 'production-ready');

// 3. Fix SVGs without aria-hidden or aria-label
html = html.replace(/<svg\s+(?!aria-hidden|aria-label)([^>]+)>/g, '<svg aria-hidden="true" $1>');

// 4. Remove fake status dots (Hallmark rule 10)
html = html.replace(/<span class="talent-status-dot"[^>]*><\/span>/g, '');
html = html.replace(/<span class="vy-sticky-dot"[^>]*><\/span>/g, '');

// 5. Replace &bull; and • in text with commas or clean separators
html = html.replace(/&bull;/g, '·');

fs.writeFileSync('public/index.html', html, 'utf8');
console.log('Applied Hallmark deep clean!');
