import{a as h}from"./chunk-NMYG7KIO.js";import{c}from"./chunk-6XKBIF6T.js";import"./chunk-A4KGOOMH.js";import{a as i,b as n,c as m}from"./chunk-FYMMFH3J.js";import{a as u}from"./chunk-55JHTTGY.js";import{a,d as s}from"./chunk-D2XV4R5X.js";import"./chunk-65ESAS5F.js";var v="https://forminit.com/f/2vsofm10hvn";function $(){let t=s().participantGuide;return`<aside class="challenge-section hash-note" id="sha256-note" data-reading-anchor tabindex="-1" aria-labelledby="sha256-note-title">
    <h2 id="sha256-note-title">${n(t.hashTitle)}</h2>
    <p>${n(t.hashIntro)}</p>
    <ul class="public-list">
      <li><a href="https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/get-filehash">Windows \u2014 PowerShell</a><pre tabindex="0"><code>Get-FileHash -LiteralPath .\\solution.m -Algorithm SHA256</code></pre></li>
      <li><a href="https://www.gnu.org/s/coreutils/manual/html_node/sha2-utilities.html">GNU/Linux \xB7 Unix (GNU Coreutils)</a><pre tabindex="0"><code>sha256sum solution.m</code></pre></li>
      <li><a href="https://perldoc.perl.org/shasum">macOS \u2014 Terminal</a><pre tabindex="0"><code>shasum -a 256 solution.m</code></pre></li>
    </ul>
  </aside>`}function y(t,l){var o,d;let e=(o=t.examples)==null?void 0:o.find(p=>p.name===l);if(!e)return null;let r=c()||"pt";return((d=e.localized)==null?void 0:d[r])||{download:e.download,sha256:e.sha256}}function f(t,l){let e=y(t,l);return!(e!=null&&e.download)||!(e!=null&&e.sha256)?"":`<aside class="guide-example-download" aria-label="${i(a("participation.exampleLabel"))}: ${i(l)}">
    <h4>${i(a("participation.exampleLabel"))} \u2014 <code>${i(l)}</code></h4>
    <p><a class="btn secondary" href="${i(e.download)}" download>${i(a("participation.downloadExample",{file:l}))}</a></p>
    <p class="field-hint">${i(a("participation.exampleHash"))}: <code>${i(e.sha256)}</code></p>
  </aside>`}function w(t){var e;if(!((e=t.documents)!=null&&e.some(r=>r.id==="guide")))throw new Error("Public participant guide is unavailable");let l=s().participantGuide;return`<article class="edition-document pilot-document">
    <h2>${i(l.title)}</h2>
    ${l.sections.map((r,o)=>{let d=o===8?f(t,"solution.m"):o===9?f(t,"report.json"):"",p=`<section class="participant-guide-section" id="guide-${o+1}" data-reading-anchor>
        <h3>${n(r.title)}</h3>
        ${o===11?`<p class="field-hint">${i(l.checklistHint)}</p>`:""}
        ${r.blocks.map((g,b)=>m(g,b)).join("")}
        ${d}
      </section>`;return o===9?`${p}${$()}`:p}).join("")}
  </article>`}function x(){let t=s().participation,l=t.summaryItems.map(o=>`
    <div class="pilot-summary-item">
      <dt>${i(o.label)}</dt>
      <dd><code>${i(o.value)}</code></dd>
    </div>`).join(""),e=t.flowSteps.map(o=>`<li>${n(o)}</li>`).join(""),r=t.guideNav.map(o=>`<li><a href="#${i(o.target)}">${n(o.label)}</a></li>`).join("");return`
    <section class="challenge-section pilot-summary" id="pilot-summary" data-reading-anchor aria-labelledby="pilot-summary-title">
      <h2 id="pilot-summary-title">${i(t.summaryTitle)}</h2>
      <dl class="pilot-summary-grid">${l}</dl>
    </section>
    <section class="challenge-section pilot-flow" id="pilot-flow" data-reading-anchor aria-labelledby="pilot-flow-title">
      <h2 id="pilot-flow-title">${i(t.flowTitle)}</h2>
      <ol class="pilot-flow-list">${e}</ol>
    </section>
    <nav class="challenge-section pilot-guide-nav pilot-guide-reel" id="pilot-guide-navigation" data-reading-anchor aria-labelledby="pilot-guide-nav-title" aria-label="${i(t.guideNavLabel)}">
      <h2 id="pilot-guide-nav-title">${i(t.guideNavTitle)}</h2>
      <ul>${r}</ul>
    </nav>`}function T(){let t=s().participation;return`<section class="pilot-validation-boundary" id="pilot-validation-boundary" data-reading-anchor aria-labelledby="pilot-validation-title">
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
    <section class="challenge-section pilot-submission" id="pilot-submission" data-reading-anchor aria-labelledby="h1-submit-title">
      <h2 id="h1-submit-title">${i(a("participation.submit"))}</h2>
      <p>${n(a("participation.filesIntro"))} <code>solution.m</code> ${i(a("participation.and"))} <code>report.json</code>.</p>
      ${T()}
      <p class="field-hint">${i(a("participation.preflightHint"))}</p>
      <form id="h1-submission-form" action="${v}" method="POST" enctype="multipart/form-data">
        <input type="hidden" name="fi-text-subject" value="h1-mittag-leffler-submission">
        <input type="hidden" name="fi-text-preview" value="${i(t.preview_id)}">
        <input type="hidden" name="fi-text-edition" value="${i(t.edition_id)}">
        <input type="hidden" name="fi-text-challenge" value="${i(t.challenge_slug)}">

        <div class="pilot-form-grid">
          <div class="form-group">
            <label for="h1-name">${i(a("participation.name"))}</label>
            <input id="h1-name" name="fi-sender-fullName" type="text" autocomplete="name" required>
          </div>
          <div class="form-group">
            <label for="h1-email">${i(a("participation.email"))}</label>
            <input id="h1-email" name="fi-sender-email" type="email" autocomplete="email" required>
          </div>
        </div>

        <div class="form-group">
          <label for="h1-note">${i(a("participation.note"))}</label>
          <textarea id="h1-note" name="fi-text-message" rows="3" placeholder="${i(a("participation.notePlaceholder"))}"></textarea>
        </div>

        <div class="pilot-files-grid">
          <div class="form-group pilot-file-card">
            <label for="h1-solution"><code>solution.m</code></label>
            <input id="h1-solution" name="fi-file-submission[]" type="file" required accept=".m,text/plain" data-expected-filename="solution.m">
            <p class="field-hint">${n(a("participation.solutionHint"))}</p>
          </div>
          <div class="form-group pilot-file-card">
            <label for="h1-report"><code>report.json</code></label>
            <input id="h1-report" name="fi-file-submission[]" type="file" required accept=".json,application/json,text/plain" data-expected-filename="report.json">
            <p class="field-hint">${n(a("participation.reportHint"))} <code>solution.m</code>.</p>
          </div>
        </div>

        <div id="h1-preflight" class="console-panel submission-preflight" aria-live="polite">
          <p><span class="console-prompt">$</span> <span class="console-command">submission preflight</span></p>
          <p class="console-meta">${i(a("participation.selectFiles"))}</p>
        </div>

        <div class="form-group">
          <div class="checkbox-container">
            <input type="checkbox" id="h1-privacy-consent" name="fi-text-privacyConsent" required>
            <label for="h1-privacy-consent">${i(a("participation.consent"))} <a href="#privacyPolicy" class="privacy-link">${i(a("privacy.title"))}</a>.</label>
          </div>
        </div>

        <button id="h1-submit" type="submit" class="btn primary">${i(a("participation.submit"))}</button>
      </form>
      <div id="h1-form-status" class="form-status hidden" role="status" aria-live="polite"></div>
    </section>
  `}async function S(t={}){var o;let l=await h(),e=((o=t==null?void 0:t.params)==null?void 0:o.slug)||"";if(e&&e!==l.challenge_slug)throw new Error(`H1 preview does not belong to challenge: ${e}`);let r=`
    <p><a href="#desafios/${encodeURIComponent(l.challenge_slug)}" class="challenge-back-link">${i(a("participation.back"))} ${i(a("challenges.mlfName"))}</a></p>
    <section class="pilot-banner" id="pilot-introduction" data-reading-anchor aria-label="${i(a("participation.bannerLabel"))}">
      <strong>${i(a("participation.banner"))}</strong>
      <p>${i(a("participation.testDescription"))}</p>
    </section>
    <h1>${i(a("participation.testTitle"))}</h1>
    <p>${i(a("participation.intro"))}</p>
    ${x()}
    ${w(l)}
    ${j(l)}
  `;return{html:u("human-pilot",r),metadata:{title:a("participation.testTitle"),description:a("participation.description")}}}export{S as buildHumanPilotPage};
