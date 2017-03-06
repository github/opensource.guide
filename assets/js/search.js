---
layout:
---

(function() {

var searchWorker;
var searchURL = "{{ "/search/" | relative_url }}";
var replaceState = false;
var replaceStateTimeout;
var searchBox = document.getElementById('search-box');

document.addEventListener("DOMContentLoaded", setup);
window.addEventListener("popstate", maintainHistoryState);

function setup() {
  var searchQuery = getQueryVariable('q');

  // Search term was provided in URL
  if (searchQuery) {
    search(searchQuery);
  }

  // Listen for changes to search box
  searchBox.addEventListener('keyup', function(e) {
    search(searchBox.value);
  });
}

function search(searchTerm) {
  updateHistory(searchTerm);
  setSearchingState();

  // Set value of search box to search parameter
  searchBox.setAttribute("value", searchTerm);

  if(!searchWorker) {
    searchWorker = new Worker("{{ "/js/search_worker.js" | relative_url }}");

    searchWorker.addEventListener("message", function(e) {
      displaySearchResults(e.data);
    });
  }

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

function setSearchingState() {
  document.body.classList.add("searching");
}

function unsetSearchingState() {
  document.body.classList.remove("searching");
}

function updateHistory(searchTerm) {
  var newURL = searchURL + "?q=" + encodeURIComponent(searchTerm);

  if (replaceState) {
    history.replaceState({search: searchTerm}, "", newURL);
  } else {
    history.pushState({search: searchTerm}, "", newURL);
    replaceState = true;
    clearTimeout(replaceStateTimeout)
    replaceStateTimeout = setTimeout(function() { replaceState = false; }, 5000);
  }
}

// event handler for the "popstate" event
function maintainHistoryState(event) {
  if(!event.state) {
    unsetSearchingState();
  } else if (event.state.search) {
    search(event.state.search);
  }
}

})();
