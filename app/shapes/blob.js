var Point = require('../../bower_components/paper/dist/paper-full.js').Point;


/* Blob
–––––––––––––––––––––––––––––––––––––––––––––––––– */
var values = {
  minPoints: 5,
  maxPoints: 15
};

var createBlob = function(path, maxRadius, points) {
  for (var i = 0; i < points; i++) {
    var delta = new Point({
      length: (maxRadius * 0.5) + (Math.random() * maxRadius * 0.5),
      angle: (360 / points) * i
    });

    path.add(delta);
  }

  path.smooth();

  return path;
};

module.exports.build = function(rawPath, options) {
  var radiusDelta = options.maxRadius - options.minRadius;
  var pointsDelta = values.maxPoints - values.minPoints;

  var radius = options.minRadius + Math.random() * radiusDelta;
  var points = values.minPoints + Math.floor(Math.random() * pointsDelta);
  var path = createBlob(rawPath, radius, points);

  return path;
};
