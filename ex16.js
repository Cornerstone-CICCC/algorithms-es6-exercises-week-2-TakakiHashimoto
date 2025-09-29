/*Caze Maker II
We will still be given an input string to convert. However, this time, we'll also be given a casing style to work with. 
The following code block will describe all the casing styles to support. 
We may also receive an array of casing styles, and each of these should be applied.

Instruction
Create a function named makeCaze that will receive an input string and one or more casing options. 
Return a new string that is formatted based on casing options:

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

camel, pascal, snake, kebab, title
vowel, consonant
upper, lower
Our function should be able to handle all of these cases.

For more information on casing styles, read Wikipedia's Special Case Styles for a list of various casing examples.

*/

const makeCaze = function (input, caze) {
  // Put your solution here
  if (!Array.isArray(caze)) {
    caze = [caze];
  }

  const precedence = [
    "camel", "pascal", "snake", "kebab", "title", "vowel", "consonant", "upper", "lower"
  ];

  let result = input;


  for (let style of caze) {
    if (style === "camel") {
      let words = input.split(" ");
      for (let i in words) {
        if (i === 0) {
          words[i] = words[i].toLowerCase();
        } else {
          words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
        }
      }
      result = words.join("");
    }

    else if (style === "pascal") {
      let words = result.split(" ");
      for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
      }
      result = words.join("");
    }

    else if (style === "snake") {
      result = result.toLowerCase().split(" ").join("_");
    }

    else if (style === "kebab") {
      result = result.toLowerCase().split(" ").join("-");
    }

    else if (style === "title") {
      let words = result.split(" ");
      for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
      }
      result = words.join(" ");
    }

    else if (style === "vowel") {
      let chars = result.split("");
      for (let i = 0; i < chars.length; i++) {
        if ("aeiou".includes(chars[i].toLowerCase())) {
          chars[i] = chars[i].toUpperCase();
        }
      }
      result = chars.join("");
    }

    else if (style === "consonant") {
      let chars = result.split("");
      for (let i = 0; i < chars.length; i++) {
        if (!"aeiou".includes(chars[i].toLowerCase())) {
          chars[i] = chars[i].toUpperCase();
        }
      }
      result = chars.join("");
    }

    else if (style === "upper") {
      result = result.toUpperCase();
    }

    else if (style === "lower") {
      result = result.toLowerCase();
    }
  }

  return result;

  
};

console.log(makeCaze("this is a string", "camel")); // thisIsAString
console.log(makeCaze("this is a string", "pascal")); // ThisIsAString
console.log(makeCaze("this is a string", "snake")); // this_is_a_string
console.log(makeCaze("this is a string", "kebab")); // this-is-a-string
console.log(makeCaze("this is a string", "title")); // This Is A String
console.log(makeCaze("this is a string", "vowel")); // thIs Is A strIng
console.log(makeCaze("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCaze("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING

module.exports = makeCaze;
