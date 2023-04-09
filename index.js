const sumItems = function(array) {
  // Sum all the numbers in the array
  let sum = 0;
  for (let i of array) {
    if (Array.isArray(i)) {
      sum += sumItems(i);
    } else {
      sum += i;
    }
  }
  return sum;
};


module.exports = sumItems;