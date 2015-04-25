var P = require('../bower_components/paper/dist/paper-full.js');
var shapes = require('./shapes/generator');
var styler = require('./styler');
var positioner = require('./positioner');
var modifier = require('./modifier');
var R = require('ramda');


var state = {};
var w, h, basis;

// Setup
window.onload = function() {
  P.setup('js-colour-field');

  // Setup event listeners
  var tool = new P.Tool();
  tool.onMouseDown = modifier.onMouseDown;
  tool.onMouseMove = modifier.onMouseMove;
  tool.onMouseDrag = modifier.onMouseDrag;
  tool.onDblClick = modifier.onDblClick;

  // Init the colour space
  styler.colours.init({
    red: '#ED351B',
    blue: '#106BCC',
    yellow: '#F0D74A',
    green: '#107E49'
  },'#ffffff');

  // Setup
  setup();
  P.view.draw();

  // Draw Loop
  P.view.onFrame = function(event) {
    draw();
  };
};


// Re-size
window.onresize = function() {
  P.project.clear();
  setup();
};



/* Setup
–––––––––––––––––––––––––––––––––––––––––––––––––– */
function setup() {
  // Canvas size
  w = P.view.bounds.width;
  h = P.view.bounds.height;
  basis = w * 0.25;

  for (var i = 0; i < 12; i++) {
    var s = shapes.random({});
        s.fillColor = styler.gradient.random(basis*0.5);
        s.position = positioner.around(P.view.center, -200, 200);
  };
};


/* Draw
–––––––––––––––––––––––––––––––––––––––––––––––––– */
function draw() {

};


/* Events
–––––––––––––––––––––––––––––––––––––––––––––––––– */
window.onkeydown = function(event) {
  if (event.keyCode === 32) {
    event.preventDefault();
    P.project.clear();
    setup();
  } else if (event.keyCode === 83) {
    console.log(P)
    event.preventDefault();
    showSVG(P.project.exportSVG())
    console.log();
  }
};


var showSVG =function(svg) {
  var serializer = new XMLSerializer();
  var svgBlob = new Blob([serializer.serializeToString(svg)],
                          {'type': "image/svg+xml"});
  var url = URL.createObjectURL(svgBlob);

  var svgWin = window.open(url, "svg_win");
};
