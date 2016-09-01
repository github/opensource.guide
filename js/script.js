function toggleNav() {
  if ($('.site-wrapper').hasClass('show-nav')) {
      // Do things on Nav Close
      $('.site-wrapper').removeClass('show-nav');
  } else {
      // Do things on Nav Open
      $('.site-wrapper').addClass('show-nav');
  }
}

$(function() {
    // Toggle Nav on Click
    $('.toggle-nav').click(function() {
        // Calling a function in case you want to expand upon this.
        toggleNav();
        $(this).toggleClass('toggle-nav-close');
        $('.site-canvas-mask').addClass('is-shown');
    });
    $('.site-canvas-mask').click(function() {
      $('.site-wrapper').removeClass('show-nav');
      $(this).removeClass('is-shown');
      $('.toggle-nav').removeClass('toggle-nav-close');
    });
});
