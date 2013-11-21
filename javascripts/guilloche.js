var guilloche = function(canvas, string){

  var majorROffset        = parseInt(string.substr(7, 2), 16) / 10,
      minorROffset        = parseInt(string.substr(9, 1), 16) / 10,
      angleOffset         = parseInt(string.substr(10, 1), 16) / 10,
      radiusEffectOffset  = parseInt(string.substr(11, 1), 16) / 1.5,
      stepsOffset         = parseInt(string.substr(12, 2), 16);

  var ctx                  = canvas.getContext('2d'),
      size                 = {x: canvas.offsetWidth, y: canvas.offsetHeight},
      halfSize             = {x: size.x / 2, y: size.y / 2},
      majorR               = 379.5 - majorROffset,
      minorR               = 50 - minorROffset,
      angleMultiplier      = 50 - angleOffset,
      radiusEffectConstant = 250 - radiusEffectOffset,
      steps                = 1250 - stepsOffset,
      centerPoint          = { x: 150, y: 42 },
      color                = 'rgba(255,255,255, 0.06)',
      globalAlpha          = 1.0;

  ctx.globalAlpha = globalAlpha;
  ctx.clearRect(0, 0, size.x, size.y);
  // console.log("#" + string.substring(4, 10));
  // ctx.fillStyle = "#" + string.substring(4, 10);
  // ctx.fillRect(0, 0, size.x, size.y);

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

// def map(value, v_min, v_max, d_min, d_max) # v for value, d for desired
//   v_value = value.to_f # so it returns float

//   v_range = v_max - v_min
//   d_range = d_max - d_min
//   d_value = (v_value - v_min) * d_range / v_range + d_min
// end