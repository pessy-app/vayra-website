const fs = require('fs');
let html = fs.readFileSync('public/index.html', 'utf8');

const targetStr = `/* the calculator as a white card */
.calc{background: var(--ink-2);border-color: var(--fg);color:#20231B;box-shadow:0 40px 80px -40px rgba(0,0,0,.65)}
.calc h2{color:#20231B}
.calc .sub,.calc .opt-l,.calc .bar-top,.calc .loss .l,.calc .go p,.calc .how summary,.calc .how .fine,.calc .how a{color:#69784A}
.calc .opt-l output,.calc .bar-top strong,.calc .equiv p{color:#20231B}
.calc .roles button{color:#20231B;border-color:#E2E5DC}
.calc .roles button:hover{border-color:#A6B587}
.calc .roles button[aria-pressed="true"]{background:var(--sun);color: var(--fg);border-color:var(--sun)}
.calc .cityselect{color:#20231B;border-color:#E2E5DC;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' fill='none' stroke='%230B1233' stroke-width='1.8'/%3E%3C/svg%3E")}
.calc .cityselect:hover{border-color:#A6B587}
.calc input[type=range]::-webkit-slider-runnable-track{background:linear-gradient(90deg,var(--sun) var(--p,0%),#EDEFEA var(--p,0%))}
.calc input[type=range]::-moz-range-track{background:#EDEFEA}
.calc input[type=range]::-webkit-slider-thumb{background: var(--ink-2);border-color:var(--sun)}
.calc input[type=range]::-moz-range-thumb{background: var(--ink-2);border-color:var(--sun)}
.calc .result{border-top-color:#EDEFEA}
.calc .bar{background:#F1F3EE}
.calc .bar .us{background:#B9C89A}
.calc .loss strong{color:var(--sun)}
.calc .per button{color:#69784A;border-color:#E2E5DC}
.calc .per button[aria-pressed="true"]{color:#20231B;border-color:#20231B}
.calc .equiv b{color:var(--sun)}
.calc .people .p.us svg{fill:#B9C89A}
.calc .people .p .ghost svg{fill:#EDEFEA}
.calc .people .eq{color:#A6B587}`;

const replacementStr = `/* calculator: Vantage dark instrument styling with accessible contrast */
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

if (html.includes('/* the calculator as a white card */')) {
    html = html.replace(targetStr, replacementStr);
    console.log('Successfully replaced calculator styles with Vantage theme!');
} else {
    console.log('Target string not found, trying normalisation');
    // Normalize line endings
    const normHtml = html.replace(/\r\n/g, '\n');
    const normTarget = targetStr.replace(/\r\n/g, '\n');
    if (normHtml.includes(normTarget)) {
        html = normHtml.replace(normTarget, replacementStr);
        console.log('Replaced via normalized line endings!');
    } else {
        console.log('Still not found');
    }
}

fs.writeFileSync('public/index.html', html, 'utf8');
