const { reduce } = require('lodash');

const buildFromString = str => {
  const name = str.substr(0, 1);
  const size = str.substr(1, 1);
  const rest = str.substr(2);
  const regexFlower = /(\d+[a-z]{1})/g;

  var flower;
  var lastIndex;
  const types = {};
  while ((flower = regexFlower.exec(rest)) !== null) {
    const flowerType = flower[0].substr(flower[0].length - 1);
    types[flowerType] = parseInt(flower[0].substr(0, flower[0].length - 1), 10);
    lastIndex = regexFlower.lastIndex;
  }

  const count = parseInt(rest.substr(lastIndex), 0);

  // Determinate the rest to fill
  const totalSpecificFlower = reduce(types, (result, value) => result + value, 0);
  const countToFill = count - totalSpecificFlower;

  return {
    name,
    size,
    types,
    count,
    countToFill,
  };
};

module.exports = {
  buildFromString,
};
