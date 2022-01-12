// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let x = 1;

  let arr = [];  

  for (let i = 0; i < n; i++) {
    let innerArr = []
    for (let j = 0; j < n; j++) {
      innerArr.push(0);
    }
    arr.push(innerArr);
  }

  let curNum = 1;

  let startRow = 0;
  let endCol = n - 1;
  let endRow = n - 1;
  let startCol = 0;

  const finalNum = n*n;

  /**
   * 0 - left
   * 1 - down
   * 2 - right
   * 3 - up
   */
  let i = 0;
  
  while (curNum <= finalNum) {

    const dir = i % 4;
    i++;

    if (dir === 0) {
      for (let j = startCol; j <= endCol; j++) {
        arr[startRow][j] = curNum;
        curNum++;
      }
      startRow++;
    } else if (dir === 1) {
      for (let j = startRow; j <= endRow; j++) {
        arr[j][endCol] = curNum;
        curNum++;
      }
      endCol--;
    } else if (dir === 2) {
      for (let j = endCol; j >= startCol; j--) {
        arr[endRow][j] = curNum;
        curNum++;
      }
      endRow--;
    } else {
      for (let j = endRow; j >= startRow; j--) {
        arr[j][startCol] = curNum;
        curNum++;
      }
      startCol++;
    }
  }

  console.log("ARR : ", arr);

  return arr;
}

module.exports = matrix;