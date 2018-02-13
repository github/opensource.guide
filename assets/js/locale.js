$(document).ready(function() {
  $('#language').change(function() {
    loadLanguage($('#language option:selected').val());
  });
});

function loadLanguage(lang) {
  if (lang === "en") {
    url = window.location.pathname.replace(/^\/[a-z]+([_-][a-z]+)?\//, "/")
  } else {
    url = "/" + lang + window.location.pathname
  }
  window.location.assign(url);
}
