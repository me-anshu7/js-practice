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

