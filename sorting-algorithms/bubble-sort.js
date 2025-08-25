// Time Complexity: O(n^2) for worst and average case, O(n) for best case
function bubbleSort(arr = []) {
  let didSwap = 0;
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        didSwap = 1;
      }
    }
    if (didSwap === 0) break;
  }
  return arr;
}

console.log(bubbleSort([1, 2, 3]));
