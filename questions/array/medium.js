function count(arr) {
  let previousCount = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      previousCount++;
    } else {
      if (count < previousCount) {
        count = previousCount;
      }
      previousCount = 0;
    }
  }

  return count;
}

console.log(count([1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0]));
