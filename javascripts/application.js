$(function(){
  tableOfContents($('.js-toc'))
})


// Generates a table of contents based on a.toc-item elements throughout the
// page. Follows allong via scroll and
var tableOfContents = function($listContainer) {
  if ($listContainer.length === 0) return

  $('.toc-item').each(function(index, chapterAnchor) {
    $chapterAnchor = $(chapterAnchor)
    var listLink = $('<a>')
    .attr('href', '#' + $chapterAnchor.attr('id'))
    .text($chapterAnchor.attr('title'))
    .bind('click', scrollTo)

    var listItem = $('<li>').append(listLink)

    $listContainer.append(listItem)
  })
}

var scrollTo = function(e) {
  e.preventDefault();
  var elScrollTo = $(e.target).attr('href');
  var $el = $(elScrollTo);

  $('body,html').animate({ scrollTop: $el.offset().top }, 400, 'swing', function() {
    location.hash = elScrollTo;
  })
}
