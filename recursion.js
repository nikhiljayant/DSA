function printNameNtimes(name, times) {
  let timeCount = times;
  if (timeCount === 0) return;
  console.log(name);
  timeCount--;
  printNameNtimes(name, timeCount);
}

// printNameNtimes("basic recursion", 5);
