$(function() {

  // SVG stuff
  var s = Snap("#js-features-branch-diagram-svg");

  var annotations = [
        new Annotation(s, {top: 20,  left: 88,  height: 207, name: 'branch'}),
        new Annotation(s, {top: 140,  left: 289,  height: 86, width: 113, name: 'commits'}),
        new Annotation(s, {top: 137, left: 423, height: 89, name: 'pr'}),
        new Annotation(s, {top: 140,  left: 550,  height: 86, width: 145, name: 'code-review'}),
        new Annotation(s, {top: 137, left: 688, height: 89, name: 'deploy'}),
        new Annotation(s, {top: 20,  left: 840, height: 207, name: 'merge'})
  ];

  $.each(annotations, function(i) {
    annotations[i].target.click(function() {
      changePanel($('.js-panel-content-'+annotations[i].name));
      changeAnnotation(annotations, annotations[i].name);
    });
    annotations[i].target.mouseover(function() {
      if (!annotations[i].isActive()) {
        annotations[i].scaleTarget(2);
      }
    });
    annotations[i].target.mouseout(function() {
      if (!annotations[i].isActive()) {
        annotations[i].scaleTarget(1);
      }
    });
  });

  // Panel nav
  var firstPanel = $('.js-panel-content').first();
  firstPanel.addClass('active');
  $('.js-panel-nav-prev').addClass('disabled');

  $('.js-panel-nav-prev').click(function(e) {
    e.preventDefault();
    if ($(this).hasClass('disabled')) return;

    var activePanel = $('.js-panel-content.active');
    var prevPanel = activePanel.prev('.js-panel-content');
    changePanel(prevPanel);
    changeAnnotation(annotations, prevPanel.data('step'));
  });

  $('.js-panel-nav-next').click(function(e) {
    e.preventDefault();
    if ($(this).hasClass('disabled')) return;

    var activePanel = $('.js-panel-content.active');
    var nextPanel = activePanel.next('.js-panel-content');
    changePanel(nextPanel);
    changeAnnotation(annotations, nextPanel.data('step'));
  });

  $('.diagram-icon, .diagram-icon-small').click(function(e) {
    changePanel($('.js-panel-content-'+$(this).data('diagram-step')));
    changeAnnotation(annotations, $(this).data('diagram-step'));
  });

  changeAnnotation(annotations, firstPanel.data('step'));
});

function changeAnnotation(annotations, name) {
  var annotation = $.grep(annotations, function(a){ return a.name == name; })[0];
  $.each(annotations, function(i) {
    if (annotations[i] != annotation) {
      annotations[i].deactivate();
      $('.js-diagram-icon, .js-diagram-icon-small').removeClass('active');
    }
  });
  $('[data-diagram-step='+name+']').addClass('active');
  annotation.activate();
  $('.js-scrollable-diagram').animate({scrollLeft: annotation.left - $('.js-scrollable-diagram').width()/2}, 400, 'swing');
}

function changePanel(panel) {
  $('.js-panel-content.active').removeClass('active');
  $('.js-panel-content').fadeOut(0).removeClass('active');
  panel.fadeIn(200).addClass('active');

  if ($('.js-panel-content:last').is(panel)) {
    $('.js-panel-nav-next').addClass('disabled');
  }
  else {
    $('.js-panel-nav-next').removeClass('disabled');
  }

  if ($('.js-panel-content:first').is(panel)) {
    $('.js-panel-nav-prev').addClass('disabled');
  }
  else {
    $('.js-panel-nav-prev').removeClass('disabled');
  }
  $('body,html').animate({scrollTop: $('#js-features-branch-diagram').offset().top - 20}, 400, 'swing');
}

function Annotation(paper, options) {
  this.DASH_COLOR   = "#d4d4d4";
  this.SOLID_COLOR  = "#932D70";
  this.TARGET_COLOR = "#4183c4";
  this.BOTTOM       = 266;

  this.paper        = paper;
  this.top          = options.top;
  this.left         = options.left;
  this.height       = options.height;
  this.width        = options.width;
  this.name         = options.name;
  this.extender     = null;
  this.lines        = [];
  this.targetInner  = null;
  this.targetOuter  = null;
  this.active       = false;

  this.initLines();
  this.initTarget();
}

Annotation.prototype.initLines = function() {
  if (this.width) {
    this.lines = [
      this.paper.line(
        this.left - (this.width / 2), this.top + 30,
        this.left + (this.width / 2), this.top + 30),
      this.paper.line(
        this.left - (this.width / 2), this.top,
        this.left - (this.width / 2), this.top + 30),
      this.paper.line(
        this.left + (this.width / 2), this.top,
        this.left + (this.width / 2), this.top + 30),
      this.extender = this.paper.line(this.left, this.top + 30, this.left, this.top + this.height)
    ];
  }
  else {
    this.lines = [
      this.extender = this.paper.line(this.left, this.top, this.left, this.top + this.height)
    ];
  }
  self = this;
  $.each(self.lines, function(i) {
    self.lines[i].attr({
      stroke: self.DASH_COLOR,
      strokeWidth: 1,
      "stroke-dasharray": "3"
    });
  });
}

Annotation.prototype.initTarget = function() {
  this.targetOuter = this.paper.circle(this.left, this.top + this.height, 7);
  this.targetOuter.attr({
    fill: this.TARGET_COLOR
  });
  this.targetInner = this.paper.circle(this.left, this.top + this.height, 5);
  this.targetInner.attr({
    fill: this.TARGET_COLOR,
    stroke: "#fff",
    strokeWidth: 2
  });

  var self = this;
  this.target = this.paper.group(this.targetOuter, this.targetInner);
}

Annotation.prototype.activate = function() {
  var self = this;
  this.targetOuter.animate({r:14, cy: this.BOTTOM, fill: this.SOLID_COLOR}, 800, mina.elastic);
  this.targetInner.animate({r:10, cy: this.BOTTOM, fill: this.SOLID_COLOR}, 800, mina.elastic);
  this.extender.animate({y2: this.BOTTOM}, 100, mina.elastic, function() {
    $.each(self.lines, function(i) {
      self.lines[i].attr({
        stroke: self.SOLID_COLOR,
        "stroke-dasharray": "none"
      });
    });
  });
  this.active = true;
}

Annotation.prototype.deactivate = function() {
  var self = this;
  this.targetOuter.animate({r:7, cy: this.top + this.height, fill: this.TARGET_COLOR}, 800, mina.elastic);
  this.targetInner.animate({r:5, cy: this.top + this.height, fill: this.TARGET_COLOR}, 800, mina.elastic);
  this.extender.animate({y2: this.top + this.height}, 100, mina.elastic, function() {
    $.each(self.lines, function(i) {
      self.lines[i].attr({
        stroke: self.DASH_COLOR,
        "stroke-dasharray": "3"
      });
    });
  });
  this.active = false;
}

Annotation.prototype.scaleTarget = function(factor) {
  this.targetOuter.animate({r:7 * factor}, 800, mina.elastic);
  this.targetInner.animate({r:5 * factor}, 800, mina.elastic);
}

Annotation.prototype.isActive = function() {
  return (this.active == true);
}
