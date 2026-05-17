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
