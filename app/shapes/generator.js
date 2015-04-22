var triangle = require('./triangle');
var R = require('ramda');
var colours = require('../colours');

/* Shape Generator
–––––––––––––––––––––––––––––––––––––––––––––––––– */
var randomNumber = function(minimum, maximum) {
  return Math.round(Math.random() * (maximum - minimum) + minimum);
};

var types = ['triangle', 'rectangle', 'circle'];
var defaults = {
  triangle: {
    size: randomNumber(10, 15),
    opacity: 0.5
  },
  circle: {
    radius: randomNumber(10, 15),
    opacity: 0.5
  },
  rectangle: {
    size: randomNumber(10, 15),
    opacity: 0.75
  }
};

var generator = {};

generator.triangle = function(options) {
  var getTriangleProps = R.merge(triangle.build(options.size, options.type));

  var triangleDef = getTriangleProps(options);

  var p = new Path(triangleDef);
      p.position = view.center;
  return p;
};

generator.rectangle = function(options) {
  var p = new Path.Rectangle(options)
      p.position = view.center;
  return p;
};

generator.circle = function(options) {
  var p = new Path.Circle(options)
      p.position = view.center;
  return p;
};

generator.random = function() {
  var type = types[Math.floor(Math.random() * types.length)];
  var def = defaults[type];
  def.fillColor = colours.random();
  return generator[type](def);
};


module.exports = generator;
