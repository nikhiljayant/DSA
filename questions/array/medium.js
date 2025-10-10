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

function findEl(matrix, target) {
  const flattenedArray = matrix.reduce((acc, curr) => acc.concat(curr), []);

  if (flattenedArray.includes(target)) {
    return true;
  } else {
    return false;
  }
}

console.log(
  findEl(
    [
      [1, 2, 4],
      [6, 7, 8],
      [10, 11, 12],
    ],
    14
  )
);

function twoSum(arr, target) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const compliment = target - arr[i];

    if (map.has(compliment)) {
      return [map.get(compliment), i];
    }

    map.set(arr[i], i);
  }
}

console.log(twoSum([2, 6, 5, 8, 11], 14));
