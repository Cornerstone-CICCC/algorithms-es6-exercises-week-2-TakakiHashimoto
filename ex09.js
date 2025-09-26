/*
In this exercise, we will be converting a normal string into camelCase text.

Case Maker
We will receive a normal string of words separated with spaces as the input. Our job is to convert these strings into camel cased strings.

Instruction
Create a function named camelCase that will convert a string to camel case, and return the result.
*/

const camelCase = function (input) {
  // Your code here
  const stringArray = input.split(" ");
  const camelArray = []
  for (let index in stringArray){
    if (index == 0){
      camelArray.push(stringArray[index])
    } else {
        stringArray[index] = stringArray[index].slice(0, 1).toUpperCase() + stringArray[index].slice(1)
        camelArray.push(stringArray[index]);
    }
  }

  return camelArray.join("");
};

console.log(camelCase("this is a string")); // thisIsAString
console.log(camelCase("loopy cornerstone")); //loopyCornerstone
console.log(camelCase("supercalifragalisticexpialidocious")); // supercalifragalisticexpialidocious

module.exports = camelCase;
