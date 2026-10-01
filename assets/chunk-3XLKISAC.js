import{a as h}from"./chunk-NMYG7KIO.js";import{c as d}from"./chunk-6XKBIF6T.js";import"./chunk-A4KGOOMH.js";import{a as i,b as n,c as m}from"./chunk-FYMMFH3J.js";import{a as u}from"./chunk-55JHTTGY.js";import{a as e,d as r}from"./chunk-D2XV4R5X.js";import"./chunk-65ESAS5F.js";var v="https://forminit.com/f/2vsofm10hvn";function $(){let t=r().participantGuide;return`<aside class="challenge-section hash-note" id="sha256-note" tabindex="-1" aria-labelledby="sha256-note-title">
    <h2 id="sha256-note-title">${n(t.hashTitle)}</h2>
    <p>${n(t.hashIntro)}</p>
    <ul class="public-list">
      <li><a href="https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/get-filehash">Windows \u2014 PowerShell</a><pre tabindex="0"><code>Get-FileHash -LiteralPath .\\solution.m -Algorithm SHA256</code></pre></li>
      <li><a href="https://www.gnu.org/s/coreutils/manual/html_node/sha2-utilities.html">GNU/Linux \xB7 Unix (GNU Coreutils)</a><pre tabindex="0"><code>sha256sum solution.m</code></pre></li>
      <li><a href="https://perldoc.perl.org/shasum">macOS \u2014 Terminal</a><pre tabindex="0"><code>shasum -a 256 solution.m</code></pre></li>
    </ul>
  </aside>`}function y(t,o){var l,p;let a=(l=t.examples)==null?void 0:l.find(c=>c.name===o);if(!a)return null;let s=d()||"pt";return((p=a.localized)==null?void 0:p[s])||{download:a.download,sha256:a.sha256}}function f(t,o){let a=y(t,o);return!(a!=null&&a.download)||!(a!=null&&a.sha256)?"":`<aside class="guide-example-download" aria-label="${i(e("participation.exampleLabel"))}: ${i(o)}">
    <h4>${i(e("participation.exampleLabel"))} \u2014 <code>${i(o)}</code></h4>
    <p><a class="btn secondary" href="${i(a.download)}" download>${i(e("participation.downloadExample",{file:o}))}</a></p>
    <p class="field-hint">${i(e("participation.exampleHash"))}: <code>${i(a.sha256)}</code></p>
  </aside>`}function w(t){var a;if(!((a=t.documents)!=null&&a.some(s=>s.id==="guide")))throw new Error("Public participant guide is unavailable");let o=r().participantGuide;return`<article class="edition-document pilot-document">
    <h2>${i(o.title)}</h2>
    ${o.sections.map((s,l)=>{let p=l===8?f(t,"solution.m"):l===9?f(t,"report.json"):"",c=`<section class="participant-guide-section" id="guide-${l+1}">
        <h3>${n(s.title)}</h3>
        ${l===11?`<p class="field-hint">${i(o.checklistHint)}</p>`:""}
        ${s.blocks.map((g,b)=>m(g,b)).join("")}
        ${p}
      </section>`;return l===9?`${c}${$()}`:c}).join("")}
  </article>`}function x(){let t=r().participation,o=t.summaryItems.map(l=>`
    <div class="pilot-summary-item">
      <dt>${i(l.label)}</dt>
      <dd><code>${i(l.value)}</code></dd>
    </div>`).join(""),a=t.flowSteps.map(l=>`<li>${n(l)}</li>`).join(""),s=t.guideNav.map(l=>`<li><a href="#${i(l.target)}">${n(l.label)}</a></li>`).join("");return`
    <section class="challenge-section pilot-summary" aria-labelledby="pilot-summary-title">
      <h2 id="pilot-summary-title">${i(t.summaryTitle)}</h2>
      <dl class="pilot-summary-grid">${o}</dl>
    </section>
    <section class="challenge-section pilot-flow" aria-labelledby="pilot-flow-title">
      <h2 id="pilot-flow-title">${i(t.flowTitle)}</h2>
      <ol class="pilot-flow-list">${a}</ol>
    </section>
    <nav class="challenge-section pilot-guide-nav pilot-guide-reel" aria-labelledby="pilot-guide-nav-title" aria-label="${i(t.guideNavLabel)}">
      <h2 id="pilot-guide-nav-title">${i(t.guideNavTitle)}</h2>
      <ul>${s}</ul>
    </nav>`}function T(){let t=r().participation;return`<section class="pilot-validation-boundary" aria-labelledby="pilot-validation-title">
    <h3 id="pilot-validation-title">${i(t.validationBoundaryTitle)}</h3>
    <div class="pilot-validation-grid">
      <div class="pilot-validation-card pilot-validation-local">
        <strong>${i(t.localValidationTitle)}</strong>
        <p>${n(t.localValidationText)}</p>
      </div>
      <div class="pilot-validation-card pilot-validation-authoritative">
        <strong>${i(t.judgeValidationTitle)}</strong>
        <p>${n(t.judgeValidationText)}</p>
      </div>
    </div>
  </section>`}function j(t){return`
    <section class="challenge-section pilot-submission" aria-labelledby="h1-submit-title">
      <h2 id="h1-submit-title">${i(e("participation.submit"))}</h2>
      <p>${n(e("participation.filesIntro"))} <code>solution.m</code> ${i(e("participation.and"))} <code>report.json</code>.</p>
      ${T()}
      <p class="field-hint">${i(e("participation.preflightHint"))}</p>
      <form id="h1-submission-form" action="${v}" method="POST" enctype="multipart/form-data">
        <input type="hidden" name="fi-text-subject" value="h1-mittag-leffler-submission">
        <input type="hidden" name="fi-text-preview" value="${i(t.preview_id)}">
        <input type="hidden" name="fi-text-edition" value="${i(t.edition_id)}">
        <input type="hidden" name="fi-text-challenge" value="${i(t.challenge_slug)}">

        <div class="pilot-form-grid">
          <div class="form-group">
            <label for="h1-name">${i(e("participation.name"))}</label>
            <input id="h1-name" name="fi-sender-fullName" type="text" autocomplete="name" required>
          </div>
          <div class="form-group">
            <label for="h1-email">${i(e("participation.email"))}</label>
            <input id="h1-email" name="fi-sender-email" type="email" autocomplete="email" required>
          </div>
        </div>

        <div class="form-group">
          <label for="h1-note">${i(e("participation.note"))}</label>
          <textarea id="h1-note" name="fi-text-message" rows="3" placeholder="${i(e("participation.notePlaceholder"))}"></textarea>
        </div>

        <div class="pilot-files-grid">
          <div class="form-group pilot-file-card">
            <label for="h1-solution"><code>solution.m</code></label>
            <input id="h1-solution" name="fi-file-solution" type="file" required accept=".m,text/plain" data-expected-filename="solution.m">
            <p class="field-hint">${n(e("participation.solutionHint"))}</p>
          </div>
          <div class="form-group pilot-file-card">
            <label for="h1-report"><code>report.json</code></label>
            <input id="h1-report" name="fi-file-report" type="file" required accept=".json,application/json,text/plain" data-expected-filename="report.json">
            <p class="field-hint">${n(e("participation.reportHint"))} <code>solution.m</code>.</p>
          </div>
        </div>

        <div id="h1-preflight" class="console-panel submission-preflight" aria-live="polite">
          <p><span class="console-prompt">$</span> <span class="console-command">submission preflight</span></p>
          <p class="console-meta">${i(e("participation.selectFiles"))}</p>
        </div>

        <div class="form-group">
          <div class="checkbox-container">
            <input type="checkbox" id="h1-privacy-consent" name="fi-text-privacyConsent" required>
            <label for="h1-privacy-consent">${i(e("participation.consent"))} <a href="#privacyPolicy" class="privacy-link">${i(e("privacy.title"))}</a>.</label>
          </div>
        </div>

        <button id="h1-submit" type="submit" class="btn primary">${i(e("participation.submit"))}</button>
      </form>
      <div id="h1-form-status" class="form-status hidden" role="status" aria-live="polite"></div>
    </section>
  `}async function S(t={}){var l;let o=await h(),a=((l=t==null?void 0:t.params)==null?void 0:l.slug)||"";if(a&&a!==o.challenge_slug)throw new Error(`H1 preview does not belong to challenge: ${a}`);let s=`
    <p><a href="#desafios/${encodeURIComponent(o.challenge_slug)}" class="challenge-back-link">${i(e("participation.back"))} ${i(e("challenges.mlfName"))}</a></p>
    <section class="pilot-banner" aria-label="${i(e("participation.bannerLabel"))}">
      <strong>${i(e("participation.banner"))}</strong>
      <p>${i(e("participation.testDescription"))}</p>
    </section>
    <h1>${i(e("participation.testTitle"))}</h1>
    <p>${i(e("participation.intro"))}</p>
    ${x()}
    ${w(o)}
    ${j(o)}
  `;return{html:u("human-pilot",s),metadata:{title:e("participation.testTitle"),description:e("participation.description")}}}export{S as buildHumanPilotPage};
