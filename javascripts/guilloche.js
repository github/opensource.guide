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
      majorR               = 379.6 - majorROffset,
      minorR               = 50 - minorROffset,
      angleMultiplier      = 50 - angleOffset,
      radiusEffectConstant = 250 - radiusEffectOffset,
      steps                = 1250 - stepsOffset,
      centerPoint          = listingCenter,
      color                = 'rgba(255,255,255, 0.13)',
      globalAlpha          = 1.0,
      baseBGColor          = Color("#933c3c");

  mappedHueOffset = map(hueOffset, 0, 4095, 0, 359);
  baseBGColor.hue(360 - mappedHueOffset);
  if (satOffset % 2) {
    baseBGColor.saturate(satOffset / 10);
  }
  else {
    baseBGColor.desaturate(satOffset / 10);
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

    if (oldX) {
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

var guilloche = function(canvas, opts){

  var opts = opts || {};

  var listingCenter        = opts.center || { x: 220, y: 65 },

      majorROffset         = parseInt(opts.string.substr(7, 2), 16) / 10,
      minorROffset         = parseInt(opts.string.substr(9, 1), 16) / 10,
      angleOffset          = parseInt(opts.string.substr(10, 1), 16) / 10,
      radiusEffectOffset   = parseInt(opts.string.substr(11, 1), 16) / 1.5,
      stepsOffset          = parseInt(opts.string.substr(12, 2), 16),
      hueOffset            = parseInt(opts.string.substr(14, 3), 16),
      satOffset            = parseInt(opts.string.substr(17, 1), 16),

      ctx                  = canvas.getContext('2d'),
      size                 = {x: canvas.offsetWidth, y: canvas.offsetHeight},
      halfSize             = {x: size.x / 2, y: size.y / 2},
      majorR               = 379.6 - majorROffset,
      minorR               = 50 - minorROffset,
      angleMultiplier      = 50 - angleOffset,
      radiusEffectConstant = 250 - radiusEffectOffset,
      steps                = 1250 - stepsOffset,
      centerPoint          = listingCenter,
      color                = 'rgba(255,255,255, 0.06)',
      globalAlpha          = 1.0,
      baseBGColor          = Color("#933c3c");

  mappedHueOffset = map(hueOffset, 0, 4095, 0, 359);
  baseBGColor.hue(360 - mappedHueOffset);
  if (satOffset % 2) {
    baseBGColor.saturate(satOffset / 10);
  }
  else {
    baseBGColor.desaturate(satOffset / 10);
  }

  ctx.globalAlpha = globalAlpha;
  ctx.clearRect(0, 0, size.x, size.y);
  ctx.fillStyle = baseBGColor.rgbString();
  ctx.fillRect(0, 0, size.x, size.y);

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

    if (oldX) {
      ctx.strokeStyle = color;
      ctx.beginPath();
      ctx.moveTo(oldX, oldY);
      ctx.lineTo(x, y);
      ctx.closePath();
      ctx.stroke();
    }

    oldX = x;
    oldY = y;
  }

};

function map(value, v_min, v_max, d_min, d_max) {
  v_value = parseFloat(value);
  v_range = v_max - v_min;
  d_range = d_max - d_min;
  return (v_value - v_min) * d_range / v_range + d_min;
}
