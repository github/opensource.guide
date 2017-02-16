$(function() {
    $(document).click(function() {
      // Hiding ToC
      $('.toc-trigger').removeClass('toc-open');
      $('.toc-list').removeClass('is-shown');
    });

    // Toggle Nav on Click
    $('.toc-trigger').click(function(e) {
        // Prevent bubbling event for proper hiding
        e.stopPropagation();
        // Calling a function in case you want to expand upon this.
        $(this).toggleClass('toc-open');
        $('.toc-list').toggleClass('is-shown');
    });
});

//$(function() {
//  $('a[href*="#"]:not([href="#"])').click(function() {
//    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//      var target = $(this.hash);
//      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//      if (target.length) {
//        $('html, body').animate({
//          scrollTop: target.offset().top
//        }, 1000);
//        return false;
//      }
//    }
//  });
//});
