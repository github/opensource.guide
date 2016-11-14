---
layout:
---

// Security by obscurity
//
// This adds a very thin veil to prevent randos from accessing the site.
// Visit http://opensource.guide/home#monalisa to get the magical cookie that
// lets you visit the site.

if(window.location.hash == '#monalisa') {
  document.cookie = "secret=monalisa;path=/"
  history.replaceState({}, null, window.location.pathname)
} else if (!document.cookie.match(/(^|; )secret=/)) {
  window.location = {{ '/' | prepend: site.baseurl | jsonify }}
}
