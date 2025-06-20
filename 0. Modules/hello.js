console.log('Hello from the hello module!');
//npm start to run the code 
// when a large code base is divided into smpaller modules , it is known as modular programming
// we can split the code into different files and import them into the main file

// if we want to use math module in this file, we can import it using require 
// ./ means current directory

const math = require('./math.js');
console.log("math value is: ", math.addition(5, 3), math.substraction(5, 3));
