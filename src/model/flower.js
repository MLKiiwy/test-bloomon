const buildFromString = str => {
  const type = str.substr(0, 1);
  const size = str.substr(1, 1);

  return { type, size };
};

const add = (type, stock) => {
  if (stock.types[type]) {
    stock.types[type]++;
  } else {
    stock.types[type] = 1;
  }
  stock.count++;
};

const remove = (type, count, stock) => {
  if (!stock.types[type] || stock.types[type] < count) {
    throw new Error(`cannot remove ${count} ${type} from stock ${stock.size}`);
  }

  stock.types[type] -= count;
  stock.count -= count;

  if (stock.types[type] === 0) {
    delete stock.types[type];
  }
};

module.exports = {
  buildFromString,
  add,
  remove,
};
