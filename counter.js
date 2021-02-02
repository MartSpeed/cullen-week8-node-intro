// this variable is private inside of this script only
let count = 0;

// you can export and entire working function into the js file to be called
// and set to a variable in the main file and used with the require method
module.exports = function () {
  count++;
  return count;
};
