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

  // Additional code for Lunr.js integration
  var searchBox = document.getElementById('searchBar');
  var searchResultsDiv = document.getElementById('results');

  // Initialize Lunr.js
  const documents = [
    { "id": 1, "title": "How to Contribute", "content": "Learn how to contribute to open source projects." },
    { "id": 2, "title": "Building a Community", "content": "Guidelines for creating and nurturing a community." },
    { "id": 3, "title": "Finding Users for Your Project", "content": "Strategies for getting users for your open source project." },
    // Add more guide data dynamically or statically
  ];

  const idx = lunr(function () {
    this.ref('id');
    this.field('title');
    this.field('content');

    documents.forEach(function (doc) {
      this.add(doc);
    }, this);
  });

  // Handle form submission and search
  document.getElementById('searchForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const query = searchBox.value;
    const results = idx.search(query);
    displayResults(results);
  });

  // Function to display search results
  function displayResults(results) {
    searchResultsDiv.innerHTML = ''; // Clear previous results

    if (results.length > 0) {
      results.forEach(result => {
        const doc = documents.find(d => d.id === parseInt(result.ref));
        const resultItem = `<div><h3>${doc.title}</h3><p>${doc.content}</p></div>`;
        searchResultsDiv.innerHTML += resultItem;
      });
    } else {
      searchResultsDiv.innerHTML = '<p>No results found</p>';
    }
  }

})();
