$(document).ready(() => {
  $('#language').change(() => {
    loadLanguage($('#language option:selected').val());
  });
});

const loadLanguage = lang => {
  base_pathname = window.location.pathname.replace(/\/[a-z]+([_-][a-z]+)?\//, "/")
  if (lang === "en") {
    url = base_pathname
  } else {
    url = "/" + lang + base_pathname
  }
  window.location.assign(url);
}
