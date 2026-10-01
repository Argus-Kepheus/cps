import{a}from"./chunk-D2XV4R5X.js";function r(){return`
    <div class="back-to-top-container">
      <a href="#top" class="back-to-top-button" aria-label="${a("aria.backToTop")}" data-i18n-aria-label="aria.backToTop">
        <span class="arrow-up">\u2191</span>
        <span class="button-text" data-i18n="buttons.backToTop">${a("buttons.backToTop")}</span>
      </a>
    </div>
  `}function s(o,n,e=!0){console.log("Creating page container for:",o);let t=`
    <div class="page-container ${o}-page">
      ${n}
      ${e?r():""}
    </div>
  `;return console.log("Page container HTML:",t),t}export{s as a};
