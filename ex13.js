/*
In this activity, we will be converting date strings like "2017/12/02", into more English friendly date strings like December 2nd, 2017.

Talking Calendar
We will be given a date as a string (not a Date object). The date will always be formatted as YYYY/MM/DD. 
We will have to parse the given string and produce a human readable date.

Instruction
Create a function named talkingCalendar that takes in a date string with the format YYYY/MM/DD, 
and returns a new human readable date that looks like December 2nd, 2017.
*/

const talkingCalendar = function (date) {
  // Your code here
  const month = {
    12: "December",
    1: "January",
    2: "Feburuary",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "Nobember",
  }

  
  const dateArray = date.split("/");
  if (parseInt(dateArray[2]) === 1){
    return `${month[parseInt(dateArray[1])]} 1st, ${dateArray[0]}`
  } else if (parseInt(dateArray[2]) === 2){
    return `${month[parseInt(dateArray[1])]} 2nd, ${dateArray[0]}`
  } else if (parseInt(dateArray[2]) === 3){
    return `${month[parseInt(dateArray[1])]} 3rd, ${dateArray[0]}`
  } else {
    return `${month[parseInt(dateArray[1])]} ${parseInt(dateArray[2])}th, ${dateArray[0]}`
  }
};

console.log(talkingCalendar("2017/12/02")); // December 2nd, 2017
console.log(talkingCalendar("2007/11/11")); // November 11th, 2007
console.log(talkingCalendar("1987/08/24")); // August 24th, 1987

module.exports = talkingCalendar;
