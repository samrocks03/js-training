/*
console.log(a); //here, it cannot access a before initialization
let a;
a = 2;
console.log(a); // returns `2
*/

// const a = 2;
// console.log(a);

console.log(a); //cannot access it before initializations
let a;
a = 2;
console.log(a); // 2

console.log(typeof []); // object
console.log(typeof null); // object
console.log(typeof NaN); // number

console.log(Array.isArray([])); // true
console.log(isNaN(NaN)); // true

let arr = [1, 2, 3];
arr[0] = 4; // Modifying property
console.log(arr); // [4, 2, 3]

const obj = { name: "John" };
delete obj.name; // Deleting property
console.log(obj); // {}

/*
    The difference between an object declared as 
    a let or a const variable is that with let,
    you can reassign the entire object, while with const,
    you cannot reassign the object itself, but you can still 
    modify its properties.
*/