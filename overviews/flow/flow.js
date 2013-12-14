$(function() {

  // Panel nav
  $('.js-panel-content').first().addClass('active');
  $('.js-panel-nav-prev').addClass('disabled');

  $('.js-panel-nav-prev').click(function(e) {
    e.preventDefault();
    if ($(this).hasClass('disabled')) return;

    var activePanel = $('.js-panel-content.active');
    var prevPanel = activePanel.prev('.js-panel-content');
    changePanel(prevPanel);
  });

  $('.js-panel-nav-next').click(function(e) {
    e.preventDefault();
    if ($(this).hasClass('disabled')) return;

    var activePanel = $('.js-panel-content.active');
    var nextPanel = activePanel.next('.js-panel-content');
    changePanel(nextPanel);
  });

  // SVG stuff

  var s = Snap("#js-features-branch-diagram-svg");

  var branchAnnotation = new Annotation(s,
                               {top: 20,  left: 88,  height: 207,
                                panelContainer: '.js-panel-content-branch'}
                             );
  var prAnnotation     = new Annotation(s,
                               {top: 137, left: 423, height: 89,
                                panelContainer: '.js-panel-content-pr'}
                             );
  var mergeAnnotation  = new Annotation(s,
                               {top: 20,  left: 840, height: 207,
                                panelContainer: '.js-panel-content-merge'}
                             );

  var annotations = [branchAnnotation, prAnnotation, mergeAnnotation];

  $.each(annotations, function(i) {
    annotations[i].target.click(function() {
      changePanel($(annotations[i].panel));
      $.each(annotations, function(j) {
        if (annotations[j] != annotations[i]) {
          annotations[j].retractLine();
        }
      });
      annotations[i].extendLine();
    });

  });

});

function changePanel(panel) {
  $('.js-panel-content.active').removeClass('active');
  $('.js-panel-content').fadeOut(200).removeClass('active');
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
}

function Annotation(paper, options) {
  this.DASH_COLOR   = "#d4d4d4";
  this.SOLID_COLOR  = "#444444";
  this.TARGET_COLOR = "#4183c4";
  this.BOTTOM       = 266;

  this.paper        = paper;
  this.top          = options.top;
  this.left         = options.left;
  this.height       = options.height;
  this.panel        = options.panelContainer;
  this.extender     = null;
  this.targetInner  = null;
  this.targetOuter  = null;

  this.initLines();
  this.initTarget();
}

Annotation.prototype.initLines = function() {
  this.extender = this.paper.line(this.left, this.top, this.left, this.top + this.height);
  this.extender.attr({
    stroke: this.DASH_COLOR,
    strokeWidth: 1,
    "stroke-dasharray": "3"
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

Annotation.prototype.extendLine = function() {
  var self = this;
  this.targetOuter.animate({r:14, cy: this.BOTTOM}, 800, mina.elastic);
  this.targetInner.animate({r:10, cy: this.BOTTOM}, 800, mina.elastic);
  this.extender.animate({y2: this.BOTTOM, stroke: this.SOLID_COLOR}, 100, mina.elastic, function() {
    self.extender.attr({
      "stroke-dasharray": "none"
    });
  });
}

Annotation.prototype.retractLine = function() {
  var self = this;
  this.targetOuter.animate({r:7, cy: this.top + this.height}, 800, mina.elastic);
  this.targetInner.animate({r:5, cy: this.top + this.height}, 800, mina.elastic);
  this.extender.animate({y2: this.top + this.height, stroke: this.DASH_COLOR}, 100, mina.elastic, function() {
    self.extender.attr({
      "stroke-dasharray": "3"
    });
  });
}