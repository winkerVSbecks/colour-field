var shapes = require('./shapes/generator');
var colours = require('./colours');
var R = require('ramda');


// Making the Paper scope global
  paper.install(window);

  var state = {};
  var w, h, basis;

  // Setup
  window.onload = function() {
    paper.setup('js-oam-site');

    setup();
    paper.view.draw();

    // Draw Loop
    paper.view.onFrame = function(event) {
      draw()
    };
  };


  // Re-size
  window.onresize = function() {
    project.clear();
    setup();
  };



  /* Setup
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
  function setup() {
    // Canvas size
    w = view.bounds.width;
    h = view.bounds.height;
    basis = w * 0.125;

    shapes.circle({
      radius: basis,
      fillColor: colours.list.blue,
      opacity: 0.75
    });

    shapes.rectangle({
      size: basis,
      fillColor: colours.list.orange,
      opacity: 0.75
    });

    shapes.triangle({
      size: basis,
      fillColor: colours.list.yellow,
      opacity: 0.75
    });
  };


  /* Draw
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
  function draw() {

  };