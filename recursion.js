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

function sumOfN(num, sum) {
  if (num === 0) {
    console.log(sum);
    return;
  }
  sumOfN(num - 1, sum + num);
}

sumOfN(5, 0);
