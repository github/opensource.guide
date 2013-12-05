var guillocheSVG = function(canvas, opts){

  var opts = opts || {};

  var listingCenter        = opts.center || { x: 220, y: 65 },

      majorROffset         = parseInt(opts.string.substr(7, 2), 16) / 10,
      minorROffset         = parseInt(opts.string.substr(9, 1), 16) / 10,
      angleOffset          = parseInt(opts.string.substr(10, 1), 16) / 10,
      radiusEffectOffset   = parseInt(opts.string.substr(11, 1), 16) / 1.5,
      stepsOffset          = parseInt(opts.string.substr(12, 2), 16),
      hueOffset            = parseInt(opts.string.substr(14, 3), 16),
      satOffset            = parseInt(opts.string.substr(17, 1), 16),

      size                 = {x: canvas.getAttribute('width'),
                              y: canvas.getAttribute('height')},
      halfSize             = {x: size.x / 2, y: size.y / 2},
      majorR               = 379.6 + (majorROffset % 2 ? majorROffset : -majorROffset),
      minorR               = 50 + (minorROffset % 2 ? minorROffset : -minorROffset),
      angleMultiplier      = 50 + (angleOffset % 2 ? angleOffset : -angleOffset),
      radiusEffectConstant = 250 + (radiusEffectConstant % 2 ? radiusEffectOffset : -radiusEffectOffset),
      steps                = 1250 + (stepsOffset % 2 ? stepsOffset : -stepsOffset),
      centerPoint          = listingCenter,
      color                = 'rgba(255,255,255, 0.13)',
      globalAlpha          = 1.0,
      baseBGColor          = Color("#933c3c");

  mappedHueOffset = map(hueOffset, 0, 4095, 0, 359);

  baseBGColor.hue(360 - mappedHueOffset);

  if (satOffset % 2) {
    baseBGColor.saturate(satOffset / 50);
  }
  else {
    baseBGColor.desaturate(satOffset / 50);
  }

  // Background fill
  var rect = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
      rect.setAttributeNS(null, 'x', 0);
      rect.setAttributeNS(null, 'y', 0);
      rect.setAttributeNS(null, 'width', size.x);
      rect.setAttributeNS(null, 'height', size.y);
      rect.setAttributeNS(null, 'fill', baseBGColor.rgbString());
      canvas.appendChild(rect);

  var diff = majorR - minorR,
      s = diff / minorR,
      theta = 0,
      radiusEffect = radiusEffectConstant + minorR,
      oldX, oldY;

  for (var i = steps; i--;) {
    var new_theta = angleMultiplier * theta,
        x = diff * Math.sin(new_theta) + radiusEffect * Math.sin(new_theta * s) + (centerPoint.x),
        y = diff * Math.cos(new_theta) - radiusEffect * Math.cos(new_theta * s) + (centerPoint.y);

    theta += Math.PI * 4 / steps;

    if (visiblePath(oldX, oldY, x, y, size.x, size.y)) {
      var pathData = "M"+oldX+","+oldY+" "+"L"+x+","+y;
      var path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
          path.setAttributeNS(null, 'd', pathData);
          path.setAttributeNS(null, 'stroke', color);
          path.setAttributeNS(null, 'stroke-width', "1");
          canvas.appendChild(path);
    }

    oldX = x;
    oldY = y;
  }
};

function visiblePath(pathOldX, pathOldY, pathNewX, pathNewY, visibleW, visibleH) {
    if (!(pathOldX && pathOldY && pathNewX && pathNewY)) return false;

    var minX = pathOldX;
    var maxX = pathNewX;

    if (pathOldX > pathNewX) {
        minX = pathNewX;
        maxX = pathOldX;
    }

    if (maxX > visibleW) maxX = visibleW;
    if (minX < 0) minX = 0;
    if (minX > maxX) return false;

    var minY = pathOldY;
    var maxY = pathNewY;

    var dx = pathNewX - pathOldX;

    if (Math.abs(dx) > 0.0000001) {
      var a = (pathNewY - pathOldY) / dx;
      var b = pathOldY - a * pathOldX;
      minY = a * minX + b;
      maxY = a * maxX + b;
    }

    if (minY > maxY) {
      var tmp = maxY;
      maxY = minY;
      minY = tmp;
    }

    if (maxY > visibleH) maxY = visibleH;
    if (minY < 0) minY = 0;
    if (minY > maxY) return false;

    return true;
}

function map(value, v_min, v_max, d_min, d_max) {
  v_value = parseFloat(value);
  v_range = v_max - v_min;
  d_range = d_max - d_min;
  return (v_value - v_min) * d_range / v_range + d_min;
}
