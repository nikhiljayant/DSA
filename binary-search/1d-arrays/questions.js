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
