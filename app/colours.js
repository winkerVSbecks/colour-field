var R = require('ramda');

/* Colours
–––––––––––––––––––––––––––––––––––––––––––––––––– */
var colour = {};

colour.list = {
  blue: '#a1c6e7',
  yellow: '#ffedbf', //'#ffff7f',
  orange: '#f8cca0',
  green: '#c2ce89',
  white: '#ffffff',
  pink: '#ff00ff',
  mauve: '#7f7fff',
};

var pickRamdomColour = R.compose(function(array) {
  return array[Math.floor(Math.random() * array.length)];
}, R.values);

colour.random = function() {
  return pickRamdomColour(colour.list);
};

module.exports = colour;
