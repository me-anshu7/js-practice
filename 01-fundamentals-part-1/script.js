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

// //******************************************* */ Section - 17: Strings and Template Literals
// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + '!';
// console.log(jonas);

// /**
//  * Template Literals (ES6) - We can write a string in a more normal way and then insert the variables directly into the string.
//  * - Then they will be replaced by values
//  * - we can write any javaScript expression inside the {}
//  * - Can be used for any regular strings
//  * - Another use 
//  */

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(jonasNew);
// console.log(`Just a regular string...`);

// // Before ES6 and string literals for multi-line string
// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String
// multiple
// lines`);

// //******************************************* */ Section - 18: Taking Decisions: if / else Statements
// /**
//  * Boolean values can be used to take decisions using if statement
//  * conditions that is evaluated
//  * - else block is optional
//  */
// const age = 15;
// // const isOldEnough = age >= 18;

// if (age >= 18) {
//     // conditions that is evaluated turns out to be true, then this block is executed
//     console.log('Sarah can start driving license 🚗');
// } else {
//     // conditions that is evaluated to false, then this block is executed
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// /**
//  * if / else control structure
//  * - this strucutre allows us to have more control over the way our code is executed
//  * if () {
//  * 
//  * } else {
//  * 
//  * }
//  */

// /**
//  * Any variable defined inside of a code block, is not accessable outside of the block
//  */
// // const birthYear = 1991;
// // if (birthYear <= 2000) {
// //     let century = 20;
// // } else {
// //     let century = 21;
// // }
// // console.log(century);

// const birthYear = 1991;

// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

// //******************************************* */ Section - 19: CHALLENGE #2: Video Solution
// /*
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 😉
// */

// // # Test Data 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// // // # Test Data 2
// // const massMark = 95;
// // const heightMark = 1.88;
// // const massJohn = 85;
// // const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// } else {
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }

// //******************************************* */ Section - 20: Type Conversion and Coercion
// /**
//  * Types are one of the fundamental aspects in programming, and converting between types is something common in all programming languages
//  * Type Conversion: When we manually convert from one type to another. (we do explicitly)
//  * Type Coercion: When JavaScript automatically converts the types behind the scene for us. (Happens implicitly)
//  * NaN: JavaScript gives us this "not a number value" whenever an operation that involves numbers fails to produce a new number (Invalid number)
//  * JavaScript can only covert to three types
//  * - convert a number to a string or boolean, but cannot convert to undefined or null
//  */

// // Type Conversion
// const inputYear = "1991";
// // console.log(inputYear + 18);    // String + something = string concatination
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));   // When converting string which is not a number, we get NaN (Not a Number) value
// console.log(typeof NaN);    // type is number but it means an invalid number

// console.log(String(23), 23);

// // Type Coercion
// /**
//  * Type coercion happens whenever an operator is dealing with two values of different types
//  * In this case, JavaScript will then, behind the scenes, convert one of the values to match the other value so that in the end the operation can be executed.
//  */
// console.log('I am ' + 23 + ' years old');   // '+' operator triggers a coercion to strings
// console.log('I am ' + String(23) + ' years old'); // Same as this

// console.log('23' - '10' - 3);   // Result: 10 | JS Converted strings here to numbers
// console.log('23' * '2');    // Result: 46


// let n = '1' + 1;    // "11" as string
// n = n - 1;  // "-" will convert 11 to number
// console.log(n); // Answer: 10

// // 2 + 3 + 4 + "5" // Ans = "95" (String)
// // '10' - '4' - '3' - 2 + '5'
// // 6 - '3' - 2 + '5'
// // 3 - 2  + '5'
// // 1 + '5'
// // Ans = "15" (String)

// //******************************************* */ Section - 21: Truthy and Falsy Values
// /**
//  * Falsy values are values that are not exactly false, but will become false when we try to convert them into a Boolean
//  * In JavaScript there are 5 Falsy values: 0, ''(empty string), undefined, null and NaN
//  * Everthing else are Truthy values
//  * Truthy values that will convert to true when we attempt to convert them to Boolean
//  * In Practice, conversion to boolean is always implicit, not explicit, or in other words is always type coercion that JavaScript does automatically behind the scene.
//  * It happens in two scenarios:
//  * 1. When using logical operators
//  * 2. In a logical context in the condition of an if-else statement
//  * 
//  * Another use case of Truthy and Falsy values is to check id a variable is actually defined or not.
//  */

// console.log(Boolean(0));    // false
// console.log(Boolean(undefined));    // false
// console.log(Boolean('Jonas'));  // true
// console.log(Boolean({}));   // true
// console.log(Boolean(''));   // false

// const money = 0;
// if (money) {    // JavaScript will coerce any value to boolean -> 0 converted to false
//     console.log("Don't spend it all ;)");
// } else {
//     console.log('You should get a job!');
// }

// let height; // Issue arises when height is 0 | Faulty code
// if (height) {
//     console.log('YAY! Height is defined');
// } else {
//     console.log('Height is UNDEFINED');
// }

// //******************************************* */ Section - 22: Equality Operators: == vs ===
// // const age = 18;
// // if (age === 18) console.log('You just became an adult :D');    // No need of block {} as there is only 1 statement
// /**
//  * Just like the comparison operators, equality operators will return a true or a false value. Basically, a Boolean value.
//  * But, in this case true will only be the result of this operator in case that both the sides are exactly same.
//  * "===" - Strict equality operator, because it does not perform type coercion. It only returns true when both values are exactly the same.
//  * "==" - Loose equality operator, actually does the type coercion.
//  * Not recommened to use "Loose equality operator" because it is full of weird rules and behaviours, and can introduce many hard to find bugs in our code.
//  * "Loose equality operator" should be avoided as much as possible.
//  */
// // 18 === 18    // true
// // 18 === 19    // false

// // '18' == 18   // true (string converted to number then compared)
// // '18' === 18  // false

// // const age = 18;
// const age = '18';
// if (age === 18) console.log('You just became an adult :D (strict)');

// if (age == 18) console.log('You just became an adult :D (loose)');

// // const favourite = prompt("What's your favourite number?");
// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// // if (favourite == 23) {  // '23' == 23
// // if (favourite === 23) {  // '23' === 23 | No logs
// //     console.log('Cool! 23 is an amazing number!');
// // }

// // Adding more conditions to an if-else block
// if (favourite === 23) {
//     console.log('Cool! 23 is an amazing number!');
// } else if (favourite === 7) {
//     console.log('7 is also a cool number');
// } else if (favourite === 9) {
//     console.log('9 is also a cool number');
// } else {
//     console.log('Number is not 23 or 7 or 9');
// }

// // Different operator !== (strict version) & != (loose version)
// if (favourite !== 23) console.log('Why not 23?');

//******************************************* */ Section - 23: Boolean Logic
/**
 * Boolean Logic - branch of computer science, which uses true and false values to solve complex logical problems.
 * Uses several logical operators to combine true and false values
 * Basic Logical Operators - AND, OR & NOT
 * AND - true when ALL are true (no matter how many variables)
 * OR - true when ONE is true (no matter how many variables)
 * NOT - acts on only one boolean value (Inverts true/false value)
 * NOT operator has precedence over AND & OR operator
 */

// //******************************************* */ Section - 24: Logical Operators
// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// // && - And operator in JavaScript, with it we can combine 2 logical values
// // true && true - true
// // true && false - false
// console.log(hasDriversLicense && hasGoodVision);

// // true || false - true
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// // const shouldDrive = hasDriversLicense && hasGoodVision;
// // if (shouldDrive) {
// // if (hasDriversLicense && hasGoodVision) {
// //     console.log('Sarah is able to drive!');
// // } else {
// //     console.log('Someone else should drive...');
// // }

// const isTired = true;   // C
// console.log(hasDriversLicense || hasGoodVision || isTired);
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

// //******************************************* */ Section - 26: The switch Statement
// /**
//  * Switch Statement - Alternative way of writing a complicate if/else statement,
//  * when all we want to do is to compare one value through multiple different options.
//  * We can execute multiple lines of code and we don't need the curly braces
//  * After the 'case' and ':', all the lines are executed
//  * Compare the condition in a strict equality operator
//  * 'default' is executed if all other cases fail
//  * break - without the breaks the code simply continue executing
//  */

// const day = 'friday';

// switch (day) {
//     case 'monday':  // day === 'monday'
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare therory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend :D');
//         break;
//     default:
//         console.log('Not a valid day!');
// }

// // Converting the switch statement as an if-else system
// if (day === 'monday') {
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//     console.log('Prepare theory vodeos');
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Write code examples');
// } else if (day === 'friday') {
//     console.log('Record videos');
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log('Enjoy the weekend :D');
// } else {
//     console.log('Not a valid day!')
// }

// //******************************************* */ Section - 27: Statements and Expressions
// /**
//  * Expression: An Expression is a piece of code that produces a value
//  * Statements: Statements are like a bigger piece of code that is executed and doesn't produce a value on its own.
//  * Basically, when anything ends with a ';' is basically a statement
//  * JavaScript expects statements and expressions in different places
//  */
// // Examples of Expressions
// 3 + 4
// 1991    // A value is also an expression
// true && false && !false // At the end produce a boolean value

// // This if/else is a statement
// if (23 > 10) {
//     const str = '23 is bigger'; // String is a statement and the whole sentence is a statement
// }
// const me = 'Jonas';
// console.log(`I'm ${2037 - 1991} years old ${me}.`);    // 2037 - 1991 is an expression hence it works.
// // console.log(`I'm ${if (23 > 10) {
// //     const str = '23 is bigger';
// // }} years old.`); // This won't work as it is a statement

// //******************************************* */ Section - 28: The Conditional (Ternary) Operator
// /**
//  * The Conditional operator allows us to write something similar to an if/else statement but all in one line
//  * Only one thing cane be done if the condition is true
//  * else condition is mandatory
//  * Also called as ternary operator because it has 3 parts (unlike other operators - condition, if part & else part)
//  * An operator always produces a value (i.e. an operator is an expression), so can be used in a template literal
//  * Ternary operator is not a replacement for if/else
//  */

// const age = 23;
// // age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

// const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
// console.log(drink);

// let drink2;
// if (age >= 18) {
//     drink2 = 'wine 🍷';
// } else {
//     drink2 = 'water 💧';
// }

// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);

// //******************************************* */ Section - 29: CHALLENGE #4: Video Solution
// // Coding Challenge #4
// // Steven wants to build a very simple tip calculator for whenever he goes eating in a
// // restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// // 300. If the value is different, the tip is 20%.
// // Your tasks:
// // 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// // this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
// // start with an if/else statement, and then try to convert it to a ternary
// // operator!)
// // 2. Print a string to the console containing the bill value, the tip, and the final value
// // (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// // 316.25”
// // Test data:
// // § Data 1: Test for bill values 275, 40 and 430
// // Hints:
// // § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// // § Value X is between 50 and 300, if it's >= 50 && <= 300 😉
// // GOOD LUCK 😀

// // const bill = 275;
// // const bill = 40;
// const bill = 430;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

//******************************************* */ Section - 30: JavaScript Releases: ES5, ES6+ and ESNext
