const { reduce, sortBy, map } = require('lodash');

const bouquetToString = bouquet =>
  reduce(
    sortBy(map(bouquet.types, (count, type) => ({ count, type })), ({ type }) => type),
    (str, { count, type }) => (str += `${count}${type}`),
    `${bouquet.name}${bouquet.size}`,
  );

module.exports = {
  bouquetToString,
};
