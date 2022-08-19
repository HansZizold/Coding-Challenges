// Given an array that contains numbers as well as alphabets. You have to reestructure the array in a way that numbers come first and alphabets second. In the final array the numbers ans letters shoub be ordered

orderArray = (arr) => {
  // write your code here

  const numArr = arr.filter((elem) => typeof(elem) === 'number')
  const letArr = arr.filter((elem) => typeof(elem) === 'string')
  return ([...numArr.sort(), ...letArr.sort()]);
}

console.log(orderArray([2, "b", 4, "d", 3, "a", "c", "e", 5, 1]));
// => [1, 2, 3, 4, 5, "a", "b", "c", "d", "e"]
