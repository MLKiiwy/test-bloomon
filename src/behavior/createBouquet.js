const { keys, difference } = require('lodash');

module.exports = (stock, rules) => {
  for (name in rules) {
    const rule = rules[name];
    if (rule.count > stock.count) {
      // Not enough flower for this bouquet
      continue;
    }

    const requiredTypes = keys(rule.types);
    const availableTypes = keys(stock.types);
    if (difference(requiredTypes, availableTypes).length !== 0) {
      // Not all type of flower available in the warehouse fot this bouquet
      continue;
    }

    const newBouquet = {};
    for (type in rule.types) {
      if (stock.types[type] < rule.types[type]) {
        // Not enough type of this flower for this bouquet
        continue;
      }
      newBouquet[type] = rule.types[type];
    }

    if (keys(newBouquet).length !== requiredTypes.length) {
      continue;
    }

    // Great all required flower are used, we need to take some flowers to fill the rest
    var toFill = rule.countToFill;
    var j = 0;
    while (toFill > 0 && j < availableTypes.length) {
      const type = availableTypes[j];
      var countRest = stock.types[type] - (newBouquet[type] || 0);
      if (countRest > 0) {
        if (countRest <= toFill) {
          toFill -= countRest;
        } else {
          countRest = toFill;
          toFill = 0;
        }
        if (!newBouquet[type]) {
          newBouquet[type] = countRest;
        } else {
          newBouquet[type] += countRest;
        }
      }
      j++;
    }

    return {
      name,
      types: newBouquet,
    };
  }

  return false;
};
