// Coding challenge: Inventory update

// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

// var curInv = [
//   [21, "Bowling Ball"],
//   [2, "Dirty Sock"],
//   [1, "Hair Pin"],
//   [5, "Microphone"]
// ];
// var newInv = [
//   [2, "Hair Pin"],
//   [3, "Half-Eaten Apple"],
//   [67, "Bowling Ball"],
//   [7, "Toothpaste"]
// ];
// var newInv = [
//   [88, "Bowling Ball"],
//   [2, "Dirty Sock"],
//   [3, "Hair Pin"],
//   [3, "Half-Eaten Apple"],
//   [5, "Microphone"],
//   [7, "Toothpaste"]
// ];

const inventory = (curInv, newInv) => {
  //Iterate over the new inventory and verify if the item exist
  //If the item exists, I will just the adding operation and update the item on the current inventory
  //If the item does not exists, I will push new item to the current inventory 
  //Sort the inventory alphabetically

  for (let i = 0; i < newInv.length; i++) {
    let found = false;
    for (let j = 0; j < curInv.length; j++) {
      if (newInv[i][1] === curInv[j][1]) {
        curInv[j][0] += newInv[i][0];
        found = true;
      } 
    }
    if (!found) {
      curInv.push(newInv[i]);
    }
  }
  return curInv;
}

console.log(inventory([
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
], [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
  ]));
