// //******************************************* */ Section - 8: Linking a JavaScript File
// let js = 'amazing';
// // if (js === 'amazing') alert('JavaScript is FUN!');

// // 40 + 8 + 23 - 10;
// console.log(40 + 8 + 23 - 10);

// //******************************************* */ Section - 9: Values and Variables
// console.log('Jonas');
// console.log(23);

// let firstName = "Matilda"; // Camel case variable
// // let first = "Jonas";
// // let firstNamePerson;
// // let first_name_person;

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// // let 3years = 3; // Illegal variable name
// // let jonas&matilda = "jM";
// let jonas_matilda = "JM"; // correct
// // let new = 27;   // incorrect - reserved keyword used here
// // let function = 27;   // incorrect - reserved keyword used here
// // let $function = 27;   // correct
// // let name = "Jonas"; // correct but reserved keyword, so wrong
// let Person = "Jonas";   // mot incorrect but wrong convention, used for OOPS
// let PI = 3.1215;    // constant

// // Descriptive
// let myFirstJob = "Coder";
// let myCurrentJob = "Teacher";

// // Not descriptive
// let job1 = "programmer";
// let job2 = "teacher";

// console.log(myFirstJob);

// /**
//  * Variable naming conventions and rules
//  * - Variables cannot start with a number
//  * - Variables can only containts numbers letters, underscore, or the '$' sign
//  * - cannot use a reserved keyword as a variable
//  * - should not start with an uppercase letter
//  * - variables all in uppercase are reserved for constants that will never change
//  * - make sure variable names are discriptive
//  */

// //******************************************* */ Section - 11: Data Types
// /**
//  *  In JavaScript, every values is either an Object or a Primitive Value (Which is not an object).
//  * There are 7 Primitive Data Types:
//  * - Number
//  * - String
//  * - Boolean
//  * - undefined
//  * - null
//  * - Symbol
//  * - BigInt
//  * 
//  * JavaScript has dynamic typing: We do not have to manually define the data type of the value stored in a variable. Instead, data types are defined automatically.
//  * Values had the data type, NOT the variable
//  */

// /**
//  * 1. Number: Floating point nubers 👉 Used for decimals and integers
//  *  It means they always have decimals, even if we don't define them or see them
//  */
// let age = 23;   // 23.0

// /**
//  * 2. String: Sequence of characters 👉 Used for text
//  */
// let firstName = "Jonas";

// /**
//  * 3. Boolean: Logical type that can only take true or false 👉 Used for taking decisions
//  */
// let fullAge = true;

// /**
//  * 4. Undefind: Value taken by a variable that is not yet defined('empty value')
//  */
// let children;

// /**
//  * 5. Null: Also means 'empty value'
//  */

// /**
//  * 6. Symbol (ES2015): Value that is unique and cannot be changed [Not useful for now]
//  */

// /**
//  * 7. BigInt (ES2020): Larger integers than the Number tupe can hold
//  */

// // 👉 Single line comment
// /**
//  * 👉 Multi line comment
//  */

// // true;
// // console.log(true);
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// // typeof - an operatior that can be used to show the type of an value
// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

// javascriptIsFun = "YES!";
// console.log(typeof javascriptIsFun);

// // value is undefined and the type is also undefined
// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// // value and type of null is null (is still an null for legacy reasons)
// console.log(typeof null);

// //******************************************* */ Section - 12: let, const and var
// /**
//  * - let and const were introduced in ES6
//  * - we use the 'let' keyword to declare variables that can change later (during the execution of our program)
//  * - we use the 'const' keyword to declare variables that are not supposed to change at any point in future
//  * - Note: Best practice for writing clean code, always use const by default and let only when a variable needs to change in future
//  * - 'var' should be completely avoided
//  * - 'let' is block scoped and 'var' is function scpoed
//  */
// let age = 30;
// age = 31;   // resigning a value to variable or mutating the variable

// const birthYear = 1991; // Immutable variable
// // birthYear = 1990;   // We'll get an TypeError 

// // const job;  // We cannot declare empty const variables

// var job = 'programmer';
// job = 'teacher';

// // Sometimes we actually don't have to declare variables at all
// lastName = 'Schmdtmann';    // Terrible this idea, javaScript will create this property in global context
// console.log(lastName);

// //******************************************* */ Section - 13: Basic Operators
// /**
//  * Operators: They allow us to transform values or combine values
//  * Many categories of operators, for example:
//  * - Mathematical Operators
//  * - Comparision Operators
//  * - Logical Operators
//  * - Assignment Operators
//  */

// // Mathematical Operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);   // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
// const firstName = "Jonas";
// const lastName = "Schmedtmann";
// console.log(firstName + " " + lastName);

// // Assignment Operators
// let x = 10 + 5; // "=" is the assignment operator, x is 15 after this
// x += 10;    // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++;    // x = x + 1 = 101
// x--;    // x = x - 1 = 100
// x--;
// console.log(x);

// // Comparision Operators: to produce Boolean values
// console.log(ageJonas > ageSarah);   // >, <, >=, <=
// console.log(ageSarah >= 18);
// // Console has the access to all the variables that are running in the current script

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

// //******************************************* */ Section - 14: Operator Precedence
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// /**
//  * - JavaScript has a well defined order of operator precedence
//  * - Order in which operators are executed
//  * - Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table
//  */
// // console.log(25 - 10 - 5);

// let x, y;
// x = y = 25 - 10 - 5;    // x = y = 10, x = 10
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// //******************************************* */ Section - 16: CHALLENGE #1
// /*
// Coding Challenge #1 
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter). 

// Your tasks: 
// 1. Store Mark's and John's mass and height in variables 
// 2. Calculate both their BMIs using the formula (you can even implement both versions) 
// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John. 

// Test data: 
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall. 
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
//  */

// // # Test Data 1
// // const massMark = 78;
// // const heightMark = 1.69;
// // const massJohn = 92;
// // const heightJohn = 1.95;

// // # Test Data 2
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);

