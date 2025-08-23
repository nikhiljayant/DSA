function hashing(arr, noToFind) {
  const hashArr = new Array(arr.length).fill(0);
  for (let i = 0; i < arr.length; i++) {
    hashArr[arr[i]] += 1;
  }

  console.log(hashArr[noToFind]);
}

hashing([1, 1, 1, 2, 3, 4, 5, 0, 0], 0);
