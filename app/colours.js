var R = require('ramda');

/* Colours
–––––––––––––––––––––––––––––––––––––––––––––––––– */
var colour = {};

colour.list = {
  blue: '#a1c6e7',
  paleYellow: '#ffedbf',
  orange: '#f8cca0',
  green: '#c2ce89',
  white: '#ffffff',
  pink: '#ff00ff',
  mauve: '#7f7fff',
  yellow: '#ffff7f'
};

var pickRamdomColour = R.compose(function(array) {
  return array[Math.floor(Math.random() * array.length)];
}, R.values);

colour.random = function() {
  return pickRamdomColour(colour.list);
};

module.exports = colour;
