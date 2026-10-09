import{a as e}from"./chunk-55JHTTGY.js";import{a}from"./chunk-D2XV4R5X.js";import"./chunk-65ESAS5F.js";function o(){return`
    <details class="contact-section" id="contact-message" data-reading-anchor open>
      <summary data-i18n="contato.sections.message">${a("contato.sections.message")}</summary>
      <div class="contact-form">
        <form id="contact-form" action="https://formspree.io/f/xzzveoqq" method="POST">
          <div class="form-group">
            <label for="name" data-i18n="contato.form.name">${a("contato.form.name")}</label>
            <input type="text" id="name" name="name" autocomplete="name" required data-i18n-placeholder="form.placeholders.name" placeholder="${a("form.placeholders.name")}">
          </div>
          <div class="form-group">
            <label for="email" data-i18n="contato.form.email">${a("contato.form.email")}</label>
            <input type="email" id="email" name="email" autocomplete="email" required data-i18n-placeholder="form.placeholders.email" placeholder="${a("form.placeholders.email")}">
          </div>
          <div class="form-group">
            <label for="subject" data-i18n="contato.form.subject">${a("contato.form.subject")}</label>
            <input type="text" id="subject" name="subject" required data-i18n-placeholder="form.placeholders.subject" placeholder="${a("form.placeholders.subject")}">
          </div>
          <div class="form-group">
            <label for="message" data-i18n="contato.form.message">${a("contato.form.message")}</label>
            <textarea id="message" name="message" rows="5" required data-i18n-placeholder="form.placeholders.message" placeholder="${a("form.placeholders.message")}"></textarea>
          </div>
          <div class="form-group">
            <div class="checkbox-container">
              <input type="checkbox" id="privacy-consent" name="privacy-consent" required>
              <label for="privacy-consent">
                <span data-i18n="privacy.consent">${a("privacy.consent")}</span>
                <a href="#privacyPolicy" class="privacy-link">${a("privacy.title")}</a>
              </label>
            </div>
          </div>
          <button type="submit" class="btn primary" data-i18n="contato.form.send">${a("contato.form.send")}</button>
        </form>
        <div id="form-status" class="form-status hidden" role="status" aria-live="polite"></div>
      </div>
    </details>
  `}function n(){let t=`
    <h1 data-i18n="contato.title">${a("contato.title")}</h1>
    <p class="page-description" data-i18n="contato.description">${a("contato.description")}</p>


    <div class="contact-forms">
      ${o()}
    </div>

    <p class="contact-submission-note" id="contact-submission-note" data-reading-anchor>
      <span data-i18n="contato.submissionNote">${a("contato.submissionNote")}</span>
      <a href="#desafios/mittag-leffler/participacao-teste" data-i18n="contato.submissionLink">${a("contato.submissionLink")}</a>
    </p>
  `;return e("contato",t)}export{n as buildContatoPage};
