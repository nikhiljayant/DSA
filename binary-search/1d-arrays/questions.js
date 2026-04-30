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
