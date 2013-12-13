$(function() {

  // Panel nav
  $('.js-panel-content').first().addClass('active');
  $('.js-panel-nav-prev').addClass('disabled');

  $('.js-panel-nav-prev').click(function(e) {
    e.preventDefault();
    if ($(this).hasClass('disabled')) return;

    var activePanel = $('.js-panel-content.active').removeClass('active');
    var prevPanel = activePanel.prev('.js-panel-content');
    $('.js-panel-content').fadeOut(200).removeClass('active');
    prevPanel.fadeIn(200).addClass('active');

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
    $('.js-panel-content').fadeOut(200).removeClass('active');
    nextPanel.fadeIn(200).addClass('active');

    if ($('.js-panel-content:last').is(nextPanel)) {
      $('.js-panel-nav-next').addClass('disabled');
    }
    else {
      $('.js-panel-nav-next').removeClass('disabled');
    }

    $('.js-panel-nav-prev').removeClass('disabled');
  });

  // SVG stuff

  var s = Snap("#js-features-branch-diagram-svg");

  var line = s.line(88, 20, 88, 223);
  line.attr({
    stroke: "#d4d4d4",
    strokeWidth: 1,
    "stroke-dasharray": "3"
  })

  var outerCircle = s.circle(88, 223, 7);
  outerCircle.attr({
    fill: "#4183c4"
  });
  var innerCircle = s.circle(88, 223, 5);
  innerCircle.attr({
    fill: "#4183c4",
    stroke: "#fff",
    strokeWidth: 2
  });

  var target = s.group(outerCircle, innerCircle);
  target.click(function() {
    outerCircle.animate({r:14, cy: 266}, 800, mina.elastic);
    innerCircle.animate({r:10, cy: 266}, 800, mina.elastic);
    line.animate({y2: 266, stroke: "#444444"}, 100, mina.elastic, function() {
      line.attr({
        "stroke-dasharray": "none"
      });
    });
  });


});