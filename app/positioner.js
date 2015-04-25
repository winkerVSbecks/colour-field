var utils = require('./utils');

/* Positioner
–––––––––––––––––––––––––––––––––––––––––––––––––– */
module.exports.around = function(center, min, max) {
  return center.add([utils.randomNumber(min, max),
                     utils.randomNumber(min, max)]);
};
