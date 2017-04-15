$(document).ready(function() {
  var currentLocale = $('html').attr('lang');

  // All available translations
  var translations = $('a.locale-chooser');

  // Get the preferred locale
  var locale = getLocaleFromQuery()
    || getLocaleFromCookie()
    || getLocaleFromBrowser(translations);

  // If preferred locale is not the same as the current locale, then set it.
  if (locale && locale != currentLocale) {
    translations.filter("[lang=" + locale + "]").click();
  }

  // Set locale when clicking on locale link
  translations.on('click', function(event) {
    setLocale($(event.target).attr('lang'));
  });
});

// Save the preferred locale in a cookie, which will be set on any subdomain.
function setLocale(locale) {
  document.cookie = 'locale=' + locale;
}

// Get locale from the `l` parameter of the query string
function getLocaleFromQuery() {
  return window.location.search.replace(/.*[?&]l=([^&$]+).*/, '$1');
}

function getLocaleFromCookie() {
  return document.cookie.replace(/(?:(?:^|.*;\s*)locale\s*\=\s*([^;]*).*$)|^.*$/, '$1');
}

// Use locale that matches browser's preferred locales
function getLocaleFromBrowser(translations) {
  var browserLocales = [].concat(navigator.languages || navigator.userLanguage || navigator.language);
  for(var i = 0; i < browserLocales.length; i++) {
    if (translations.filter('[lang=' + browserLocales[i] + ']').length) {
      return browserLocales[i];
    }
  }
}
