// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let maxCount = 0;
  let max = '';

  for (let c of str) {
    charMap[c] = charMap[c] + 1 || 1;
    if (charMap[c] > maxCount) {
      maxCount = charMap[c];
      max = c;
    }
  }

  return max;
}

module.exports = maxChar;
