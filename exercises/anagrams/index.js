// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const stringAMap = createCharMap(stringA);
  const stringBMap = createCharMap(stringB);

  if (Object.keys(stringAMap).length !== Object.keys(stringBMap).length) {
    return false;
  }

  for (let key of Object.keys(stringAMap)) {
    if (stringBMap[key] && stringAMap[key] !== stringBMap[key]) {
      return false;;
    }
  }

  return true;
}

function createCharMap(s) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  const sMap = {};

  for (let a of s.toLowerCase()) {
    if (alphabet.includes(a)) {
      sMap[a] = sMap[a] + 1 || 1;
    }
  }

  return sMap;
}

module.exports = anagrams;
