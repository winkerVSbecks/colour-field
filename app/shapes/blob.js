var R = require('ramda');

/* Blob
–––––––––––––––––––––––––––––––––––––––––––––––––– */
var values = {
  minPoints: 5,
  maxPoints: 15
};

var createBlob = function(center, maxRadius, points, options) {
  var path = new Path(options);
      path.closed = true;
console.log(center)
  for (var i = 0; i < points; i++) {
    var delta = new Point({
      length: (maxRadius * 0.5) + (Math.random() * maxRadius * 0.5),
      angle: (360 / points) * i
    });
    path.add(center.add(delta));
  }
  path.smooth();

  return path;
};

module.exports.build = function(options) {
  var radiusDelta = options.maxRadius - options.minRadius;
  var pointsDelta = values.maxPoints - values.minPoints;

  var radius = options.minRadius + Math.random() * radiusDelta;
  var points = values.minPoints + Math.floor(Math.random() * pointsDelta);
  var path = createBlob(view.size.multiply(Point.random()), radius, points, options);

  return path;
};
