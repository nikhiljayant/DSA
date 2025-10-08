function sorted(arr) {
  if (arr.length === 1) return true;

  let low = 0;
  let high = 1;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[low] < arr[high]) {
      low++;
      high++;
    } else {
      return false;
    }
  }

  return true;
}

console.log(sorted([1, 2, 8, 10]));

function find(arr) {
  if (arr.length === 1) {
    return -1;
  }
  let largest = arr[0];
  let secondLargest = arr[arr.length - 1];

  let smallest = arr[0];
  let secondSmallest = arr[arr.length - 1];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i];
    }

    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] > smallest && arr[i] < secondSmallest) {
      secondSmallest = arr[i];
    }
  }

  console.log(secondLargest, secondSmallest);
}

find([4, 5, 3, 1]);
