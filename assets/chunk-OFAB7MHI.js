import{a as _,c as S,d as C}from"./chunk-DCTU4USQ.js";import{a as i,d as p}from"./chunk-FYMMFH3J.js";import{a as $}from"./chunk-55JHTTGY.js";import{a as n}from"./chunk-D2XV4R5X.js";import"./chunk-65ESAS5F.js";function l(){return i(n("editions.pending"))}function h(){return document.documentElement.lang||"pt-BR"}function r(e,t){if(!e)return l();let d=new Date(e);return Number.isNaN(d.getTime())?i(e):i(new Intl.DateTimeFormat(h(),{dateStyle:"medium",timeStyle:"short",...t?{timeZone:t}:{}}).format(d))}function F(e,t){if(t==null||!e)return l();try{return i(new Intl.NumberFormat(h(),{style:"currency",currency:e}).format(t))}catch{return i(`${e} ${t}`)}}function m(e,t={}){if(e==null||e==="")return l();let d=Number(e);return Number.isFinite(d)?i(new Intl.NumberFormat(h(),t).format(d)):i(e)}function u(e,t){if(!t)return n("editions.pending");let d=n(`editions.values.${e}.${t}`);return d.startsWith("editions.values.")?t:d}function R(e={}){return Object.values(e).map(t=>(t==null?void 0:t.name)||(t==null?void 0:t.id)).filter(Boolean).join(", ")}function A(e={}){var d,o,a,s,c;let t=e.timezone;return`
    <dl class="edition-facts">
      <div><dt>${i(n("editions.callPublication"))}</dt><dd>${r(e.call_publication,t)}</dd></div>
      <div><dt>${i(n("editions.registrationOpens"))}</dt><dd>${r((d=e.registration)==null?void 0:d.opens,t)}</dd></div>
      <div><dt>${i(n("editions.registrationCloses"))}</dt><dd>${r((o=e.registration)==null?void 0:o.closes,t)}</dd></div>
      <div><dt>${i(n("editions.submissionOpens"))}</dt><dd>${r((a=e.submission)==null?void 0:a.opens,t)}</dd></div>
      <div><dt>${i(n("editions.submissionCloses"))}</dt><dd>${r((s=e.submission)==null?void 0:s.closes,t)}</dd></div>
      <div><dt>${i(n("editions.resultsPlanned"))}</dt><dd>${r((c=e.results)==null?void 0:c.planned_publication,t)}</dd></div>
    </dl>`}function D(e){let t=e.registration||{},d=e.award||{};return`
    <dl class="edition-facts">
      <div><dt>${i(n("editions.registrationFee"))}</dt><dd>${t.enabled?F(t.currency,t.fee):i(n("editions.notApplicable"))}</dd></div>
      <div><dt>${i(n("editions.minimumParticipants"))}</dt><dd>${t.minimum_confirmed_participants==null?l():m(t.minimum_confirmed_participants)}</dd></div>
      <div><dt>${i(n("editions.award"))}</dt><dd>${d.enabled?F(d.currency,d.amount):i(n("editions.notApplicable"))}</dd></div>
      <div><dt>${i(n("editions.awardCount"))}</dt><dd>${d.enabled?d.count==null?l():m(d.count):i(n("editions.notApplicable"))}</dd></div>
    </dl>`}function j(e){let t=e.submission||{},d=t.format||e.format||{};return`
    <dl class="edition-facts">
      <div><dt>${i(n("editions.category"))}</dt><dd>${i(R(t.category||e.category)||n("editions.pending"))}</dd></div>
      <div><dt>${i(n("editions.participation"))}</dt><dd>${i(u("participation",d.participation))}</dd></div>
      <div><dt>${i(n("editions.presence"))}</dt><dd>${i(u("presence",d.presence))}</dd></div>
      <div><dt>${i(n("editions.timing"))}</dt><dd>${i(u("timing",d.timing))}</dd></div>
    </dl>`}function k(e=[]){return e.length?`<ul class="edition-participant-list">${e.map(t=>`<li>${i(t.display_name)}</li>`).join("")}</ul>`:`<p>${i(n("editions.noParticipants"))}</p>`}function w(e=[]){return e.length?`<div class="table-scroll"><table class="edition-ranking">
    <thead><tr><th>${i(n("editions.position"))}</th><th>${i(n("editions.participant"))}</th><th>${i(n("editions.time"))}</th><th>${i(n("editions.solutionHash"))}</th></tr></thead>
    <tbody>${e.map(t=>{var d,o;return`<tr><td>${t.position==null?"":m(t.position)}</td><td>${i((d=t.display_name)!=null?d:"")}</td><td>${t.time_seconds==null?"\u2014":`${m(t.time_seconds,{maximumFractionDigits:12})} s`}</td><td><code>${i((o=t.solution_sha256)!=null?o:"\u2014")}</code></td></tr>`}).join("")}</tbody>
  </table></div>`:`<p>${i(n("editions.noRanking"))}</p>`}function B(e=[]){return e.length?e.map(t=>`
    <article class="edition-document">
      <h3>${i(t.title)}</h3>
      ${p(t)}
    </article>`).join(""):`<p>${i(n("editions.noRules"))}</p>`}async function x(e={}){var g,f,b,v,y;let t=await _(),d=((g=e==null?void 0:e.params)==null?void 0:g.slug)||"",o=((f=e==null?void 0:e.params)==null?void 0:f.editionSlug)||"",a=S(t,d),s=C(t,d,o);if(!a||!s){let P=`
      <h1>${i(n("error.notFound.title"))}</h1>
      <p>${i(n("editions.notFound"))}</p>
      <a href="#desafios" class="btn primary">${i(n("challenges.backToChallenges"))}</a>`;return{html:$("edition",P,!1),metadata:{title:n("error.notFound.title"),description:n("error.description")}}}let c=(b=s.content)==null?void 0:b.call,N=`
    <nav class="edition-breadcrumb" aria-label="${i(n("editions.breadcrumb"))}">
      <a href="#desafios">${i(n("challenges.title"))}</a>
      <span aria-hidden="true">/</span>
      <a href="#desafios/${encodeURIComponent(a.slug)}">${i(a.name)}</a>
      <span aria-hidden="true">/</span>
      <span>${i(s.public_code||s.name)}</span>
    </nav>
    <h1>${i(s.name)}</h1>
    <p class="edition-meta"><strong>${i(s.public_code)}</strong> \xB7 ${i(n("challenges.editionStatus"))}: ${i(u("status",s.status))}</p>

    <section class="challenge-section edition-section" id="edition-call" data-reading-anchor>
      <h2>${i(n("editions.call"))}</h2>
      ${c?p(c):`<p>${i(n("editions.noCall"))}</p>`}
    </section>

    <section class="challenge-section edition-section" id="edition-rules" data-reading-anchor>
      <h2>${i(n("editions.rules"))}</h2>
      ${B((v=s.content)==null?void 0:v.rules)}
    </section>

    ${s.schedule?`<section class="challenge-section edition-section" id="edition-schedule" data-reading-anchor><h2>${i(n("editions.schedule"))}</h2>${A(s.schedule)}</section>`:""}
    ${s.registration?`<section class="challenge-section edition-section" id="edition-registration" data-reading-anchor><h2>${i(n("editions.registrationAndAward"))}</h2>${D(s)}</section>`:""}
    ${s.submission?`<section class="challenge-section edition-section" id="edition-submission" data-reading-anchor><h2>${i(n("editions.submission"))}</h2>${j(s)}</section>`:""}

    <section class="challenge-section edition-section" id="edition-results" data-reading-anchor>
      <h2>${i(n("editions.results"))}</h2>
      <h3>${i(n("editions.participants"))}</h3>
      ${k(s.participants)}
      <h3>${i(n("editions.ranking"))}</h3>
      ${w(s.ranking)}
    </section>

    <section class="challenge-section edition-section" id="edition-certificates" data-reading-anchor>
      <h2>${i(n("editions.certificates"))}</h2>
      <p>${i((y=s.certificates)!=null&&y.public_verification?n("editions.certificateVerificationEnabled"):n("editions.certificateVerificationUnavailable"))}</p>
    </section>`;return{html:$("edition",N),metadata:{title:s.name,description:`${a.name} \u2014 ${s.public_code}`}}}export{x as buildEditionPage};
