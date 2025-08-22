function printNameNtimes(name, times) {
  let timeCount = times;
  if (timeCount === 0) return;
  console.log(name);
  timeCount--;
  printNameNtimes(name, timeCount);
}

// printNameNtimes("basic recursion", 5);

function printN(n) {
  let count = n;
  if (count === 0) return;
  console.log(count);
  count--;
  printN(count);
}

// printN(5);

// Print from 1 to n using backtracking
function printNBacktrack(n) {
  let count = n;
  if (count < 1) return;
  printNBacktrack(count - 1);
  console.log(count);
}

// printNBacktrack(3);

// Print from n to 1 using backtracking
function printNto1usingBacktrack(start, end) {
  if (start === end) return;
  printNto1usingBacktrack(start + 1, end);
  console.log(start);
}

// printNto1usingBacktrack(1, 5);

// Parameterized recursion
// function sumOfN(num, sum) {
//   if (num === 0) {
//     console.log(sum);
//     return;
//   }
//   sumOfN(num - 1, sum + num);
// }

// sumOfN(10, 0);

// Functional recursion
function sumOfN(num) {
  if (num === 0) return 0;
  return num + sumOfN(num - 1);
}

// console.log(sumOfN(3));

const arr = [1, 2, 3, 4, 5, 6];
function reverseArr(index) {
  if (index >= Math.floor(arr.length / 2)) {
    console.log(arr);
    return;
  }
  [arr[index], arr[arr.length - index - 1]] = [
    arr[arr.length - index - 1],
    arr[index],
  ];
  reverseArr(index + 1);
}
// reverseArr(0);

const str = "nikhil";
function palindrom(index) {
  if (str[index] !== str[str.length - index - 1]) {
    console.log("It's not a palindrome string");
    return;
  }
  if (index >= Math.floor(str.length / 2)) {
    console.log("It's a palindrom string");
    return;
  }
  [str[index], str[str.length - index - 1]] = [
    str[str.length - index - 1],
    str[index],
  ];

  palindrom(index + 1);
}
// palindrom(0);

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(4));
