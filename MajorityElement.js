/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  /**
   * The following approach is based on the Boyer - Moore voting algorithm
   * https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm
   */

  var majorElement,
    count = 1,
    tempIndex = 0,
    times = Math.trunc(nums.length / 2);

  for (var i = 1; i < nums.length; ++i) {
    if (nums[tempIndex] === nums[i]) {
      ++count;
    } else {
      --count;

      if (count === 0) {
        tempIndex = i;
        count = 1;
      }
    }
  }

  // Found the probable majority element
  majorElement = nums[tempIndex];

  // Now check if that element appears more than n / 2 times in the array

  count = 0; // Resetting count to 0

  for (var i = 0; i < nums.length; ++i) {
    if (nums[i] === majorElement) {
      ++count;
    }
  }

  if (count > times) {
    return majorElement;
  }

  // As per this question, majority element always exists in the array
  // Still, as a fallback
  // In case it doesn't exist.

  return null;
};
