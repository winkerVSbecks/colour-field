
/* My Sketch
–––––––––––––––––––––––––––––––––––––––––––––––––– */
// Making the Paper scope global
paper.install(window);

// Colours
var colours = {
  pink: '#ff00ff',
  white: '#ffffff',
  blue: '#00ffff',
  yellow: '#ffff7f',
  mauve: '#7f7fff'
};

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
  var w = view.bounds.width;
  var h = view.bounds.height;

  var bgTriangle = new Path({
    segments: [[0, h], [0, 0], [w, 0]],
    fillColor: colours.pink,
    closed: true
  });

  var circle = new Path.Circle({
    center: view.center,
    radius: w * 0.125,
    fillColor: colours.yellow,
    opacity: 0.5
  });
};


/* Draw
–––––––––––––––––––––––––––––––––––––––––––––––––– */
function draw() {

};