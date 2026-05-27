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

// Finds the k-th element in the union of two sorted arrays a and b.
// Uses a binary search partitioning approach similar to findMedianSortedArray.
// Time Complexity: O(log(min(n1, n2)))
function kthElement(a = [], b = [], k) {
  // Always binary search on the smaller array to minimise iterations
  if (a.length > b.length) return kthElement(b, a, k);

  const n1 = a.length;
  const n2 = b.length;

  // cut1 must take at least max(0, k-n2) elements from `a`
  // (so that cut2 = k - cut1 never exceeds n2),
  // and at most min(k, n1) elements (can't take more than the array has).
  let low = Math.max(0, k - n2);
  let high = Math.min(k, n1);

  while (low <= high) {
    // cut1 = number of elements taken from `a` for the left partition
    let cut1 = Math.floor((low + high) / 2);
    // cut2 = number of elements taken from `b` so that left partition has exactly k elements
    let cut2 = k - cut1;

    // Boundary values: use -Infinity / Infinity when the cut is at the edge
    // (i.e. no element exists on that side of the partition)
    let left1  = cut1 === 0  ? -Infinity : a[cut1 - 1]; // largest element on the left side of `a`
    let left2  = cut2 === 0  ? -Infinity : b[cut2 - 1]; // largest element on the left side of `b`
    let right1 = cut1 === n1 ?  Infinity : a[cut1];     // smallest element on the right side of `a`
    let right2 = cut2 === n2 ?  Infinity : b[cut2];     // smallest element on the right side of `b`

    if (left1 <= right2 && left2 <= right1) {
      // Valid partition found: every element in the left half ≤ every element in the right half.
      // The k-th element is the maximum of the two left boundary values.
      return Math.max(left1, left2);
    } else if (left1 > right2) {
      // cut1 is too large — move the partition in `a` to the left
      high = cut1 - 1;
    } else {
      // cut1 is too small — move the partition in `a` to the right
      low = cut1 + 1;
    }
  }

  // Should never reach here for valid inputs
  return 0;
}