/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.*/

function TwoSum(nums, targets) { 
    console.log(nums);
    console.log(targets);
  
    for(let index = 0; index < nums.length; index++) { 
        for(let otherIndex = index+ 1; otherIndex < nums.length; otherIndex++) { 
            if(nums[otherIndex] === targets-nums[index]) { 
                return [index,otherIndex];
                console.log("print");
            }
        }
    }
    return nums;
}

console.log(TwoSum([3,2,4], 6));
console.log(TwoSum([2,7,11,15], 9));
