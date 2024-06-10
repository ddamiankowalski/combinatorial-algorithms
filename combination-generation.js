/**
 * Generates k-cominations as in algorithm from
 * https://medium.com/codex/generating-combinations-efficiently-with-asifs-algorithm-d453e803893
 * 
 * @param {*} arr 
 * @param {*} r
 * @returns 
 */
const combination = (arr, r) => {
    arr = arr && arr.slice() || [];
    var len = arr.length;
    if( !len || r > len || !r )
        return [ [] ];
    else if( r === len )
        return [ arr ];
    if( r === 1 ) return arr.reduce( ( x, v ) => {
        x.push( [ v ] );
        return x;
    }, [] );
  var head = arr.shift();
  
    return combination( arr, r - 1 ).map( x => {
        x.unshift( head );
        return x;
    } ).concat(combination( arr, r ));
}

module.exports = { combination };