var paper = require('../../bower_components/paper/dist/paper-full.min.js');
var R = require('ramda');

/* Triangle
–––––––––––––––––––––––––––––––––––––––––––––––––– */
var SQRT_3 = Math.pow(3, 0.5);

// Generate Co-ords for an Equilateral triangle
var getEquilateralCoords = function(_a) {
  var a = R.clone(_a);
  return [new paper.Point(0, -a / SQRT_3),
          new paper.Point(-a/2, a * 0.5 / SQRT_3),
          new paper.Point(a/2, a * 0.5 / SQRT_3)];
};

// Generate Co-ords such that the triangle fits a sqaure
var getTriangleCoords = function(_a) {
  var a = R.clone(_a);
  return [new paper.Point(0, -a * 0.5),
          new paper.Point(-a * 0.5, a * 0.5),
          new paper.Point(a * 0.5, a * 0.5)];
};

module.exports.build = function(size, type) {
  var segments = type === 'equilateral' ?
                  getEquilateralCoords :
                  getTriangleCoords(size);

  return {
    segments: segments
  };
};

