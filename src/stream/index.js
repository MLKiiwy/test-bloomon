const { createInterface } = require('readline');
const warehouse = require('../controller/warehouse');

const fs = require('fs');

module.exports = (inStreamPath, outStreamPath) => {
  const lineReader = createInterface({
    input: fs.createReadStream(inStreamPath, { encoding: 'utf8' }),
  });
  lineReader.on('line', line => warehouse(line, outStreamPath));
};
