// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // 1. solution
  // let res = '';
  // for (const x of str) {
  //   res = x + res;
  // }  
  // return res;

  // 2. solution
  return [...str].reverse().join('');

  // 3. solution
  // return [...str].reduce((res, char) => char + res, '');
}

module.exports = reverse;
