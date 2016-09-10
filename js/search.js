---
layout: false
---

window.store = {
{% for article in site.articles %}
  {% capture html %}{% include search-result.html article=article %}{% endcapture %}
  "{{ article.url | xml_escape }}": {
    "title": "{{ article.title | xml_escape }}",
    "content": {{ article.content | markdownify | strip_html | strip_newlines | jsonify }},
    "url": "{{ article.url | xml_escape }}",
    "html": {{ html | jsonify }}
  }{% unless forloop.last %},{% endunless %}
{% endfor %}
};

// http://jekyll.tips/jekyll-casts/jekyll-search-using-lunr-js/
(function() {
  var store = window.store;
  var searchTerm = getQueryVariable('q');

  if (searchTerm) {
    // Set value of search box to search parameter
    document.getElementById('search-box').setAttribute("value", searchTerm);

    // Initalize lunr
    var idx = window.x = lunr(function () {
      this.ref('url');
      this.field('title', { boost: 10 });
      this.field('content');
    });

    // Add content to index
    for(var id in store) {
      idx.add(store[id]);
    }

    // Perform the search
    var results = idx.search(searchTerm);
    displaySearchResults(results);
  }

  function displaySearchResults(results) {
    var searchResults = document.getElementById('search-results');

    if (results.length) {
      var appendString = '';

      results.forEach(function(result) {
        appendString += store[result.ref].html;
      });

      searchResults.innerHTML = appendString;
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
})();
