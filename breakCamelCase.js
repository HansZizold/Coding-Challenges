// Complete the solution so that the function will break up camel casing, using a space between words.

const solution = str => {
  // Your solution
  return str.replace(/([a-z])([A-Z])/g, '$1 $2');
};

console.log(solution('camelCasingHere')); // camel Casing Here
console.log(solution('No Camels here')); // No Camels here
console.log(solution('ABC')); // ABC
console.log(solution('')); // ''