(function () {
  var CONSENT_KEY = 'uhp-cookie-consent';
  var GA_ID = 'G-VBRH5MNPJT';

  function loadAnalytics() {
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);
  }

  function getConsent() {
    try {
      return localStorage.getItem(CONSENT_KEY);
    } catch (e) {
      return null;
    }
  }

  function setConsent(value) {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch (e) {}
  }

  document.addEventListener('DOMContentLoaded', function () {
    var consent = getConsent();

    if (consent === 'accepted') {
      loadAnalytics();
      return;
    }

    if (consent === 'declined') {
      return;
    }

    var banner = document.getElementById('ck-Banner');
    if (!banner) return;

    banner.hidden = false;

    var acceptBtn = document.getElementById('ck-Banner_Accept');
    var declineBtn = document.getElementById('ck-Banner_Decline');

    if (acceptBtn) {
      acceptBtn.addEventListener('click', function () {
        setConsent('accepted');
        loadAnalytics();
        banner.hidden = true;
      });
    }

    if (declineBtn) {
      declineBtn.addEventListener('click', function () {
        setConsent('declined');
        banner.hidden = true;
      });
    }
  });
})();
