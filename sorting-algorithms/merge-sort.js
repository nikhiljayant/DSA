function merge(arr, low, mid, high) {
  let left = low;
  let right = mid + 1;

  const temp = [];

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }

  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  for (let i = 0; i < temp.length; i++) {
    arr[low + i] = temp[i];
  }
}

function mergeSort(arr, low, high) {
  if (low >= high) return;

  const mid = Math.floor((low + high) / 2);

  mergeSort(arr, low, mid); // Left Part of the Array
  mergeSort(arr, mid + 1, high); // Right Part of the Array
  merge(arr, low, mid, high); // Sort & Merge

  return arr;
}

const tempArr = [16, 9, 7, 3, 4, 5, 2, 5];
console.log(mergeSort(tempArr, 0, tempArr.length - 1));
