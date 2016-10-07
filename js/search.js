---
layout: false
---

var searchWorker = new Worker("{{ "/js/search_worker.js" | prepend: site.baseurl }}");

searchWorker.addEventListener("message", function(e) {
  displaySearchResults(e.data);
});

var searchTerm = getQueryVariable('q');
if (searchTerm) {
  // Set value of search box to search parameter
  document.getElementById('search-box').setAttribute("value", searchTerm);
  searchWorker.postMessage(searchTerm);
}

function displaySearchResults(results) {
  var searchResults = document.getElementById('search-results');

  if (results.length) {
    searchResults.innerHTML = results.join("");
  } else {
    searchResults.innerHTML = '<li>No results found</li>';
  }
}

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split('&');

  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');

    if (pair[0] === variable) {
      return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
    }
  }
}
