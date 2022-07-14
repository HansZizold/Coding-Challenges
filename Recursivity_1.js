// The function numberArray should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. The function must use recursion by calling itself and not use loops of any kind. 

function numberArray(startNum, endNum) {
  let array = [];
  if (startNum === endNum) {
    array.push(startNum);
    return array;
  }
  else {
    array = numberArray(startNum, endNum - 1);
    array.push(endNum);
    return array;
  }
}
console.log(numberArray(1,10));
