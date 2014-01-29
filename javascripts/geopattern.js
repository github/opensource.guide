(function ($) {

    $.fn.geopattern = function(options) {
      return this.each(function() {
        var container = $(this);
        var sha       = $(this).data('title-sha');
        var s         = getSnap();

        setBGColor(s, sha, container);

        var pattern = parseInt(sha.substr(20, 1), 16);
        switch (pattern) {
          case 0:
            geoTriangles(s, sha); break;
          case 1:
            geoOverlappingCircles(s, sha); break;
          case 2:
            geoHexagons(s, sha); break;
          case 3:
            geoXes(s, sha); break;
          case 4:
            geoSineWaves(s, sha); break;
          case 5:
            break;
          case 6:
            break;
          case 7:
            break;
          case 8:
            break;
          case 9:
            geoSquares(s, sha); break;
          case 10:
            geoRings(s, sha); break;
          case 11:
            break;
          case 12:
            break;
          case 13:
            break;
          case 14:
            break;
          case 15:
            break;
        }
        renderPattern(s, container);
      });

      function getSnap() {
        var snap;
        if ($('#geopattern-tmp').length) {
          snap = Snap('#geopattern-tmp');
        }
        else {
          var svg = document.createElementNS('http://www.w3.org/2000/svg', "svg");
          svg.id = "geopattern-tmp";
          snap = Snap(svg);
        }
        return snap;

      }

      function setBGColor(s, sha, container) {
        var hueOffset       = parseInt(sha.substr(14, 3), 16);
        var satOffset       = parseInt(sha.substr(17, 1), 16) / 100;
        var bgRGB           = Snap.getRGB("#933c3c");
        var mappedHueOffset = map(hueOffset, 0, 4095, 0, 1);
        var bgHSB           = Snap.rgb2hsb(bgRGB.r, bgRGB.g, bgRGB.b);
        bgHSB.h             = 1 - mappedHueOffset;

        if (satOffset % 2) {
          bgHSB.s += satOffset;
        }
        else {
          bgHSB.s -= satOffset;
        }
        $(container).css('background-color', Snap.hsb2rgb(bgHSB.h, bgHSB.s, bgHSB.b).hex);
      }

      function geoSquares(s, sha) {
        var squareSize = parseInt(sha.substr(0, 1), 16);
        squareSize = map(squareSize, 0, 15, 10, 70);
        s.attr({
          width:  squareSize * 6 + 'px',
          height: squareSize * 6 + 'px'
        });
        var i = 0;
        for (var y = 0; y < 6; y++) {
          for (var x = 0; x < 6; x++) {
            var val = parseInt(sha.substr(i, 1), 16);
            var square = s.rect(x*squareSize, y*squareSize, squareSize, squareSize);
            square.attr({
              fill: "#000",
              opacity: map(val, 0, 15, 0, 0.2)
            });
            i++;
          };
        };
      }

      function geoRings(s, sha) {
        var scale = parseInt(sha.substr(1, 1), 16);
        var ringSize = map(scale, 0, 15, 5, 80);
        var strokeWidth = ringSize / 4;
        s.node.setAttribute('width',  (ringSize + strokeWidth) * 6);
        s.node.setAttribute('height', (ringSize + strokeWidth) * 6);
        var i = 0;
        for (var y = 0; y < 6; y++) {
          for (var x = 0; x < 6; x++) {
            var val = parseInt(sha.substr(i, 1), 16);
            var circle = s.circle(
                            x*ringSize + x*strokeWidth + (ringSize + strokeWidth)/2,
                            y*ringSize + y*strokeWidth + (ringSize + strokeWidth)/2,
                            ringSize/2);
            circle.attr({
              fill: "none",
              stroke: "#000",
              'strokeWidth': strokeWidth,
              opacity: map(val, 0, 15, 0.02, 0.16)
            });
            i++;
          };
        };
      }

      function geoHexagons(s, sha) {
        var scale      = parseInt(sha.substr(1, 1), 16);
        var sideLength = map(scale, 0, 15, 5, 120);
        var hexHeight  = sideLength * Math.sqrt(3);
        var hexWidth   = sideLength * 2;
        var hex        = createHexagon(s, sideLength).attr({stroke: "#000", opacity:0});

        s.node.setAttribute('width',  (hexWidth * 3) + (sideLength * 3));
        s.node.setAttribute('height', hexHeight * 6);

        var i = 0;
        for (var y = 0; y < 6; y++) {
          for (var x = 0; x < 6; x++) {
            var val     = parseInt(sha.substr(i, 1), 16);
            var dy      = x % 2 == 0 ? y*hexHeight : y*hexHeight + hexHeight/2;
            var opacity = map(val, 0, 15, 0.02, 0.18);
            var fill    = (val % 2 == 0) ? "#ddd" : "#222";
            tmpHex = hex.clone();
            tmpHex.attr({
              opacity: opacity,
              fill: fill,
              transform: "t"+[x*sideLength*1.5 - hexWidth/2,dy - hexHeight/2]
            });

            // Add an extra one at top-right, for tiling.
            if (x == 0) {
              tmpHex = hex.clone();
              tmpHex.attr({
                opacity: opacity,
                fill: fill,
                transform: "t"+[6*sideLength*1.5 - hexWidth/2,dy - hexHeight/2]
              });
            }

            // Add an extra row at the end that matches the first row, for tiling.
            if (y == 0) {
              var dy = x % 2 == 0 ? 6*hexHeight : 6*hexHeight + hexHeight/2;
              tmpHex = hex.clone();
              tmpHex.attr({
                opacity: opacity,
                fill: fill,
                transform: "t"+[x*sideLength*1.5 - hexWidth/2,dy - hexHeight/2]
              });
            }

            // Add an extra one at bottom-right, for tiling.
            if (x == 0 && y == 0) {
              tmpHex = hex.clone();
              tmpHex.attr({
                opacity: opacity,
                fill: fill,
                transform: "t"+[6*sideLength*1.5 - hexWidth/2,5*hexHeight + hexHeight/2]
              });
            }
            i++;
          };
        };
      }

      function geoTriangles(s, sha) {
        var scale          = parseInt(sha.substr(1, 1), 16);
        var sideLength     = map(scale, 0, 15, 5, 120);
        var triangleHeight = sideLength/2 * Math.sqrt(3);
        var triangle       = createTriangle(s, sideLength, triangleHeight).attr({stroke: "#444", opacity:0});
        var rotation       = "r180,"+sideLength/2 +","+triangleHeight/2;

        s.node.setAttribute('width',  sideLength * 3);
        s.node.setAttribute('height', triangleHeight * 6);

        var i = 0;
        for (var y = 0; y < 6; y++) {
          for (var x = 0; x < 6; x++) {
            var val  = parseInt(sha.substr(i, 1), 16);
            var fill = (val % 2 == 0) ? "#ddd" : "#222";
            var rot  = "";
            if (y % 2 == 0) {
              rot = x % 2 == 0 ? rotation : "";
            }
            else {
              rot = x % 2 != 0 ? rotation : "";
            }
            var opacity = map(val, 0, 15, 0.02, 0.15),
            tmpTri = triangle.clone();
            tmpTri.attr({
              opacity: opacity,
              fill: fill,
              transform: "t"+[x*sideLength*0.5 - sideLength/2,triangleHeight*y]+rot
            });

            // Add an extra one at top-right, for tiling.
            if (x == 0) {
              tmpTri = triangle.clone();
              tmpTri.attr({
                opacity: opacity,
                fill: fill,
                transform: "t"+[6*sideLength*0.5 - sideLength/2,triangleHeight*y]+rot
              });
            }
            i++;
          };
        };
      }

      function geoSineWaves(s, sha) {
        var period    = parseInt(sha.substr(1, 1), 16);
        period        = Math.floor(map(period, 0, 15, 100, 400));
        var amplitude = parseInt(sha.substr(2, 1), 16);
        amplitude     = Math.floor(map(amplitude, 0, 15, 30, 100));
        var waveWidth = parseInt(sha.substr(3, 1), 16);
        waveWidth     = Math.floor(map(waveWidth, 0, 15, 3, 30));

        s.node.setAttribute('width',  period);
        s.node.setAttribute('height', waveWidth * 36);

        for (var i = 0; i < 36; i++) {
          var val     = parseInt(sha.substr(i, 1), 16);
          var fill    = (val % 2 == 0) ? "#ddd" : "#222";
          var opacity = map(val, 0, 15, 0.02, 0.15);
          var xOffset = period / 4 * 0.7;
          var str = "M0 "+amplitude+
                    " C "+xOffset+" 0, "+(period/2 - xOffset)+" 0, "+(period/2)+" "+amplitude+
                    " S "+(period-xOffset)+" "+(amplitude*2)+", "+period+" "+amplitude+
                    " S "+(period*1.5-xOffset)+" 0, "+(period*1.5)+", "+amplitude;
          var line = s.path(str);
          line.attr({
                fill: "none",
                stroke: fill,
                opacity: opacity,
                'strokeWidth': waveWidth,
                transform: "t-"+period/4+","+(waveWidth*i-amplitude*1.5)
              });
          line.clone();
          line.attr({
                transform: "t-"+period/4+","+(waveWidth*i-amplitude*1.5 + waveWidth*36)
              });
        };
      }

      function geoOverlappingCircles(s, sha) {
        var scale    = parseInt(sha.substr(1, 1), 16);
        var diameter = map(scale, 0, 15, 20, 200);
        var radius   = diameter/2;

        s.node.setAttribute('width',  radius * 6);
        s.node.setAttribute('height', radius * 6);

        var i = 0;
        for (var y = 0; y < 6; y++) {
          for (var x = 0; x < 6; x++) {
            var val     = parseInt(sha.substr(i, 1), 16);
            var opacity = map(val, 0, 15, 0.02, 0.1);
            var fill    = (val % 2 == 0) ? "#ddd" : "#222";
            var circle = s.circle(x*radius, y*radius, radius);
            circle.attr({
              fill: fill,
              opacity: opacity
            });

            // Add an extra one at top-right, for tiling.
            if (x == 0) {
              var circle = s.circle(6*radius, y*radius, radius);
              circle.attr({
                fill: fill,
                opacity: opacity
              });
            }

            // // Add an extra row at the end that matches the first row, for tiling.
            if (y == 0) {
              var circle = s.circle(x*radius, 6*radius, radius);
              circle.attr({
                fill: fill,
                opacity: opacity
              });
            }

            // // Add an extra one at bottom-right, for tiling.
            if (x == 0 && y == 0) {
              var circle = s.circle(6*radius, 6*radius, radius);
              circle.attr({
                fill: fill,
                opacity: opacity
              });
            }
            i++;
          };
        };
      }

      function geoXes(s, sha) {
        var squareSize = parseInt(sha.substr(0, 1), 16);
        squareSize     = map(squareSize, 0, 15, 10, 25);
        var xShape     = createX(s, squareSize);
        var xSize      = squareSize * 3 * 0.943;

        s.node.setAttribute('width',  xSize * 3);
        s.node.setAttribute('height', xSize * 3.5);

        var i = 0;
        for (var y = 0; y < 6; y++) {
          for (var x = 0; x < 6; x++) {
            var val     = parseInt(sha.substr(i, 1), 16);
            var opacity = map(val, 0, 15, 0.02, 0.15);
            var dy      = x % 2 == 0 ? y*xSize - xSize*0.5 : y*xSize - xSize*0.5 + xSize/4;
            var fill    = (val % 2 == 0) ? "#ddd" : "#222";
            var xTmp    = xShape.clone();
            xTmp.attr({
              fill: fill,
              opacity: opacity,
              transform: "t"+[x*xSize/2 - xSize/2,dy - y*xSize/2]+
                         "r45,"+squareSize*1.5+","+squareSize*1.5
            });
            // Add an extra one at top-right, for tiling.
            if (x == 0) {
              var xTmp = xShape.clone();
              xTmp.attr({
                fill: fill,
                opacity: opacity,
                transform: "t"+[6*xSize/2 - xSize/2,dy - y*xSize/2]+
                           "r45,"+squareSize*1.5+","+squareSize*1.5
              });
            }

            // // Add an extra row at the end that matches the first row, for tiling.
            if (y == 0) {
              var dy = x % 2 == 0 ? 6*xSize - xSize/2 : 6*xSize - xSize/2 + xSize/4;
              var xTmp = xShape.clone();
              xTmp.attr({
                fill: fill,
                opacity: opacity,
                transform: "t"+[x*xSize/2 - xSize/2,dy - 6*xSize/2]+
                           "r45,"+squareSize*1.5+","+squareSize*1.5
              });
            }

            // // // Add an extra one at bottom-right, for tiling.
            if (x == 0 && y == 0) {
              var xTmp = xShape.clone();
              xTmp.attr({
                fill: fill,
                opacity: opacity,
                transform: "t"+[6*xSize/2 - xSize/2,dy - 6*xSize/2]+
                           "r45,"+squareSize*1.5+","+squareSize*1.5
              });
            }
            i++;
          };
        };
      }

      function createHexagon(s, sideLength) {
        c = sideLength;
        a = c/2;
        b = Math.sin(Snap.rad(60))*c;
        return s.polyline(0, b, a, 0, a+c, 0, 2*c, b, a+c, 2*b, a, 2*b, 0, b);
      }

      function createTriangle(s, sideLength, height) {
        var halfWidth = sideLength / 2;
        return s.polyline(halfWidth, 0, sideLength, height, 0, height, halfWidth, 0);
      }

      function createX(s, squareSize) {
        var shape = s.group(
          s.rect(squareSize, 0, squareSize, squareSize*3),
          s.rect(0, squareSize, squareSize*3, squareSize)
        );
        shape.attr({
          opacity: 0,
        });
        return shape;
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
