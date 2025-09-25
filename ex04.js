/*
In this exercise, we will be given a list of instructors and have to determine which instructor has the longest name.

Instruction
Create a function named instructorWithLongestName that will receive an array of instructor objects, 
and return the object that has the longest name. If there are two instructors with the longest name, return the first one.
*/


// Normal for loop
const instructorWithLongestName = function (instructors) {
  // Put your solution here
  let wordCounter = 0;
  let highestChars = 0;
  let heighestObj;
  for (const obj of instructors){
    wordCounter = 0;
    for (const char of obj.name){
      wordCounter += 1;
    }
    if (wordCounter > highestChars){
      highestChars = wordCounter;
      heighestObj = obj;
    }
  }

  return heighestObj
};


// with .reduce()
const instructorWithLongestName2 = function (instructors) {
  // Put your solution here
  const longestName = instructors.reduce((acc, curr) =>{
    return curr.name.length > acc.name.length ? curr : acc
  }, instructors[0])

  return longestName
};



console.log(
  instructorWithLongestName2([
    { name: "Samuel", course: "Mobile" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
); //{name: "Jeremiah", course: "Web"}

console.log(
  instructorWithLongestName2([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "Mobile" },
    { name: "Domascus", course: "Web" },
  ])
); //{name: "Domascus", course: "Web"}

module.exports = instructorWithLongestName;
