/**
 * Permutation generator based on the algorithm from
 * https://www.baeldung.com/cs/array-generate-all-permutations
 * 
 * @param {*} input 
 * @returns 
 */
const permute = (input) => {
    let result = [];
    let c = new Array(input.length).fill(0);
    result.push(input.slice());

    let i = 1;
    while (i < input.length) {
        if (c[i] < i) {
            let k = i % 2 === 0 ? 0 : c[i];
            [input[i], input[k]] = [input[k], input[i]];
            result.push(input.slice());
            c[i]++;
            i = 1;
        } else {
            c[i] = 0;
            i++;
        }
    }

    return result;
}

module.exports = { permute };