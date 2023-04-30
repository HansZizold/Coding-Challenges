// Coding challenge: Diff two arrays

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// You can return the array with its elements in any order.

// INPUTS
// [1,2,3,4,5]
// [3,4,5,6,7]

// OUTPUT
// [1,2,6,7]

const diff_two_arrays = (arr1, arr2) => {
  let diff = [];
  for(let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) diff.push(arr1[i]);
    if (!arr1.includes(arr2[i])) diff.push(arr2[i]);
  }

  return diff;
  
}
console.log(diff_two_arrays([1,2,3,4,5], [3,4,5,6,7]));

