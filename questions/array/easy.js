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
