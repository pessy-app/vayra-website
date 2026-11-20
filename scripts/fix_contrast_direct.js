const fs = require('fs');
let html = fs.readFileSync('public/index.html', 'utf8');

// 1. Fix .chip[aria-pressed="true"]
html = html.replace('.chip[aria-pressed="true"]{background:#ABD558;color: var(--fg);border-color:#ABD558}', '.chip[aria-pressed="true"]{background:#ABD558;color:#0B0C0A;border-color:#ABD558;font-weight:700}');

// 2. Fix the calc block via regex
const calcRegex = /\/\*\s*the calculator as a white card\s*\*\/[\s\S]*?\.calc\s+\.people\s+\.eq\{color:#A6B587\}/;

const newCalcBlock = `/* calculator: Vantage dark instrument styling with accessible contrast */
.calc{background:var(--ink-2);border:1px solid var(--line);border-radius:18px;color:var(--fg);box-shadow:0 30px 60px -30px rgba(0,0,0,.8)}
.calc h2{color:var(--fg)}
.calc .sub,.calc .opt-l,.calc .bar-top,.calc .loss .l,.calc .go p,.calc .how summary,.calc .how .fine,.calc .how a{color:var(--muted)}
.calc .opt-l output,.calc .bar-top strong,.calc .equiv p{color:var(--fg)}
.calc .roles button{color:var(--fg);border-color:var(--line);background:var(--ink-3)}
.calc .roles button:hover{border-color:var(--muted);color:var(--fg)}
.calc .roles button[aria-pressed="true"]{background:var(--sun);color:var(--sun-ink);border-color:var(--sun);font-weight:700}
.calc .cityselect{color:var(--fg);border-color:var(--line);background-color:var(--ink-3)}
.calc .cityselect:hover{border-color:var(--muted)}
.calc input[type=range]::-webkit-slider-runnable-track{background:linear-gradient(90deg,var(--sun) var(--p,0%),var(--ink-3) var(--p,0%))}
.calc input[type=range]::-moz-range-track{background:var(--ink-3)}
.calc input[type=range]::-webkit-slider-thumb{background:var(--sun);border:2px solid var(--ink-2)}
.calc input[type=range]::-moz-range-thumb{background:var(--sun);border:2px solid var(--ink-2)}
.calc .result{border-top:1px solid var(--line)}
.calc .bar{background:var(--ink-3)}
.calc .bar .us{background:var(--muted)}
.calc .loss strong{color:var(--sun-t)}
.calc .per button{color:var(--muted);border-color:var(--line);background:transparent}
.calc .per button[aria-pressed="true"]{color:var(--sun-ink);background:var(--sun);border-color:var(--sun);font-weight:700}
.calc .equiv b{color:var(--sun-t)}
.calc .people .p.us svg{fill:var(--muted)}
.calc .people .p .ghost svg{fill:var(--ink-3)}
.calc .people .eq{color:var(--muted)}`;

if (calcRegex.test(html)) {
    html = html.replace(calcRegex, newCalcBlock);
    console.log('Successfully replaced calc block via regex!');
} else {
    console.log('Regex did not match!');
}

fs.writeFileSync('public/index.html', html, 'utf8');
