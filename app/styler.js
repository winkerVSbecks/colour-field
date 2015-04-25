var R = require('ramda');

/* Styler
–––––––––––––––––––––––––––––––––––––––––––––––––– */
/* Colours */
var colours = {};

// Default BG colour
colours.bg = '#ffffff';

// Default colour space
colours.list = {
  blue: '#a1c6e7',
  paleYellow: '#ffedbf',
  orange: '#f8cca0',
  green: '#c2ce89',
  pink: '#ff00ff',
  mauve: '#7f7fff',
  yellow: '#ffff7f'
};

colours.init = function(list, bg) {
  colours.list = list;
  colours.bg = bg;
};

var pickRamdomColour = R.compose(function(array) {
  return array[Math.floor(Math.random() * array.length)];
}, R.values);

colours.random = function() {
  return pickRamdomColour(colours.list);
};


/* Gradient */
var gradient = {};

gradient.build = function(stops, size, positions) {
  return {
    gradient: {
      stops: stops,
    },
    origin: positions ? positions[0] : [0, -size],
    destination: positions ? positions[1] : [0, size]
  };
};

gradient.random = function(size, positions) {
  return gradient.build([colours.random(), colours.random()],
                         size,
                         positions);
};


module.exports = {
  colours: colours,
  gradient: gradient
};
