(function ($) {

    $.fn.geopattern = function(options) {
      return this.each(function() {
        var container = $(this);
        var sha       = $(this).data('title-sha');
        var s         = Snap();

        setBGColor(s, sha, container);
        geoSquares(s, sha);
        renderPattern(s, container);
      });

      function setBGColor(s, sha, container) {
        var hueOffset       = parseInt(sha.substr(14, 3), 16);
        var satOffset       = parseInt(sha.substr(17, 1), 16) / 100;
        var bgRGB           = Snap.getRGB("#933c3c");
        var mappedHueOffset = map(hueOffset, 0, 4095, 0, 1);
        var bgHSL           = Snap.rgb2hsb(bgRGB.r, bgRGB.g, bgRGB.b);
        bgHSL.h             = 1 - mappedHueOffset;

        if (satOffset % 2) {
          bgHSL.s += satOffset;
        }
        else {
          bgHSL.s -= satOffset;
        }
        $(container).css('background-color', Snap.hsb2rgb(bgHSL.h, bgHSL.s, bgHSL.b).hex);
      }

      function geoSquares(s, sha) {
        var squareSize = parseInt(sha.substr(0, 1), 16);
        squareSize = Math.floor(map(squareSize, 0, 16, 10, 80));
        s.attr({
          width:  squareSize * 6 + 'px',
          height: squareSize * 6 + 'px'
        });
        var i = 0;
        for (var x = 0; x < 6; x++) {
          for (var y = 0; y < 6; y++) {
            var val = parseInt(sha.substr(i, 1), 16);
            var square = s.rect(x*squareSize, y*squareSize, squareSize, squareSize);
            square.attr({
              fill: "#000",
              opacity: map(val, 0, 16, 0, 0.3)
            });
            i++;
          };
        };
      }

      function renderPattern(s, container) {
        var b64 = 'data:image/svg+xml;base64,'+window.btoa(s.toString());
        var url = 'url("' + b64 + '")';
        $(container).css('background-image', url);
      }

      function map(value, v_min, v_max, d_min, d_max) {
        v_value = parseFloat(value);
        v_range = v_max - v_min;
        d_range = d_max - d_min;
        return (v_value - v_min) * d_range / v_range + d_min;
      }

    };


}(jQuery));
