// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
// =======PREP===========>>>>

// param is an array of int numbers and int(the target); declare function that returns
//  an array that gives the index of the sum.
// declare a function: with in the function create two loops that iterates; declare a conditional to check if the two numbers equal the target to retrun the indices of the 2 numbers in any order
// we also need conditional if one number equals the target to skip it

function twoSums(nums, target) {
  // we set up 2 loops, one of them is nested we want the nested loop to start on the 2nd index
  //we will be comparing the index from each loop to equal the target

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] + nums[i] === target) {
        return [i, j];
      }
    }
  }
}

twoSums([3, 2, 4], 7);
// the target index challenge
// chekc
// checking
