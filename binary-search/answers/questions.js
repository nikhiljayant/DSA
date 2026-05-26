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

// Painter's Partition Problem
// A = 2 Painters, B = 5 Units of time to paint 1 unit of board, C = [1, 10]
function paint(A, B, C) {
  let low = Math.max(...C);
  let high = C.reduce((acc, num) => acc + num, 0);

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    let painters = 1;
    let currentSum = 0;

    for (let i = 0; i < C.length; i++) {
      if (currentSum + C[i] <= mid) {
        currentSum += C[i];
      } else {
        painters++;
        currentSum = C[i];
      }
    }

    if (painters <= A) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return low * B;
}

function findMedianSortedArray(nums1 = [], nums2 = []) {
  if (nums1.length > nums2.length) return findMedianSortedArray(nums2, nums1);

  const n1 = nums1.length;
  const n2 = nums2.length;

  let low = 0;
  let high = n1;

  while (low <= high) {
    let cut1 = Math.floor((low + high) / 2);
    let cut2 = Math.floor((n1 + n2 + 1) / 2) - cut1;

    let left1 = cut1 == 0 ? -Infinity : nums1[cut1 - 1];
    let left2 = cut2 == 0 ? -Infinity : nums2[cut2 - 1];

    let right1 = cut1 == n1 ? Infinity : nums1[cut1];
    let right2 = cut2 == n2 ? Infinity : nums2[cut2];

    if (left1 <= right2 && left2 <= right1) {
      if ((n1 + n2) % 2 == 0) {
        return (Math.max(left1, left2) + Math.min(right1, right2)) / 2;
      } else {
        return Math.max(left1, left2);
      }
    } else if (left1 > right2) {
      high = cut1 - 1;
    } else {
      low = cut1 + 1;
    }
  }

  return 0;
}