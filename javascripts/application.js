$(function(){

  var renderGuideListing = function(guideListing) {
    var titleSHA = guideListing.find('.js-guide-cover-title').data('title-sha');
    var svgCanvas   = guideListing.find('.js-guilloche')[0];
    guillocheSVG(svgCanvas, {string: titleSHA, type: "listing"});
  };

  var renderGuideHeading = function(guideHeading) {
    var titleSHA = guideHeading.find('.js-guide-article-title').data('title-sha');
    var svgCanvas = $('.js-guilloche')[0];
    svgCanvas.setAttribute('width', guideHeading.width());
    svgCanvas.setAttribute('height', guideHeading.height());
    center = {x: guideHeading.find('.wrap').offset().left + 50, y: 113};
    guillocheSVG(svgCanvas, {string: titleSHA, type: "article", center: center});
  };


  $('.js-guide-listing').each(function() {
    renderGuideListing($(this));
  });

  $('.js-guide-article').each(function() {
    renderGuideHeading($(this));
  });

  $(window).resize(function() {
    if ($('.js-guide-article').length) {
      renderGuideHeading($('.js-guide-article'));
    }
  });

  tableOfContents($('.js-toc'))

  //
  // Scroll Handlers
  //

  // Table of contents
  var toc = $('.toc')
  var tocOffset = toc.offset().top
  var tocPadding = 20

  var tocSections = $('.toc-item')
  var tocSectionOffsets = []

  // Calculates the toc section offsets, which can change as images get loaded
  var calculateTocSections = function(){
    tocSectionOffsets = []
    tocSections.each(function(index, section){
      tocSectionOffsets.push(section.offsetTop)
    })
  }
  calculateTocSections()
  $(window).bind('load', calculateTocSections)

  var highlightTocSection = function(){
    var highlightIndex = 0
    $.each(tocSectionOffsets, function(index, offset){
      if (window.scrollY > offset - 20){
        highlightIndex = index
      }
    })
    highlightIndex += 1
    $('ol.toc .active').removeClass('active')
    $('ol.toc li:nth-child(' + highlightIndex + ') a').addClass('active')
  }
  highlightTocSection()

  var didScroll = false;
  $(window).scroll(function() {
      didScroll = true
  })

  setInterval(function() {
    if (didScroll) {
      didScroll = false;

      if (window.scrollY > tocOffset - tocPadding)
        toc.addClass('sticky')
      else
        toc.removeClass('sticky')
    }
    highlightTocSection()
  }, 100);
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

function str2hex(input) {
  try { hexcase } catch(e) { hexcase=0; }
  var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
  var output = "";
  var x;
  for(var i = 0; i < input.length; i++) {
    x = input.charCodeAt(i);
    output += hex_tab.charAt((x >>> 4) & 0x0F)
           +  hex_tab.charAt( x        & 0x0F);
  }
  return output;
}

function str2hash(str){
  return str.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
}

