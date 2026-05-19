// k = 4, nums[] = {0,3,4,7,10,9}
function agreesiveCows(nums = [], k) {
  nums.sort((a, b) => a - b);

  const n = nums.length;

  let low = 1;
  let high = nums[n - 1] - nums[0];

  function canWePlace(stalls, dist, cows) {
    let cowCount = 1;
    let lastEl = stalls[0];

    for (let i = 1; i < stalls.length; i++) {
      if (stalls[i] - lastEl >= dist) {
        cowCount++;
        lastEl = stalls[i];
      }
      if (cowCount >= cows) return true;
    }
    return false;
  }

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (canWePlace(nums, mid, k) === true) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return high;
}

// Allocate books
function allocate(books, students) {
  let low = Math.max(...books);
  let high = books.reduce((acc, num) => acc + num, 0);

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    let studentCount = 1;
    let bookPagesSum = books[0];

    for (let i = 1; i < books.length; i++) {
      if (books[i] + bookPagesSum <= mid) {
        bookPagesSum += books[i];
      } else {
        studentCount++;
        bookPagesSum = books[i];
      }
    }

    if (studentCount <= students) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return low;
}

// Split Array Largest Sum
function splitArray(nums, k) {
  let low = Math.max(...nums);
  let high = nums.reduce((acc, num) => acc + num, 0);

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    let lastEl = nums[0];
    let kCount = 1;

    for (let i = 1; i < nums.length; i++) {
      if (nums[i] + lastEl <= mid) {
        lastEl += nums[i];
      } else {
        kCount++;
        lastEl = nums[i];
      }
    }

    if (kCount <= k) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return low;
}
