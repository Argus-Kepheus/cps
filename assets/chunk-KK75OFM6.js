import{a as g,b as p,c as h}from"./chunk-DCTU4USQ.js";import{a as i}from"./chunk-NMYG7KIO.js";import{a as e}from"./chunk-FYMMFH3J.js";import{a as o}from"./chunk-55JHTTGY.js";import{a}from"./chunk-D2XV4R5X.js";import"./chunk-65ESAS5F.js";function u(){return`<p class="competition-summary">${e(a("challenges.competitionSummary"))}</p>`}function f(l=[]){return l.length?`<ul class="challenge-variant-list">${l.map(n=>`
    <li>
      <strong>${e(a("challenges.variantName"))}</strong>
      ${n.description?`<span> \u2014 ${e(a("challenges.variantDescription"))}</span>`:""}
    </li>
  `).join("")}</ul>`:`<p>${e(a("challenges.noVariants"))}</p>`}function b(l={}){let n=l.values||[];return n.length?`<ul class="challenge-language-list">${n.map(t=>`
    <li class="challenge-language">
      <span>${e((t==null?void 0:t.name)||(t==null?void 0:t.id)||t)}</span>
    </li>
  `).join("")}</ul>`:`<p>${e(a("challenges.noCategories"))}</p>`}function C(l={}){let n=Object.entries(l);return n.length?`<dl class="challenge-category-list">${n.map(([t,s])=>`
    <div>
      <dt>${e(t==="programming_language"?a("challenges.languageLabel"):s.label||t)}</dt>
      <dd>${t==="programming_language"?b(s):(s.values||[]).map(c=>e((c==null?void 0:c.name)||(c==null?void 0:c.id)||c)).join(", ")}</dd>
    </div>
  `).join("")}</dl>
  <p class="field-hint">${e(a("challenges.categoryScopeNote"))}</p>`:`<p>${e(a("challenges.noCategories"))}</p>`}async function v(l){try{let n=await i();return n.challenge_id!==l.id||n.challenge_slug!==l.slug?"":`
      <section class="challenge-section challenge-pilot-section">
        <h2>${e(a("participation.testTitle"))}</h2>
        <article class="challenge-edition-card machine-card">
          <p><strong>${e(a("participation.testBadge"))}</strong></p>
          <p>${e(a("participation.testDescription"))}</p>
          <a class="btn primary" href="#desafios/${encodeURIComponent(l.slug)}/participacao-teste">${e(a("participation.openTest"))}</a>
        </article>
      </section>
    `}catch{return""}}function y(l=[]){return l.length?`<div class="challenge-edition-list">${l.map(n=>`
    <article class="challenge-edition-card">
      <h3>${e(n.name)}</h3>
      ${n.public_code?`<p><strong>${e(n.public_code)}</strong></p>`:""}
      <p>${e(a("challenges.editionStatus"))}: ${e(n.status)}</p>
      <a class="btn outline" href="#desafios/${encodeURIComponent(n.challenge_slug)}/edicoes/${encodeURIComponent(n.public_slug)}">${e(a("challenges.viewEdition"))}</a>
    </article>
  `).join("")}</div>`:`<p>${e(a("challenges.noPublicEditions"))}</p>`}async function S(l={}){var r;let n=await g(),t=((r=l==null?void 0:l.params)==null?void 0:r.slug)||"",s=h(n,t);if(!s){let m=`
      <h1>${e(a("error.notFound.title"))}</h1>
      <p>${e(a("challenges.notFound"))}</p>
      <a href="#desafios" class="btn primary">${e(a("challenges.backToChallenges"))}</a>
    `;return{html:o("challenge",m,!1),metadata:{title:a("error.notFound.title"),description:a("error.description")}}}let c=p(n,s.id),d=await v(s),$=`
    <p><a href="#desafios" class="challenge-back-link">${e(a("challenges.backToChallenges"))}</a></p>
    <h1>${e(a("challenges.mlfName"))}</h1>
    <p class="page-description">${e(a("challenges.mlfDetail"))}</p>

    ${u()}
    ${d}
    <section class="challenge-section">
      <h2>${e(a("challenges.variants"))}</h2>
      ${f(s.variants)}
    </section>

    <section class="challenge-section">
      <h2>${e(a("challenges.categories"))}</h2>
      ${C(s.category_dimensions)}
    </section>

    <section class="challenge-section">
      <h2>${e(a("challenges.editions"))}</h2>
      ${y(c)}
    </section>
  `;return{html:o("challenge",$),metadata:{title:a("challenges.mlfName"),description:a("challenges.mlfDetail")}}}export{S as buildChallengePage};
