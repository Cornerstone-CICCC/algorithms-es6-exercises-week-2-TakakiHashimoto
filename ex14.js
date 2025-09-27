/*
In this activity, we are going to create a function that can calculate which coins we should use when we need to give change.

Change Calculator
We will be given two numbers, the total of a transaction, and the amount of cash given to the cashier. 
Both of these numbers will be represented as whole numbers in cents. Therefore $10 will be represented as 1000.

Our function calculateChange should return an object which describes the total amount of change for the cashier to give back. 
Although pennies are not used in circulation, we will still calculate the amount of pennies to give back.

Instruction
Create a function named calculateChange that takes in a total amount of a bill and the total cash given to pay that bill. 
Return a new object that describes the total amount of change for the cashier to give back. 
Omit any types of change that you shouldn't give back, i.e. if you don't give back a twenty dollar bill, don't include it in the results.

Valid denominations are as follows:

Twenty dollars
Ten dollars
Five dollars
Two dollars
One dollar
Quarter (25¢)
Dime (10¢)
Nickel (5¢)
Penny (1¢)
*/

const calculateChange = function (total, cash) {
  // Your code here
  let changesToGiveTotal = cash - total;
  let changeObj = {};
  if (changesToGiveTotal / 2000 > 0){
    changeObj["twentyDollars"] = Math.floor(changesToGiveTotal / 2000);
    changesToGiveTotal = changesToGiveTotal % 2000;
  } 
  if (changesToGiveTotal / 1000 > 0){
    changeObj["tenDollars"] = Math.floor(changesToGiveTotal / 1000);
    changesToGiveTotal = changesToGiveTotal % 1000;
  } 
  if (changesToGiveTotal / 500 > 0){
    changeObj["fiveDollars"] = Math.floor(changesToGiveTotal / 500)
    changesToGiveTotal = changesToGiveTotal % 500;
  } 
  if (changesToGiveTotal / 200 > 0){
    changeObj["twoDollars"] = Math.floor(changesToGiveTotal / 200)
    changesToGiveTotal = changesToGiveTotal % 200;
  } 
  if (changesToGiveTotal / 100 > 0){
    changeObj["oneDollars"] = Math.floor(changesToGiveTotal / 100)
    changesToGiveTotal = changesToGiveTotal % 100;
  }

  if (changesToGiveTotal / 25 > 0){
    changeObj["quarter"] = Math.floor(changesToGiveTotal / 25)
    changesToGiveTotal = changesToGiveTotal % 25;
  }
  if (changesToGiveTotal / 10 > 0){
    changeObj["dime"] = Math.floor(changesToGiveTotal / 10)
    changesToGiveTotal = changesToGiveTotal % 10;
  }
  if (changesToGiveTotal / 5 > 0){
    changeObj["Nickel"] = Math.floor(changesToGiveTotal / 5)
    changesToGiveTotal = changesToGiveTotal % 5;
  }
  if (changesToGiveTotal / 1 > 0){
    changeObj["penny"] = Math.floor(changesToGiveTotal / 1)
    changesToGiveTotal = changesToGiveTotal % 1;
  };

  return changeObj;
}
console.log(calculateChange(1787, 2000)); // { twoDollar: 1, dime: 1, penny: 3 }
console.log(calculateChange(2623, 4000)); // { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
console.log(calculateChange(501, 1000)); // { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }

module.exports = calculateChange;
