$(function() {

  // Panel nav
  $('.js-panel-content').first().addClass('active');
  $('.js-panel-nav-prev').addClass('disabled');

  $('.js-panel-nav-prev').click(function(e) {
    e.preventDefault();
    if ($(this).hasClass('disabled')) return;

    var activePanel = $('.js-panel-content.active').removeClass('active');
    var prevPanel = activePanel.prev('.js-panel-content');
    $('.js-panel-content').removeClass('active');
    prevPanel.addClass('active');

    if ($('.js-panel-content:first').is(prevPanel)) {
      $('.js-panel-nav-prev').addClass('disabled');
    }
    else {
      $('.js-panel-nav-prev').removeClass('disabled');
    }

    $('.js-panel-nav-next').removeClass('disabled');

  });

  $('.js-panel-nav-next').click(function(e) {
    e.preventDefault();
    if ($(this).hasClass('disabled')) return;

    var activePanel = $('.js-panel-content.active').removeClass('active');
    var nextPanel = activePanel.next('.js-panel-content');
    $('.js-panel-content').removeClass('active');
    nextPanel.addClass('active');

    if ($('.js-panel-content:last').is(nextPanel)) {
      $('.js-panel-nav-next').addClass('disabled');
    }
    else {
      $('.js-panel-nav-next').removeClass('disabled');
    }

    $('.js-panel-nav-prev').removeClass('disabled');

  });

});