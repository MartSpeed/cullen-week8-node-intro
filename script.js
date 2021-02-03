// keep all required statements at the top of your file
let gamesIndex = require('./cullenites');
console.log('cullenites: ', gamesIndex);

gamesIndex.addToList('THIS IS THE ONE');
//gamesIndex is what the variable is set to, to grab the js file names cullenites
// NOTES: keep naming structure identical and not name things the same name

//gamesIndex.gamesIndex is the files being called and using the functions from implemented inside the object
console.log('gamiesindex', gamesIndex.gamesIndex);

let favoriteNumber = require('./favoriteNumber');
console.log('this is my favorite number: ', favoriteNumber);

let scream = require('./scream');
console.log('Hello', scream('world!'));

let counter = require('./counter');
console.log('this is the counter', counter());
console.log('this is the counter', counter());
console.log('this is the counter', counter());
console.log('this is the counter', counter());
console.log('this is the counter', counter());

let age = 33;
if (age > 23) {
  console.log('you are still young in this world big homie');
}

function birthday() {
  age++;
  return age;
}
console.log('this is your birthday foo', birthday());

console.log('Hello from the script.js');

// use the node command then space with the script output in the terminal

console.log('Yay for node');

// test that array can be output
//console.log(`Games: ${gamesIndex}`);

// pull the data from this file into the script.js
//console.log(gamesIndex);
