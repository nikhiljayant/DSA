// Time Complexity: O(n^2)
function selectionSort(arr = []) {
  for (let i = 0; i <= arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j <= arr.length - 1; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
        // Swap
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
  }
  return arr;
}

console.log(selectionSort([5, 4, 3, 2, 1, 0]));
