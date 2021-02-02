// node code array output test
let gamesIndex = [
  'Ghost of Tsushima ',
  ' SpiderMan',
  ' Star Wars Fallen Order',
  ' Wolcen Blood Trail',
  ' Apex Legends',
  ' Divinity Original Sins II',
  ' Final Fantasy VII Remake',
  ' Death Stranding',
];

function addToList(name) {
  gamesIndex.push(name);
}

// I want to share this data
//module.exports = gamesIndex;

// call everything inside the module.exports like the jQuery bling document
module.exports = {
  gamesIndex: gamesIndex,
  tabletop: 'Gloomhaven',
  addToList: addToList,
};
