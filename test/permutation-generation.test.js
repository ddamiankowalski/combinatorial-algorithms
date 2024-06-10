const { permute } = require('../permutation-generation.js');

describe('Permutation generation', () => {
  it('generates all permutations for 3 element input', () => {
    const input = [1, 2, 3];
    const result = permute(input);

    expect(result.length).toBe(6);
    expect(result).toEqual([[1, 2, 3], [2, 1, 3], [3, 1, 2], [1, 3, 2], [2, 3, 1], [3, 2, 1]])
  })

  it('generates empty array for empty array as input', () => {
    const input = [];
    const result = permute(input);

    expect(result.length).toBe(1);
    expect(result).toEqual([[]])
  })
})