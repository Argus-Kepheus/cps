import{a as t}from"./chunk-DCTU4USQ.js";import{a as n}from"./chunk-55JHTTGY.js";import{a as l}from"./chunk-D2XV4R5X.js";import"./chunk-65ESAS5F.js";function a(e=""){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function i(e){return e.id==="mlf"?l("challenges.mlfName"):e.name||e.slug}function c(e){return e.id==="mlf"?l("challenges.mlfSummary"):e.summary||""}function o(e){return`
    <article class="challenge-card">
      <p class="challenge-state">${a(l("challenges.available"))}</p>
      <h2>${a(i(e))}</h2>
      ${c(e)?`<p>${a(c(e))}</p>`:""}
      <a class="btn outline" href="#desafios/${encodeURIComponent(e.slug)}">${a(l("challenges.viewChallenge"))}</a>
    </article>
  `}async function u(){let r=(await t()).challenges.map(o).join(""),s=`
    <h1>${a(l("challenges.title"))}</h1>
    <p class="page-description">${a(l("challenges.intro"))}</p>
    <div class="challenge-grid">
      ${r||`<p>${a(l("challenges.empty"))}</p>`}
    </div>
  `;return n("challenges",s)}export{u as buildChallengesPage};
