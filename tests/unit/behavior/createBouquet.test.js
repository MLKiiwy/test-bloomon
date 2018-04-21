const createBouquet = require('../../../src/behavior/createBouquet');

describe('behavior.createBouquet', () => {
  const rules = {
    A: { count: 5, countToFill: 1, types: { a: 3, d: 1 } },
    B: { count: 15, countToFill: 4, types: { a: 10, d: 1 } },
    C: { count: 30, countToFill: 17, types: { a: 6, e: 7 } },
  };

  it('should return no bouquet, if stock empty', () => {
    expect(
      createBouquet(
        {
          count: 0,
        },
        rules,
      ),
    ).toBeFalsy();
  });

  it('should return no bouquet, if stock with not enough flower for any type of bouquet', () => {
    const stock = {
      count: 3,
      types: {
        a: 3,
      },
    };
    expect(createBouquet(stock, rules)).toBeFalsy();
  });

  it('should return an A bouquet', () => {
    const stock = {
      count: 5,
      types: {
        a: 3,
        d: 2,
      },
    };
    expect(createBouquet(stock, rules)).toEqual({
      name: 'A',
      types: {
        a: 3,
        d: 2,
      },
    });
  });

  it('should return an C bouquet', () => {
    const stock = {
      count: 35,
      types: {
        a: 8,
        k: 2,
        s: 8,
        e: 7,
        i: 10,
      },
    };
    expect(createBouquet(stock, rules)).toEqual({
      name: 'C',
      types: {
        a: 8,
        k: 2,
        s: 8,
        e: 7,
        i: 5,
      },
    });
  });
});
