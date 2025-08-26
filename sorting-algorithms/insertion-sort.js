// Time Complexity: O(n^2), O(n) for best case
function insertionSort(arr = []) {
  for (let i = 0; i <= arr.length - 1; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[i]) {
      [arr[j - 1], arr[i]] = [arr[i], arr[j - 1]];
      j--;
    }
  }
  return arr;
}

console.log(insertionSort([4, 2, 3]));
