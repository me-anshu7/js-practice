// //******************************************* */ Section - 32: Activating Strict Mode
// /**
//  * Strict Mode - Special Mode that we can activate in JavaScript, which makes it easier for us to write secure JavaScript code.
//  * can be activated by using the string 'use strict'
//  * We can also activate strict mode only for a specific function or a specific block (not much point)
//  * secure code -> strict mode makes it easier for developers to avoid accidental errors
//  * 1. Strict mode forbids us to do certain things
//  * 2. It will actually create visible errors for us in certain situations in which without strict mode JavaScript will simply fail silently without letting us know that we did a mistake.
//  * Strict mode also introduces a short list of variable names that are reserved for features that might be added to the language a bit later.
//  */
// 'use strict';   // activate strict mode for the entire script

// let hasDriversLicense = false;
// const passTest = true;

// // if (passTest) hasDriverLicense = true;
// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// // Variable names that are reserverd for the future
// // const interface = 'Audio';
// // const private = 543;

//******************************************* */ Section - 33: Functions
/**
 * Functions - The fundamental building block of real world JavaScript applications are functions.
 * A function is simply a piece of code that we can reuse over and over again in our code.
 * Like variables but for whole chunks of code (complete lines of code).
 * All code within the "{}" are called the function body
 * We can pass data into a function and a function can also return data as well, which can be used for something else in program
 * A function not only reuse a piece of code but it can receive data and return data back
 * We should choose descriptive funtion names so that we understand exactly what they do
 * Parameters are like variables that are specific only to this function and they will get defined once we call the function - they represent the input data of a function
 * The actual values of the parameters are called the arguments
 * Thanks to the power of function, we can reuse the function with different input values and get a different output
 * Not all functions need to return something and not all functions need to accept parameters 
 * Functions allow us to write more maintainable code because with functions we can create reusable chunks of code instead of having to manually write same code over and over again
 * DRY - don't repeat yourself (Keep our code DRY)
 * 'console.log' is a function but a built in function which we do not have to write ourselves
 */
'use strict';
function logger() {
    console.log('My name is Jonas');
}

// Invoking, calling, running the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);   // 5 & 0 here are the actual values called as arguments
console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
const num = Number('23');