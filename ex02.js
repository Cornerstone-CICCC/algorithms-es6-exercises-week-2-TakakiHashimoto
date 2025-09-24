/*
We'll be adding only the numbers in the array which match the given condition.

Instruction
Create a function named conditionalSum that will be given an array of numbers and a condition, 
in this case odd or even. Given this condition, add up only the values which match that condition. 
If no values match the condition, return 0.

*/

// foreach can take 3 arguments, value, index, array itself
// array.forEach((element, index, array) => {
//   // element → current value
//   // index   → current index
//   // array   → the array being traversed
// });
const conditionalSum = function (values, condition) {
  // Your code here
  let sum = 0
  values.forEach((number) => {
    if (condition.toLowerCase() === "even") {
      if (number % 2 === 0){
        sum += number;
      }
    } else if (condition.toLowerCase() === "odd"){
      if (number % 2 === 1){
        sum += number;
      }
    }
    });

  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even")); // 6
console.log(conditionalSum([1, 2, 3, 4, 5], "odd")); // 9
console.log(conditionalSum([13, 88, 12, 44, 99], "even")); // 144
console.log(conditionalSum([], "odd")); // 0

module.exports = conditionalSum;
