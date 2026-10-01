import{a as h}from"./chunk-NMYG7KIO.js";import{c as d}from"./chunk-6XKBIF6T.js";import"./chunk-A4KGOOMH.js";import{a as i,b as n,c as m}from"./chunk-FYMMFH3J.js";import{a as u}from"./chunk-55JHTTGY.js";import{a as t,d as r}from"./chunk-D2XV4R5X.js";import"./chunk-65ESAS5F.js";var v="https://forminit.com/f/2vsofm10hvn";function $(){let e=r().participantGuide;return`<aside class="challenge-section hash-note" id="sha256-note" tabindex="-1" aria-labelledby="sha256-note-title">
    <h2 id="sha256-note-title">${n(e.hashTitle)}</h2>
    <p>${n(e.hashIntro)}</p>
    <ul class="public-list">
      <li><a href="https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/get-filehash">Windows \u2014 PowerShell</a><pre tabindex="0"><code>Get-FileHash -LiteralPath .\\solution.m -Algorithm SHA256</code></pre></li>
      <li><a href="https://www.gnu.org/s/coreutils/manual/html_node/sha2-utilities.html">GNU/Linux \xB7 Unix (GNU Coreutils)</a><pre tabindex="0"><code>sha256sum solution.m</code></pre></li>
      <li><a href="https://perldoc.perl.org/shasum">macOS \u2014 Terminal</a><pre tabindex="0"><code>shasum -a 256 solution.m</code></pre></li>
    </ul>
  </aside>`}function y(e,o){var l,p;let a=(l=e.examples)==null?void 0:l.find(c=>c.name===o);if(!a)return null;let s=d()||"pt";return((p=a.localized)==null?void 0:p[s])||{download:a.download,sha256:a.sha256}}function f(e,o){let a=y(e,o);return!(a!=null&&a.download)||!(a!=null&&a.sha256)?"":`<aside class="guide-example-download" aria-label="${i(t("participation.exampleLabel"))}: ${i(o)}">
    <h4>${i(t("participation.exampleLabel"))} \u2014 <code>${i(o)}</code></h4>
    <p><a class="btn secondary" href="${i(a.download)}" download>${i(t("participation.downloadExample",{file:o}))}</a></p>
    <p class="field-hint">${i(t("participation.exampleHash"))}: <code>${i(a.sha256)}</code></p>
  </aside>`}function w(e){var a;if(!((a=e.documents)!=null&&a.some(s=>s.id==="guide")))throw new Error("Public participant guide is unavailable");let o=r().participantGuide;return`<article class="edition-document pilot-document">
    <h2>${i(o.title)}</h2>
    ${o.sections.map((s,l)=>{let p=l===8?f(e,"solution.m"):l===9?f(e,"report.json"):"",c=`<section class="participant-guide-section" id="guide-${l+1}">
        <h3>${n(s.title)}</h3>
        ${l===11?`<p class="field-hint">${i(o.checklistHint)}</p>`:""}
        ${s.blocks.map((b,g)=>m(b,g)).join("")}
        ${p}
      </section>`;return l===9?`${c}${$()}`:c}).join("")}
  </article>`}function x(){let e=r().participation,o=e.summaryItems.map(l=>`
    <div class="pilot-summary-item">
      <dt>${i(l.label)}</dt>
      <dd><code>${i(l.value)}</code></dd>
    </div>`).join(""),a=e.flowSteps.map(l=>`<li>${n(l)}</li>`).join(""),s=e.guideNav.map(l=>`<li><a href="#${i(l.target)}">${n(l.label)}</a></li>`).join("");return`
    <section class="challenge-section pilot-summary" aria-labelledby="pilot-summary-title">
      <h2 id="pilot-summary-title">${i(e.summaryTitle)}</h2>
      <dl class="pilot-summary-grid">${o}</dl>
    </section>
    <section class="challenge-section pilot-flow" aria-labelledby="pilot-flow-title">
      <h2 id="pilot-flow-title">${i(e.flowTitle)}</h2>
      <ol class="pilot-flow-list">${a}</ol>
    </section>
    <nav class="challenge-section pilot-guide-nav pilot-guide-reel" aria-labelledby="pilot-guide-nav-title" aria-label="${i(e.guideNavLabel)}">
      <h2 id="pilot-guide-nav-title">${i(e.guideNavTitle)}</h2>
      <ul>${s}</ul>
    </nav>`}function T(){let e=r().participation;return`<section class="pilot-validation-boundary" aria-labelledby="pilot-validation-title">
    <h3 id="pilot-validation-title">${i(e.validationBoundaryTitle)}</h3>
    <div class="pilot-validation-grid">
      <div class="pilot-validation-card pilot-validation-local">
        <strong>${i(e.localValidationTitle)}</strong>
        <p>${n(e.localValidationText)}</p>
      </div>
      <div class="pilot-validation-card pilot-validation-authoritative">
        <strong>${i(e.judgeValidationTitle)}</strong>
        <p>${n(e.judgeValidationText)}</p>
      </div>
    </div>
  </section>`}function j(e){return`
    <section class="challenge-section pilot-submission" aria-labelledby="h1-submit-title">
      <h2 id="h1-submit-title">${i(t("participation.submit"))}</h2>
      <p>${n(t("participation.filesIntro"))} <code>solution.m</code> ${i(t("participation.and"))} <code>report.json</code>.</p>
      ${T()}
      <p class="field-hint">${i(t("participation.preflightHint"))}</p>
      <form id="h1-submission-form" action="${v}" method="POST" enctype="multipart/form-data">
        <input type="hidden" name="fi-text-subject" value="h1-mittag-leffler-submission">
        <input type="hidden" name="fi-text-preview" value="${i(e.preview_id)}">
        <input type="hidden" name="fi-text-edition" value="${i(e.edition_id)}">
        <input type="hidden" name="fi-text-challenge" value="${i(e.challenge_slug)}">

        <div class="pilot-form-grid">
          <div class="form-group">
            <label for="h1-name">${i(t("participation.name"))}</label>
            <input id="h1-name" name="fi-sender-fullName" type="text" autocomplete="name" required>
          </div>
          <div class="form-group">
            <label for="h1-email">${i(t("participation.email"))}</label>
            <input id="h1-email" name="fi-sender-email" type="email" autocomplete="email" required>
          </div>
        </div>

        <div class="form-group">
          <label for="h1-note">${i(t("participation.note"))}</label>
          <textarea id="h1-note" name="fi-text-message" rows="3" placeholder="${i(t("participation.notePlaceholder"))}"></textarea>
        </div>

        <div class="pilot-files-grid">
          <div class="form-group pilot-file-card">
            <label for="h1-solution"><code>solution.m</code></label>
            <input id="h1-solution" name="fi-file-submission[]" type="file" required accept=".m,text/plain" data-expected-filename="solution.m">
            <p class="field-hint">${n(t("participation.solutionHint"))}</p>
          </div>
          <div class="form-group pilot-file-card">
            <label for="h1-report"><code>report.json</code></label>
            <input id="h1-report" name="fi-file-submission[]" type="file" required accept=".json,application/json,text/plain" data-expected-filename="report.json">
            <p class="field-hint">${n(t("participation.reportHint"))} <code>solution.m</code>.</p>
          </div>
        </div>

        <div id="h1-preflight" class="console-panel submission-preflight" aria-live="polite">
          <p><span class="console-prompt">$</span> <span class="console-command">submission preflight</span></p>
          <p class="console-meta">${i(t("participation.selectFiles"))}</p>
        </div>

        <div class="form-group">
          <div class="checkbox-container">
            <input type="checkbox" id="h1-privacy-consent" name="fi-text-privacyConsent" required>
            <label for="h1-privacy-consent">${i(t("participation.consent"))} <a href="#privacyPolicy" class="privacy-link">${i(t("privacy.title"))}</a>.</label>
          </div>
        </div>

        <button id="h1-submit" type="submit" class="btn primary">${i(t("participation.submit"))}</button>
      </form>
      <div id="h1-form-status" class="form-status hidden" role="status" aria-live="polite"></div>
    </section>
  `}async function S(e={}){var l;let o=await h(),a=((l=e==null?void 0:e.params)==null?void 0:l.slug)||"";if(a&&a!==o.challenge_slug)throw new Error(`H1 preview does not belong to challenge: ${a}`);let s=`
    <p><a href="#desafios/${encodeURIComponent(o.challenge_slug)}" class="challenge-back-link">${i(t("participation.back"))} ${i(t("challenges.mlfName"))}</a></p>
    <section class="pilot-banner" aria-label="${i(t("participation.bannerLabel"))}">
      <strong>${i(t("participation.banner"))}</strong>
      <p>${i(t("participation.testDescription"))}</p>
    </section>
    <h1>${i(t("participation.testTitle"))}</h1>
    <p>${i(t("participation.intro"))}</p>
    ${x()}
    ${w(o)}
    ${j(o)}
  `;return{html:u("human-pilot",s),metadata:{title:t("participation.testTitle"),description:t("participation.description")}}}export{S as buildHumanPilotPage};
