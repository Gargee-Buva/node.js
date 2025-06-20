// This file provides basic mathematical operations
function add(a,b) {
    return a + b;
}

function sub(a,b) {
    return a - b;
}
// this is a private function until we export it

module.exports = {
   addition: add,
    substraction:sub
};

// we can export multiple functions by adding them to the module.exports object
// when the functions are exported from the module, they can be used in other files by importing the module using require