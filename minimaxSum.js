const miniMaxSum = (arr) => {
  let total= 0
  let resularr = []
  for (let i = 0; i < arr.length; i++) {
      let newArray = arr.slice(0, i).concat(arr.slice(i + 1));
      total = newArray.reduce((acc, val) => acc + val);
      resularr.push(total)
  } 
  const [...numbers] = resularr;
  let value = [Math.min(...numbers), Math.max(...numbers)].join(" ")
  console.log (value)
}

miniMaxSum([1, 2, 3, 4, 5]);
