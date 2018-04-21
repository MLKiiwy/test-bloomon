const { buildFromString: buildRuleFromString } = require('../model/rule');
const { buildFromString: buildFlowerFromString, add, remove } = require('../model/flower');
const { bouquetToString } = require('../model/bouquet');
const createBouquet = require('../behavior/createBouquet');
const { each } = require('lodash');

// simulate data layer
const warehouse = {
  inputRule: true,
  rules: {
    L: {},
    S: {},
  },
  stocks: {
    L: {
      count: 0,
      types: {},
    },
    S: {
      count: 0,
      types: {},
    },
  },
};

module.exports = (line, output) => {
  // Check if its rule or flower and add it to the warehouse stock / rules
  if (warehouse.inputRule && line && line.length > 2) {
    const rule = buildRuleFromString(line);
    if (rule.size === 'L') {
      warehouse.rules.L[rule.name] = rule;
    } else {
      warehouse.rules.S[rule.name] = rule;
    }
  } else if (!line || line.length === 0) {
    warehouse.inputRule = false;
  } else {
    const flower = buildFlowerFromString(line);
    add(flower.type, flower.size === 'L' ? warehouse.stocks.L : warehouse.stocks.S);

    var bouquet;
    if (flower.size === 'L') {
      bouquet = createBouquet(warehouse.stocks.L, warehouse.rules.L);
      bouquet.size = 'L';
    } else {
      bouquet = createBouquet(warehouse.stocks.S, warehouse.rules.S);
      bouquet.size = 'S';
    }

    if (bouquet) {
      // Apply change to stock
      each(bouquet.types, (count, type) => {
        remove(type, count, warehouse.stocks[flower.size]);
      });

      // Write bouquet on output stream
      output.write(bouquetToString(bouquet) + '\n');
    }
  }
};
