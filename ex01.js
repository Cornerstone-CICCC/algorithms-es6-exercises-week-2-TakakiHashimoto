/*
In this exercise, we will be given an array of 2 or more numbers. 
We will then have to find the two largest numbers in that array, and sum them together.

Instruction
Create a function named sumLargestNumbers that will receive an array of numbers and 
return the sum of the two largest numbers in that array.
*/
// const sumLargestNumbers = function (data) {
//   // Put your solution here
//   let largestNum = null;
//   let secondeLarge = null;
//   for (const number of data){
//     let isSet = false
//     if (largestNum == null){
//       largestNum = number;
//       isSet = true;
//     } else if (number > largestNum){
//       largestNum = number;
//       isSet = true;
//     }

//     if (!isSet){
//       if (se)
//     }
//   }
//   return largestN + secondLarge;
// };


const sumLargestNumbers = function (data) {
  // Put your solution here
  let largestN = null;
  let secondLarge = null;
  let largestNumIndex = 0
  for (const index in data){
    if (largestN == null){
      largestN = data[index];
      largestNumIndex = index
    } else if (data[index] > largestN){
        largestN = data[index];
        largestNumIndex = index
      }
  }

  data.splice(largestNumIndex, 1)

  for (const number of data){
    if (secondLarge == null){
      secondLarge = number;
    } else if (number > secondLarge){
      secondLarge = number;
    }
  }

  return largestN + secondLarge;
};

console.log(sumLargestNumbers([1, 10])); // 11
console.log(sumLargestNumbers([1, 2, 3])); // 5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); // 126

module.exports = sumLargestNumbers;
