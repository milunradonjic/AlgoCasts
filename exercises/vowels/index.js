// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  // 1. solution
  const vowels = 'aeiou';
  let total = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) total++;
  }

  return total;

  // 2. solution
  // return [...str].reduce((numOfVowels, char) => 
  // numOfVowels += vowels.includes(char.toLowerCase()) ? 1 : 0, 0);
}

module.exports = vowels;
