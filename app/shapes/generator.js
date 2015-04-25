var Path = require('../../bower_components/paper/dist/paper-full.js').Path;
var R = require('ramda');
var triangle = require('./triangle');
var blob = require('./blob');
var utils = require('../utils');

/* Shape Generator
–––––––––––––––––––––––––––––––––––––––––––––––––– */
var types = ['triangle', 'rectangle', 'circle', 'blob'];
var defaults = function() {
  return {
    triangle: {
      size: 10 * utils.randomNumber(10, 15)
    },
    circle: {
      radius: 10 * utils.randomNumber(10, 15)
    },
    rectangle: {
      size: 10 * utils.randomNumber(10, 15)
    },
    blob: {
      maxRadius: 10 * utils.randomNumber(10, 15),
      minRadius: 10 * utils.randomNumber(5, 10)
    }
  };
};

var generator = {};

generator.triangle = function(options) {
  var getTriangleProps = R.merge(triangle.build(options.size, options.type));

  var triangleDef = getTriangleProps(options);
      triangleDef.closed = true;

  return new Path(triangleDef);
};

generator.rectangle = function(options) {
  return new Path.Rectangle(options);
};

generator.circle = function(options) {
  return new Path.Circle(options);
};

generator.blob = function(options) {
  var p = new Path();
      p.closed = true;
  return blob.build(p, options);
};

generator.random = function(fillColor) {
  var type = types[Math.floor(Math.random() * types.length)];
  var def = defaults()[type];

  return generator[type](def);
};


module.exports = generator;
