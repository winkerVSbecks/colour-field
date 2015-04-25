
/* Utils
–––––––––––––––––––––––––––––––––––––––––––––––––– */
module.exports.randomNumber = function(minimum, maximum) {
  return Math.round(Math.random() * (maximum - minimum) + minimum);
};
