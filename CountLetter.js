// Given a string, create a function that count the quantity of characters of the string and populates this information in an object. Discard the spaces.

const countLetter = (str) => {
  let letterArr = {};
  for (let i=0; i<str.length; i++) {
    if(str[i] === ' ') {
      continue;
    }
    if(letterArr[str[i]]) {
      letterArr[str[i]] += 1;
    }
    else {
      letterArr[str[i]] = 1;
    }
  }
  return letterArr;
}
console.log(countLetter("Joffrey's Challenge was very interesting"));

// Desired Output
// {
//   J: 1,
//   o: 1,
//   f: 2,
//   r: 3,
//   e: 6,
//   y: 2,
//   "'": 1,
//   s: 3,
//   C: 1,
//   h: 1,
//   a: 2,
//   l: 2,
//   n: 3,
//   g: 2,
//   w: 1,
//   v: 1,
//   i: 2,
//   t: 2
// }