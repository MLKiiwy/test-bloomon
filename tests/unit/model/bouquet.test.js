const { bouquetToString } = require('../../../src/model/bouquet');

describe('model.bouquet', () => {
  describe('bouquetToString', () => {
    it('should return the correct bouquet string', () => {
      const bouquet = {
        name: 'D',
        size: 'S',
        types: {
          d: 8,
          e: 18,
          f: 9,
        },
      };
      expect(bouquetToString(bouquet)).toEqual('DS8d18e9f');
    });

    it('should return the correct bouquet string in the good order', () => {
      const bouquet = {
        name: 'D',
        size: 'S',
        types: {
          f: 9,
          e: 18,
          d: 8,
        },
      };
      expect(bouquetToString(bouquet)).toEqual('DS8d18e9f');
    });
  });
});
