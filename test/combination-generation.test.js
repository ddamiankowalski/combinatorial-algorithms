const { combination } = require('../combination-generation.js');

describe('Combination generation', () => {
  it('generates all combinations for 3 element input', () => {
    const input = [1, 2, 3, 4];
    const result = combination(input, 3);

    expect(result).toEqual([[ 1, 2, 3 ], [ 1, 2, 4 ], [ 1, 3, 4 ], [ 2, 3, 4 ]])
  })

  it('generates empty array for empty array as input', () => {
    const input = [];
    const result = combination(input);

    expect(result.length).toBe(1);
    expect(result).toEqual([[]])
  })
})