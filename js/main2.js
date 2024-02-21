const data = require('./content.js');

// -------------------------------------------------------------------------------------------------------

/*
 -Mutating : directly modifying the original data 
 [array / object whatever present ]

 - Non-mutating : returns new array/object without modifying
  the original one

  Mutating: 
    - push
    - pop
    - sort
    - reverse

  Non-mutating:
    - filter
    - find
    - map
    - reduce
    */

// Define an array of numbers
const array = [1, 2, 3, 4, 5];
console.log("Original Array:", array);

// Push: Mutating 
array.push(6);
console.log("Pushed 6 to the end:", array);

// Pop: Mutating 
const poppedValue = array.pop();
console.log("Popped Value:", poppedValue);

// Filter: Non-mutating 
const filteredArray = array.filter(num => num > 2);
console.log("Filtered Array (Numbers greater than 2):", filteredArray);

// Find: Non-mutating 
const foundValue = array.find(num => num === 3);
console.log("Found Value (First occurrence of 3):", foundValue);

// Sort: Mutating
array.sort();
console.log("Sorted Array:", array);

// Map: Non-mutating
const mappedArray = array.map(num => num * 2);
console.log("Mapped Array (Doubled each element):", mappedArray);

