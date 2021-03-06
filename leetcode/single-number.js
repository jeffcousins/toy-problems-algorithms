/**
 * 136. Single Number
 * https://leetcode.com/problems/single-number/
 *
 * Given an array of integers, every element appears twice except for one.
 * Find that single one.
 *
 * Note:
 * Your algorithm should have a linear runtime complexity. Could you implement
 * it without using extra memory?
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var dict = nums.reduce(function(obj, num) {
    obj[num] = !obj[num];
    return obj;
  }, {});

  var key;

  for (key in dict) {
    if (dict[key]) {
      return +key;
    }
  }
};
