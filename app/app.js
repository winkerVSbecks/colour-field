var paper = require('../bower_components/paper/dist/paper-full.min.js');
var shapes = require('./shapes/generator');
var colours = require('./colours');
var modifier = require('./modifier')
var R = require('ramda');


var state = {};
var w, h, basis;

// Setup
window.onload = function() {
  paper.setup('js-oam-site');

  var tool = new paper.Tool();
  tool.onMouseDown = modifier.onMouseDown;
  tool.onMouseMove = modifier.onMouseMove;
  tool.onMouseDrag = modifier.onMouseDrag;
  tool.onDblClick = modifier.onDblClick;

  setup();
  paper.view.draw();

  // Draw Loop
  paper.view.onFrame = function(event) {
    draw()
  };
};


// Re-size
window.onresize = function() {
  paper.project.clear();
  setup();
};



/* Setup
–––––––––––––––––––––––––––––––––––––––––––––––––– */
function setup() {
  // Canvas size
  w = paper.view.bounds.width;
  h = paper.view.bounds.height;
  basis = w * 0.125;

  shapes.rectangle({
    size: basis,
    fillColor: colours.list.orange,
    opacity: 0.75
  });

  shapes.circle({
    radius: basis / 2,
    fillColor: colours.list.blue,
    opacity: 0.5
  });

  shapes.triangle({
    size: basis,
    fillColor: colours.list.yellow,
    opacity: 0.5
  });

  shapes.blob({
    maxRadius: basis,
    minRadius: basis * 0.75,
    fillColor: colours.random(),
    opacity: 0.5
  });
};


/* Draw
–––––––––––––––––––––––––––––––––––––––––––––––––– */
function draw() {

};

