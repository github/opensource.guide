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
