// Calculate the Number of Days Between Two Dates
// The input will consist of two dates in DD/MM/YYYY format.

const findDays = (date1, date2) => {
  let d1 = new Date(date1);
  let d2 = new Date(date2);

  let diff = d2 - d1;
  console.log(diff);
};

let date1 = "11/01/2021";
let date2 = "11/03/2021";
findDays(date1, date2);
// console.log(findDays(date1, date2));