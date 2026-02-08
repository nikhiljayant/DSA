// Rotate array by 1
function rotate(arr) {
  if (arr.length <= 1) return arr;

  const firstEl = arr[0];

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr[arr.length - 1] = firstEl;

  console.log(arr);
}

rotate([1, 2, 3, 4, 5]);

// Rotate array by k
var rotate = function (nums, k) {
  const n = nums.length;
  const newArr = new Array(n);

  for (let i = 0; i < n; i++) {
    newArr[(i + k) % n] = nums[i];
  }

  console.log(newArr);
};

rotate([1, 2, 3, 4, 5, 6, 7], 3);

// Move 0'z to the end without hampering the order of non-zero elements

function move(arr) {
  let low = 0;
  let high = 1;

  while (high <= arr.length - 1) {
    if (arr[low] === 0 && arr[high] !== 0) {
      const temp = arr[low];
      arr[low] = arr[high];
      arr[high] = temp;

      low++;
      high++;
    } else if (arr[low] !== 0) {
      low++;
    } else if (arr[high] === 0 || (arr[low] === 0 && arr[high] === 0)) {
      high++;
    }
  }

  console.log(arr);
}

move([1, 0, 2, 3, 0, 5]);

function kadaneAlgo(arr) {
  let ans = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum > ans) {
      ans = sum;
    }

    if (sum < 0) {
      sum = 0;
    }
  }

  return ans;
}

console.log(kadaneAlgo([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

function profit(arr) {
  let maxProfit = 0;
  let minPrice = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minPrice) {
      minPrice = arr[i];
    } else {
      const profit = arr[i] - minPrice;
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }

  return maxProfit;
}

console.log(profit([3, 2, 6, 5, 0, 3]));

function union(arr1, arr2) {
  const newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!newArr.includes(arr1[i])) {
      newArr.push(arr1[i]);
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    if (!newArr.includes(arr2[j])) {
      newArr.push(arr2[j]);
    }
  }

  console.log(newArr);
}

union([1, 2, 3, 4, 5], [2, 3, 4, 5, 4]);

function fn(arr, k) {
  const lastKElements = [];
  for (let i = arr.length - k; i <= arr.length - 1; i++) {
    lastKElements.push(arr[i]);
  }

  const firstPart = [];

  for (let j = 0; j < arr.length - k; j++) {
    firstPart[j + k] = arr[j];
  }

  console.log([...lastKElements, ...firstPart].filter((item) => item));
}

fn([3, 7, 8, 9, 10, 11], 3);

function findLeader(arr) {
  const leaders = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        break;
      } else if (j === arr.length - 1) {
        leaders.push(arr[i]);
      }
    }
  }

  console.log(leaders);
}

findLeader([10, 22, 12, 3, 0, 6]);

function rearrange(arr) {
  if (arr.length === 0) return;

  let positive = 0;
  let negative = 1;

  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      answer[positive] = arr[i];
      positive += 2;
    } else {
      answer[negative] = arr[i];
      negative += 2;
    }
  }

  return answer;
}

console.log(rearrange([3, 4, -2, 0, -1, -4]));
