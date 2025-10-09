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
