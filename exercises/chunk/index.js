// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // 1. solution
  const res = [];

  let i = 0;
  let newArr = [];

  for (let x of array) {
    newArr.push(x);
    i++;
    if (i == size) {
      res.push(newArr);
      newArr = [];
      i = 0;
    }
  }

  if (newArr.length > 0) {
    res.push(newArr);
  }

  return res;

  // 2. solution
  // const chunked = [];
  // let index = 0;

  // while (index < array.length) {
  //   chunked.push(array.slice(index, index + size));
  //   index += size;
  // }

  // return chunked;
}

module.exports = chunk;
