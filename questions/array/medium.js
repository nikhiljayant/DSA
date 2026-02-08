// Maximum Subarray - Kadane's Algorithm

var maxSubArray = function (nums) {
  if (nums.length < 1) return;

  let maxSum = nums[0];
  let currSum = 0;

  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];

    if (currSum > maxSum) {
      maxSum = currSum;
    }

    if (currSum < 0) {
      currSum = 0;
    }
  }

  return maxSum;
};

console.log(maxSubArray([-1, 0, -2]));

function duplicate(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }

  return -1;
}

console.log(duplicate([1, 2, 3, -4]));

function rearrange(arr) {
  const mid = Math.ceil((arr.length - 1) / 2);

  let low = 0;
  let high = mid;

  const result = [];

  for (let i = 0; i < arr.length - mid; i++) {
    result.push(arr[low]);
    result.push(arr[high]);

    low++;
    high++;
  }

  return result;
}

rearrange([1, 2, 3, -1, -2, -3]);

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
    14,
  ),
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
