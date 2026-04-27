function mergeIntervals(nums) {
  if (nums.length <= 1) return nums;

  nums.sort((a, b) => a[0] - b[0]);

  const result = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    let current = nums[i];
    let lastMerged = result[result.length - 1];

    if (lastMerged[1] >= current[0]) {
      lastMerged[1] = Math.max(lastMerged[1], current[1]);
    } else {
      result.push(nums[i]);
    }
  }

  return result;
}

console.log(
  mergeIntervals([
    [5, 7],
    [1, 3],
    [2, 4],
  ]),
);

// 3 Sum

function sum(nums) {
  const n = nums.length;
  if (n < 3) return [];

  nums.sort((a, b) => a - b);

  const newArr = [];

  for (let i = 0; i < n - 2; i++) {
    // If current element is same as previous, skip the iteration to avoid duplicates in result
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let low = i + 1;
    let high = n - 1;

    while (low < high) {
      if (nums[i] + nums[low] + nums[high] === 0) {
        newArr.push([nums[i], nums[low], nums[high]]);

        while (low < high && nums[low] === nums[low + 1]) low++;
        while (low < high && nums[high] === nums[high - 1]) high--;
        low++;
        high--;
      } else if (nums[i] + nums[low] + nums[high] < 0) {
        low++;
      } else {
        high--;
      }
    }
  }

  return newArr;
}

console.log(sum([0, -1, 1, -1, 2, -4]));

// Rotate array by 90 degree's

function rotate90(arr) {
  const row = arr.length;
  const cols = arr[0].length;

  let low = 0;
  let high = row - 1;

  while (low <= high) {
    let temp = arr[low];
    arr[low] = arr[high];
    arr[high] = temp;

    low++;
    high--;
  }

  for (let i = 0; i < row - 1; i++) {
    for (let j = cols - 1; j >= i + 1; j--) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  } // const newArr = Array.from({ length: row }, () => new Array(cols).fill(null));
  // for (let i=0; i<row; i++) {
  //   for (let j=0; j<cols; j++) {
  //     newArr[j][(row-1)-i] = arr[i][j];
  //   }
  // }
  // for (let i=0; i<row; i++) {
  //     for (let j=0; j<cols; j++) {
  //         arr[i][j] = newArr[i][j];
  //     }
  // }

  return arr;
}

// Spiral Matrix

var spiralOrder = function (matrix) {
  let top = 0;
  let bottom = matrix.length - 1;

  let left = 0;
  let right = matrix[0].length - 1;

  const answer = [];

  while (left <= right && top <= bottom) {
    // top = left -> right, top++;
    if (top <= bottom) {
      for (let i = left; i <= right; i++) {
        answer.push(matrix[top][i]);
      }
      top++;
    }

    // right = top -> bottom, right--;
    if (left <= right) {
      for (let i = top; i <= bottom; i++) {
        answer.push(matrix[i][right]);
      }
      right--;
    }

    // bottom = right -> left, bottom--;
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        answer.push(matrix[bottom][i]);
      }
      bottom--;
    }

    //left = bottom -> top, left++;
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        answer.push(matrix[i][left]);
      }
      left++;
    }
  }

  return answer;
};

// Set Matrix to 0

function matrix(arr) {
  const row = new Array(arr.length);
  const col = new Array(arr[0].length);

  // Check for 0's and assign -1 to corresponding row and column
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0) {
        row[i] = -1;
        col[j] = -1;
      }
    }
  }

  // Fill row with 0
  for (let r = 0; r < row.length; r++) {
    if (row[r] === -1) {
      let j = 0;
      for (let c = 0; c < col.length; c++) {
        arr[r][j] = 0;
        j++;
      }
    }
  }

  // Fill column with 0
  for (let c = 0; c < col.length; c++) {
    if (col[c] === -1) {
      let j = 0;
      for (let r = 0; r < row.length; r++) {
        arr[j][c] = 0;
        j++;
      }
    }
  }

  return arr;
}

// Longest Consecutive Sequence
var longestConsecutive = function (nums) {
  if (nums.length <= 1) return nums.length;

  let maxLength = 0;
  const numSet = new Set(nums);

  for (let num of numSet) {
    if (!numSet.has(num - 1)) {
      let innerMax = 1;
      let currentNum = num;

      while (numSet.has(currentNum + 1)) {
        innerMax++;
        currentNum++;
      }

      maxLength = Math.max(innerMax, maxLength);
    }
  }

  return maxLength;
};

// Leaders in an array
class Solution {
  leaders(a) {
    if (a.length <= 1) return a; // code here
    const ans = [a[a.length - 1]];
    let pivot = a[a.length - 1];
    for (let i = a.length - 2; i >= 0; i--) {
      if (a[i] >= pivot) {
        ans.push(a[i]);
        pivot = a[i];
      }
    }
    return ans.reverse();
  }
}

// Next Permutation

function next(arr) {
  if (arr.length <= 1) return arr;

  const length = arr.length;
  let pivot = null;

  for (let i = length - 1; i > 0; i--) {
    if (arr[i] > arr[i - 1] && !pivot) {
      pivot = i - 1;

      const temp = arr[length - 1];
      arr[length - 1] = arr[pivot];
      arr[pivot] = temp;
    }
  }

  const finalArr = [
    ...arr.slice(0, pivot + 1),
    ...arr.slice(pivot + 1).reverse(),
  ];

  return finalArr;
}

console.log(next([1, 2, 3, 5, 4]));

// Rearrange elements by sign

var rearrangeArray = function (nums) {
  if (nums.length <= 1) return nums;

  const newArr = new Array(nums.length);

  let pos = 0;
  let neg = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      newArr[neg] = nums[i];
      neg += 2;
    } else if (nums[i] >= 0) {
      newArr[pos] = nums[i];
      pos += 2;
    }
  }

  return newArr;
};

// Best time to buy and sell stock

var maxProfit = function (prices) {
  if (prices.length <= 1) return 0;

  let maxProfit = 0;

  let minCount = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minCount) {
      minCount = prices[i];
    }

    if (prices[i] - minCount > maxProfit) {
      maxProfit = prices[i] - minCount;
    }
  }

  return maxProfit;
};

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
