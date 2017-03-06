---
layout:
---
// http://jekyll.tips/jekyll-casts/jekyll-search-using-lunr-js/

importScripts("{{ "/js/lunr.min.js" | relative_url }}");

var store = {
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

// Initialize lunr
var idx = lunr(function () {
  this.ref('url');
  this.field('title', { boost: 10 });
  this.field('content');
});

// Add content to index
for(var id in store) {
  idx.add(store[id]);
}

onmessage = function (e) {
  var results = idx.search(e.data).map(function(result) {
    return store[result.ref].html;
  });
  postMessage(results);
}
