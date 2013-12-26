(function ($) {

    $.fn.geopattern = function(options) {
      return this.each(function() {
        var sha = $(this).data('title-sha');
        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "100");
        svg.setAttribute("height", "100");
        var s = Snap(svg);
        var bigCircle = s.circle(50, 50, 50);

        var b64 = 'data:image/svg+xml;base64,'+window.btoa(s.toString());
        var url = 'url("' + b64 + '")';

        var hueOffset = parseInt(sha.substr(14, 3), 16);
        var satOffset = parseInt(sha.substr(17, 1), 16);
        var baseBGColor = Snap.getRGB("#933c3c");

        var mappedHueOffset = map(hueOffset, 0, 4095, 0, 1);
        var baseBGColorHSL = Snap.rgb2hsb(baseBGColor.r, baseBGColor.g, baseBGColor.b);
        baseBGColorHSL.h = 1 - mappedHueOffset;

        if (satOffset % 2) {
          baseBGColorHSL.s += satOffset / 100;
        }
        else {
          baseBGColorHSL.s -= satOffset / 100;
        }
        $(this).css('background-color', Snap.hsb2rgb(baseBGColorHSL.h, baseBGColorHSL.s, baseBGColorHSL.b).hex);
        $(this).css('background-image', url);
      });
    };

    function map(value, v_min, v_max, d_min, d_max) {
      v_value = parseFloat(value);
      v_range = v_max - v_min;
      d_range = d_max - d_min;
      return (v_value - v_min) * d_range / v_range + d_min;
    }

}(jQuery));
