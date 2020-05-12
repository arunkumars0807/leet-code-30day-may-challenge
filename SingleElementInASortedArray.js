/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    var start = 0, end = nums.length - 1;
    while (start <= end) {
        var mid = Math.trunc((start + end) / 2);
        if (mid % 2 === 0) {
            // if mid is even,
            // then the number next to this should be same
            // If not, check if there is a same number before it
                // if yes, then reset the end to mid - 2
                // Else, this is the number to be returned.
            
            if (nums[mid] === nums[mid + 1]) {
                start = mid + 2;
            } else {
                if (nums[mid] === nums[mid - 1]) {
                    end = mid - 2;
                } else {
                    return nums[mid];
                }
            }
        } else {
            // if mid is odd,
            // then the number previous to this should be same
            // If not, check if there is a same number after it
                // if yes, then reset the end to mid - 1
                // Else, this is the number to be returned.
            if (nums[mid] === nums[mid - 1]) {
                start = mid + 1;
            } else {
                if (nums[mid] === nums[mid + 1]) {
                    end = mid - 1;
                } else {
                    return nums[mid];
                }
            }
        }
    }
};
