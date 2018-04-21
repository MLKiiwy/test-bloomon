const { buildFromString } = require('../../../src/model/rule');

describe('model.rule', () => {
  describe('buildFromString', () => {
    it('should ', () => {
      expect(buildFromString('DL15f8d6g45')).toEqual({
        count: 45,
        name: 'D',
        size: 'L',
        types: {
          f: 15,
          d: 8,
          g: 6,
        },
        countToFill: 16,
      });
    });
  });
});
