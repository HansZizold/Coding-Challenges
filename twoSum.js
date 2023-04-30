const twoSum = (nums, target) => {
  let arr = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (arr[complement] !== undefined) {
      return [arr[complement], i];
    }
    arr[nums[i]] = i;
  }
};
console.log(twoSum([3, 2, 4], 6));
