// “Find the first element greater than or equal to target”
function lowerBound(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  let ans = arr.length;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] >= target) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return ans;
}

console.log(lowerBound([1, 2, 4, 4, 5, 7], 4));

// “First element strictly greater than target”
function upperBound(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  let ans = arr.length;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] > target) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return ans;
}

console.log(upperBound([1, 3, 3, 5, 8], 7));

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

function searchInsertPosition(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  let ans = arr.length;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] >= target) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return ans;
}

// Problem Statement: you're given an sorted array arr of n integers and an integer x. Find the floor and ceiling of x in arr[0..n-1]. The floor of x is the largest element in the array which is smaller than or equal to x. The ceiling of x is the smallest element in the array greater than or equal to x

function floorCeil(nums, x) {
  const n = nums.length;

  let floor = -1;
  let ceil = -1;

  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] === x) return [x, x];
    else if (nums[mid] > x) {
      ceil = nums[mid];
      high = mid - 1;
    } else if (nums[mid] < x) {
      floor = nums[mid];
      low = mid + 1;
    }
  }

  return [floor, ceil];
}

// Find First and Last Position of Element in Sorted Array

var searchRange = function (nums, target) {
  function binarySearch(findFirst) {
    let low = 0;
    let high = nums.length - 1;

    let answer = -1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);

      if (nums[mid] === target) {
        answer = mid;

        if (findFirst) high = mid - 1;
        else low = mid + 1;
      } else if (nums[mid] > target) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return answer;
  }

  return [binarySearch(true), binarySearch(false)];
};

// Search in rotated sorted array-I (without duplicates)
function search(arr, target) {
  const n = arr.length;

  let low = 0;
  let high = n - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) return mid;

    // Left half is sorted
    if (arr[low] <= arr[mid]) {
      if (arr[low] <= target && target <= arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    // Right half is sorted
    else {
      if (arr[mid] <= target && target <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  // Target element not found
  return -1;
}

console.log(search([7, 8, 9, 1, 2, 3, 4, 5, 6], 8));

// Search in rotated sorted array-II (with duplicates)
function search(arr, target) {
  const n = arr.length;

  let low = 0;
  let high = n - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) return true;

    if (arr[low] === arr[mid] && arr[mid] === arr[high]) {
      low++;
      high--;

      continue;
    }

    // Left half is sorted
    if (arr[low] <= arr[mid]) {
      if (arr[low] <= target && target <= arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    // Right half is sorted
    else {
      if (arr[mid] <= target && target <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  // Target element not found
  return false;
}

console.log(search([2, 5, 6, 0, 0, 1, 2], 0));
